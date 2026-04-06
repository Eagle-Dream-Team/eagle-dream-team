import { Background } from "@/components/background";
import { EagleTitle } from "@/components/eagle-title";
import { forgotPassword } from "@/services/auth";
import { useMutation } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { Button, Form, Input } from "antd";
import type { AxiosError } from "axios";
import { toast } from "sonner";

export const Route = createFileRoute("/auth/forgot-password")({
  component: RouteComponent,
});

function RouteComponent() {
  const [form] = Form.useForm<{ email: string }>();

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: (values: { email: string }) => forgotPassword(values.email),
    onSuccess: () =>
      toast.success("If that email exists, a reset link has been sent."),
    onError: (error: AxiosError) =>
      toast.error(error.message || "Failed to send reset email"),
  });

  return (
    <>
      <Background className="bg-[url(../lecture-hall.jpg)] bg-cover" />
      <div className="flex flex-col justify-center items-center p-6 pt-25">
        <EagleTitle className="w-l shadow-xl" />
        <div className="w-full md:w-md max-w-full h-fit border border-gray-500 bg-neutral-50/80 backdrop-blur-xs shadow-xl rounded-xl p-12">
          <h2 className="text-xl font-semibold mb-4">Forgot Password</h2>
          <Form form={form} layout="vertical" onFinish={mutate}>
            <Form.Item
              label="Email"
              name="email"
              validateDebounce={500}
              normalize={(v) => v.trim()}
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input
                placeholder="name@school.com"
                disabled={isPending || isSuccess}
              />
            </Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={isPending}
              disabled={isSuccess}
            >
              Send Reset Link
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}
