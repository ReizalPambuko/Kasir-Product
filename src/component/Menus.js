import React from "react";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import { numberWithCommas } from "../utils/Utils";

const Menus = ({menu, masukKeranjang}) => {
  return (
    <Col md={4} className="mb-4">
      <Card className="shadow" onClick={() => masukKeranjang(menu)}>
        <Card.Img
          variant="top"
          src={
            "images/" +
            menu.category.nama.toLowerCase() +
            "/" +
            menu.gambar
          }
        />
        <Card.Body>
          <Card.Title>{menu.nama}</Card.Title>
          <Card.Text>Rp. {numberWithCommas(menu.harga)}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Menus;
