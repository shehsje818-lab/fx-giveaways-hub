import { Link, useLocation } from "react-router-dom";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/staff", label: "Staff" },
  { path: "/contribution", label: "Contribution" },
  { path: "/apply", label: "Apply on FXG Staff Team" },
  { path: "/contact", label: "Contact" },
];

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="text-lg font-semibold text-foreground">
              FakePixel X Giveaways
            </div>
          </div>
          <nav className="flex gap-1 pb-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-sm ${
                  location.pathname === item.path
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-6">{children}</main>
      <footer className="border-t border-border bg-card py-4 text-center text-sm text-muted-foreground">
        © 2026 FakePixel X Giveaways. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
