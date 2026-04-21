import { c as createLucideIcon, j as jsxRuntimeExports, L as Link, B as Button, G as GraduationCap } from "./index-CPUgBiY8.js";
import { B as Badge } from "./badge-axtPznJk.js";
import { C as Clock } from "./clock-DZt1W0_r.js";
import { U as Users, B as BookOpen } from "./users-BgR1S1fV.js";
import { T as Target } from "./target-Cpc2OVhN.js";
import { C as CircleCheckBig } from "./circle-check-big-DPotu2js.js";
import { A as ArrowRight } from "./arrow-right-ghziYBFf.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode);
function CourseDetail({
  icon,
  title,
  subtitle,
  tagline,
  description,
  subjects,
  highlights,
  syllabus,
  faculty,
  duration,
  batchSize,
  level,
  examTargets
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/40 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/courses",
          "data-ocid": "course_detail.back_button",
          className: "flex items-center gap-1.5 font-display text-sm text-muted-foreground hover:text-primary transition-colors duration-200",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
            "Back to Courses"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground/50 text-sm", children: "/" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-sm text-foreground font-medium", children: title })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary py-16 lg:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row items-start lg:items-center gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-6xl lg:text-7xl leading-none", children: icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-3 bg-accent/20 text-accent border-accent/30 font-display text-xs tracking-widest uppercase px-4 py-1.5", children: subtitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-primary-foreground text-4xl lg:text-5xl mb-3", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-primary-foreground/80 text-lg max-w-2xl leading-relaxed", children: tagline })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card border-b border-border shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4", children: [
      {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-5 h-5" }),
        label: "Duration",
        value: duration
      },
      {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-5 h-5" }),
        label: "Batch Size",
        value: batchSize
      },
      {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-5 h-5" }),
        label: "Level",
        value: level
      },
      {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-5 h-5" }),
        label: "Target Exams",
        value: examTargets.join(", ")
      }
    ].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-background border border-border rounded-xl p-4 flex items-start gap-3",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary mt-0.5 flex-shrink-0", children: m.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xs text-muted-foreground uppercase tracking-wide", children: m.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-foreground text-sm mt-0.5", children: m.value })
          ] })
        ]
      },
      m.label
    )) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-16 lg:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 flex flex-col gap-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-foreground text-2xl mb-4", children: "About This Program" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground leading-relaxed text-base", children: description })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-foreground text-2xl mb-5", children: "Subjects Covered" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "flex flex-wrap gap-3",
              "data-ocid": "course_detail.subjects_list",
              children: subjects.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "font-display text-sm bg-primary/10 text-primary px-4 py-2 rounded-xl border border-primary/20 font-medium",
                  children: s
                },
                s
              ))
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-foreground text-2xl mb-6", children: "Syllabus Overview" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
              "data-ocid": "course_detail.syllabus_section",
              children: syllabus.map((unit, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  "data-ocid": `course_detail.syllabus_unit.${i + 1}`,
                  className: "bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors duration-200",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-sm mb-3 text-accent uppercase tracking-wide", children: unit.unit }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col gap-1.5", children: unit.topics.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "li",
                      {
                        className: "flex items-start gap-2 font-body text-sm text-muted-foreground",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" }),
                          t
                        ]
                      },
                      t
                    )) })
                  ]
                },
                unit.unit
              ))
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-6 shadow-md sticky top-24", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground text-lg mb-5", children: "Program Highlights" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ul",
          {
            className: "flex flex-col gap-3 mb-7",
            "data-ocid": "course_detail.highlights_list",
            children: highlights.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4 text-accent mt-0.5 flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-sm text-foreground leading-relaxed", children: h })
            ] }, h))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            "data-ocid": "course_detail.enroll_button",
            className: "w-full bg-accent text-accent-foreground hover:bg-accent/90 font-display font-semibold rounded-xl transition-smooth mb-3",
            children: [
              "Enroll in This Program",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 ml-2" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+916003549471", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outline",
            "data-ocid": "course_detail.call_button",
            className: "w-full border-primary/30 text-primary font-display font-semibold rounded-xl transition-smooth hover:bg-primary/5",
            children: "Call for Details"
          }
        ) })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/30 border-t border-border py-16 lg:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-4 bg-primary/10 text-primary border-primary/20 font-display text-xs tracking-widest uppercase px-4 py-1.5", children: "Expert Educators" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-foreground text-3xl lg:text-4xl", children: "Meet Your Faculty" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground mt-3 max-w-xl mx-auto", children: "Learn from highly qualified educators with years of experience in competitive exam coaching." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "grid grid-cols-1 sm:grid-cols-3 gap-6",
          "data-ocid": "course_detail.faculty_list",
          children: faculty.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              "data-ocid": `course_detail.faculty_card.${i + 1}`,
              className: "bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/30 hover:shadow-md transition-all duration-300",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-primary text-xl", children: f.initials }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground text-lg", children: f.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-1.5 mt-1 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "w-3.5 h-3.5 text-accent" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xs text-accent font-semibold uppercase tracking-wide", children: f.subject })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground mb-1", children: f.qualification }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xs text-muted-foreground", children: f.experience })
              ]
            },
            f.name
          ))
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-primary-foreground text-3xl lg:text-4xl mb-4", children: "Ready to Begin Your Journey?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-primary-foreground/80 mb-8 text-lg leading-relaxed", children: "Admissions are open. Secure your seat in the next batch and start building toward your dream." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            "data-ocid": "course_detail.bottom_enroll_button",
            className: "bg-accent text-accent-foreground hover:bg-accent/90 font-display font-semibold px-8 py-3 h-auto rounded-xl text-base transition-smooth shadow-lg",
            children: [
              "Enquire Now",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5 ml-2" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/courses", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outline",
            "data-ocid": "course_detail.view_all_courses_button",
            className: "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-display font-semibold px-8 py-3 h-auto rounded-xl text-base transition-smooth",
            children: "View All Courses"
          }
        ) })
      ] })
    ] }) })
  ] });
}
export {
  CourseDetail as C
};
