import React from "react";
import { Row, Col } from "antd";
import image from "../../components/assets/image3.png";
import { Link } from "react-router-dom";

import "./styles.css";

function Home() {
  return (
    <div>
      <Row className="image">
        <img src={image} alt="" height="350" width="80%" />
      </Row>

      <Row gutter={[20, 16]} className="quadrados">
        <Col>
          <Link to="/doacoes-recebidas">
            <div className="quadrado">
              <span className="text-quadrado">Doações Recebidas</span>
            </div>
          </Link>
        </Col>

        <Col>
          <Link to="/doacaos-entregues">
            <div className="quadrado">
              <span className="text-quadrado">Doações Entregues</span>
            </div>
          </Link>
        </Col>

        <Col>
          <Link to="/donatarios">
            <div className="quadrado">
              <span className="text-quadrado">Donatários</span>
            </div>
          </Link>
        </Col>

        <Col>
          <Link to="/doadores">
            <div className="quadrado">
              <span className="text-quadrado">Doadores</span>
            </div>
          </Link>
        </Col>

        <Col>
          <Link to="/familias">
            <div className="quadrado">
              <span className="text-quadrado">Famílias</span>
            </div>
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
