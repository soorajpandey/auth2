import React from 'react';
import { Navigate } from 'react-router-dom';
import Multiselect from 'multiselect-react-dropdown';
import { Form, Button } from 'antd';
import { useState } from 'react';

const Dashboard = () => {
    const [selectedValue, setSelectedValue] = useState([]);
    const [options, setOptions] = useState([
        {
            id: 1,
            name: "Option 1"
        },
        {
            id: 2,
            name: "Option 2"
        },
        {
            id: 3,
            name: "Option 3"
        },
        {
            id: 4,
            name: "Option 4"
        },
        {
            id: 5,
            name: "Option 5"
        }
    ])

    const onSelect = (selectedList, selectedItem) => {
        setSelectedValue(selectedList)
    }

    const onRemove = (selectedList, removedItem) => {
        setSelectedValue(selectedList)
    }

    const onFinish = (values) => {
        console.log('Success:', values);
        return <Navigate to="/dashboard" />
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    }

    return (
        <div className="dashboard">
            <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Select"
                    name="select"
                    rules={[{ required: true, message: 'Please select your option!' }]}>
                    <Multiselect
                        options={options}
                        onSelect={onSelect}
                        onRemove={onRemove}
                        displayValue="name"
                        placeholder="Select your option"
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Dashboard;