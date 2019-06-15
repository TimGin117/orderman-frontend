import React, { Component } from 'react';
import GoodsForm from './components/GoodsForm';
import StocksForm from './components/StocksForm'

export default class Modify extends Component {
  render() {
    return <div>
             <GoodsForm />
             <StocksForm />
           </div>;
  }
}
