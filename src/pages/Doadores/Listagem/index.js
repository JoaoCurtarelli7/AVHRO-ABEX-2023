import React, { useState } from "react";
import { Button, Col, Form, Input, Row, Select, Table } from "antd";
import "./styles.css";
import TitleCreateList from "../../../components/TitleCreate";
import InputMask from "react-input-mask";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

function DonorList({ data }) {
  const columns = [
    {
      title: "Nome",
      dataIndex: "name",
    },
    {
      title: "CPF",
      dataIndex: "cpf",
    },
    {
      title: "Data de Cadastro",
      dataIndex: "date",
    },
    {
      title: "Ações",
      align: "center",
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

  return (
    <Form>
      <TitleCreateList
        textTitle="Listagem de Doadores"
        route="/doadores/cadastro"
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

export default DonorList;
