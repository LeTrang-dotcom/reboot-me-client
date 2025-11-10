import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import { LayoutGrid } from "lucide-react";

export default function LogoAndName() {
  return (
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
  );
}
