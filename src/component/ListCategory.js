import React, { Component } from "react";
import { Col } from "react-bootstrap";
import axios from "axios";
import { URL_API } from "../utils/Constant";
import { ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBowlFood,
  faCoffee,
  faCookie,
} from "@fortawesome/free-solid-svg-icons";

const Icon = ({ namas }) => {
  if (namas === "Makanan")
    return <FontAwesomeIcon icon={faBowlFood} className="me-2" />;
  if (namas === "Minuman")
    return <FontAwesomeIcon icon={faCoffee} className="me-2" />;
  if (namas === "Cemilan")
    return <FontAwesomeIcon icon={faCookie} className="me-2" />;
};

export default class ListCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    axios(URL_API + "categories").then((res) => {
      const categories = res.data;
      this.setState({
        list: categories,
      });
    });
  }

  render() {
    const { changeCategory, categoryAll } = this.props;
    return (
      <Col md={2} mt="2">
        <h4>
          <strong>Daftar Category</strong>
        </h4>
        <hr />

        <ListGroup>
          {this.state.list.map((category) => {
            return (
              <ListGroup.Item
                key={category.id}
                onClick={() => changeCategory(category)}
                className={categoryAll === category.nama && "active"}
                style={{
                  cursor: "pointer",
                  marginTop: "20px",
                  boxShadow: "0 5px 10px rgba(0,0,0,.3)",
                  padding: "15px",
                }}
              >
                <h6>
                  <Icon namas={category.nama} />
                  {(category = category.nama)}
                </h6>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Col>
    );
  }
}
