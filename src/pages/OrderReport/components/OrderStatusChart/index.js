import React, { Component } from 'react';
import { Grid, Icon, Message } from '@alifd/next';
import IceContainer from '@icedesign/container';
import AreaChart from './AreaChart';
import axios from 'axios';

const { Row, Col } = Grid;

export default class OrderStatusChart extends Component {

  state = {
    isLoading: false,
    data: [],
  };

  componentDidMount() {
    this.fetchData();
  }



  fetchData=()=>{
    this.setState(
      {
        isLoading: true,
      },()=>{
          axios.get("http://localhost:8080/order/report")
          .then(response=>{
              if(response.data.code==0){
                this.setState(
                  {
                    data:response.data.data,
                    isLoading:false,
                  }
                );
              }else{
                Message.error(response.data.code);
                clearInterval(interval);
              }
          }).catch(error=>{
            console.log(error);
            clearInterval(interval);
            Message.error("网络错误");
          });
      }
    );
  }

  render() {

    return (
      <IceContainer title="订单概览">
        <Row wrap>
          <Col xxs="12" s="12" l="6">
            <div style={styles.box}>
              <h2 style={styles.counterNum}>
                {this.state.data.totalOrders}
                <Icon
                  size="xs"
                  type="arrow-down-filling"
                  style={{ ...styles.arrowIcon, ...styles.arrowDown }}
                />
              </h2>
              <p style={styles.textLabel}>总订单量</p>
            </div>
          </Col>
          <Col xxs="12" s="12" l="6">
            <div style={styles.box}>
              <h2 style={styles.counterNum}>
                {this.state.data.doneOrders}
                <Icon
                  size="xs"
                  type="arrow-up-filling"
                  style={{ ...styles.arrowIcon, ...styles.arrowUp }}
                />
              </h2>
              <p style={styles.textLabel}>订单完成</p>
            </div>
          </Col>
          <Col xxs="12" s="12" l="6">
            <div style={styles.box}>
              <h2 style={styles.counterNum}>
              ￥ {this.state.data.orderIncome}
                <Icon
                  size="xs"
                  type="arrow-down-filling"
                  style={{ ...styles.arrowIcon, ...styles.arrowDown }}
                />
              </h2>
              <p style={styles.textLabel}>订货金额</p>
            </div>
          </Col>
          <Col xxs="12" s="12" l="6">
            <div style={styles.box}>
              <h2 style={styles.counterNum}>
                ￥ {this.state.data.totalIncome}
                <Icon
                  size="xs"
                  type="arrow-up-filling"
                  style={{ ...styles.arrowIcon, ...styles.arrowUp }}
                />
              </h2>
              <p style={styles.textLabel}>累计收入</p>
            </div>
          </Col>
        </Row>
        <AreaChart />
      </IceContainer>
    );
  }
}

const styles = {
  box: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10px',
  },
  textLabel: {
    margin: 0,
    color: '#666',
  },
  counterNum: {
    display: 'flex',
    alignItems: 'center',
    margin: '10px',
    fontSize: '30px',
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 0.85)',
  },
  arrowIcon: {
    marginLeft: '10px',
  },
  arrowUp: {
    color: '#ec3f16',
  },
  arrowDown: {
    color: 'green',
  },
};
