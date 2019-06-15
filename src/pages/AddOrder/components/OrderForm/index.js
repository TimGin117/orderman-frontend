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
import axios from 'axios';

export default class OrderForm extends Component {
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
      axios.post('http://localhost:8080/order/add',
        values
      ).then(response =>{
        console.log(response);
        if(response.data.code==0)
          Message.success('提交成功');
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
        <PageHead title="添加订单" />
        <IceContainer style={{ padding: '40px' }}>
          <IceFormBinderWrapper
            value={this.state.value}
            onChange={this.formChange}
            ref="form"
          >
            <div style={styles.formItem}>
              <div style={styles.formLabel}>客户编号：</div>
              <IceFormBinder name="buyerId" required message="客户编号必填">
                <NumberPicker />
              </IceFormBinder>
              <div style={styles.formError}>
                <IceFormError name="buyerId" />
              </div>
            </div>
            <div style={styles.formItem}>
              <div style={styles.formLabel}>库存编号：</div>
              <IceFormBinder
                name="stocksId"
                required
                message="库存编号必填"
              >
                <NumberPicker />
              </IceFormBinder>
              <div style={styles.formError}>
                <IceFormError name="stocksId" />
              </div>
            </div>
            <Button
              type="primary"
              onClick={this.validateAllFormField}
              style={styles.button}
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
