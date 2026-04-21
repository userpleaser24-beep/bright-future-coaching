import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle,
  ChevronRight,
  Phone,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";

const courses = [
  {
    title: "NEET Preparation",
    icon: "🔬",
    slug: "/courses/neet",
    color: "bg-blue-50 border-blue-200",
    subjects: ["Physics", "Chemistry", "Biology"],
    tagline: "Crack India's toughest medical entrance",
  },
  {
    title: "IIT-JEE Excellence",
    icon: "⚛️",
    slug: "/courses/iit-jee",
    color: "bg-amber-50 border-amber-200",
    subjects: ["Physics", "Chemistry", "Mathematics"],
    tagline: "Engineering dreams start here",
  },
  {
    title: "CEE Foundation",
    icon: "📐",
    slug: "/courses/cee",
    color: "bg-emerald-50 border-emerald-200",
    subjects: ["Physics", "Chemistry", "Math/Bio"],
    tagline: "Assam CEE — targeted and strategic",
  },
  {
    title: "Board Mastery XI & XII",
    icon: "📚",
    slug: "/courses/board",
    color: "bg-purple-50 border-purple-200",
    subjects: ["Physics", "Chemistry", "Math", "Biology"],
    tagline: "Excellence in board examinations",
  },
];

const features = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Highly Qualified Faculty",
    desc: "IIT/AIIMS alumni with 10+ years of coaching experience in competitive exams.",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Focused Curriculum",
    desc: "Topic-wise concept building to national-level question solving — no fluff.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "National-Level Prep",
    desc: "Previous years' NEET, JEE, CEE papers solved with detailed strategy sessions.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Regular Mock Tests",
    desc: "Weekly full-length tests with performance analytics and rank predictions.",
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Guest Lectures",
    desc: "Prominent educators and achievers visit to inspire and guide students.",
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "CCTV & Safe Campus",
    desc: "Fully monitored campus with library, study halls, and crash course facilities.",
  },
];

const stats = [
  { value: "500+", label: "Students Enrolled" },
  { value: "95%", label: "Board Pass Rate" },
  { value: "80+", label: "NEET Selections" },
  { value: "12+", label: "Years of Excellence" },
];

const testimonials = [
  {
    name: "Priya Borah",
    result: "NEET AIR 4821",
    exam: "NEET 2024",
    quote:
      "The faculty at Bright Future understood my weak areas and helped me build genuine conceptual clarity. Couldn't have cracked NEET without this support.",
  },
  {
    name: "Rahul Nath",
    result: "IIT-JEE Qualified",
    exam: "JEE Mains 2024",
    quote:
      "The structured curriculum and daily practice sessions made JEE Mains feel achievable. The mock tests were spot-on with the actual exam pattern.",
  },
  {
    name: "Simran Laskar",
    result: "CEE Rank 312",
    exam: "Assam CEE 2024",
    quote:
      "Joining the CEE batch here was the best decision. The teachers gave personal attention and the study material covered everything I needed.",
  },
  {
    name: "Ankur Das",
    result: "NEET AIR 6104",
    exam: "NEET 2024",
    quote:
      "The crash course at Bright Future during my final months was a game-changer. The revision strategy and biology shortcuts helped me score well above my expectations.",
  },
  {
    name: "Mousumi Dey",
    result: "HSSLC — 91%",
    exam: "AHSEC Board 2024",
    quote:
      "Board preparation here is thorough and well-paced. Chapter-by-chapter tests and detailed feedback from teachers kept me consistently improving throughout the year.",
  },
  {
    name: "Bikash Singha",
    result: "CEE Rank 489",
    exam: "Assam CEE 2024",
    quote:
      "The problem-solving sessions for Physics and Chemistry were exceptional. Complex topics became easy once teachers broke them down step by step.",
  },
];

export default function Home() {
  return (
    <div data-ocid="home.page">
      {/* Hero Section */}
      <section
        className="relative bg-primary overflow-hidden"
        data-ocid="home.hero.section"
        style={{ minHeight: "88vh" }}
      >
        {/* Background texture */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/30 blur-3xl translate-x-1/3 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary-foreground/20 blur-3xl -translate-x-1/4 translate-y-1/4" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 py-20 lg:py-28">
          {/* Left: Text */}
          <div className="flex-1 text-center lg:text-left">
            <Badge className="mb-5 bg-accent/20 text-accent border-accent/30 font-display text-xs tracking-widest uppercase px-4 py-1.5">
              Sonai's Premier Coaching Institute
            </Badge>
            <h1 className="font-display font-bold text-primary-foreground text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
              Ignite Your Potential,{" "}
              <span className="text-accent">Shape Your Future.</span>
            </h1>
            <p className="font-body text-lg text-primary-foreground/80 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Join Bright Future Coaching Centre for expert guidance,
              comprehensive resources, and personalized mentorship to ace NEET,
              IIT-JEE, CEE, and Board examinations.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link to="/courses" data-ocid="home.hero.explore_courses_button">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-display font-semibold px-7 py-3 text-base rounded-xl shadow-elevated transition-smooth">
                  Explore Courses
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/contact" data-ocid="home.hero.enquire_button">
                <Button
                  variant="outline"
                  className="border-2 border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 font-display font-semibold px-7 py-3 text-base rounded-xl transition-smooth"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Enquire Now
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-12">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="font-display font-bold text-accent text-2xl sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="font-body text-xs text-primary-foreground/60 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <img
                src="/assets/generated/hero-students.dim_800x600.jpg"
                alt="Students at Bright Future Coaching Centre"
                className="w-full rounded-2xl shadow-elevated object-cover aspect-[4/3]"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-elevated px-5 py-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="font-display font-bold text-foreground text-sm">
                    Top Results
                  </div>
                  <div className="font-body text-xs text-muted-foreground">
                    2024 Batch
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section
        className="bg-background py-20 lg:py-24"
        data-ocid="home.courses.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 font-display text-xs tracking-widest uppercase px-4 py-1.5">
              Our Programs
            </Badge>
            <h2 className="font-display font-bold text-foreground text-3xl lg:text-4xl mb-4">
              Premier Coaching Programs
            </h2>
            <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Carefully designed curriculum to match the latest exam patterns
              with personalized guidance at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, i) => (
              <Link
                key={course.slug}
                to={course.slug}
                className="group"
                data-ocid={`home.courses.item.${i + 1}`}
              >
                <div className="bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-elevated transition-smooth hover:-translate-y-1 h-full flex flex-col">
                  <div className="text-4xl mb-4">{course.icon}</div>
                  <h3 className="font-display font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-smooth">
                    {course.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mb-4 flex-1">
                    {course.tagline}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {course.subjects.map((s) => (
                      <span
                        key={s}
                        className="text-xs font-display bg-primary/8 text-primary px-2.5 py-1 rounded-lg"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-primary font-display font-semibold text-sm group-hover:gap-2 transition-smooth">
                    Learn More <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features / Why Us Section */}
      <section
        className="bg-muted/40 py-20 lg:py-24"
        data-ocid="home.features.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-accent/15 text-accent border-accent/25 font-display text-xs tracking-widest uppercase px-4 py-1.5">
              Why Choose Us
            </Badge>
            <h2 className="font-display font-bold text-foreground text-3xl lg:text-4xl mb-4">
              What Sets Us Apart
            </h2>
            <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Every detail of our teaching methodology is crafted to maximize
              your exam performance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-elevated transition-smooth"
                data-ocid={`home.features.item.${i + 1}`}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                  {f.icon}
                </div>
                <h3 className="font-display font-bold text-foreground text-base mb-2">
                  {f.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="bg-background py-20 lg:py-24"
        data-ocid="home.testimonials.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 font-display text-xs tracking-widest uppercase px-4 py-1.5">
              Student Success
            </Badge>
            <h2 className="font-display font-bold text-foreground text-3xl lg:text-4xl mb-4">
              Our Students Speak
            </h2>
            <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
              Real results from students who trusted us with their dreams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="bg-card border border-border rounded-2xl p-7 shadow-card relative"
                data-ocid={`home.testimonials.item.${i + 1}`}
              >
                <div className="absolute top-5 right-6 text-5xl text-accent/20 font-display font-bold leading-none">
                  "
                </div>
                <div className="flex items-center gap-1 mb-4">
                  {["s1", "s2", "s3", "s4", "s5"].map((k) => (
                    <Star key={k} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <span className="font-display font-bold text-primary-foreground text-sm">
                      {t.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-display font-bold text-foreground text-sm">
                      {t.name}
                    </div>
                    <div className="font-body text-xs text-accent font-semibold">
                      {t.result}
                    </div>
                    <div className="font-body text-xs text-muted-foreground">
                      {t.exam}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary py-16" data-ocid="home.cta.section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-primary-foreground text-3xl lg:text-4xl mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="font-body text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Admissions are open. Limited seats available for NEET, IIT-JEE, CEE
            and Board batches.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" data-ocid="home.cta.apply_button">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-display font-semibold px-8 py-3 text-base rounded-xl shadow-elevated transition-smooth">
                Apply Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <a href="tel:+916003549471" data-ocid="home.cta.call_button">
              <Button
                variant="outline"
                className="border-2 border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 font-display font-semibold px-8 py-3 text-base rounded-xl transition-smooth"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Us Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
