import React from "react";
import { Col, Form, Row, Table } from "antd";

import "./styles.css";
import TitleCreateList from "../../../components/TitleCreate";
import { faEdit, faRemove, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DonationDeliveredList() {
  const columns = [
    {
      title: "Item Entregue",
      dataIndex: "item",
    },
    {
      title: "Data da Entrega",
      dataIndex: "date",
    },
    {
      title: "Donatário",
      dataIndex: "donatario",
    },
    {
      title: "Ações",
      aling: "center",
      render: () => {
        return (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <FontAwesomeIcon
              icon={faEdit}
              style={{ marginRight: "20px", cursor: "pointer" }}
              size="xl"
              isButton
            />
            <FontAwesomeIcon
              icon={faTrash}
              size="xl"
              style={{ cursor: "pointer" }}
            />
          </div>
        );
      },
    },
  ];

  const data = [
    {
      key: "1",
      date: "05/09/2023",
      item: "Casaco",
      donatario: "João Curtarelli",
    },
    {
      key: "2",
      date: "05/09/2023",
      item: "Coberta",
      donatario: "Gbariel Santin",
    },
  ];

  return (
    <Form>
      <TitleCreateList
        textTitle="Listagem de Doações Entregues"
        route="/doacoes-entregues/cadastro"
        create={false}
      />

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

export default DonationDeliveredList;
