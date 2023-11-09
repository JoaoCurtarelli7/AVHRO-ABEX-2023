import { Row, Col } from "antd";
import { Link } from "react-router-dom";

import "./styles.css";

function HeaderPages() {
  return (
    <Row gutter={[20, 16]} className="header2">
      <Col>
        <Link to="/">Home</Link>
      </Col>

      <Col>
        <Link to="/doacoes-recebidas">Doações Recebidas</Link>
      </Col>

      <Col>
        <Link to="/doacoes-entregues">Doações Entregues</Link>
      </Col>

      <Col>
        <Link to="/donatarios">Donatários</Link>
      </Col>

      <Col>
        <Link to="/doadores">Doadores</Link>
      </Col>

      <Col>
        <Link to="/familias">Famílias</Link>
      </Col>
    </Row>
  );
}

export default HeaderPages;
