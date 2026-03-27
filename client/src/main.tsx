import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { TooltipProvider } from "./components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner.tsx";
import { queryClient } from "./lib/queryClient";
import { ConfigProvider, type ThemeConfig } from "antd";
import { QueryClientProvider } from "@tanstack/react-query";

const router = createRouter({ routeTree });

export const AntdTheme: ThemeConfig = {
  token: {
    fontSize: 14,
    colorPrimary: "#303030",
  },
  components: {
    Input: {
      controlHeight: 36,
    },
    DatePicker: {
      controlHeight: 36,
    },
    Statistic: {
      contentFontSize: 14,
    },
    Select: {
      controlHeight: 36,
    },
    Button: {
      controlHeight: 36,
    },
    Table: {
      headerBg: "#ffffff",
      headerSplitColor: "#ffffff",
      borderColor: "oklch(0.922 0 0)",
      cellPaddingBlock: 6,
      cellPaddingBlockSM: 6,
      cellPaddingBlockMD: 6,
      rowHoverBg: "#f5f5f5",
    },
    Segmented: {
      trackBg: "#F0F0F0",
      controlHeight: 40,
      controlPaddingHorizontal: 16,
      itemSelectedBg: "#FFFFFF",
      borderRadius: 8,
    },
    Progress: {
      defaultColor: "#14438e",
      colorSuccess: "#1a7a4a",
    },
  },
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider theme={AntdTheme}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <RouterProvider router={router} />
        </TooltipProvider>

        <Toaster position="top-right" />
      </QueryClientProvider>
    </ConfigProvider>
  </StrictMode>,
);
