import { j as jsxRuntimeExports } from "./index-CPUgBiY8.js";
import { C as CourseDetail } from "./CourseDetail-DxFr2rFf.js";
import "./badge-axtPznJk.js";
import "./clock-DZt1W0_r.js";
import "./users-BgR1S1fV.js";
import "./target-Cpc2OVhN.js";
import "./circle-check-big-DPotu2js.js";
import "./arrow-right-ghziYBFf.js";
const faculty = [
  {
    name: "Mr. Kamal Baruah",
    qualification: "M.Sc. Physics, Dibrugarh University — B.Ed., 16 yrs teaching",
    subject: "Physics",
    experience: "16+ Years Experience",
    initials: "KB"
  },
  {
    name: "Ms. Sangita Borah",
    qualification: "M.Sc. Chemistry, Cotton University — AHSEC Topper (2004)",
    subject: "Chemistry",
    experience: "13+ Years Experience",
    initials: "SB"
  },
  {
    name: "Mr. Jitu Phukan",
    qualification: "M.Sc. Mathematics, Gauhati University — B.Ed.",
    subject: "Mathematics & Biology",
    experience: "10+ Years Experience",
    initials: "JP"
  }
];
function CourseBoard() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CourseDetail,
    {
      icon: "📚",
      title: "Board Mastery XI & XII",
      subtitle: "AHSEC / CBSE Board",
      tagline: "Score 90%+ in board exams with structured teaching, chapter-by-chapter revision, and answer-writing technique workshops.",
      description: "Our Board program covers the complete AHSEC and CBSE syllabus for Class XI and XII students in Physics, Chemistry, Mathematics, and Biology. We focus on conceptual clarity, textbook mastery, and exam writing techniques to help students score outstanding marks. Regular unit tests, pre-board examinations, and answer writing practice ensure students are fully prepared for final board examinations. We also include optional competitive exam orientation for those targeting NEET or JEE alongside boards.",
      subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
      highlights: [
        "Full AHSEC and CBSE syllabus coverage — chapter by chapter",
        "Textbook-based concept building with NCERT mastery",
        "Unit tests and pre-board examination simulations",
        "Answer writing technique and presentation workshops",
        "Chapter-wise notes and curated question banks",
        "Doubt clearing sessions twice every week",
        "NEET/JEE orientation for dual aspirants",
        "Motivational sessions and study habit guidance"
      ],
      syllabus: [
        {
          unit: "Physics (Class XI)",
          topics: [
            "Motion in a Straight Line & Plane",
            "Laws of Motion & Work-Energy",
            "Gravitation & Properties of Matter",
            "Thermodynamics & Kinetic Theory",
            "Oscillations & Waves"
          ]
        },
        {
          unit: "Physics (Class XII)",
          topics: [
            "Electrostatics & Current Electricity",
            "Magnetic Effects & EMI",
            "Electromagnetic Waves & Optics",
            "Dual Nature & Atoms & Nuclei",
            "Semiconductor Devices & Communication"
          ]
        },
        {
          unit: "Chemistry (Class XI & XII)",
          topics: [
            "Structure of Atom & Periodic Table",
            "Chemical Bonding & States of Matter",
            "Thermodynamics, Equilibrium & Redox",
            "Electrochemistry, Kinetics & p-Block",
            "Organic Chemistry, Polymers & Biomolecules"
          ]
        },
        {
          unit: "Mathematics (Class XI & XII)",
          topics: [
            "Sets, Relations, Functions & Trigonometry",
            "Algebra, Sequences & Binomial Theorem",
            "Differential & Integral Calculus",
            "Matrices, Determinants & Linear Programming",
            "Probability, Statistics & 3D Geometry"
          ]
        },
        {
          unit: "Biology (Class XI & XII)",
          topics: [
            "Cell Biology, Biomolecules & Cell Division",
            "Plant Physiology & Morphology",
            "Human Physiology (Digestion, Respiration, etc.)",
            "Genetics, Evolution & Molecular Biology",
            "Ecology, Biotechnology & Microbes"
          ]
        },
        {
          unit: "Exam Preparation",
          topics: [
            "Pre-board & unit test simulations",
            "CBSE & AHSEC model paper practice",
            "Answer presentation & scoring techniques",
            "Time management in board exams",
            "Revision plan and study schedule"
          ]
        }
      ],
      faculty,
      duration: "1 Year / 2 Year Program",
      batchSize: "Max 35 Students",
      level: "Class XI & XII",
      examTargets: ["AHSEC Board", "CBSE Board"]
    }
  );
}
export {
  CourseBoard as default
};
