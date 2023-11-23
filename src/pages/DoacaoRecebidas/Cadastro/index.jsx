import { Button, Col, Form, Input, Row, Select } from "antd";
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TitleCreateList from "../../../components/TitleCreate";
import api from "../../../lib/api";
import "./styles.css";

function DonationReceivedCreate() {
  const [form] = Form.useForm();

  const [selectDoador, setSelectDoador] = useState([]);
  const [cpf, setCpf] = useState("");

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/doador`).then((response) => {
      setSelectDoador(response.data);
    });

    if (id) {
      api.get(`/doacoes-recebidas/${id}`).then((response) => {
        const { item, doadorId, cpf, date } = response.data;
        const formattedDate = new Date(date).toISOString().split("T")[0];

        form.setFieldsValue({
          item,
          doadorId,
          cpf,
          date: formattedDate,
        });
      });
    }
  }, [form, id]);

  const itemsOptions = useMemo(() => {
    const mappedOptions = selectDoador.map((item) => ({
      value: item.id,
      label: item.name,
      cpf: item.cpf,
    }));

    return mappedOptions;
  }, [selectDoador]);

  const handleDoadorSelect = (value, option) => {
    const selectedCpf = option?.cpf || "";

    setCpf(selectedCpf);

    form.setFieldsValue({
      cpf: selectedCpf,
    });
  };

  const onFinish = async (values) => {
    try {
      const doadorOption = itemsOptions.find(
        (item) => item.value === values.doadorId
      );

      const sendValues = {
        item: values.item,
        doadorId: doadorOption.value,
        date: values.date,
      };

      if (id) {
        await api.put(`/doacoes-recebidas/${id}`, sendValues);
      } else {
        await api.post("/doacoes-recebidas", sendValues);
      }

      navigate("/doacoes-recebidas");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form form={form} onFinish={onFinish}>
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
            name="doadorId"
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
              onChange={handleDoadorSelect}
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
            <Input
              placeholder="CPF"
              disabled
              size="large"
              value={cpf}
              style={{ color: "black" }}
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

        <Col
          span={4}
          offset={8}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Button type="primary" htmlType="submit">
            Adicionar
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default DonationReceivedCreate;
