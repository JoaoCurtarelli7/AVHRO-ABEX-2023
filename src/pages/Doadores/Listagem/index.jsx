import { useEffect, useState } from "react";
import { Col, Form, Row, Table } from "antd";
import "./styles.css";
import TitleCreateList from "../../../components/TitleCreate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import api from "../../../lib/api";

function DoadorList() {
  const [listDoador, setListDoador] = useState([]);

  useEffect(() => {
    api.get("/doador").then((response) => {
      setListDoador(response.data);
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
        const data = new Date(value);

        const dia = String(data.getDate()).padStart(2, "0");
        const mes = String(data.getMonth() + 1).padStart(2, "0");
        const ano = data.getFullYear();

        return `${dia}/${mes}/${ano}`;
      },
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
        route="/doadores-cadastro"
        create={false}
      />

      <Row
        gutter={[20, 16]}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Col span={22}>
          <Table dataSource={listDoador} columns={columns} bordered />
        </Col>
      </Row>
    </Form>
  );
}

export default DoadorList;
