import { changePassword } from "@/services/auth";
import { useMutation } from "@tanstack/react-query";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Button, Form, Input } from "antd";
import type { ChangePasswordDto } from "@server/user/dto/changePassword.dto";
import type { AxiosError } from "axios";
import { toast } from "sonner";

export const Route = createFileRoute("/auth/change-password")({
  component: RouteComponent,
});

function RouteComponent() {
  const [form] = Form.useForm<ChangePasswordDto>();
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: changePassword,
    onSuccess: () => {
      toast.success("Password changed successfully");
      navigate({ to: "/auth/sign-in" });
    },
    onError: (error: AxiosError) => {
      toast.error(error.message || "Failed to change password");
    },
  });

  const onFinish = (values: ChangePasswordDto) => mutate(values);

  return (
    <div className={"flex justify-center items-center min-h-screen p-6"}>
      <div className="w-screen md:w-md max-w-full h-fit border bg-neutral-50 shadow-xl rounded-xl p-6">
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Email"
            name="email"
            validateDebounce={500}
            normalize={(value) => value.trim()}
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Please enter a valid email" },
            ]}
          >
            <Input placeholder="user@email.com" disabled={isPending} />
          </Form.Item>
          <Form.Item
            label="New Password"
            name="newPassword"
            validateDebounce={500}
            normalize={(value) => value.trim()}
            rules={[
              { required: true, message: "Please enter your new password" },
              { min: 6, message: "Password must be at least 6 characters" },
            ]}
          >
            <Input.Password
              placeholder="Must have at least 6 characters"
              disabled={isPending}
            />
          </Form.Item>

          <Button type="primary" htmlType="submit" loading={isPending}>
            Change Password
          </Button>
        </Form>
      </div>
    </div>
  );
}
