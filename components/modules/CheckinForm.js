// Tạo file mới: client/components/modules/CheckinForm.js
"use client"; // Cần "use client" vì đây là component tương tác (dùng state, v.v.)

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

// Giả lập data (Nhiệm vụ 5)
const MOCK_MOODS = ["Tuyệt vời", "Tốt", "Bình thường", "Tệ"];

export function CheckinForm() {
  // Giả lập state cho ngày được chọn (sẽ lấy ngày hôm nay)
  const today = new Date().toLocaleDateString("vi-VN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Daily Check-in</CardTitle>
        <CardDescription>
          Hôm nay bạn cảm thấy thế nào? | {today}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {MOCK_MOODS.map((mood) => (
            <Button key={mood} variant="outline">
              {mood}
            </Button>
          ))}
        </div>
        <Textarea placeholder="Viết vài điều về ngày hôm nay..." />
      </CardContent>
      <CardFooter>
        <Button>Lưu Check-in</Button>
      </CardFooter>
    </Card>
  );
}
