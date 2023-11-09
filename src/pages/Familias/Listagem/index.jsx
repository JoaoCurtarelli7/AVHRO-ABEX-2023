import { useEffect, useState } from "react";
import { Col, Form, Row, Table } from "antd";
import TitleCreateList from "../../../components/TitleCreate";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles.css";
import api from "../../../lib/api";

function FamilyList() {
  const [listFamilia, setListFamilia] = useState([]);

  useEffect(() => {
    api.get("/familias").then((response) => {
      setListFamilia(response.data);
    });
  }, []);

  const handleRemove = (id) => {
    api
      .delete(`/familias/${id}`)
      .then(() => {
        const updatedList = listFamilia.filter(
          (registro) => registro.id !== id
        );
        setListFamilia(updatedList);

        console.log(`Registro com ID ${id} removido com sucesso.`);
      })
      .catch((error) => {
        console.error(
          `Erro ao remover o registro com ID ${id}: ${error.message}`
        );
      });
  };

  const columns = [
    {
      title: "Nome",
      dataIndex: "name",
    },
    {
      title: "Numero de Integrantes",
      dataIndex: "NumeroIntegrantes",
    },
    {
      title: "Bairro",
      dataIndex: "bairro",
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
      aling: "center",
      render: (_, record) => {
        return (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <FontAwesomeIcon
              icon={faEdit}
              style={{ marginRight: "20px", cursor: "pointer" }}
              isButton
              size="xl"
            />

            <FontAwesomeIcon
              icon={faTrash}
              isButton
              size="xl"
              style={{ cursor: "pointer" }}
              onClick={() => handleRemove(record.id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <Form>
      <TitleCreateList
        textTitle="Listagem de Familía"
        route="/familias-cadastro"
        create={false}
      />

      <Row
        gutter={[20, 16]}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Col span={22}>
          <Table dataSource={listFamilia} columns={columns} bordered />
        </Col>
      </Row>
    </Form>
  );
}

export default FamilyList;
