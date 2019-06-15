import React, { Component } from 'react';
import { Table, Pagination, Button, Dialog, Message } from '@alifd/next';
import IceContainer from '@icedesign/container';
import Filter from '../Filter';
import axios from 'axios';


const pageSize=8;
var total;

export default class StocksTable extends Component {
  state = {
    current: 1,
    isLoading: false,
    data: [],
  };

  componentDidMount() {
    this.fetchData();
  }

  mockApi = (len) => {
    return new Promise((resolve) => {
        axios.get('http://localhost:8080/stocks/showPage',{
          params:{
            'current':this.state.current,
            'pageSize':pageSize,
          },
        }).then(response=>{
          console.log(response);
          if(response.data.code==0)
              resolve(response.data.data);
        }).catch(error=>{
          console.log(error);
        });
        
    });
  };
  // 获取总记录数
  fetchTotal=()=>{
    axios.get('http://localhost:8080/stocks/total')
        .then(response=>{
          console.log("fetchTotal:",response);
          if(response.data.code==0){
              total=response.data.data;
          }
          else
              Message.error(response.data.msg);
        }).catch(error=>{
          console.log(error);
        });
  }

  deleteData=(id)=>{

    console.log("deleteData:",id);
    axios.post('http://localhost:8080/stocks/delete/'+id,
          ).then(response=>{
          console.log(response);
          if(response.data.code==0){
            this.fetchData();
          }
          else
            Message.error(response.data.msg);
        }).catch(error=>{
          console.log(error);
        });
  }

  fetchData = (len) => {
    this.setState(
      {
        isLoading: true,
      },
      () => {
        this.mockApi(len).then((data) => {
          this.setState({
            data,
            isLoading: false,
          });
        });
      }
    );
  };

  handlePaginationChange = (current) => {
    this.setState(
      {
        current,
      },
      () => {
        this.fetchData();
      }
    );
  };

  handleFilterChange = () => {
    this.fetchData(5);
  };

  handleDelete = (id) => {

    Dialog.confirm({
      title: '提示',
      content: '确认删除吗',
      onOk: () => {
        this.deleteData(id);
      },
    });

  };


  renderOper = (value, index, record) => {
    return (
      <div>
        <Button type="normal" warning onClick={this.handleDelete.bind(this,record.stocksId)}>
          删除
        </Button>
      </div>
    );
  };

  render() {
    const { isLoading, data, current } = this.state;
    this.fetchTotal();
    console.log("render: total=",total);

    return (
      <div style={styles.container}>
        {/* <IceContainer>
          <Filter onChange={this.handleFilterChange} />
        </IceContainer> */}
        <IceContainer>
          <Table loading={isLoading} dataSource={data} hasBorder={false}>
            <Table.Column title="库存编号" dataIndex="stocksId" />
            <Table.Column title="商品编号" dataIndex="goodsId" />
            <Table.Column title="商品名称" dataIndex="goodsName" />
            <Table.Column title="商家编号" dataIndex="sellerId" />
            <Table.Column title="店铺名称" dataIndex="shopName" />
            <Table.Column title="商品价格" dataIndex="price" />
            <Table.Column title="库存量" dataIndex="stockNumber" />
            <Table.Column
              title="操作"
              width={200}
              dataIndex="oper"
              cell={this.renderOper}
            />
          </Table>
          <Pagination
            style={styles.pagination}
            current={current}
            onChange={this.handlePaginationChange}
            total={total}
            pageSize={pageSize}
          />
        </IceContainer>
      </div>
    );
  }
}

const styles = {
  pagination: {
    marginTop: '20px',
    textAlign: 'right',
  },
};
