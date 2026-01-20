import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.webp";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/staff", label: "Staff" },
  { path: "/contribution", label: "Contribution" },
  { path: "/apply", label: "Apply" },
  { path: "/contact", label: "Contact" },
];

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-14">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="FXG Logo" className="w-6 h-6 rounded-sm object-cover" />
              <span className="text-sm font-semibold text-foreground">FxG</span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-1.5 text-sm transition-colors rounded-md ${
                    location.pathname === item.path
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                to="/contact"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Log in
              </Link>
              <Link
                to="/apply"
                className="text-sm px-3 py-1.5 bg-foreground text-background rounded-md font-medium hover:bg-foreground/90 transition-colors"
              >
                Sign up
              </Link>
            </div>

            {/* Mobile Menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="md:hidden">
                <button className="p-2 -mr-2 text-foreground">
                  <Menu className="w-5 h-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-background border-border p-0">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b border-border">
                    <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
                      <img src={logo} alt="FXG Logo" className="w-6 h-6 rounded-sm object-cover" />
                      <span className="text-sm font-semibold text-foreground">FxG</span>
                    </Link>
                  </div>
                  
                  <nav className="flex flex-col p-4 gap-1">
                    {navItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setOpen(false)}
                        className={`px-3 py-2.5 text-sm transition-colors rounded-md ${
                          location.pathname === item.path
                            ? "text-foreground bg-foreground/5"
                            : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>

                  <div className="mt-auto p-4 border-t border-border flex flex-col gap-2">
                    <Link
                      to="/contact"
                      onClick={() => setOpen(false)}
                      className="text-sm text-center py-2.5 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-foreground/5"
                    >
                      Log in
                    </Link>
                    <Link
                      to="/apply"
                      onClick={() => setOpen(false)}
                      className="text-sm text-center py-2.5 bg-foreground text-background rounded-md font-medium hover:bg-foreground/90 transition-colors"
                    >
                      Sign up
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-14">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </main>

      <footer className="border-t border-border py-8">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
            <div className="flex items-center gap-2">
              <img src={logo} alt="FXG Logo" className="w-4 h-4 rounded-sm object-cover" />
              <span className="text-xs text-muted-foreground">FakePixel X Giveaways</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              © 2026 FakePixel X Giveaways
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
