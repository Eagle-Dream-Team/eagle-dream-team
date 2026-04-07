import { Background } from "@/components/background";
import { EagleTitle } from "@/components/eagle-title";
import { forgotPassword } from "@/services/auth";
import { useMutation } from "@tanstack/react-query";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
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
      toast.success(`A reset link has been sent to "${form.getFieldValue("email")}"`),
    onError: (error: AxiosError) =>
      toast.error(error.message || "Failed to send reset email"),
  });

  const navigate = useNavigate();


  return (
    <>
      <Background className="bg-[url(../lecture-hall.jpg)] bg-cover" />
      <div className={"flex justify-center h-full p-6"}>
        <div className="w-full max-w-xl h-full flex flex-col">
          <EagleTitle className="w-l shadow-xl" />
          <div className="mt-10 mb-1 w-full h-fit border border-gray-600 backdrop-blur bg-neutral-50/80 shadow-xl rounded-3xl p-10 pt-8">
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
                  placeholder="user@email.com"
                  disabled={isPending || isSuccess}
                />
              </Form.Item>
              <div className="flex items-center justify-between mt-2">
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={isPending}
                  // disabled={isSuccess}
                >
                  Send Reset Link
                </Button>

                <Button
                  type="link"
                  onClick={() => navigate({ to: "/auth/sign-in" })}
                  className="hover:underline hover:text-blue-400 text-blue-500"
                >
                  Back to sign in
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
