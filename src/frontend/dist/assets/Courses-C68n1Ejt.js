import { j as jsxRuntimeExports, L as Link, B as Button } from "./index-CPUgBiY8.js";
import { B as Badge } from "./badge-axtPznJk.js";
import { C as ChevronRight } from "./chevron-right-LyLfF4Ab.js";
import { A as ArrowRight } from "./arrow-right-ghziYBFf.js";
const courses = [
  {
    title: "NEET Preparation",
    icon: "🔬",
    slug: "/courses/neet",
    subjects: ["Physics", "Chemistry", "Biology"],
    tagline: "Crack India's toughest medical entrance",
    duration: "1–2 Years",
    level: "XI, XII & Dropper",
    color: "border-l-primary"
  },
  {
    title: "IIT-JEE Excellence",
    icon: "⚛️",
    slug: "/courses/iit-jee",
    subjects: ["Physics", "Chemistry", "Mathematics"],
    tagline: "Engineering dreams start here",
    duration: "1–2 Years",
    level: "XI, XII & Dropper",
    color: "border-l-accent"
  },
  {
    title: "CEE Foundation",
    icon: "📐",
    slug: "/courses/cee",
    subjects: ["Physics", "Chemistry", "Math/Bio"],
    tagline: "Assam CEE — targeted and strategic",
    duration: "1 Year",
    level: "XII & Dropper",
    color: "border-l-primary"
  },
  {
    title: "Board Mastery XI & XII",
    icon: "📚",
    slug: "/courses/board",
    subjects: ["Physics", "Chemistry", "Math", "Biology"],
    tagline: "Excellence in board examinations",
    duration: "1–2 Years",
    level: "XI & XII",
    color: "border-l-accent"
  }
];
function Courses() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "courses.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary py-16 lg:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-4 bg-accent/20 text-accent border-accent/30 font-display text-xs tracking-widest uppercase px-4 py-1.5", children: "All Programs" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-primary-foreground text-4xl lg:text-5xl mb-4", children: "Our Coaching Programs" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-primary-foreground/80 text-lg max-w-2xl mx-auto leading-relaxed", children: "Choose from our expert-designed programs built to maximize your exam performance and unlock your potential." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-background py-16 lg:py-20",
        "data-ocid": "courses.list",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: courses.map((course, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `bg-card border border-border border-l-4 ${course.color} rounded-2xl p-8 shadow-card hover:shadow-elevated transition-smooth`,
            "data-ocid": `courses.item.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl", children: course.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1 items-end", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-display bg-primary/8 text-primary px-3 py-1 rounded-full", children: course.duration }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-display text-muted-foreground", children: course.level })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-foreground text-2xl mb-2", children: course.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground mb-5", children: course.tagline }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-6", children: course.subjects.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-xs font-display bg-muted text-foreground px-3 py-1.5 rounded-lg border border-border",
                  children: s
                },
                s
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: course.slug,
                  "data-ocid": `courses.item.${i + 1}.learn_more_button`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "bg-primary text-primary-foreground hover:bg-primary/90 font-display font-semibold rounded-xl transition-smooth", children: [
                    "Learn More",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 ml-1" })
                  ] })
                }
              )
            ]
          },
          course.slug
        )) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/40 py-14", "data-ocid": "courses.cta.section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-foreground text-2xl lg:text-3xl mb-4", children: "Not Sure Which Program Is Right for You?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground mb-8 leading-relaxed", children: "Talk to our academic counselors for a free guidance session." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", "data-ocid": "courses.cta.contact_button", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "bg-accent text-accent-foreground hover:bg-accent/90 font-display font-semibold px-7 py-3 text-base rounded-xl shadow-card transition-smooth", children: [
        "Get Free Counseling",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 ml-2" })
      ] }) })
    ] }) })
  ] });
}
export {
  Courses as default
};
