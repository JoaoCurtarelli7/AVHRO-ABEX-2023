import { Col, Form, Row, Table } from "antd";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TitleCreateList from "../../../components/TitleCreate";

import "./styles.css";
import { useEffect, useState } from "react";
import api from "../../../lib/api";

function DonationReceivedList() {
  const [listDoacaoRecebidas, setListDoacaoRecebidas] = useState([]);

  useEffect(() => {
    api.get("/doacoes-recebidas").then((response) => {
      setListDoacaoRecebidas(response.data);
    });
  }, []);

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
          <Table dataSource={listDoacaoRecebidas} columns={columns} bordered />
        </Col>
      </Row>
    </Form>
  );
}

export default DonationReceivedList;
