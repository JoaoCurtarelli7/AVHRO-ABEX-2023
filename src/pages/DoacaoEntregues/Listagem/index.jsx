import { useEffect, useState } from "react";
import { Col, Form, Row, Table } from "antd";
import TitleCreateList from "../../../components/TitleCreate";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import api from "../../../lib/api";
import { useNavigate } from "react-router-dom";

import "./styles.css";

function DonationDeliveredList() {
  const [listDoacaoEntregues, setListDoacaoEntregues] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    console.log("teste");

    api.get("/doacoes-entregues").then((response) => {
      setListDoacaoEntregues(response.data);
    });
  }, []);

  const handleRemove = (id) => {
    api
      .delete(`/doacoes-entregues/${id}`)
      .then(() => {
        const updatedList = listDoacaoEntregues.filter(
          (registro) => registro.id !== id
        );
        setListDoacaoEntregues(updatedList);

        console.log(`Registro com ID ${id} removido com sucesso.`);
      })
      .catch((error) => {
        console.error(
          `Erro ao remover o registro com ID ${id}: ${error.message}`
        );
      });
  };
  const handleEdit = (id) => {
    const registroParaEditar = listDoacaoEntregues.find(
      (registro) => registro.id === id
    );

    if (registroParaEditar) {
      navigate(`/doacoes-entregues-cadastro/${id}`);
    } else {
      console.log(`Nenhum registro encontrado com o ID ${id}.`);
    }
  };

  const columns = [
    {
      title: "Item Entregue",
      dataIndex: "item",
    },
    {
      title: "Data da Entrega",
      dataIndex: "date",
      render: (value) => {
        const data = new Date(value);

        const dia = String(data.getDate()).padStart(2, "0");
        const mes = String(data.getMonth() + 1).padStart(2, "0");
        const ano = data.getFullYear();

        return `${dia}/${mes}/${ano}`;
      },
    },
    {
      title: "Donatário",
      dataIndex: "donatario",
      render: (value) => {
        return value.name;
      },
    },
    {
      title: "Ações",
      aling: "center",
      render: (value, record) => {
        return (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <FontAwesomeIcon
              icon={faEdit}
              style={{ marginRight: "20px", cursor: "pointer" }}
              size="xl"
              isButton
              onClick={() => handleEdit(record.id)}
            />

            <FontAwesomeIcon
              icon={faTrash}
              size="xl"
              style={{ cursor: "pointer" }}
              isButton
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
        textTitle="Listagem de Doações Entregues"
        route="/doacoes-entregues-cadastro"
        create={false}
      />

      <Row
        gutter={[20, 16]}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Col span={22}>
          <Table dataSource={listDoacaoEntregues} columns={columns} bordered />
        </Col>
      </Row>
    </Form>
  );
}

export default DonationDeliveredList;
