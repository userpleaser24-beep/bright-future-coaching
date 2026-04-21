import { Link } from "@tanstack/react-router";
import { GraduationCap, Mail, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const courseLinks = [
  { label: "NEET Preparation", href: "/courses/neet" },
  { label: "IIT-JEE Excellence", href: "/courses/iit-jee" },
  { label: "CEE Foundation", href: "/courses/cee" },
  { label: "Board Mastery XI & XII", href: "/courses/board" },
];

const year = new Date().getFullYear();
const hostname =
  typeof window !== "undefined"
    ? encodeURIComponent(window.location.hostname)
    : "";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground" data-ocid="footer">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="flex items-center gap-3 mb-5"
              data-ocid="footer.logo_link"
            >
              <div className="w-11 h-11 bg-accent rounded-xl flex items-center justify-center shadow-card">
                <GraduationCap className="w-6 h-6 text-accent-foreground" />
              </div>
              <div className="leading-tight">
                <div className="font-display font-bold text-primary-foreground text-sm tracking-wide uppercase">
                  Bright Future
                </div>
                <div className="text-xs text-primary-foreground/70 tracking-widest uppercase">
                  Coaching Centre
                </div>
              </div>
            </Link>
            <p className="font-body text-sm text-primary-foreground/80 leading-relaxed mb-5">
              Igniting student potential through expert guidance, focused
              curriculum, and personalized mentorship for competitive and board
              examinations.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+916003549471"
                className="flex items-center gap-2.5 text-sm text-primary-foreground/80 hover:text-accent transition-smooth"
                data-ocid="footer.phone_1"
              >
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                +91 6003 549 471
              </a>
              <a
                href="tel:+916001841612"
                className="flex items-center gap-2.5 text-sm text-primary-foreground/80 hover:text-accent transition-smooth"
                data-ocid="footer.phone_2"
              >
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                +91 6001 841 612
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-accent text-sm tracking-widest uppercase mb-5">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-body text-sm text-primary-foreground/80 hover:text-accent transition-smooth hover:translate-x-1 inline-block"
                    data-ocid={`footer.quick_link.${link.label.toLowerCase().replace(/\s+/g, "_")}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-display font-bold text-accent text-sm tracking-widest uppercase mb-5">
              Our Courses
            </h3>
            <ul className="flex flex-col gap-3">
              {courseLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-body text-sm text-primary-foreground/80 hover:text-accent transition-smooth hover:translate-x-1 inline-block"
                    data-ocid={`footer.course_link.${link.label.toLowerCase().replace(/\s+/g, "_")}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-bold text-accent text-sm tracking-widest uppercase mb-5">
              Contact Info
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <address className="not-italic font-body text-sm text-primary-foreground/80 leading-relaxed">
                  Kalibari Road, Near Satsang Bihar,
                  <br />
                  Sonai, PIN-788119,
                  <br />
                  Assam, India
                </address>
              </div>
              <a
                href="mailto:dasdebojit3067@gmail.com"
                className="flex items-center gap-2.5 text-sm text-primary-foreground/80 hover:text-accent transition-smooth"
                data-ocid="footer.email"
              >
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                dasdebojit3067@gmail.com
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-accent text-accent-foreground font-display font-semibold text-sm hover:bg-accent/90 transition-smooth shadow-card mt-1"
                data-ocid="footer.enquire_button"
              >
                Enquire Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-primary-foreground/60 text-center sm:text-left">
            © {year} Bright Future Coaching Centre. All rights reserved.
          </p>
          <p className="font-body text-xs text-primary-foreground/50 text-center sm:text-right">
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
