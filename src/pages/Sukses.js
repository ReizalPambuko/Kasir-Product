import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import {
  Link
} from "react-router-dom";


export default class Sukses extends Component {
  render() {
    return (
      <div className='text-center mt-5'>
        <h3>Sukses Pesan</h3>
        <p>Terima Kasih telah memesan</p>
        <Button variant='primary' as={Link} Link to='/'>Kembali</Button>
      </div>
    )
  }
}
