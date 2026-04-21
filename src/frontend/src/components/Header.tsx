import { Button } from "@/components/ui/button";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, GraduationCap, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Courses",
    href: "/courses",
    children: [
      { label: "NEET Preparation", href: "/courses/neet" },
      { label: "IIT-JEE Excellence", href: "/courses/iit-jee" },
      { label: "CEE Foundation", href: "/courses/cee" },
      { label: "Board Mastery XI & XII", href: "/courses/board" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;
  const prevPathRef = useRef(pathname);

  // Close menus when route changes
  if (prevPathRef.current !== pathname) {
    prevPathRef.current = pathname;
    setMobileOpen(false);
    setCoursesOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-card transition-smooth ${scrolled ? "shadow-elevated border-b border-border" : "shadow-subtle border-b border-border/60"}`}
      data-ocid="header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            data-ocid="header.logo_link"
          >
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary rounded-xl flex items-center justify-center shadow-card group-hover:shadow-elevated transition-smooth">
              <GraduationCap className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="leading-tight">
              <div className="font-display font-bold text-primary text-sm lg:text-base tracking-wide uppercase leading-none">
                Bright Future
              </div>
              <div className="font-body text-xs text-muted-foreground tracking-widest uppercase">
                Coaching Centre
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-1"
            data-ocid="header.nav"
          >
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative">
                  <button
                    type="button"
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg font-display font-medium text-sm transition-smooth ${
                      isActive(link.href)
                        ? "text-primary bg-primary/8"
                        : "text-foreground hover:text-primary hover:bg-primary/5"
                    }`}
                    data-ocid="header.courses_dropdown"
                    onMouseEnter={() => setCoursesOpen(true)}
                    onMouseLeave={() => setCoursesOpen(false)}
                  >
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  <div
                    className={`absolute top-full left-0 mt-1 w-56 bg-card border border-border rounded-xl shadow-elevated py-2 transition-smooth origin-top ${
                      coursesOpen
                        ? "opacity-100 scale-100 pointer-events-auto"
                        : "opacity-0 scale-95 pointer-events-none"
                    }`}
                    onMouseEnter={() => setCoursesOpen(true)}
                    onMouseLeave={() => setCoursesOpen(false)}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block px-4 py-2.5 text-sm font-body text-foreground hover:text-primary hover:bg-primary/5 transition-smooth"
                        data-ocid={`header.courses_dropdown.${child.label.toLowerCase().replace(/\s+/g, "_")}`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-2 rounded-lg font-display font-medium text-sm transition-smooth ${
                    isActive(link.href)
                      ? "text-primary bg-primary/8"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                  data-ocid={`header.nav.${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden lg:block"
              data-ocid="header.enroll_button"
            >
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-display font-semibold text-sm px-5 rounded-lg shadow-card hover:shadow-elevated transition-smooth">
                Enroll Now
              </Button>
            </Link>
            <button
              type="button"
              className="lg:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-smooth"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              data-ocid="header.mobile_menu_toggle"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="lg:hidden bg-card border-t border-border shadow-elevated"
          data-ocid="header.mobile_menu"
        >
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  to={link.href}
                  className={`block px-4 py-3 rounded-lg font-display font-medium text-sm transition-smooth ${
                    isActive(link.href)
                      ? "text-primary bg-primary/8"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                  data-ocid={`header.mobile_menu.${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="ml-4 mt-1 flex flex-col gap-0.5">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block px-4 py-2.5 rounded-lg text-sm font-body text-muted-foreground hover:text-primary hover:bg-primary/5 transition-smooth"
                        data-ocid={`header.mobile_menu.${child.label.toLowerCase().replace(/\s+/g, "_")}`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="mt-2"
              data-ocid="header.mobile_menu.enroll_button"
            >
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-display font-semibold">
                Enroll Now
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
