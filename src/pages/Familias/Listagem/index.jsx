import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Form, Row, Table } from "antd";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TitleCreateList from "../../../components/TitleCreate";
import api from "../../../lib/api";

import "./styles.css";

function FamilyList() {
  const [listFamilia, setListFamilia] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/familias").then((response) => {
      setListFamilia(response.data);
    });
  }, []);

  const handleRemove = (id) => {
    api.delete(`/familias/${id}`).then(() => {
      const updatedList = listFamilia.filter((registro) => registro.id !== id);
      setListFamilia(updatedList);
    });
  };

  const handleEdit = (id) => {
    const registroParaEditar = listFamilia.find(
      (registro) => registro.id === id
    );

    if (registroParaEditar) {
      navigate(`/familias-cadastro/${id}`);
    }
  };

  const columns = [
    {
      title: "Nome",
      dataIndex: "name",
    },
    {
      title: "Numero de Integrantes",
      dataIndex: "numeroIntegrantes",
    },
    {
      title: "Bairro",
      dataIndex: "bairro",
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
              onClick={() => handleEdit(record.id)}
              size="xl"
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
        textTitle="Listagem de Familía"
        route="/familias-cadastro"
        create={false}
      />

      <Row
        gutter={[20, 16]}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Col span={22}>
          <Table
            dataSource={listFamilia}
            columns={columns}
            bordered
            rowKey={(record) => record.id}
          />
        </Col>
      </Row>
    </Form>
  );
}

export default FamilyList;
