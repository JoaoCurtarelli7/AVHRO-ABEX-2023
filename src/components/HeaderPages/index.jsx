import { Col, Image, Row } from "antd";
import { Link } from "react-router-dom";
import logoImage from "../../components/assets/avhro.png";
import "./styles.css";

const menuItems = [
  { path: "/", label: "Home" },
  { path: "/donation-received", label: "Doações Recebidas" },
  { path: "/donation-delivered", label: "Doações Entregues" },
  { path: "/donatary", label: "Donatários" },
  { path: "/donor", label: "Doadores" },
  { path: "/family", label: "Famílias" },
];

function HeaderPages() {
  return (
    <Row gutter={[20, 16]} className="header2">
      <Col span={6} offset={1}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image src={logoImage} alt="" preview={false} height={40} />
          <span className="subtitle-logo">AVHRO</span>
        </div>
      </Col>

      {menuItems.map((item, index) => (
        <Col key={index} className="nav-menu">
          <Link to={item.path}>{item.label}</Link>
        </Col>
      ))}
    </Row>
  );
}

export default HeaderPages;
