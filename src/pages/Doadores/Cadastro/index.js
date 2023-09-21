import React from "react";
import { Form, Input, Button, Col, Row } from "antd";
import TitleCreateList from "../../../components/TitleCreate";
import { useForm } from "antd/lib/form/Form";

function DonorCreate() {
  const [form] = useForm();

  const onFinish = (values) => {
    console.log("Valores do formulário:", values);
  };

  return (
    <Form form={form} onFinish={onFinish}>
      <TitleCreateList
        textTitle="Cadastro de Doador"
        route="/doadores"
        create={true}
      />

      <Row gutter={[20, 16]}>
        <Col span={10} offset={2}>
          <Form.Item
            label="Nome"
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
            label="CPF"
            name="cpf"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <Input size="large" type="number" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={[20, 16]}>
        <Col offset={20}>
          <Button type="primary" htmlType="submit">
            Adicionar
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default DonorCreate;
