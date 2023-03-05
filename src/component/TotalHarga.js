import React, { Component } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { URL_API } from '../utils/Constant';
import { numberWithCommas } from '../utils/Utils';
import axios from "axios";
import {
  Link
} from "react-router-dom";


export default class TotalHarga extends Component {

    handleSubmit = () => {
        const pesanan = {
            
        }

        axios.post(URL_API + "pesanans")
        .then(res => {
           
        })
    }
    
    render() {
        
        const totalHarga = this.props.keranjangs.reduce(function (result, item) {
        return result + item.total_harga;
    }, 0);
    return (
      <div className='fixed-bottom px-2 py-2'>
        <Row>
            <Col md={{span: 3, offset: 9}}> 
            <h4><strong>Total Harga</strong> Rp {numberWithCommas(totalHarga)}</h4>
            <Button variant='primary' onClick={() => this.handleSubmit()}>Bayar</Button>
            </Col>
        </Row>
      </div>
    )
  }
}
