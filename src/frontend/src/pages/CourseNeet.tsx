import CourseDetail from "../components/CourseDetail";

const faculty = [
  {
    name: "Dr. Meenakshi Bora",
    qualification: "M.B.B.S, M.D. Physiology — 12 yrs coaching experience",
    subject: "Biology",
    experience: "12+ Years Experience",
    initials: "MB",
  },
  {
    name: "Prof. Rajan Kalita",
    qualification: "M.Sc. Chemistry, IIT Guwahati — Ph.D. pursuing",
    subject: "Chemistry",
    experience: "9+ Years Experience",
    initials: "RK",
  },
  {
    name: "Mr. Deepak Nath",
    qualification: "M.Sc. Physics, Gauhati University — B.Ed.",
    subject: "Physics",
    experience: "8+ Years Experience",
    initials: "DN",
  },
];

export default function CourseNeet() {
  return (
    <CourseDetail
      icon="🧬"
      title="NEET Preparation"
      subtitle="Medical Entrance"
      tagline="Expert-guided preparation for NEET-UG with focused Biology, Chemistry, and Physics coaching aligned to AIIMS-level rigor."
      description="Our NEET preparation program is designed to provide students with a deep conceptual understanding of Physics, Chemistry, and Biology. We follow the latest NMC-approved syllabus and use previous years' question papers to build problem-solving speed and accuracy. Each batch is small to ensure every student receives personalized attention, doubt clearing sessions, and performance tracking. Faculty includes a practicing medical professional and IIT-trained chemist for unmatched subject depth."
      subjects={[
        "Physics",
        "Chemistry (Physical)",
        "Chemistry (Organic)",
        "Botany",
        "Zoology",
      ]}
      highlights={[
        "AIIMS & NEET pattern-based mock tests every week",
        "NCERT concept-first approach with exam shortcuts",
        "Daily doubt clearing sessions with faculty",
        "Biology diagrams & assertion-reason mastery",
        "Previous 10-year NEET paper analysis",
        "Guest lectures by practicing medical professionals",
        "CCTV-monitored study hall access",
        "Crash course available before exam season",
      ]}
      syllabus={[
        {
          unit: "Physics",
          topics: [
            "Mechanics & Laws of Motion",
            "Thermodynamics & Kinetic Theory",
            "Electrostatics & Current Electricity",
            "Optics & Wave Optics",
            "Modern Physics & Nuclear Physics",
          ],
        },
        {
          unit: "Chemistry (Physical)",
          topics: [
            "Atomic Structure & Periodic Table",
            "Chemical Bonding & Equilibrium",
            "Thermodynamics & Electrochemistry",
            "Solutions & Surface Chemistry",
            "Redox Reactions & Kinetics",
          ],
        },
        {
          unit: "Chemistry (Organic)",
          topics: [
            "Hydrocarbons & Haloalkanes",
            "Alcohols, Phenols & Ethers",
            "Aldehydes, Ketones & Acids",
            "Amines & Biomolecules",
            "Polymers & Environmental Chemistry",
          ],
        },
        {
          unit: "Botany",
          topics: [
            "Cell Biology & Cell Division",
            "Plant Physiology & Photosynthesis",
            "Reproduction in Plants",
            "Genetics & Evolution",
            "Ecology & Ecosystems",
          ],
        },
        {
          unit: "Zoology",
          topics: [
            "Human Anatomy & Physiology",
            "Digestion, Respiration & Circulation",
            "Neural Control & Chemical Coordination",
            "Reproduction & Embryology",
            "Animal Kingdom & Taxonomy",
          ],
        },
        {
          unit: "Mock & Revision",
          topics: [
            "Full-length NEET mock tests",
            "Subject-wise topic tests",
            "AIIMS-style assertion-reason drills",
            "Rank predictor analysis",
            "Rapid revision crash modules",
          ],
        },
      ]}
      faculty={faculty}
      duration="1 Year / 2 Year Program"
      batchSize="Max 30 Students"
      level="Class XI – XII & Droppers"
      examTargets={["NEET-UG", "AIIMS Allied", "JIPMER"]}
    />
  );
}
