import { Col, Form, Row, Table } from "antd";

import "./styles.css";
import TitleCreateList from "../../../components/TitleCreate";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import api from "../../../lib/api";
import dayjs from "dayjs";

function GranteeList() {
  const [listDonatario, setListDonatario] = useState([]);

  useEffect(() => {
    api.get("/donatarios").then((response) => {
      setListDonatario(response.data);
    });
  }, []);

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
      dataIndex: "dataCadastro",
      render: (value) => {
        return dayjs(value).format("DD/MM/YYYY");
      },
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

  return (
    <Form>
      <TitleCreateList
        textTitle="Listagem de Donatários"
        route="/donatarios-cadastro"
        create={false}
      />

      <Row
        gutter={[20, 16]}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Col span={22}>
          <Table dataSource={listDonatario} columns={columns} bordered />
        </Col>
      </Row>
    </Form>
  );
}

export default GranteeList;
