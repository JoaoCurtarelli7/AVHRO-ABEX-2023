import { Button, Col, Form, Input, Row, Select } from "antd";
import "./styles.css";
import TitleCreateList from "../../../components/TitleCreate";

function GranteeCreate() {
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

  return (
    <Form>
      <TitleCreateList
        textTitle="Cadastro de Donatários"
        route="/donatarios"
        create={true}
      />

      <Row gutter={[20, 16]}>
        <Col span={10} offset={2}>
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

export default GranteeCreate;
