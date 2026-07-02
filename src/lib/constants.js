export const WAITLIST_FORM_URL =
  import.meta.env.VITE_WAITLIST_FORM_URL || "https://forms.gle/REPLACE_WITH_GOOGLE_FORM_ID";

export const SITE_NAME = "Docstician";

// `to` = section anchor on the home page ("/#id"); `route` = a standalone page.
export const NAV_LINKS = [
  { label: "Product", to: "/#solution" },
  { label: "Features", to: "/#features" },
  { label: "How it works", route: "/how-it-works" },
  { label: "Trust", to: "/#trust" },
];

export const LEGAL_LINKS = [
  { label: "Privacy Policy", route: "/privacy" },
  { label: "Terms of Service", route: "/terms" },
];

export const SPECIALTIES = [
  "Physiotherapy",
  "General Medicine",
  "Dentistry",
  "Neurology",
  "Orthopaedics",
  "Paediatrics",
  "Cardiopulmonary",
];

export const PROBLEM_CARDS = [
  {
    title: "Documentation eats the day",
    description:
      "Clinicians spend hours after clinic hours writing notes instead of resting or seeing more patients.",
    stat: "2+ hrs",
    statLabel: "lost per day to notes",
  },
  {
    title: "Cognitive overload in the room",
    description:
      "Listening, reasoning, examining, and writing at once increases the risk of missed details.",
    stat: "1 in 3",
    statLabel: "notes miss key findings",
  },
  {
    title: "Inconsistent formats",
    description:
      "Every profession and specialty expects a different structure — physiotherapy notes aren't dental notes.",
    stat: "0",
    statLabel: "standardized templates",
  },
  {
    title: "Delayed, error-prone records",
    description:
      "Notes written from memory hours later lose accuracy and slow down downstream care and billing.",
    stat: "42%",
    statLabel: "correction rate on late notes",
  },
];

// Grouped into two narrative stages instead of one flat grid: the pipeline
// that turns speech into a note, and the safeguards applied to that note
// before it ever reaches a patient record.
export const FEATURE_GROUPS = [
  {
    stage: "The pipeline",
    description: "How a conversation becomes a structured note.",
    items: [
      {
        title: "Ambient speech capture",
        description:
          "Docstician listens during the consultation — no typing, no dictation breaks. Just a natural conversation.",
        tag: "Capture",
      },
      {
        title: "Speaker diarization",
        description:
          "Automatically separates clinician and patient speech for cleaner, context-aware transcripts.",
        tag: "Understand",
      },
      {
        title: "Specialty-aware generation",
        description:
          "Notes adapt to your profession and specialty — orthopaedic, neurological, dental, and more.",
        tag: "Generate",
      },
    ],
  },
  {
    stage: "The safeguards",
    description: "What happens before a note ever reaches a patient record.",
    items: [
      {
        title: "Clinician-in-the-loop review",
        description:
          "Every note is a draft until you approve it. You stay the final decision maker, always.",
        tag: "Verify",
      },
      {
        title: "Grounded, hallucination-resistant AI",
        description:
          "Documentation is generated strictly from the transcript — never invented, always traceable.",
        tag: "Trust",
      },
      {
        title: "Flexible export",
        description:
          "Send finished notes to PDF, hospital records, or your EHR — fit into the workflow you already use.",
        tag: "Export",
      },
    ],
  },
];

export const TRUST_METRICS = [
  { value: "3", suffix: "", label: "Professions supported at launch" },
  { value: "100", suffix: "%", label: "Clinician-reviewed before export" },
  { value: "24", suffix: "/7", label: "Ambient documentation availability" },
  { value: "0", suffix: "", label: "Raw data used without consent" },
];
