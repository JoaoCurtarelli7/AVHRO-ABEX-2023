import React from "react";
import { Button, Checkbox, Col, Form, Input, Row, Select, Table } from "antd";
import "./styles.css";
import TitleCreateList from "../../../components/TitleCreate";

function DonationReceivedCreate() {
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

  return (
    <Form>
      <TitleCreateList
        textTitle="Cadastro de Doações"
        route="/doacoes-recebidas"
        create={true}
      />

      <Row
        gutter={[20, 16]}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Col span={20}>
          <Form.Item
            label="Itens Doados"
            name="item"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <Input.TextArea
              style={{
                height: "112px",
              }}
              placeholder="Descreve os Item que foram doados"
            />
          </Form.Item>
        </Col>
      </Row>

      <Row
        gutter={[20, 16]}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Col span={10}>
          <Form.Item
            label="Selecione o Doador"
            name="doador"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <Select
              size="large"
              showSearch
              placeholder="Doador"
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={[
                {
                  value: "joao",
                  label: "João",
                },
                {
                  value: "Santin",
                  label: "santin",
                },
                {
                  value: "tom",
                  label: "Tom",
                },
              ]}
            />
          </Form.Item>
        </Col>

        <Col span={10}>
          <Form.Item
            label="CPF"
            name="cpf"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <Input placeholder="CPF" disabled size="large" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={[20, 16]}>
        <Col span={10} offset={2}>
          <Form.Item>
            <Checkbox>Doação Unica</Checkbox>
          </Form.Item>
        </Col>

        <Col span={4} offset={8}>
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

export default DonationReceivedCreate;
