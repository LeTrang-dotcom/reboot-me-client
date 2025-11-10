import NavbarComponent from "@/components/ui/Navbar/NavbarComponent";

export default function DefaultLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarComponent />
      <main className="flex-1">{children}</main>
    </div>
  );
}
