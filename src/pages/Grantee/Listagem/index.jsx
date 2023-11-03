import { Col, Form, Row, Table } from "antd";

import "./styles.css";
import TitleCreateList from "../../../components/TitleCreate";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function GranteeList() {
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

  const data = [
    {
      key: "1",
      date: "05/09/2023",
      cpf: "999.999.999-99",
      name: "João Curtarelli",
    },
    {
      key: "2",
      date: "05/09/2023",
      cpf: "999.999.999-99",
      name: "Gbariel Santin",
    },
  ];

  return (
    <Form>
      <TitleCreateList
        textTitle="Listagem de Donatários"
        route="/donatarios/cadastro"
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

export default GranteeList;
