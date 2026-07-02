/**
 * The full SOAPIER physiotherapy clerking document for an osteoarthritis
 * patient, matching the standard clinical documentation format exactly.
 * Rendered inside the hero "draft note" panel as a live document preview.
 *
 * Blocks are typed: section headings ("S – Subjective Assessment"),
 * sub-headings ("Presenting Complaint"), key/value fields, and free lines.
 */
export const PATIENT_INFO = [
  { label: "Name", value: "[redacted]" },
  { label: "Age", value: "65" },
  { label: "Sex", value: "Female" },
  { label: "Clinic No", value: "OA-2041" },
  { label: "Date", value: "12 Jun 2026" },
  { label: "Diagnosis", value: "Osteoarthritis — Right knee" },
  { label: "Physiotherapist", value: "[on file]" },
];

export const NOTE_SECTIONS = [
  {
    heading: "S – Subjective Assessment",
    groups: [
      {
        subheading: "Presenting Complaint (P/C)",
        lines: [
          "65-year-old female presents with a 2-year history of progressive right knee pain associated with stiffness, difficulty walking long distances, and difficulty climbing stairs.",
        ],
      },
      {
        subheading: "History of Presenting Complaint (HPC)",
        fields: [
          { label: "Onset", value: "Gradual" },
          { label: "Duration", value: "2 years" },
          { label: "Mode of onset", value: "Insidious" },
          { label: "Progression", value: "Worsening" },
          { label: "Nature", value: "Dull ache" },
          { label: "Severity (NPRS)", value: "6/10 activity, 2/10 rest" },
          { label: "Aggravating", value: "Stairs, standing, squatting" },
          { label: "Relieving", value: "Rest, heat therapy" },
          { label: "Morning stiffness", value: "~20 minutes" },
        ],
      },
      {
        subheading: "Functional Limitations",
        lines: [
          "Difficulty with walking distance, sit-to-stand transfers, stair climbing, and squatting/kneeling.",
        ],
      },
      {
        subheading: "Past Medical History (PMH)",
        fields: [
          { label: "Hypertension", value: "Yes — controlled" },
          { label: "Diabetes", value: "Nil" },
          { label: "Previous surgeries", value: "Nil" },
        ],
      },
      {
        subheading: "Patient Goals",
        lines: ["Reduce pain, improve walking ability, and return to daily activities."],
      },
    ],
  },
  {
    heading: "O – Objective Assessment",
    groups: [
      {
        subheading: "Observation",
        fields: [
          { label: "Gait pattern", value: "Antalgic, reduced stance phase" },
          { label: "Posture", value: "Genu varus, right" },
        ],
      },
      {
        subheading: "Palpation",
        fields: [
          { label: "Tenderness", value: "Medial joint line" },
          { label: "Crepitus", value: "Present on movement" },
          { label: "Swelling", value: "Mild effusion" },
        ],
      },
      {
        subheading: "Range of Motion (ROM) — Knee",
        fields: [
          { label: "Flexion (Active)", value: "0–95°, painful end range" },
          { label: "Extension", value: "Full, no lag" },
        ],
      },
      {
        subheading: "Muscle Strength (MMT)",
        fields: [
          { label: "Quadriceps", value: "3+/5" },
          { label: "Hamstrings", value: "4/5" },
          { label: "Hip abductors", value: "4-/5" },
        ],
      },
      {
        subheading: "Functional Assessment",
        fields: [
          { label: "Timed Up & Go", value: "14.2 s" },
          { label: "30s Sit-to-Stand", value: "8 repetitions" },
        ],
      },
    ],
  },
  {
    heading: "A – Assessment",
    groups: [
      {
        subheading: "Clinical Impression",
        lines: [
          "Features consistent with osteoarthritis of the right knee characterized by pain, reduced ROM, quadriceps weakness, and functional limitation.",
        ],
      },
      {
        subheading: "Problem List",
        lines: [
          "Joint pain · reduced mobility · muscle weakness · impaired gait · reduced functional independence.",
        ],
      },
      {
        subheading: "Physiotherapy Diagnosis",
        lines: [
          "Impaired mobility and functional limitation secondary to degenerative changes associated with osteoarthritis.",
        ],
      },
      {
        subheading: "Prognosis",
        fields: [{ label: "Rating", value: "Good — motivated, good adherence" }],
      },
    ],
  },
  {
    heading: "P – Plan",
    groups: [
      {
        subheading: "Short-Term Goals (1–4 weeks)",
        lines: [
          "Reduce pain from 6/10 to 3/10, improve knee flexion by 15°, improve walking tolerance.",
        ],
      },
      {
        subheading: "Long-Term Goals (6–12 weeks)",
        lines: ["Independent functional activities and improved participation in daily living."],
      },
      {
        subheading: "Intervention Plan",
        lines: [
          "Pain management (heat, joint protection), quadriceps & hip strengthening, ROM exercises, joint mobilization, gait training, and patient education on weight management.",
        ],
      },
    ],
  },
  {
    heading: "I – Intervention",
    groups: [
      {
        subheading: "Treatment Provided",
        lines: [
          "Education on OA management; warm-up completed.",
        ],
      },
      {
        subheading: "Therapeutic Exercises",
        fields: [
          { label: "Quadriceps sets", value: "3 × 15 reps" },
          { label: "Straight leg raises", value: "3 × 10 reps" },
          { label: "Manual therapy", value: "Grade II joint mobilization" },
        ],
      },
      {
        subheading: "Home Exercise Programme",
        lines: ["Prescribed and demonstrated; patient able to return demonstration."],
      },
    ],
  },
  {
    heading: "E – Evaluation",
    groups: [
      {
        subheading: "Patient Progress Reviewed",
        fields: [
          { label: "Pain (initial → current)", value: "6/10 → 4/10" },
          { label: "ROM change", value: "Flexion +8°" },
          { label: "Exercise adherence", value: "Good" },
        ],
      },
      {
        subheading: "Clinical Decision",
        lines: ["Continue current treatment; progress exercise intensity next session."],
      },
    ],
  },
  {
    heading: "R – Reassessment / Revision",
    groups: [
      {
        subheading: "Follow-up Findings",
        lines: ["Improved functional status; no new problems identified."],
      },
      {
        subheading: "Plan Revision",
        lines: [
          "Progress strengthening programme to closed-chain exercises; increase functional activities; continue monitoring outcomes.",
        ],
      },
    ],
  },
];
