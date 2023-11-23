import { Button, Col, Form, Input, Row } from "antd";
import { useForm } from "antd/es/form/Form";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TitleCreateList from "../../../components/TitleCreate";
import api from "../../../lib/api";
import "./styles.css";

function FamilyCreate() {
  const [form] = useForm();

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      api.get(`/familias/${id}`).then((response) => {
        const { bairro, name, numeroIntegrantes, dataCadastro } = response.data;

        const formattedDate = new Date(dataCadastro)
          .toISOString()
          .split("T")[0];

        form.setFieldsValue({
          bairro,
          name,
          numeroIntegrantes,
          dataCadastro: formattedDate,
        });
      });
    }
  }, [form, id]);

  const onFinish = async (values) => {
    try {
      const sendValues = {
        bairro: values.bairro,
        name: values.name,
        numeroIntegrantes: Number(values.numeroIntegrantes),
        dataCadastro: values.dataCadastro,
      };

      if (id) {
        await api.put(`/familias/${id}`, sendValues);
      } else {
        await api.post("/familias", sendValues);
      }
      navigate("/familias");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form form={form} onFinish={onFinish}>
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
            name="dataCadastro"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <Input type="date" size="large" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={[20, 16]}>
        <Col offset={2} span={10}>
          <Form.Item
            label="Bairro"
            name="bairro"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <Input size="large" />
          </Form.Item>
        </Col>

        <Col span={10}>
          <Form.Item
            label="Quantidade de Integrantes da Família"
            name="numeroIntegrantes"
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

export default FamilyCreate;
