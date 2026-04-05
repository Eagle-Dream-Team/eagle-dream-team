import type { User } from "@/models/user";
import type { Role } from "@/services/auth";
import type { SignUpDto } from "@server/user/dto/signUp.dto";
import { Button, Form, Input, Modal, Segmented, Select } from "antd";
import { useState } from "react";

type FormValues = Omit<SignUpDto, "role">;

/* with this */
interface Props {
  open: boolean;
  onClose: () => void;
  role?: Role;
  initialValues?: Partial<FormValues>;
  mode?: "create" | "edit";
  onSubmit: (values: FormValues, role: Role) => void;
  isPending?: boolean;
  userId?: string;
  tutors?: User[];
}

export function UserModal({
  open,
  onClose,
  role: lockedRole,
  initialValues,
  mode = "create",
  onSubmit,
  isPending = false,
  tutors = [],
}: Props) {
  const [form] = Form.useForm<FormValues>();
  const [role, setRole] = useState<Role>(lockedRole ?? "tutor");
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const onFinish = (values: FormValues) => onSubmit(values, role);

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      title={mode === "edit" ? "Edit User" : "Register User"}
      destroyOnHidden
      afterClose={() => form.resetFields()}
    >
      {!lockedRole && mode === "create" && (
        <div className="mb-4">
          <Segmented
            block
            value={role}
            onChange={(val) => {
              setRole(val as Role);
              form.resetFields();
            }}
            options={[
              { label: "Tutor", value: "tutor" },
              { label: "Student", value: "student" },
            ]}
          />
        </div>
      )}

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={initialValues}
      >
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[{ required: true, message: "Please enter first name" }]}
        >
          <Input placeholder="John" disabled={isPending} />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[{ required: true, message: "Please enter last name" }]}
        >
          <Input placeholder="Doe" disabled={isPending} />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          normalize={(value) => value.trim()}
          rules={[
            { required: true, message: "Please enter email" },
            { type: "email", message: "Please enter a valid email" },
          ]}
        >
          <Input placeholder="name@school.com" disabled={isPending} />
        </Form.Item>

        {mode === "create" && (
          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please enter password" },
              { min: 6, message: "Password must be at least 6 characters" },
            ]}
          >
            <Input.Password
              placeholder="Min 6 characters"
              disabled={isPending}
            />
          </Form.Item>
        )}

        {mode === "create" && role === "student" && tutors.length > 0 && (
          <Form.Item
            label="Assign to Tutor"
            name="tutor_id"
            rules={[{ required: true, message: "Please select a tutor" }]}
          >
            <Select
              allowClear
              placeholder="Search and select a tutor (optional)"
              disabled={isPending}
              showSearch={{
                filterOption: (input, option) =>
                  (option?.label as string)
                    ?.toLowerCase()
                    .includes(input.toLowerCase()),
              }}
              options={tutors.map((t) => ({
                value: t.user_id,
                label: `${t.first_name} ${t.last_name} — ${t.email}`,
              }))}
            />
          </Form.Item>
        )}

        <div className="flex justify-end gap-2 mt-2">
          <Button onClick={onClose} disabled={isPending}>
            Cancel
          </Button>
          <Button type="primary" htmlType="submit" loading={isPending}>
            {mode === "edit"
              ? "Save Changes"
              : `Register ${role === "tutor" ? "Tutor" : "Student"}`}
          </Button>
        </div>
      </Form>
    </Modal>
  );
}
