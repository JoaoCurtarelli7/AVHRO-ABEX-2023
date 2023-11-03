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

      <div className="title">
        <span className="text-title">PROGRAMAS E PROJETOS</span>
      </div>

      <Row gutter={[20, 16]} className="quadrados">
        <Col>
          <Link to="">
            <div className="quadrado">
              <span className="text-quadrado">Vestir o Bem</span>
            </div>
          </Link>
        </Col>

        <Col>
          <Link to="">
            <div className="quadrado">
              <span className="text-quadrado">Fome Zero</span>
            </div>
          </Link>
        </Col>

        <Col>
          <Link to="">
            <div className="quadrado">
              <span className="text-quadrado">Dinheiro</span>
            </div>
          </Link>
        </Col>

        <Col>
          <Link to="">
            <div className="quadrado">
              <span className="text-quadrado">Brinquedos</span>
            </div>
          </Link>
        </Col>

        <Col>
          <Link to="">
            <div className="quadrado">
              <span className="text-quadrado">Livros</span>
            </div>
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
