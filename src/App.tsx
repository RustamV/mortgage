import { useState } from "react";
import "./App.css";
import { Select, Input, Form, Button } from "antd";

const dataSource = [
    {
        key: "1",
        name: "Январь",
        sum: 350000,
        dollar: 200 * 90,
        plus: 170000,
    },
    {
        key: "2",
        name: "Февраль",
        sum: 42,
        dollar: 123,
    },
];

const columns = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "sum",
        dataIndex: "sum",
        key: "sum",
    },
    {
        title: "dollar",
        dataIndex: "dollar",
        key: "dollar",
    },
];

function App() {
    const [total, setTotal] = useState<any>();

    const handleFinish = (values: any) => {
        setTotal(
            +values.savings +
                +values.debts +
                +values.percent * +values.months +
                +values.dollars * +values.kurs +
                +values.overtime * +values.months +
                +values.otkl * +values.months
        );
        console.log(total);
    };
    return (
        <>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 700 }}
                onFinish={handleFinish}
            >
                <Form.Item label="Месяц конца" name="month">
                    <Select
                        options={[
                            {
                                label: "January",
                                value: 1,
                            },
                            {
                                label: "February",
                                value: 2,
                            },
                            {
                                label: "March",
                                value: 3,
                            },
                        ]}
                        style={{ width: "100%" }}
                    />
                </Form.Item>

                <Form.Item label="Накопления" name="savings">
                    <Input />
                </Form.Item>
                <Form.Item label="Доллары" name="dollars">
                    <Input />
                </Form.Item>
                <Form.Item label="Курс доллара" name="kurs">
                    <Input />
                </Form.Item>
                <Form.Item label="Долги" name="debts">
                    <Input />
                </Form.Item>
                <Form.Item label="Капающий процент со вкладов" name="percent">
                    <Input />
                </Form.Item>
                <Form.Item label="Сверхурочная работа" name="overtime">
                    <Input />
                </Form.Item>
                <Form.Item label="Откладываю" name="otkl">
                    <Input />
                </Form.Item>
                <Form.Item label="Количество месяцев" name="months">
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            {total}
            {/* <Table dataSource={dataSource} columns={columns} /> */}
        </>
    );
}

export default App;
