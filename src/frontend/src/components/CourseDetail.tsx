import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle,
  Clock,
  GraduationCap,
  Target,
  Users,
} from "lucide-react";

interface FacultyMember {
  name: string;
  qualification: string;
  subject: string;
  experience: string;
  initials: string;
}

interface CourseDetailProps {
  icon: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  subjects: string[];
  highlights: string[];
  syllabus: { unit: string; topics: string[] }[];
  faculty: FacultyMember[];
  duration: string;
  batchSize: string;
  level: string;
  examTargets: string[];
  accentClass?: string;
}

export type { CourseDetailProps, FacultyMember };

export default function CourseDetail({
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
  examTargets,
}: CourseDetailProps) {
  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-muted/40 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2">
          <Link
            to="/courses"
            data-ocid="course_detail.back_button"
            className="flex items-center gap-1.5 font-display text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Courses
          </Link>
          <span className="text-muted-foreground/50 text-sm">/</span>
          <span className="font-display text-sm text-foreground font-medium">
            {title}
          </span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
            <div className="text-6xl lg:text-7xl leading-none">{icon}</div>
            <div>
              <Badge className="mb-3 bg-accent/20 text-accent border-accent/30 font-display text-xs tracking-widest uppercase px-4 py-1.5">
                {subtitle}
              </Badge>
              <h1 className="font-display font-bold text-primary-foreground text-4xl lg:text-5xl mb-3">
                {title}
              </h1>
              <p className="font-body text-primary-foreground/80 text-lg max-w-2xl leading-relaxed">
                {tagline}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meta Cards */}
      <section className="bg-card border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              {
                icon: <Clock className="w-5 h-5" />,
                label: "Duration",
                value: duration,
              },
              {
                icon: <Users className="w-5 h-5" />,
                label: "Batch Size",
                value: batchSize,
              },
              {
                icon: <BookOpen className="w-5 h-5" />,
                label: "Level",
                value: level,
              },
              {
                icon: <Target className="w-5 h-5" />,
                label: "Target Exams",
                value: examTargets.join(", "),
              },
            ].map((m) => (
              <div
                key={m.label}
                className="bg-background border border-border rounded-xl p-4 flex items-start gap-3"
              >
                <div className="text-primary mt-0.5 flex-shrink-0">
                  {m.icon}
                </div>
                <div>
                  <div className="font-display text-xs text-muted-foreground uppercase tracking-wide">
                    {m.label}
                  </div>
                  <div className="font-display font-bold text-foreground text-sm mt-0.5">
                    {m.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-background py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left: Description + Subjects + Syllabus */}
            <div className="lg:col-span-2 flex flex-col gap-12">
              <div>
                <h2 className="font-display font-bold text-foreground text-2xl mb-4">
                  About This Program
                </h2>
                <p className="font-body text-muted-foreground leading-relaxed text-base">
                  {description}
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-foreground text-2xl mb-5">
                  Subjects Covered
                </h2>
                <div
                  className="flex flex-wrap gap-3"
                  data-ocid="course_detail.subjects_list"
                >
                  {subjects.map((s) => (
                    <span
                      key={s}
                      className="font-display text-sm bg-primary/10 text-primary px-4 py-2 rounded-xl border border-primary/20 font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-display font-bold text-foreground text-2xl mb-6">
                  Syllabus Overview
                </h2>
                <div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  data-ocid="course_detail.syllabus_section"
                >
                  {syllabus.map((unit, i) => (
                    <div
                      key={unit.unit}
                      data-ocid={`course_detail.syllabus_unit.${i + 1}`}
                      className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors duration-200"
                    >
                      <h3 className="font-display font-bold text-sm mb-3 text-accent uppercase tracking-wide">
                        {unit.unit}
                      </h3>
                      <ul className="flex flex-col gap-1.5">
                        {unit.topics.map((t) => (
                          <li
                            key={t}
                            className="flex items-start gap-2 font-body text-sm text-muted-foreground"
                          >
                            <CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Highlights + CTA */}
            <div className="flex flex-col gap-6">
              <div className="bg-card border border-border rounded-2xl p-6 shadow-md sticky top-24">
                <h3 className="font-display font-bold text-foreground text-lg mb-5">
                  Program Highlights
                </h3>
                <ul
                  className="flex flex-col gap-3 mb-7"
                  data-ocid="course_detail.highlights_list"
                >
                  {highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="font-body text-sm text-foreground leading-relaxed">
                        {h}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button
                    data-ocid="course_detail.enroll_button"
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-display font-semibold rounded-xl transition-smooth mb-3"
                  >
                    Enroll in This Program
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <a href="tel:+916003549471">
                  <Button
                    variant="outline"
                    data-ocid="course_detail.call_button"
                    className="w-full border-primary/30 text-primary font-display font-semibold rounded-xl transition-smooth hover:bg-primary/5"
                  >
                    Call for Details
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="bg-muted/30 border-t border-border py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 font-display text-xs tracking-widest uppercase px-4 py-1.5">
              Expert Educators
            </Badge>
            <h2 className="font-display font-bold text-foreground text-3xl lg:text-4xl">
              Meet Your Faculty
            </h2>
            <p className="font-body text-muted-foreground mt-3 max-w-xl mx-auto">
              Learn from highly qualified educators with years of experience in
              competitive exam coaching.
            </p>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            data-ocid="course_detail.faculty_list"
          >
            {faculty.map((f, i) => (
              <div
                key={f.name}
                data-ocid={`course_detail.faculty_card.${i + 1}`}
                className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="font-display font-bold text-primary text-xl">
                    {f.initials}
                  </span>
                </div>
                <h3 className="font-display font-bold text-foreground text-lg">
                  {f.name}
                </h3>
                <div className="flex items-center justify-center gap-1.5 mt-1 mb-3">
                  <GraduationCap className="w-3.5 h-3.5 text-accent" />
                  <span className="font-display text-xs text-accent font-semibold uppercase tracking-wide">
                    {f.subject}
                  </span>
                </div>
                <p className="font-body text-sm text-muted-foreground mb-1">
                  {f.qualification}
                </p>
                <p className="font-display text-xs text-muted-foreground">
                  {f.experience}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-primary py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-primary-foreground text-3xl lg:text-4xl mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="font-body text-primary-foreground/80 mb-8 text-lg leading-relaxed">
            Admissions are open. Secure your seat in the next batch and start
            building toward your dream.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                data-ocid="course_detail.bottom_enroll_button"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-display font-semibold px-8 py-3 h-auto rounded-xl text-base transition-smooth shadow-lg"
              >
                Enquire Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/courses">
              <Button
                variant="outline"
                data-ocid="course_detail.view_all_courses_button"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-display font-semibold px-8 py-3 h-auto rounded-xl text-base transition-smooth"
              >
                View All Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
