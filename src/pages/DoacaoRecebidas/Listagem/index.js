import React from "react";
import { Col, Form, Row, Table } from "antd";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TitleCreateList from "../../../components/TitleCreate";

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
      <TitleCreateList
        textTitle="Lista de Doações Recebidas"
        route="/doacoes-recebidas/cadastro"
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

export default DonationReceivedList;
