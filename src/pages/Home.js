import React, { Component } from "react";
import { Fragment } from "react";
import { Col, Container } from "react-bootstrap";
import Hasil from "../component/Hasil";
import { Row } from "react-bootstrap";
import ListCategory from "../component/ListCategory";
import { URL_API } from "../utils/Constant";
import axios from "axios";
import { Menus } from "../component";
import swal from "sweetalert";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
      categoryAll: "Makanan",
      keranjangs: [],
    };
  }

  componentDidMount() {
    axios
      .get(URL_API + "products?category.nama=" + this.state.categoryAll)
      .then((response) => {
        const menus = response.data;
        this.setState({
          menus: menus,
        });
      });

    axios.get(URL_API + "keranjangs").then((response) => {
      const keranjangs = response.data;
      this.setState({ keranjangs: keranjangs });
    });
  }

  componentDidUpdate(prevState) {
    // Typical usage (don't forget to compare props):
    if (this.state.keranjangs !== prevState.keranjangs) {
      axios.get(URL_API + "keranjangs").then((response) => {
        const keranjangs = response.data;
        this.setState({ keranjangs: keranjangs });
      });
    }
  }

  changeCategory = (value) => {
    this.setState({
      menus: [],
      categoryAll: value,
    });

    axios.get(URL_API + "products?category.nama=" + value).then((response) => {
      const menus = response.data;
      this.setState({
        menus: menus,
      });
    });
  };

  masukKeranjang = (value) => {
    axios.get(URL_API + "keranjangs?product.id=" + value.id).then((res) => {
      if (res.data.length === 0) {
        const keranjang = {
          jumlah: 1,
          total_harga: value.harga,
          product: value,
        };

        axios.post(URL_API + "keranjangs", keranjang).then((res) => {
          swal({
            title: "Sukses masuk keranjang ",
            text: "Sukses masuk keranjang " + keranjang.product.nama,
            icon: "success",
            button: false,
            timer: 2000,
          });
        });
      } else {
        const keranjang = {
          jumlah: res.data[0].jumlah + 1,
          total_harga: res.data[0].total_harga + value.harga,
          product: value,
        };
        axios
          .put(URL_API + "keranjangs/" + res.data[0].id, keranjang)
          .then((res) => {
            swal({
              title: "Sukses masuk keranjang ",
              text: "Sukses masuk keranjang " + keranjang.product.nama,
              icon: "success",
              button: false,
              timer: 2000,
            });
          });
      }
    });
  };

  render() {
    return (
      <Fragment>
        <div className="mt-3">
          <Container fluid>
            <h3 className="mb-5">
              <strong>Reizal Shop</strong>
            </h3>
            <Row>
              <ListCategory
                changeCategory={this.changeCategory}
                categoryAll={this.state.categoryAll}
              />
              <Col>
                <h4>
                  <strong>Menu Product</strong>
                </h4>
                <hr />
                <Row>
                  {this.state.menus.map((menu) => {
                    return (
                      <Menus
                        key={menu.id}
                        menu={menu}
                        masukKeranjang={this.masukKeranjang}
                      />
                    );
                  })}
                </Row>
              </Col>
              <Hasil keranjangs={this.state.keranjangs} {...this.props}/>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}
