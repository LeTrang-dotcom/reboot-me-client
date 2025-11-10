"use client";

import Link from "next/link";
import {
  CheckCheck,
  LayoutGrid,
  MessagesSquare,
  StickyNote,
} from "lucide-react";

export default function Navlinks() {
  return (
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
  );
}
