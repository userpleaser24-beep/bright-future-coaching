import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

const courseOptions = [
  "NEET Preparation",
  "IIT-JEE Excellence",
  "CEE Foundation",
  "Board Mastery XI & XII",
  "Not sure yet",
];

interface FormState {
  name: string;
  phone: string;
  email: string;
  course: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    course: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = (): boolean => {
    const errs: Partial<FormState> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.phone.trim()) errs.phone = "Phone number is required";
    else if (!/^[6-9]\d{9}$/.test(form.phone.trim()))
      errs.phone = "Enter a valid 10-digit Indian mobile number";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Enter a valid email";
    if (!form.course) errs.course = "Please select a course";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // In a real backend integration this would call actor.submitEnquiry(form)
    setSubmitted(true);
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <div data-ocid="contact.page">
      {/* Hero */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-accent/20 text-accent border-accent/30 font-display text-xs tracking-widest uppercase px-4 py-1.5">
            Contact Us
          </Badge>
          <h1 className="font-display font-bold text-primary-foreground text-4xl lg:text-5xl mb-4">
            Get in Touch
          </h1>
          <p className="font-body text-primary-foreground/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Have questions about admissions or courses? We're here to help you
            choose the right path.
          </p>
        </div>
      </section>

      {/* Content */}
      <section
        className="bg-background py-16 lg:py-20"
        data-ocid="contact.main.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div>
                <h2 className="font-display font-bold text-foreground text-2xl mb-6">
                  Contact Information
                </h2>
                <div className="flex flex-col gap-5">
                  <a
                    href="tel:+916003549471"
                    className="flex items-start gap-4 group"
                    data-ocid="contact.phone_1"
                  >
                    <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-foreground text-sm">
                        Phone (Primary)
                      </div>
                      <div className="font-body text-muted-foreground group-hover:text-primary transition-smooth">
                        +91 6003 549 471
                      </div>
                    </div>
                  </a>
                  <a
                    href="tel:+916001841612"
                    className="flex items-start gap-4 group"
                    data-ocid="contact.phone_2"
                  >
                    <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-foreground text-sm">
                        Phone (Alternate)
                      </div>
                      <div className="font-body text-muted-foreground group-hover:text-primary transition-smooth">
                        +91 6001 841 612
                      </div>
                    </div>
                  </a>
                  <a
                    href="mailto:dasdebojit3067@gmail.com"
                    className="flex items-start gap-4 group"
                    data-ocid="contact.email"
                  >
                    <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-foreground text-sm">
                        Email
                      </div>
                      <div className="font-body text-muted-foreground group-hover:text-primary transition-smooth text-sm break-all">
                        dasdebojit3067@gmail.com
                      </div>
                    </div>
                  </a>
                  <div
                    className="flex items-start gap-4"
                    data-ocid="contact.address"
                  >
                    <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-foreground text-sm">
                        Address
                      </div>
                      <address className="not-italic font-body text-muted-foreground text-sm leading-relaxed">
                        Kalibari Road, Near Satsang Bihar
                        <br />
                        Sonai, PIN-788119
                        <br />
                        Assam, India
                      </address>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-foreground text-sm">
                        Office Hours
                      </div>
                      <div className="font-body text-muted-foreground text-sm">
                        Mon–Sat: 8:00 AM – 7:00 PM
                      </div>
                      <div className="font-body text-muted-foreground text-sm">
                        Sunday: 9:00 AM – 1:00 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-card">
                <div className="h-48 bg-muted/60 flex flex-col items-center justify-center gap-2">
                  <MapPin className="w-8 h-8 text-primary" />
                  <span className="font-display text-sm text-muted-foreground">
                    Sonai, Assam
                  </span>
                  <a
                    href="https://maps.google.com/?q=Kalibari+Road+Sonai+Assam+788119"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-display text-primary hover:underline"
                    data-ocid="contact.directions_link"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>

            {/* Enquiry Form */}
            <div className="lg:col-span-3">
              <div className="bg-card border border-border rounded-2xl p-8 shadow-card">
                {submitted ? (
                  <div
                    className="flex flex-col items-center justify-center py-12 text-center"
                    data-ocid="contact.form.success_state"
                  >
                    <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-5">
                      <CheckCircle className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="font-display font-bold text-foreground text-2xl mb-3">
                      Enquiry Sent!
                    </h3>
                    <p className="font-body text-muted-foreground leading-relaxed max-w-sm">
                      Thank you for reaching out. Our team will contact you
                      within 24 hours to guide you on the next steps.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    data-ocid="contact.form"
                  >
                    <h2 className="font-display font-bold text-foreground text-2xl mb-7">
                      Send an Enquiry
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                      <div className="flex flex-col gap-2">
                        <Label
                          htmlFor="name"
                          className="font-display text-sm font-semibold"
                        >
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          value={form.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          placeholder="Your full name"
                          className={errors.name ? "border-destructive" : ""}
                          data-ocid="contact.form.name_input"
                        />
                        {errors.name && (
                          <span
                            className="text-xs text-destructive font-body"
                            data-ocid="contact.form.name_field_error"
                          >
                            {errors.name}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col gap-2">
                        <Label
                          htmlFor="phone"
                          className="font-display text-sm font-semibold"
                        >
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={form.phone}
                          onChange={(e) =>
                            handleChange("phone", e.target.value)
                          }
                          placeholder="10-digit mobile number"
                          className={errors.phone ? "border-destructive" : ""}
                          data-ocid="contact.form.phone_input"
                        />
                        {errors.phone && (
                          <span
                            className="text-xs text-destructive font-body"
                            data-ocid="contact.form.phone_field_error"
                          >
                            {errors.phone}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                      <div className="flex flex-col gap-2">
                        <Label
                          htmlFor="email"
                          className="font-display text-sm font-semibold"
                        >
                          Email (Optional)
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={form.email}
                          onChange={(e) =>
                            handleChange("email", e.target.value)
                          }
                          placeholder="your@email.com"
                          className={errors.email ? "border-destructive" : ""}
                          data-ocid="contact.form.email_input"
                        />
                        {errors.email && (
                          <span
                            className="text-xs text-destructive font-body"
                            data-ocid="contact.form.email_field_error"
                          >
                            {errors.email}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col gap-2">
                        <Label
                          htmlFor="course"
                          className="font-display text-sm font-semibold"
                        >
                          Interested Course *
                        </Label>
                        <select
                          id="course"
                          value={form.course}
                          onChange={(e) =>
                            handleChange("course", e.target.value)
                          }
                          className={`h-10 rounded-lg border px-3 py-2 text-sm bg-background font-body focus:outline-none focus:ring-2 focus:ring-ring ${errors.course ? "border-destructive" : "border-input"}`}
                          data-ocid="contact.form.course_select"
                        >
                          <option value="">Select a course...</option>
                          {courseOptions.map((c) => (
                            <option key={c} value={c}>
                              {c}
                            </option>
                          ))}
                        </select>
                        {errors.course && (
                          <span
                            className="text-xs text-destructive font-body"
                            data-ocid="contact.form.course_field_error"
                          >
                            {errors.course}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 mb-7">
                      <Label
                        htmlFor="message"
                        className="font-display text-sm font-semibold"
                      >
                        Message (Optional)
                      </Label>
                      <Textarea
                        id="message"
                        value={form.message}
                        onChange={(e) =>
                          handleChange("message", e.target.value)
                        }
                        placeholder="Tell us about your preparation goals or any questions you have..."
                        rows={4}
                        data-ocid="contact.form.message_textarea"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-display font-semibold py-3 text-base rounded-xl shadow-card hover:shadow-elevated transition-smooth"
                      data-ocid="contact.form.submit_button"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Enquiry
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
