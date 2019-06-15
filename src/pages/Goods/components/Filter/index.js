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
                <span style={styles.formLabel}>商品编号：</span>
                <IceFormBinder triggerType="onBlur" name="id">
                  <Input placeholder="请输入" style={{ width: '200px' }} />
                </IceFormBinder>
                <div style={styles.formError}>
                  <IceFormError name="id" />
                </div>
              </div>
            </Col>
          <Col l="6">
            <div style={styles.formItem}>
              <span style={styles.formLabel}>商品名称：</span>
              <IceFormBinder triggerType="onBlur" name="name">
                <Input placeholder="请输入" style={{ width: '200px' }} />
              </IceFormBinder>
              <div style={styles.formError}>
                <IceFormError name="name" />
              </div>
            </div>
          </Col>

          <Col l="6">
            <div style={styles.formItem}>
              <span style={styles.formLabel}>商品价格：</span>
              <IceFormBinder triggerType="onBlur" name="price">
                <Input placeholder="请输入" style={{ width: '200px' }} />
              </IceFormBinder>
              <div style={styles.formError}>
                <IceFormError name="price" />
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
