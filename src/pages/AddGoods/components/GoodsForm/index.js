/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import {
  Input,
  Button,
  Message,
  NumberPicker,
  DatePicker,
  Radio,
  Select,
} from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import PageHead from '../../../../components/PageHead';
import axios from 'axios'

const { Option } = Select;
const { Group: RadioGroup } = Radio;
const { RangePicker } = DatePicker;

export default class GoodsForm extends Component {
  state = {
    value: {},
  };

  formChange = (value) => {
    console.log('value', value);
  };

  validateAllFormField = () => {
    this.refs.form.validateAll((errors, values) => {
      if (errors) {
        return;
      }
      console.log({ values });
      
      axios.post('http://localhost:8080/goods/add',
        values
      ).then(response =>{
        console.log(response);
        if(response.data.code==0)
          Message.success('新增商品：'+ JSON.stringify(response.data.data.id));
        else
          Message.error(response.data.msg);
      }).catch(error =>{
        console.log(error);
        Message.error("网络错误");
      });

    });
  };

  render() {
    return (
      <div>
        <PageHead title="新增商品" />
        <IceContainer style={{ padding: '40px' }}>
          <IceFormBinderWrapper
            value={this.state.value}
            onChange={this.formChange}
            ref="form"
          >
            <div style={styles.formItem}>
              <div style={styles.formLabel}>商品名称：</div>
              <IceFormBinder name="goodsName" required message="商品名称必填">
                <Input
                  placeholder="请输入商品名称"
                  style={{ width: '400px' }}
                />
              </IceFormBinder>
              <div style={styles.formError}>
                <IceFormError name="goodsName" />
              </div>
            </div>
            <div style={styles.formItem}>
              <div style={styles.formLabel}>商品价格：</div>
              <IceFormBinder name="price" required message="商品价格必填">
                <NumberPicker />
              </IceFormBinder>
              <div style={styles.formError}>
                <IceFormError name="price" />
              </div>
            </div>

            <Button
              type="primary"
              onClick={this.validateAllFormField}
            >
              提 交
            </Button>
          </IceFormBinderWrapper>
        </IceContainer>
      </div>
    );
  }
}

const styles = {
  formItem: {
    marginBottom: '30px',
    display: 'flex',
    alignItems: 'center',
  },
  formLabel: {
    fontWeight: '450',
    width: '80px',
  },
  formError: {
    marginTop: '10px',
  },
  button: {
    marginLeft: '100px',
  },
};
