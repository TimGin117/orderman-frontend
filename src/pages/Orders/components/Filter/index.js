/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import { Grid, Input, Select } from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';

const { Row, Col } = Grid;

export default class Filter extends Component {
  state = {
    value: {},
  };

  formChange = (value) => {
    this.props.onChange(value);
  };

  render() {
    return (
      <IceFormBinderWrapper
        value={this.state.value}
        onChange={this.formChange}
        ref="form"
      >
      
        <Row wrap gutter="20" style={styles.formRow}>
          <Col l="6">
                <div style={styles.formItem}>
                  <span style={styles.formLabel}>订单编号：</span>
                  <IceFormBinder triggerType="onBlur" name="orderId">
                    <Input placeholder="请输入" style={{ width: '200px' }} />
                  </IceFormBinder>
                  <div style={styles.formError}>
                    <IceFormError name="orderId" />
                  </div>
                </div>
              </Col>
          <Col l="6">
              <div style={styles.formItem}>
                <span style={styles.formLabel}>商品编号：</span>
                <IceFormBinder triggerType="onBlur" name="goodsId">
                  <Input placeholder="请输入" style={{ width: '200px' }} />
                </IceFormBinder>
                <div style={styles.formError}>
                  <IceFormError name="goodsId" />
                </div>
              </div>
            </Col>
          <Col l="6">
            <div style={styles.formItem}>
              <span style={styles.formLabel}>商品名称：</span>
              <IceFormBinder triggerType="onBlur" name="goodsName">
                <Input placeholder="请输入" style={{ width: '200px' }} />
              </IceFormBinder>
              <div style={styles.formError}>
                <IceFormError name="goodsName" />
              </div>
            </div>
          </Col>

          <Col l="6">
              <div style={styles.formItem}>
                <span style={styles.formLabel}>客户编号：</span>
                <IceFormBinder triggerType="onBlur" name="buyerId">
                  <Input placeholder="请输入" style={{ width: '200px' }} />
                </IceFormBinder>
                <div style={styles.formError}>
                  <IceFormError name="buyerId" />
                </div>
              </div>
            </Col>


          <Col l="6">
            <div style={styles.formItem}>
              <span style={styles.formLabel}>客户姓名：</span>
              <IceFormBinder triggerType="onBlur" name="buyerName">
                <Input placeholder="请输入" style={{ width: '200px' }} />
              </IceFormBinder>
              <div style={styles.formError}>
                <IceFormError name="buyerName" />
              </div>
            </div>
          </Col>

          <Col l="6">
              <div style={styles.formItem}>
                <span style={styles.formLabel}>创建时间：</span>
                <IceFormBinder triggerType="onBlur" name="createTime">
                  <Input placeholder="请输入" style={{ width: '200px' }} />
                </IceFormBinder>
                <div style={styles.formError}>
                  <IceFormError name="createTime" />
                </div>
              </div>
            </Col>          

            <Col l="6">
              <div style={styles.formItem}>
                <span style={styles.formLabel}>订单状态：</span>
                <IceFormBinder triggerType="onBlur" name="orderStatus">
                  <Input placeholder="请输入" style={{ width: '200px' }} />
                </IceFormBinder>
                <div style={styles.formError}>
                  <IceFormError name="orderStatus" />
                </div>
              </div>
            </Col>
        </Row>
      </IceFormBinderWrapper>
    );
  }
}

const styles = {
  formItem: {
    display: 'flex',
    alignItems: 'center',
    margin: '10px 0',
  },
  formLabel: {
    minWidth: '80px',
  },
};
