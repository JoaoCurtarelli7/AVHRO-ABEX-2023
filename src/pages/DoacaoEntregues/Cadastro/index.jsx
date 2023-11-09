// import { useEffect, useState } from "react";
import { Button, Col, Form, Input, Row, Select } from "antd";
import "./styles.css";
import TitleCreateList from "../../../components/TitleCreate";
import { useParams } from "react-router-dom";
import api from "../../../lib/api";
import { useEffect, useState } from "react";

function DonationDeliveredCreate() {
  const [form] = Form.useForm();

  const [listDoacaoEntregues, setListDoacaoEntregues] = useState([]);
  const [itemsOptions, setItemsOptions] = useState([]);

  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    api.get(`/doador`).then((response) => {
      setListDoacaoEntregues(response.data);
    });
  }, [id]);

  useEffect(() => {
    const mappedOptions = listDoacaoEntregues.map((item) => ({
      value: item.id,
      label: item.name,
    }));

    console.log(mappedOptions);

    setItemsOptions(mappedOptions);
  }, [listDoacaoEntregues]);

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

  const onFinish = async (values) => {
    try {
      const currentDate = new Date();
      const formattedDate = currentDate.toISOString();

      const donatarioOption = itemsOptions.find(
        (item) => item.value === values.donatario
      );

      const sendValues = {
        item: values.item,
        donatario: donatarioOption.name, // Assumindo que o campo no estado é "name"
        donatarioId: donatarioOption.id, // Substitua "id" pelo campo correto no seu estado
        date: formattedDate,
      };
      console.log(sendValues, "sendValues");
      api.post("/doacoes-entregues", sendValues);
    } catch (error) {
      console.error("Erro ao enviar para a API:", error);
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
            label="Selecione o Doador"
            name="donatario"
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
              options={itemsOptions}
            />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={[20, 16]}>
        <Col offset={20}>
          <Button
            type="primary"
            onClick={() => (window.location.href = "/doacoes-entregues")}
          >
            Adicionar
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default DonationDeliveredCreate;
