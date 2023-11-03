import { useEffect } from "react";
import { Button, Checkbox, Col, Form, Input, Row, Select, Table } from "antd";
import "./styles.css";
import TitleCreateList from "../../../components/TitleCreate";
import { useLocation } from "react-router-dom";

function DonationDeliveredCreate() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const donatario = searchParams.get("donatario");
  const item = searchParams.get("item");

  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({
      item,
      donatario,
    });

    console.log(form);
  }, [form, donatario, item]);

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

  const onFinish = (values) => {
    // Lide com a submissão do formulário de edição aqui
    console.log("Valores do formulário de edição:", values);
  };

  return (
    <Form form={form} onFinish={onFinish}>
      <TitleCreateList
        textTitle="Cadastro de Doação Entrega"
        route="/doacaos-entregues"
        create={true}
      />

      <Row
        gutter={[20, 16]}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Col span={10}>
          <Form.Item
            label="Selecione o Item"
            name="item"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <Select
              size="large"
              showSearch
              placeholder="Item"
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
                  value: "casaco",
                  label: "casaco",
                },
                {
                  value: "cadeira",
                  label: "cadeira",
                },
              ]}
            />
          </Form.Item>
        </Col>

        <Col span={10}>
          <Form.Item
            label="Selecione o Doador"
            name="donatario"
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

export default DonationDeliveredCreate;
