import { Button, Col, Form, Input, Row, Select } from "antd";
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TitleCreateList from "../../../components/TitleCreate";
import api from "../../../lib/api";
import "./styles.css";

function DonationDeliveredCreate() {
  const [form] = Form.useForm();

  const [selectDoador, setSelectDoador] = useState([]);

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/donatarios`).then((response) => {
      setSelectDoador(response.data);
    });

    if (id) {
      api.get(`/doacoes-entregues/${id}`).then((response) => {
        const { item, donatarioId, date } = response.data;

        const formattedDate = new Date(date).toISOString().split("T")[0];

        form.setFieldsValue({
          item,
          donatarioId,
          date: formattedDate,
        });
      });
    }
  }, [form, id]);

  const itemsOptions = useMemo(() => {
    const mappedOptions = selectDoador.map((item) => ({
      value: item.id,
      label: item.name,
    }));

    return mappedOptions;
  }, [selectDoador]);

  const onFinish = async (values) => {
    try {
      const donatarioOption = itemsOptions.find(
        (item) => item.value === values.donatarioId
      );

      const sendValues = {
        item: values.item,
        donatarioId: donatarioOption.value,
        date: values.date,
      };

      if (id) {
        await api.put(`/doacoes-entregues/${id}`, sendValues);
      } else {
        await api.post("/doacoes-entregues", sendValues);
      }

      navigate("/doacoes-entregues");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form form={form} onFinish={onFinish}>
      <TitleCreateList
        textTitle="Cadastro de Doação Entrega"
        route="/doacoes-entregues"
        create={true}
      />

      <Row
        gutter={[20, 16]}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Col span={10}>
          <Form.Item
            label="Digite o Item"
            name="item"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <Input size="large" />
          </Form.Item>
        </Col>

        <Col span={10}>
          <Form.Item
            label="Selecione o Donatario"
            name="donatarioId"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <Select
              size="large"
              showSearch
              placeholder="Item"
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={itemsOptions}
            />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={[20, 16]}>
        <Col span={10} offset={2}>
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
        <Col offset={20}>
          <Button type="primary" htmlType="submit">
            Adicionar
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default DonationDeliveredCreate;
