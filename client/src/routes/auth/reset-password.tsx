import { resetPassword } from "@/services/auth";
import { useMutation } from "@tanstack/react-query";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Button, Form, Input } from "antd";
import type { AxiosError } from "axios";
import { toast } from "sonner";

export const Route = createFileRoute("/auth/reset-password")({
  component: RouteComponent,
});

function RouteComponent() {
  const token = new URLSearchParams(window.location.search).get("token");
  const navigate = useNavigate();
  const [form] = Form.useForm<{ newPassword: string }>();

  const { mutate, isPending } = useMutation({
    mutationFn: (values: { newPassword: string }) =>
      resetPassword(token!, values.newPassword),
    onSuccess: () => {
      toast.success("Password reset successfully");
      navigate({ to: "/auth/sign-in" });
    },
    onError: (error: AxiosError) =>
      toast.error(error.message || "Failed to reset password"),
  });

  if (!token) {
    return (
      <div className="flex justify-center items-center min-h-screen p-6">
        <p className="text-red-500">Invalid or missing reset token.</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      <div className="w-screen md:w-md max-w-full h-fit border bg-neutral-50 shadow-xl rounded-xl p-6 pt-4">
        <h2 className="text-lg font-semibold mb-4">Reset Password</h2>
        <Form form={form} layout="vertical" onFinish={mutate}>
          <Form.Item
            label="New Password"
            name="newPassword"
            validateDebounce={500}
            normalize={(v) => v.trim()}
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
            Reset Password
          </Button>
        </Form>
      </div>
    </div>
  );
}
