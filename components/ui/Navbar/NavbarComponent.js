import Navlinks from "./Navlinks";
import LogoAndName from "./LogoAndName";
import SettingPosition from "./SettingPosition";

export default function NavbarComponent() {
  const userName = "Reboot User";

  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex flex-col h-full max-h-screen gap-2">
        <LogoAndName />

        <Navlinks />

        {/* Phần User/Settings ở cuối Sidebar */}
        <SettingPosition />
      </div>
    </div>
  );
}
