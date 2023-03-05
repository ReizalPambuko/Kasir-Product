import React, { Component } from "react";
import { Badge, Col, Row } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { numberWithCommas } from "../utils/Utils";
import ModalShow from "./ModalShow";
import TotalHarga from "./TotalHarga";

export default class Hasil extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      keranjangDetail: false,
      jumlah: 0,
      keterangan: "",
    };
  }

  handleShow = (keranjangMenu) => {
    this.setState({
      showModal: true,
      keranjangDetail: keranjangMenu,
    });
  };

  handleClose = () => {
    this.setState({
      showModal: false,
    });
  };

  tambah = () => {
    this.setState({
      jumlah: this.state.jumlah + 1,
    });
  };

  kurang = () => {
    if (this.state.jumlah > 1) {
      this.setState({
        jumlah: this.state.jumlah - 1,
      });
    }
  };

  changeHandler = (event) => {
    this.setState({
      keterangan: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("hai", this.state.keterangan);
  };
  render() {
    const { keranjangs } = this.props;
    return (
      <Col md={3} mt="2">
        <h4>
          <strong>Hasil</strong>
        </h4>
        <hr />

        {keranjangs.length !== 0 && (
          <ListGroup>
            {keranjangs.map((keranjangMenu) => (
              <ListGroup.Item onClick={() => this.handleShow(keranjangMenu)}>
                <Row className="item-center">
                  <Col xs={2}>
                    <Badge pill bg="success">
                      {keranjangMenu.jumlah}
                    </Badge>
                  </Col>
                  <Col>
                    <h6>{numberWithCommas(keranjangMenu.product.nama)}</h6>
                    <p>{keranjangMenu.product.harga}</p>
                  </Col>
                  <Col className="float-end">
                    <strong className="float-end">
                      {numberWithCommas(keranjangMenu.total_harga)}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}

            <ModalShow
              handleClose={this.handleClose}
              {...this.state}
              tambah={this.tambah}
              kurang={this.kurang}
              handleSubmit={this.handleSubmit}
              changeHandler={this.changeHandler}
            />
          </ListGroup>
        )}
        <TotalHarga keranjangs={keranjangs} {...this.props} />
      </Col>
    );
  }
}
