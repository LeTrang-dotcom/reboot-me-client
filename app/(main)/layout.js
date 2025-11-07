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

// Component điều hướng chính (Sidebar)
function MainNav() {
  // Chúng ta sẽ dùng mock data cho tên người dùng
  const userName = "Reboot User";

  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex flex-col h-full max-h-screen gap-2">
        {/* Logo và Tên App */}
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <LayoutGrid className="w-6 h-6" />
            <span>Reboot Me</span>
          </Link>
          <Button variant="outline" size="icon" className="w-8 h-8 ml-auto">
            <Bell className="w-4 h-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>

        {/* Danh sách các link điều hướng */}
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <Link
              href="/checkin"
              className="flex items-center gap-3 px-3 py-2 transition-all rounded-lg text-muted-foreground hover:text-primary"
            >
              <CheckCheck className="w-4 h-4" />
              Daily Check-in
            </Link>
            <Link
              href="/prep"
              className="flex items-center gap-3 px-3 py-2 transition-all rounded-lg text-muted-foreground hover:text-primary"
            >
              <MessagesSquare className="w-4 h-4" />
              Interview Prep
            </Link>
            <Link
              href="/progress"
              className="flex items-center gap-3 px-3 py-2 transition-all rounded-lg text-muted-foreground hover:text-primary"
            >
              <LayoutGrid className="w-4 h-4" />
              My Progress
            </Link>
            <Link
              href="/notes"
              className="flex items-center gap-3 px-3 py-2 transition-all rounded-lg text-muted-foreground hover:text-primary"
            >
              <StickyNote className="w-4 h-4" />
              Notes & Reflections
            </Link>
          </nav>
        </div>

        {/* Phần User/Settings ở cuối Sidebar */}
        <div className="p-4 mt-auto border-t">
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground">
            <Settings className="w-4 h-4" />
            <span>{userName}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Đây là layout chính được export
export default function MainLayout({ children }) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      {/* 1. Sidebar */}
      <MainNav />

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
