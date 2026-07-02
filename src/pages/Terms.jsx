import PageHero from "../components/ui/PageHero";
import LegalSection from "../components/ui/LegalSection";

const SECTIONS = [
  { id: "acceptance", title: "1. Acceptance of terms" },
  { id: "eligibility", title: "2. Eligibility" },
  { id: "service", title: "3. The service" },
  { id: "responsibilities", title: "4. Clinician responsibilities" },
  { id: "not-medical", title: "5. No medical advice" },
  { id: "acceptable-use", title: "6. Acceptable use" },
  { id: "ip", title: "7. Intellectual property" },
  { id: "liability", title: "8. Limitation of liability" },
  { id: "changes", title: "9. Changes to these terms" },
  { id: "contact", title: "10. Contact us" },
];

export function Terms() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="The terms that govern your use of Docstician. Please read them carefully."
        meta="Last updated: 2 July 2026"
      />

      <section className="relative pb-24">
        <div className="container-page grid gap-12 lg:grid-cols-[220px_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="text-xs font-semibold uppercase tracking-widest text-mist-500">
                On this page
              </p>
              <ul className="mt-4 space-y-2.5">
                {SECTIONS.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="text-sm text-mist-400 transition-colors hover:text-teal-300"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="max-w-2xl space-y-12">
            <div className="glass-panel border-teal-400/20 bg-teal-400/[0.04] p-5 text-sm text-mist-300">
              This document is a placeholder template provided while Docstician is in active
              development. It should be reviewed and finalised by qualified legal counsel before
              launch and does not yet constitute a binding legal agreement.
            </div>

            <LegalSection id="acceptance" title="1. Acceptance of terms">
              <p>
                By accessing or using Docstician (the "Service"), you agree to be bound by these
                Terms of Service. If you do not agree, you may not use the Service.
              </p>
            </LegalSection>

            <LegalSection id="eligibility" title="2. Eligibility">
              <p>
                The Service is intended for licensed clinicians and healthcare professionals. You
                represent that you hold the professional credentials required to use the Service in
                your jurisdiction and that the information you provide is accurate.
              </p>
            </LegalSection>

            <LegalSection id="service" title="3. The service">
              <p>
                Docstician is an AI-powered clinical documentation assistant that captures
                consultations, transcribes speech, and generates structured draft clinical notes.
                The Service is currently in active development and features may change.
              </p>
            </LegalSection>

            <LegalSection id="responsibilities" title="4. Clinician responsibilities">
              <ul className="list-disc space-y-2 pl-5 marker:text-teal-400">
                <li>Obtain appropriate patient consent before recording consultations.</li>
                <li>Review, correct, and approve all AI-generated notes before use.</li>
                <li>Ensure documentation complies with applicable clinical and legal standards.</li>
                <li>Keep your account credentials secure and confidential.</li>
              </ul>
            </LegalSection>

            <LegalSection id="not-medical" title="5. No medical advice">
              <p>
                Docstician is a documentation tool. It does not provide medical advice, diagnosis,
                or treatment, and it does not replace clinical judgement. The clinician remains the
                final decision maker for all patient care and records.
              </p>
            </LegalSection>

            <LegalSection id="acceptable-use" title="6. Acceptable use">
              <p>You agree not to:</p>
              <ul className="list-disc space-y-2 pl-5 marker:text-teal-400">
                <li>Use the Service for any unlawful purpose or without proper authorisation.</li>
                <li>Attempt to reverse engineer, disrupt, or compromise the Service's security.</li>
                <li>Upload content you do not have the right to process.</li>
              </ul>
            </LegalSection>

            <LegalSection id="ip" title="7. Intellectual property">
              <p>
                The Service, including its software, design, and branding, is owned by Docstician
                and protected by intellectual property laws. Clinical notes and records you create
                remain yours, subject to the licenses needed to operate the Service.
              </p>
            </LegalSection>

            <LegalSection id="liability" title="8. Limitation of liability">
              <p>
                To the fullest extent permitted by law, Docstician is provided "as is" without
                warranties of any kind. We are not liable for any indirect, incidental, or
                consequential damages arising from your use of the Service. You are responsible for
                verifying the accuracy of all documentation.
              </p>
            </LegalSection>

            <LegalSection id="changes" title="9. Changes to these terms">
              <p>
                We may update these Terms from time to time. Continued use of the Service after
                changes take effect constitutes acceptance of the revised Terms.
              </p>
            </LegalSection>

            <LegalSection id="contact" title="10. Contact us">
              <p>
                Questions about these Terms? Contact us at{" "}
                <a
                  href="mailto:legal@docstician.com"
                  className="text-teal-300 underline underline-offset-4"
                >
                  legal@docstician.com
                </a>
                .
              </p>
            </LegalSection>
          </div>
        </div>
      </section>
    </>
  );
}

export default Terms;
