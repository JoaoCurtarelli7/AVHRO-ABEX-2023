import React from "react";
import { Col, Form, Row, Table } from "antd";
import "./styles.css";
function DonationReceivedList() {
  const columns = [
    {
      title: "Item doado",
      dataIndex: "item",
    },
    {
      title: "Data da doação",
      dataIndex: "date",
    },
    {
      title: "Doador",
      dataIndex: "doador",
    },
    {
      title: "Ações",
    },
  ];

  const data = [
    {
      key: "1",
      date: "05/09/2023",
      item: "Casaco",
      doador: "João Curtarelli",
    },
    {
      key: "2",
      date: "05/09/2023",
      item: "Coberta",
      doador: "Gbariel Santin",
    },
  ];

  return (
    <Form>
      <Row
        gutter={[20, 16]}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Col span={22}>
          <div className="title-table">
            <span className="content-title">Listagem Doações Recebidas</span>
          </div>
        </Col>
      </Row>

      <Row
        gutter={[20, 16]}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Col span={22}>
          <Table dataSource={data} columns={columns} bordered />
        </Col>
      </Row>
    </Form>
  );
}

export default DonationReceivedList;
