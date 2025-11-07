// Tạo file mới: client/components/modules/FlashcardViewer.js
"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Giả lập data (Nhiệm vụ 5)
const MOCK_FLASHCARD = {
  question: "Sự khác biệt giữa `==` và `===` trong JavaScript là gì?",
  answer:
    "`==` (Loose Equality) so sánh giá trị sau khi đã chuyển đổi kiểu dữ liệu. `===` (Strict Equality) so sánh cả giá trị và kiểu dữ liệu mà không chuyển đổi.",
};

export function FlashcardViewer() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Interview Prep</CardTitle>
        <CardDescription>Ôn tập câu hỏi phỏng vấn.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Card className="min-h-[150px] flex items-center justify-center p-6">
          <p className="text-lg font-semibold">{MOCK_FLASHCARD.question}</p>
        </Card>
        {/* Chúng ta có thể dùng state để ẩn/hiện câu trả lời sau */}
        <Card className="min-h-[100px] p-6 bg-muted">
          <p>{MOCK_FLASHCARD.answer}</p>
        </Card>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Câu trước</Button>
        <Button variant="outline">Câu sau</Button>
      </CardFooter>
    </Card>
  );
}
