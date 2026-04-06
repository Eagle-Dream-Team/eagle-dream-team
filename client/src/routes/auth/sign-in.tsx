import { Background } from "@/components/background";
import { EagleIcon } from "@/components/eagle-icon";
import { EagleTitle } from "@/components/eagle-title";
import { signIn } from "@/services/auth";
import type { SignInDto } from "@server/user/dto/signIn.dto";
import { useMutation } from "@tanstack/react-query";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Button, Form, Input } from "antd";
import type { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import eagleLogo from "@/assets/eagle.svg";

export const Route = createFileRoute("/auth/sign-in")({
  component: RouteComponent,
});

function RouteComponent() {
  
  const [form] = Form.useForm<SignInDto>();
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: signIn,

    onSuccess: (data) => {
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("role", data.role);
      toast.success("welcome back");

      navigate({ to: `/${data.role}` });
    },

    onError: (error: AxiosError) => {
      toast.error(error.message || "Invalid email or password");
    },
  });

  const onFinish = (values: SignInDto) => mutate(values);
  

  return (
    <>
    <Background className="bg-[url(../lecture-hall.jpg)] bg-cover" />
      <div className={"flex justify-center h-full p-6"}>
        <div className="w-full max-w-xl h-full flex flex-col p-10">
        <EagleTitle className="w-full text-white shadow-xl" />
        <div className="mt-8 mb-1 w-full h-fit border border-gray-600 backdrop-blur bg-neutral-50/80 shadow-xl rounded-xl p-6">
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
              <Input placeholder="name@school.com" disabled={isPending} />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              validateDebounce={500}
              normalize={(value) => value.trim()}
              rules={[
                { required: true, message: "Please enter your password" },
                { min: 8, message: "Password must be at least 8 characters" },
              ]}
            >
              <Input.Password
                placeholder="Must have at least 8 characters"
                disabled={isPending}
              />
            </Form.Item>

            <div className="flex items-center justify-between mt-2">
              <Button type="primary" htmlType="submit" loading={isPending}>
                Sign In
              </Button>
              <Button
                type="link"
                onClick={() => navigate({ to: "/auth/forgot-password" })}
              >
                Forgot password?
              </Button>
            </div>
          </Form>
        </div>
      </div>
      </div>
    </>
  );
}
