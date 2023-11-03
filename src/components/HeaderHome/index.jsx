import "./styles.css"; // Certifique-se de importar o arquivo de estilos
import { Col, Divider, Row } from "antd";

function HeaderHome() {
  return (
    <>
      <Row gutter={[20, 16]} className="header">
        <Col span={24} className="title">
          <p>Associação dos Voluntários do Hospital Regional do Oeste</p>
        </Col>
      </Row>

      <Row>
        <Col span={16} offset={4}>
          <Divider plain className="divider-title" />
        </Col>
      </Row>
    </>
  );
}

export default HeaderHome;
