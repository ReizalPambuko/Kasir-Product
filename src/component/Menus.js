import React from "react";
import Card from 'react-bootstrap/Card';
import { Col } from "react-bootstrap";
import {numberWithCommas} from "../utils/Utils";

    const Menus = ( menu ) => {
    return (
      <Col md={4} className="mb-4">
            <Card className="shadow">
            <Card.Img variant="top" src={"images/" + menu.menu.category.nama.toLowerCase() + "/" + menu.menu.gambar} />
            <Card.Body>
                <Card.Title>{menu.menu.nama}</Card.Title>
                <Card.Text>
                    Rp. {numberWithCommas(menu.menu.harga)}
                </Card.Text>
            </Card.Body>
            </Card>
        </Col>
    );
}

export default Menus;                                                                                                                                                                                                                                                                                                                                                                                                                              