import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BookOpen,
  Heart,
  Lightbulb,
  Shield,
  Target,
  Users,
} from "lucide-react";

const faculty = [
  {
    name: "Dr. Animesh Barman",
    subject: "Physics",
    qualification: "M.Sc., Ph.D. (Physics) — IIT Guwahati",
    experience: "14 years",
    photo: "/assets/generated/faculty-animesh-barman.dim_200x200.jpg",
    bio: "Specialist in JEE-level mechanics and electromagnetism. Known for making complex concepts crystal clear.",
  },
  {
    name: "Prof. Rupa Das",
    subject: "Chemistry",
    qualification: "M.Sc. Chemistry — Gauhati University",
    experience: "11 years",
    photo: "/assets/generated/faculty-rupa-das.dim_200x200.jpg",
    bio: "Expert in organic and physical chemistry. Has guided 200+ students to NEET and JEE success.",
  },
  {
    name: "Mr. Bikash Nath",
    subject: "Mathematics",
    qualification: "M.Sc. Mathematics — Dibrugarh University",
    experience: "9 years",
    photo: "/assets/generated/faculty-bikash-nath.dim_200x200.jpg",
    bio: "Transforms mathematical anxiety into confidence. Specializes in calculus and algebra for competitive exams.",
  },
  {
    name: "Ms. Pallabi Saikia",
    subject: "Biology",
    qualification: "M.Sc. Zoology — Cotton University",
    experience: "8 years",
    photo: "/assets/generated/faculty-pallabi-saikia.dim_200x200.jpg",
    bio: "NEET Biology specialist with a talent for simplifying complex physiological processes through visual teaching.",
  },
  {
    name: "Mr. Jyotirmoy Hazarika",
    subject: "Physics",
    qualification: "B.Tech — NIT Silchar",
    experience: "7 years",
    photo: "/assets/generated/faculty-jyotirmoy-hazarika.dim_200x200.jpg",
    bio: "Industry-experienced educator bringing real-world applications to physics problem-solving strategies.",
  },
  {
    name: "Dr. Minakshi Kalita",
    subject: "Chemistry",
    qualification: "M.Sc., Ph.D. — Tezpur University",
    experience: "12 years",
    photo: "/assets/generated/faculty-minakshi-kalita.dim_200x200.jpg",
    bio: "Inorganic and analytical chemistry expert. Leads the chemistry department with data-driven teaching.",
  },
  {
    name: "Ms. Priyanka Baruah",
    subject: "Biology",
    qualification: "M.Sc. Botany — Gauhati University",
    experience: "6 years",
    photo: "/assets/generated/faculty-female-biology.dim_200x200.jpg",
    bio: "Plant science and genetics expert who brings NEET-focused biology lessons to life with detailed diagrams and mnemonics.",
  },
  {
    name: "Mr. Dipankar Sharma",
    subject: "Mathematics",
    qualification: "M.Sc. Mathematics — NIT Silchar",
    experience: "8 years",
    photo: "/assets/generated/faculty-male-math.dim_200x200.jpg",
    bio: "Known for his systematic approach to complex integration and coordinate geometry problems. Particularly effective for JEE Advanced preparation.",
  },
  {
    name: "Ms. Ankita Gogoi",
    subject: "Chemistry",
    qualification: "M.Sc. Chemistry — Dibrugarh University",
    experience: "5 years",
    photo: "/assets/generated/faculty-female-chemistry.dim_200x200.jpg",
    bio: "Focuses on reaction mechanisms and problem-solving speed. Students credit her structured approach with significant marks improvement.",
  },
];

const values = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Result-Oriented",
    desc: "Every lesson is designed with the exam in mind — no filler content, only what helps you score.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Student-Centric",
    desc: "We treat every student as an individual, not a number. Personal attention and care is our promise.",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Concept-First",
    desc: "We build deep understanding before drilling problems — a foundation that lasts exam after exam.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Integrity",
    desc: "Honest performance feedback, transparent teaching, and no false promises about results.",
  },
];

const subjectColors: Record<string, string> = {
  Physics: "bg-blue-50 text-blue-700 border-blue-200",
  Chemistry: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Mathematics: "bg-amber-50 text-amber-700 border-amber-200",
  Biology: "bg-rose-50 text-rose-700 border-rose-200",
};

export default function About() {
  return (
    <div data-ocid="about.page">
      {/* Hero */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-accent/20 text-accent border-accent/30 font-display text-xs tracking-widest uppercase px-4 py-1.5">
            About Us
          </Badge>
          <h1 className="font-display font-bold text-primary-foreground text-4xl lg:text-5xl mb-4">
            Our Story & Mission
          </h1>
          <p className="font-body text-primary-foreground/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Founded with the belief that every student from Sonai deserves
            world-class coaching without leaving their community.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section
        className="bg-background py-16 lg:py-20"
        data-ocid="about.mission.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 font-display text-xs tracking-widest uppercase px-4 py-1.5">
                Our Mission
              </Badge>
              <h2 className="font-display font-bold text-foreground text-3xl lg:text-4xl mb-6 leading-tight">
                Bringing Premier Coaching to Sonai
              </h2>
              <div className="flex flex-col gap-5 font-body text-muted-foreground leading-relaxed">
                <p>
                  Bright Future Coaching Centre was established with a single
                  mission: to provide students in Sonai and surrounding areas
                  access to the same quality of coaching available in major
                  cities — without the relocation cost or stress.
                </p>
                <p>
                  Located at Kalibari Road, Near Satsang Bihar, Sonai, our
                  institute offers expert coaching for NEET, IIT-JEE, CEE, and
                  Board (Class XI & XII) examinations in Physics, Chemistry,
                  Mathematics, and Biology.
                </p>
                <p>
                  We believe that geographic location should never limit
                  academic potential. Our proven methodology, qualified faculty,
                  and commitment to each student's growth has helped hundreds of
                  local students achieve their dreams of studying in top
                  colleges across India.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {[
                {
                  icon: <Users className="w-7 h-7" />,
                  value: "500+",
                  label: "Students Coached",
                },
                {
                  icon: <Award className="w-7 h-7" />,
                  value: "80+",
                  label: "NEET Selections",
                },
                {
                  icon: <BookOpen className="w-7 h-7" />,
                  value: "12+",
                  label: "Years Experience",
                },
                {
                  icon: <Target className="w-7 h-7" />,
                  value: "95%",
                  label: "Board Pass Rate",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card border border-border rounded-2xl p-6 text-center shadow-card"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-3">
                    {stat.icon}
                  </div>
                  <div className="font-display font-bold text-primary text-3xl mb-1">
                    {stat.value}
                  </div>
                  <div className="font-body text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="bg-muted/40 py-16 lg:py-20"
        data-ocid="about.values.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-foreground text-3xl lg:text-4xl mb-4">
              Our Core Values
            </h2>
            <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
              The principles that guide every class, every test, every student
              interaction.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="bg-card border border-border rounded-2xl p-6 shadow-card"
                data-ocid={`about.values.item.${i + 1}`}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                  {v.icon}
                </div>
                <h3 className="font-display font-bold text-foreground text-base mb-2">
                  {v.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section
        className="bg-background py-16 lg:py-20"
        data-ocid="about.faculty.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent/15 text-accent border-accent/25 font-display text-xs tracking-widest uppercase px-4 py-1.5">
              Our Team
            </Badge>
            <h2 className="font-display font-bold text-foreground text-3xl lg:text-4xl mb-4">
              Meet Our Faculty
            </h2>
            <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
              9 highly qualified educators dedicated to your success across
              every subject.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {faculty.map((f, i) => (
              <div
                key={f.name}
                className="bg-card border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-smooth"
                data-ocid={`about.faculty.item.${i + 1}`}
              >
                {/* Photo */}
                <div className="relative h-48 bg-muted/30 overflow-hidden">
                  <img
                    src={f.photo}
                    alt={f.name}
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Subject badge overlay */}
                  <div className="absolute top-3 right-3">
                    <span
                      className={`text-xs font-display font-semibold px-2.5 py-1 rounded-lg border ${
                        subjectColors[f.subject] ??
                        "bg-primary/10 text-primary border-primary/20"
                      }`}
                    >
                      {f.subject}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <div className="mb-3">
                    <div className="font-display font-bold text-foreground text-base">
                      {f.name}
                    </div>
                    <div className="font-body text-xs text-muted-foreground mt-0.5">
                      {f.experience} experience
                    </div>
                  </div>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed mb-3">
                    {f.bio}
                  </p>
                  <div className="text-xs font-display text-primary/80 bg-primary/8 rounded-lg px-3 py-2 break-words">
                    {f.qualification}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16" data-ocid="about.cta.section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-primary-foreground text-3xl lg:text-4xl mb-4">
            Join Our Growing Family
          </h2>
          <p className="font-body text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Be part of a legacy of achievers. Admissions are open for the next
            batch.
          </p>
          <Link to="/contact" data-ocid="about.cta.contact_button">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-display font-semibold px-7 py-3 text-base rounded-xl shadow-elevated transition-smooth">
              Get in Touch
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
