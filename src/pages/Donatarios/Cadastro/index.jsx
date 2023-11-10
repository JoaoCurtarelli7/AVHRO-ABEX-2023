import { Button, Col, Form, Input, Row } from "antd";
import "./styles.css";
import TitleCreateList from "../../../components/TitleCreate";
import api from "../../../lib/api";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function GranteeCreate() {
  const [form] = Form.useForm();

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/donatarios/${id}`).then((response) => {
      const { name, cpf } = response.data;

      form.setFieldsValue({
        name,
        cpf,
      });
    });
  }, [form, id]);

  const onFinish = async (values) => {
    try {
      const currentDate = new Date();
      const formattedDate = currentDate.toISOString();

      const sendValues = {
        name: values.name,
        cpf: values.cpf,
        dataCadastro: formattedDate,
      };

      await api
        .post("/donatarios", sendValues)
        .then(() => navigate("/donatarios"));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form form={form} onFinish={onFinish}>
      <TitleCreateList
        textTitle="Cadastro de Donatários"
        route="/donatarios"
        create={true}
      />

      <Row gutter={[20, 16]}>
        <Col span={10} offset={2}>
          <Form.Item
            label="Digite o Nome"
            name="name"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <Input size="large" />
          </Form.Item>
        </Col>

        <Col span={10}>
          <Form.Item
            label="CPF"
            name="cpf"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <Input size="large" />
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

export default GranteeCreate;
