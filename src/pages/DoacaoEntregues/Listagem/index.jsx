import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Form, Row, Table } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TitleCreateList from "../../../components/TitleCreate";
import api from "../../../lib/api";

import dayjs from "dayjs";
import "./styles.css";

function DonationDeliveredList() {
  const [listDoacaoEntregues, setListDoacaoEntregues] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    api.get("/doacoes-entregues").then((response) => {
      setListDoacaoEntregues(response.data);
    });
  }, []);

  const handleRemove = (id) => {
    api.delete(`/doacoes-entregues/${id}`).then(() => {
      const updatedList = listDoacaoEntregues.filter(
        (registro) => registro.id !== id
      );
      setListDoacaoEntregues(updatedList);
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
        return dayjs(value).format("DD/MM/YYYY");
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
      title: "CPF Donatário",
      dataIndex: "donatario",
      render: (value) => {
        return value.cpf;
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
        textTitle="Listagem de Doações Entregues"
        route="/doacoes-entregues-cadastro"
        create={false}
      />

      <Row
        gutter={[20, 16]}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Col span={22}>
          <Table
            dataSource={listDoacaoEntregues}
            columns={columns}
            rowKey={(record) => record.id}
            bordered
          />
        </Col>
      </Row>
    </Form>
  );
}

export default DonationDeliveredList;
