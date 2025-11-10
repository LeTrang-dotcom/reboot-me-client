import Link from "next/link";
import {
  Bell,
  CheckCheck,
  LayoutGrid,
  MessagesSquare,
  StickyNote,
  Settings, // Thêm icon Settings
} from "lucide-react";

import { Button } from "@/components/ui/button";
import DefaultLayout from "../layouts/DefaultLayout";

// Đây là layout chính được export
export default function MainLayout({ children }) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      {/* 1. Sidebar */}
      <DefaultLayout />
      {/* 2. Main Content Area */}
      <div className="flex flex-col">
        {/* Chúng ta có thể thêm Header cho mobile ở đây sau */}
        {/* <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 md:hidden">
          ... Header cho mobile ...
        </header> */}

        {/* Đây là nơi các trang (page.js) của bạn sẽ được hiển thị */}
        <main className="flex-1 p-4 md:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
