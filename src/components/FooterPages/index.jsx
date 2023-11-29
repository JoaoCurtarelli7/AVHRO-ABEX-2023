import { Col, Divider, Row } from "antd";
import "./styles.css";

function FooterPages() {
  return (
    <>
      <div className="footer-content"></div>
      <div className="footer-text">
        <Col span={22} offset={1}>
          <Divider plain className="thicker-divider" />
        </Col>

        <Row justify="center" align="middle">
          <Col span={24}>
            <p>
              © 2023 - Desenvolvido por: <a href="#">João Curtarelli</a> e
              <a href="#"> Gabriel Santin</a>
            </p>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default FooterPages;
