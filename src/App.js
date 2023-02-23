import React, { Component } from "react";
import { Fragment } from "react";
import { Col, Container } from "react-bootstrap";
import Hasil from "./component/Hasil";
import { Row } from "react-bootstrap";
import ListCategory from "./component/ListCategory";
import { URL_API } from "./utils/Constant";
import axios from "axios";
import { Menus } from "./component";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
      categoryAll: "Makanan",
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
  }

  changeCategory = (value) => {
    this.setState({
      menus: [],
      categoryAll: value,
    });

    axios
      .get(URL_API + "products?category.nama=" + value)
      .then((response) => {
        const menus = response.data;
        this.setState({
          menus: menus,
        });
      });
  };

  render() {
    return (
      <Fragment>
        <div className="mt-3">
          <Container fluid>
            <Row>
              <ListCategory changeCategory={this.changeCategory} categoryAll={this.state.categoryAll}/>
              <Col>
                <h4>
                  <strong>Menu Product</strong>
                </h4>
                <hr />
                <Row>
                  {this.state.menus.map((menu) => {
                    return <Menus key={menu.id} menu={menu} />;
                  })}
                </Row>
              </Col>
              <Hasil />
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}
