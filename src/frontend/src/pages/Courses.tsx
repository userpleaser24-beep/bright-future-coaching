import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight } from "lucide-react";

const courses = [
  {
    title: "NEET Preparation",
    icon: "🔬",
    slug: "/courses/neet",
    subjects: ["Physics", "Chemistry", "Biology"],
    tagline: "Crack India's toughest medical entrance",
    duration: "1–2 Years",
    level: "XI, XII & Dropper",
    color: "border-l-primary",
  },
  {
    title: "IIT-JEE Excellence",
    icon: "⚛️",
    slug: "/courses/iit-jee",
    subjects: ["Physics", "Chemistry", "Mathematics"],
    tagline: "Engineering dreams start here",
    duration: "1–2 Years",
    level: "XI, XII & Dropper",
    color: "border-l-accent",
  },
  {
    title: "CEE Foundation",
    icon: "📐",
    slug: "/courses/cee",
    subjects: ["Physics", "Chemistry", "Math/Bio"],
    tagline: "Assam CEE — targeted and strategic",
    duration: "1 Year",
    level: "XII & Dropper",
    color: "border-l-primary",
  },
  {
    title: "Board Mastery XI & XII",
    icon: "📚",
    slug: "/courses/board",
    subjects: ["Physics", "Chemistry", "Math", "Biology"],
    tagline: "Excellence in board examinations",
    duration: "1–2 Years",
    level: "XI & XII",
    color: "border-l-accent",
  },
];

export default function Courses() {
  return (
    <div data-ocid="courses.page">
      {/* Page Header */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-accent/20 text-accent border-accent/30 font-display text-xs tracking-widest uppercase px-4 py-1.5">
            All Programs
          </Badge>
          <h1 className="font-display font-bold text-primary-foreground text-4xl lg:text-5xl mb-4">
            Our Coaching Programs
          </h1>
          <p className="font-body text-primary-foreground/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Choose from our expert-designed programs built to maximize your exam
            performance and unlock your potential.
          </p>
        </div>
      </section>

      {/* Course Grid */}
      <section
        className="bg-background py-16 lg:py-20"
        data-ocid="courses.list"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course, i) => (
              <div
                key={course.slug}
                className={`bg-card border border-border border-l-4 ${course.color} rounded-2xl p-8 shadow-card hover:shadow-elevated transition-smooth`}
                data-ocid={`courses.item.${i + 1}`}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="text-5xl">{course.icon}</div>
                  <div className="flex flex-col gap-1 items-end">
                    <span className="text-xs font-display bg-primary/8 text-primary px-3 py-1 rounded-full">
                      {course.duration}
                    </span>
                    <span className="text-xs font-display text-muted-foreground">
                      {course.level}
                    </span>
                  </div>
                </div>
                <h2 className="font-display font-bold text-foreground text-2xl mb-2">
                  {course.title}
                </h2>
                <p className="font-body text-muted-foreground mb-5">
                  {course.tagline}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {course.subjects.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-display bg-muted text-foreground px-3 py-1.5 rounded-lg border border-border"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <Link
                  to={course.slug}
                  data-ocid={`courses.item.${i + 1}.learn_more_button`}
                >
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-display font-semibold rounded-xl transition-smooth">
                    Learn More
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/40 py-14" data-ocid="courses.cta.section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-foreground text-2xl lg:text-3xl mb-4">
            Not Sure Which Program Is Right for You?
          </h2>
          <p className="font-body text-muted-foreground mb-8 leading-relaxed">
            Talk to our academic counselors for a free guidance session.
          </p>
          <Link to="/contact" data-ocid="courses.cta.contact_button">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-display font-semibold px-7 py-3 text-base rounded-xl shadow-card transition-smooth">
              Get Free Counseling
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
