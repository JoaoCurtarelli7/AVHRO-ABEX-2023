import { Col, Form, Row, Table } from "antd";

import "./styles.css";
import TitleCreateList from "../../../components/TitleCreate";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FamilyList() {
  const columns = [
    {
      title: "Nome",
      dataIndex: "name",
    },
    {
      title: "Numero de Integrantes",
      dataIndex: "number",
    },
    {
      title: "Bairro",
      dataIndex: "district",
    },
    {
      title: "Data de Cadastro",
      dataIndex: "date",
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
              isButton
              size="xl"
            />

            <FontAwesomeIcon
              icon={faTrash}
              isButton
              size="xl"
              style={{ cursor: "pointer" }}
            />
          </div>
        );
      },
    },
  ];

  const data = [
    {
      key: "1",
      name: "Gabriel Santin",
      number: "2",
      district: "Centro",
      date: "05/09/2023",
    },
    {
      key: "1",
      name: "João Curtarelli",
      number: "2",
      district: "Efapi",
      date: "05/09/2023",
    },
  ];

  return (
    <Form>
      <TitleCreateList
        textTitle="Listagem de Familía"
        route="/familias/cadastro"
        create={false}
      />

      <Row
        gutter={[20, 16]}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Col span={22}>
          <Table dataSource={data} columns={columns} bordered />
        </Col>
      </Row>
    </Form>
  );
}

export default FamilyList;
