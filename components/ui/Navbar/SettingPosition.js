import { Settings } from "lucide-react";

export default function SettingPosition() {
  const userName = "Reboot User";

  return (
    <div className="p-4 mt-auto border-t">
      <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground">
        <Settings className="w-4 h-4" />
        <span>{userName}</span>
      </div>
    </div>
  );
}
