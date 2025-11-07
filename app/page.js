// Sửa file: client/app/page.js
import { redirect } from "next/navigation";

export default function Home() {
  // Tự động chuyển đến trang /checkin khi người dùng truy cập trang chủ
  redirect("/checkin");
}
