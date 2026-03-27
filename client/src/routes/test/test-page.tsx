import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Table, Modal, Form, Input, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
export const Route = createFileRoute("/test/test-page")({
  component: RouteComponent,
});

interface User {
  key: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

function RouteComponent() {
  const [users, setUsers] = useState<User[]>([]);
  const [open, setOpen] = useState(false);
  const [editingKey, setEditingKey] = useState<string | null>(null);
  const [form] = Form.useForm();

  const openAdd = () => {
    setEditingKey(null);
    form.resetFields();
    setOpen(true);
  };

  const openEdit = (record: User) => {
    setEditingKey(record.key);
    form.setFieldsValue(record);
    setOpen(true);
  };

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      if (editingKey) {
        setUsers((prev) =>
          prev.map((u) => (u.key === editingKey ? { ...u, ...values } : u)),
        );
      } else {
        setUsers((prev) => [
          ...prev,
          { key: Date.now().toString(), ...values },
        ]);
      }
      setOpen(false);
    });
  };

  const columns: ColumnsType<User> = [
    { title: "First Name", dataIndex: "firstName" },
    { title: "Last Name", dataIndex: "lastName" },
    { title: "Email", dataIndex: "email" },
    { title: "Password", dataIndex: "password", render: () => "••••••••" },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Test Users</h1>
        <Button type="primary" onClick={openAdd}>
          + Add User
        </Button>
      </div>
      <Table
        columns={columns}
        dataSource={users}
        onRow={(record) => ({ onClick: () => openEdit(record) })}
        rowClassName="cursor-pointer"
      />
      <Modal
        title={editingKey ? "Edit User" : "Add User"}
        open={open}
        onOk={handleSubmit}
        onCancel={() => setOpen(false)}
        okText={editingKey ? "Update" : "Add"}
      >
        <Form form={form} layout="vertical" className="mt-4">
          <Form.Item
            name="firstName"
            label="First Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, type: "email" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true }]}
          >
            <Input.Password />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
