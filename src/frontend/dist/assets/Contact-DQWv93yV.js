import { c as createLucideIcon, j as jsxRuntimeExports, a as cn, r as reactExports, b as createSlot, P as Phone, M as Mail, d as MapPin, B as Button } from "./index-CPUgBiY8.js";
import { B as Badge } from "./badge-axtPznJk.js";
import { C as Clock } from "./clock-DZt1W0_r.js";
import { C as CircleCheckBig } from "./circle-check-big-DPotu2js.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode);
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}
var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Slot = createSlot(`Primitive.${node}`);
  const Node = reactExports.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});
var NAME = "Label";
var Label$1 = reactExports.forwardRef((props, forwardedRef) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.label,
    {
      ...props,
      ref: forwardedRef,
      onMouseDown: (event) => {
        var _a;
        const target = event.target;
        if (target.closest("button, input, select, textarea")) return;
        (_a = props.onMouseDown) == null ? void 0 : _a.call(props, event);
        if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
      }
    }
  );
});
Label$1.displayName = NAME;
var Root = Label$1;
function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ...props
    }
  );
}
const courseOptions = [
  "NEET Preparation",
  "IIT-JEE Excellence",
  "CEE Foundation",
  "Board Mastery XI & XII",
  "Not sure yet"
];
function Contact() {
  const [form, setForm] = reactExports.useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    message: ""
  });
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [errors, setErrors] = reactExports.useState({});
  const validate = () => {
    const errs = {};
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
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };
  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: void 0 }));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "contact.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary py-16 lg:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-4 bg-accent/20 text-accent border-accent/30 font-display text-xs tracking-widest uppercase px-4 py-1.5", children: "Contact Us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-primary-foreground text-4xl lg:text-5xl mb-4", children: "Get in Touch" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-primary-foreground/80 text-lg max-w-2xl mx-auto leading-relaxed", children: "Have questions about admissions or courses? We're here to help you choose the right path." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-background py-16 lg:py-20",
        "data-ocid": "contact.main.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 flex flex-col gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-foreground text-2xl mb-6", children: "Contact Information" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "tel:+916003549471",
                    className: "flex items-start gap-4 group",
                    "data-ocid": "contact.phone_1",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-5 h-5" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-foreground text-sm", children: "Phone (Primary)" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-body text-muted-foreground group-hover:text-primary transition-smooth", children: "+91 6003 549 471" })
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "tel:+916001841612",
                    className: "flex items-start gap-4 group",
                    "data-ocid": "contact.phone_2",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-5 h-5" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-foreground text-sm", children: "Phone (Alternate)" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-body text-muted-foreground group-hover:text-primary transition-smooth", children: "+91 6001 841 612" })
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "mailto:dasdebojit3067@gmail.com",
                    className: "flex items-start gap-4 group",
                    "data-ocid": "contact.email",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-5 h-5" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-foreground text-sm", children: "Email" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-body text-muted-foreground group-hover:text-primary transition-smooth text-sm break-all", children: "dasdebojit3067@gmail.com" })
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-start gap-4",
                    "data-ocid": "contact.address",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-5 h-5" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-foreground text-sm", children: "Address" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("address", { className: "not-italic font-body text-muted-foreground text-sm leading-relaxed", children: [
                          "Kalibari Road, Near Satsang Bihar",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                          "Sonai, PIN-788119",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                          "Assam, India"
                        ] })
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-5 h-5" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-foreground text-sm", children: "Office Hours" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-body text-muted-foreground text-sm", children: "Mon–Sat: 8:00 AM – 7:00 PM" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-body text-muted-foreground text-sm", children: "Sunday: 9:00 AM – 1:00 PM" })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border rounded-2xl overflow-hidden shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-48 bg-muted/60 flex flex-col items-center justify-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-8 h-8 text-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-sm text-muted-foreground", children: "Sonai, Assam" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "https://maps.google.com/?q=Kalibari+Road+Sonai+Assam+788119",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-xs font-display text-primary hover:underline",
                  "data-ocid": "contact.directions_link",
                  children: "Get Directions →"
                }
              )
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border rounded-2xl p-8 shadow-card", children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex flex-col items-center justify-center py-12 text-center",
              "data-ocid": "contact.form.success_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-8 h-8 text-accent" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground text-2xl mb-3", children: "Enquiry Sent!" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground leading-relaxed max-w-sm", children: "Thank you for reaching out. Our team will contact you within 24 hours to guide you on the next steps." })
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "form",
            {
              onSubmit: handleSubmit,
              noValidate: true,
              "data-ocid": "contact.form",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-foreground text-2xl mb-7", children: "Send an Enquiry" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Label,
                      {
                        htmlFor: "name",
                        className: "font-display text-sm font-semibold",
                        children: "Full Name *"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "name",
                        value: form.name,
                        onChange: (e) => handleChange("name", e.target.value),
                        placeholder: "Your full name",
                        className: errors.name ? "border-destructive" : "",
                        "data-ocid": "contact.form.name_input"
                      }
                    ),
                    errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "text-xs text-destructive font-body",
                        "data-ocid": "contact.form.name_field_error",
                        children: errors.name
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Label,
                      {
                        htmlFor: "phone",
                        className: "font-display text-sm font-semibold",
                        children: "Phone Number *"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "phone",
                        type: "tel",
                        value: form.phone,
                        onChange: (e) => handleChange("phone", e.target.value),
                        placeholder: "10-digit mobile number",
                        className: errors.phone ? "border-destructive" : "",
                        "data-ocid": "contact.form.phone_input"
                      }
                    ),
                    errors.phone && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "text-xs text-destructive font-body",
                        "data-ocid": "contact.form.phone_field_error",
                        children: errors.phone
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Label,
                      {
                        htmlFor: "email",
                        className: "font-display text-sm font-semibold",
                        children: "Email (Optional)"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "email",
                        type: "email",
                        value: form.email,
                        onChange: (e) => handleChange("email", e.target.value),
                        placeholder: "your@email.com",
                        className: errors.email ? "border-destructive" : "",
                        "data-ocid": "contact.form.email_input"
                      }
                    ),
                    errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "text-xs text-destructive font-body",
                        "data-ocid": "contact.form.email_field_error",
                        children: errors.email
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Label,
                      {
                        htmlFor: "course",
                        className: "font-display text-sm font-semibold",
                        children: "Interested Course *"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "select",
                      {
                        id: "course",
                        value: form.course,
                        onChange: (e) => handleChange("course", e.target.value),
                        className: `h-10 rounded-lg border px-3 py-2 text-sm bg-background font-body focus:outline-none focus:ring-2 focus:ring-ring ${errors.course ? "border-destructive" : "border-input"}`,
                        "data-ocid": "contact.form.course_select",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select a course..." }),
                          courseOptions.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c, children: c }, c))
                        ]
                      }
                    ),
                    errors.course && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "text-xs text-destructive font-body",
                        "data-ocid": "contact.form.course_field_error",
                        children: errors.course
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 mb-7", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Label,
                    {
                      htmlFor: "message",
                      className: "font-display text-sm font-semibold",
                      children: "Message (Optional)"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Textarea,
                    {
                      id: "message",
                      value: form.message,
                      onChange: (e) => handleChange("message", e.target.value),
                      placeholder: "Tell us about your preparation goals or any questions you have...",
                      rows: 4,
                      "data-ocid": "contact.form.message_textarea"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    type: "submit",
                    className: "w-full bg-accent text-accent-foreground hover:bg-accent/90 font-display font-semibold py-3 text-base rounded-xl shadow-card hover:shadow-elevated transition-smooth",
                    "data-ocid": "contact.form.submit_button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4 mr-2" }),
                      "Send Enquiry"
                    ]
                  }
                )
              ]
            }
          ) }) })
        ] }) })
      }
    )
  ] });
}
export {
  Contact as default
};
