import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Form, Row, Table } from "antd";
import TitleCreateList from "../../../components/TitleCreate";

import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../lib/api";
import "./styles.css";

function DonationReceivedList() {
  const [listDoacaoRecebidas, setListDoacaoRecebidas] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    api.get("/doacoes-recebidas").then((response) => {
      setListDoacaoRecebidas(response.data);
    });
  }, []);

  const handleRemove = (id) => {
    api
      .delete(`/doacoes-recebidas/${id}`)
      .then(() => {
        const updatedList = listDoacaoRecebidas.filter(
          (registro) => registro.id !== id
        );
        setListDoacaoRecebidas(updatedList);
      })
      .catch(() => {});
  };

  const handleEdit = (id) => {
    const registroParaEditar = listDoacaoRecebidas.find(
      (registro) => registro.id === id
    );

    if (registroParaEditar) {
      navigate(`/doacoes-recebidas-cadastro/${id}`);
    }
  };

  const columns = [
    {
      title: "Item doado",
      dataIndex: "item",
    },
    {
      title: "Data da doação",
      dataIndex: "date",
      render: (value) => {
        return dayjs(value).format("DD/MM/YYYY");
      },
    },
    {
      title: "Doador",
      dataIndex: "doador",
      render: (value) => {
        return value.name;
      },
    },
    {
      title: "CPF Doador",
      dataIndex: "doador",
      render: (value) => {
        return value.cpf;
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
        textTitle="Lista de Doações Recebidas"
        route="/doacoes-recebidas-cadastro"
        create={false}
      />

      <Row
        gutter={[20, 16]}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Col span={22}>
          <Table
            dataSource={listDoacaoRecebidas}
            columns={columns}
            bordered
            rowKey={(record) => record.id}
          />
        </Col>
      </Row>
    </Form>
  );
}

export default DonationReceivedList;
