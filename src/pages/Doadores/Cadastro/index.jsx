import { Button, Col, Form, Input, Row } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TitleCreateList from "../../../components/TitleCreate";
import api from "../../../lib/api";

function DonorCreate() {
  const [form] = useForm();

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      api.get(`/doador/${id}`).then((response) => {
        const { name, cpf, dataCadastro } = response.data;

        const formattedDate = new Date(dataCadastro)
          .toISOString()
          .split("T")[0];

        form.setFieldsValue({
          name,
          cpf,
          dataCadastro: formattedDate,
        });
      });
    }
  }, [form, id]);

  const onFinish = async (values) => {
    try {
      const sendValues = {
        name: values.name,
        cpf: values.cpf,
        dataCadastro: values.date,
      };

      if (id) {
        await api.put(`/doador/${id}`, sendValues);
      } else {
        await api.post("/doador", sendValues);
      }

      navigate("/doadores");
    } catch (error) {
      console.log(error);
    }
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
        <Col span={10} offset={2}>
          <Form.Item
            label="Data de Cadastro"
            name="dataCadastro"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <Input type="date" size="large" />
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
