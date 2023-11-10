import { Col, Form, Row, Table } from "antd";

import "./styles.css";
import TitleCreateList from "../../../components/TitleCreate";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import api from "../../../lib/api";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

function DonatarioList() {
  const [listDonatario, setListDonatario] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/donatarios").then((response) => {
      setListDonatario(response.data);
    });
  }, []);

  const handleRemove = (id) => {
    api
      .delete(`/donatarios/${id}`)
      .then(() => {
        const updatedList = listDonatario.filter(
          (registro) => registro.id !== id
        );
        setListDonatario(updatedList);

        console.log(`Registro com ID ${id} removido com sucesso.`);
      })
      .catch((error) => {
        console.error(
          `Erro ao remover o registro com ID ${id}: ${error.message}`
        );
      });
  };

  const handleEdit = (id) => {
    const registroParaEditar = listDonatario.find(
      (registro) => registro.id === id
    );

    if (registroParaEditar) {
      navigate(`/donatarios-cadastro/${id}`);
    }
  };

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
      render: (_, record) => {
        return (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <FontAwesomeIcon
              icon={faEdit}
              style={{ marginRight: "20px", cursor: "pointer" }}
              size="xl"
              onClick={() => handleEdit(record.id)}
            />

            <FontAwesomeIcon
              icon={faTrash}
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
        textTitle="Listagem de Donatários"
        route="/donatarios-cadastro"
        create={false}
      />

      <Row
        gutter={[20, 16]}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Col span={22}>
          <Table
            dataSource={listDonatario}
            columns={columns}
            bordered
            rowKey={(record) => record.id}
          />
        </Col>
      </Row>
    </Form>
  );
}

export default DonatarioList;