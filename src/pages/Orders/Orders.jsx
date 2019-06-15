import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Table from './components/Table';
import PageHead from '../../components/PageHead';

@withRouter
export default class Orders extends Component {
  handleClick = () => {
    this.props.history.push('add/order');
  };

  render() {
    return (
      <div>
        <PageHead
          title="订单管理"
          buttonText="添加订单"
          onClick={this.handleClick}
        />
        <Table />
      </div>
    );
  }
}
