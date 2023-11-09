import { useState } from "react";
import { Button, Col, Form, Input, List, Row } from "antd";
import "./styles.css";
import TitleCreateList from "../../../components/TitleCreate";

function FamilyCreate() {
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);

  const addName = () => {
    if (name.trim() !== "") {
      setNames([...names, name]);
      setName("");
    }
  };

  const removeName = (index) => {
    const updatedNames = [...names];
    updatedNames.splice(index, 1);
    setNames(updatedNames);
  };

  return (
    <Form>
      <TitleCreateList
        textTitle="Cadastro de Familía"
        route="/familias"
        create={true}
      />

      <Row gutter={[20, 16]}>
        <Col span={10} offset={2}>
          <Form.Item
            label="Nome da Familía"
            name="name"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <Input size="large" />
          </Form.Item>
        </Col>

        <Col span={10}>
          <Form.Item
            label="Data de Cadastro"
            name="date"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <Input type="date" size="large" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={[20, 16]}>
        <Col span={10} offset={2}>
          <Form.Item
            label="Adicione os Integrantes da Família"
            name="number"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <Row gutter={[8, 0]}>
              <Col span={17}>
                <Input
                  placeholder="Digite um nome"
                  size="large"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Col>
              <Col span={7}>
                <Button type="primary" size="large" onClick={addName}>
                  Adicionar Nome
                </Button>
              </Col>
            </Row>
          </Form.Item>
        </Col>

        <Col span={10}>
          <Form.Item
            label="Bairro"
            name="bairro"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <Input size="large" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={[20, 16]}>
        <Col span={10} offset={2}>
          <List
            bordered
            dataSource={names}
            renderItem={(item, index) => (
              <List.Item
                actions={[
                  <Button type="link" onClick={() => removeName(index)}>
                    Remover
                  </Button>,
                ]}
              >
                {item}
              </List.Item>
            )}
          />
        </Col>
      </Row>

      <Row gutter={[20, 16]}>
        <Col offset={20}>
          <Button
            type="primary"
            onClick={() => (window.location.href = "/doacoes-recebidas")}
          >
            Adicionar
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default FamilyCreate;
