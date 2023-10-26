import React, { useState } from "react";
import { Col, Form, Row, Table } from "antd";
import TitleCreateList from "../../../components/TitleCreate";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";

function DonationDeliveredList() {
  const [listDoacaoEntregues, setListDoacaoEntregues] = useState([
    {
      id: 1,
      date: "05/09/2023",
      item: "Casaco",
      donatario: "João Curtarelli",
    },
    {
      id: 2,
      date: "05/09/2023",
      item: "Coberta",
      donatario: "Gabriel Santin",
    },
  ]);

  const handleRemove = (id) => {
    // Crie uma nova lista excluindo o registro com o ID fornecido
    const updatedList = listDoacaoEntregues.filter((registro) => registro.id !== id);
    setListDoacaoEntregues(updatedList);
    console.log(`Registro com ID ${id} removido com sucesso.`);
  };

  const handleEdit = (id) => {
    // Encontre o registro com o ID fornecido na lista
    const registroParaEditar = listDoacaoEntregues.find((registro) => registro.id === id);
  

    if (registroParaEditar) {
      // Redirecione para a tela de cadastro e envie os dados do registro para edição
      const editRoute = `/doacoes-entregues/cadastro?id=${registroParaEditar.id}&donatario=${registroParaEditar.donatario}&item=${registroParaEditar.item}`;
      window.location.href = editRoute;
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
    },
    {
      title: "Donatário",
      dataIndex: "donatario",
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
        route="/doacoes-entregues/cadastro"
        create={false}
      />

      <Row gutter={[20, 16]} style={{ display: "flex", justifyContent: "center" }}>
        <Col span={22}>
          <Table dataSource={listDoacaoEntregues} columns={columns} bordered />
        </Col>
      </Row>
    </Form>
  );
}

export default DonationDeliveredList;
