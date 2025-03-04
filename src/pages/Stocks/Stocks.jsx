import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Table from './components/Table';
import PageHead from '../../components/PageHead';

@withRouter
export default class Stocks extends Component {
  handleClick = () => {
    this.props.history.push('add/goods');
  };

  render() {
    return (
      <div>
        <PageHead
          title="库存管理"
          buttonText="添加库存"
          onClick={this.handleClick}
        />
        <Table />
      </div>
    );
  }
}
