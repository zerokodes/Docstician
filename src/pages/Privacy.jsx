import PageHero from "../components/ui/PageHero";
import LegalSection from "../components/ui/LegalSection";

const SECTIONS = [
  { id: "overview", title: "1. Overview" },
  { id: "collect", title: "2. Information we collect" },
  { id: "use", title: "3. How we use information" },
  { id: "clinical-data", title: "4. Clinical & patient data" },
  { id: "sharing", title: "5. Data sharing" },
  { id: "security", title: "6. Security" },
  { id: "retention", title: "7. Data retention" },
  { id: "rights", title: "8. Your rights" },
  { id: "contact", title: "9. Contact us" },
];

export function Privacy() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How Docstician collects, uses, and protects information — with particular care for sensitive clinical data."
        meta="Last updated: 2 July 2026"
      />

      <section className="relative pb-24">
        <div className="container-page grid gap-12 lg:grid-cols-[220px_1fr]">
          {/* Table of contents */}
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

            <LegalSection id="overview" title="1. Overview">
              <p>
                Docstician ("we", "us", "our") is an AI-powered clinical documentation assistant
                for licensed clinicians. This Privacy Policy explains what information we collect,
                how we use it, and the choices you have. We are committed to handling healthcare
                information with the highest standard of care and confidentiality.
              </p>
            </LegalSection>

            <LegalSection id="collect" title="2. Information we collect">
              <p>We may collect the following categories of information:</p>
              <ul className="list-disc space-y-2 pl-5 marker:text-teal-400">
                <li>
                  <strong className="text-mist-100">Account information</strong> — name, email,
                  profession, license details, and selected specialties provided at registration.
                </li>
                <li>
                  <strong className="text-mist-100">Voice profile</strong> — voice enrollment data
                  used for speaker identification and improved diarization.
                </li>
                <li>
                  <strong className="text-mist-100">Session data</strong> — audio recordings,
                  transcripts, and generated clinical notes created during consultations.
                </li>
                <li>
                  <strong className="text-mist-100">Usage data</strong> — technical and analytics
                  information about how you interact with the product.
                </li>
              </ul>
            </LegalSection>

            <LegalSection id="use" title="3. How we use information">
              <p>We use information to:</p>
              <ul className="list-disc space-y-2 pl-5 marker:text-teal-400">
                <li>Provide, maintain, and improve the documentation service.</li>
                <li>Generate accurate, specialty-appropriate clinical notes.</li>
                <li>Authenticate users and verify clinician credentials.</li>
                <li>Maintain security, prevent misuse, and comply with legal obligations.</li>
              </ul>
            </LegalSection>

            <LegalSection id="clinical-data" title="4. Clinical & patient data">
              <p>
                Clinical documentation may contain sensitive patient information. Clinicians are
                responsible for obtaining appropriate patient consent before recording. AI-generated
                notes remain drafts until reviewed and approved by the clinician, who is the final
                decision maker for the medical record.
              </p>
              <p>
                Where clinical data is used to improve our models, it follows a controlled pipeline
                and is anonymised before being incorporated into any future training dataset.
              </p>
            </LegalSection>

            <LegalSection id="sharing" title="5. Data sharing">
              <p>
                We do not sell personal or clinical data. We may share information with trusted
                service providers who process it on our behalf under strict confidentiality and
                security obligations, or where required by law.
              </p>
            </LegalSection>

            <LegalSection id="security" title="6. Security">
              <p>
                We apply technical and organisational safeguards including encryption in transit and
                at rest, role-based access control, audit logging, and secure storage. No system is
                perfectly secure, but we work continuously to protect your information.
              </p>
            </LegalSection>

            <LegalSection id="retention" title="7. Data retention">
              <p>
                We retain information for as long as necessary to provide the service and meet legal,
                regulatory, and clinical record-keeping requirements. You may request deletion of
                your account data subject to those obligations.
              </p>
            </LegalSection>

            <LegalSection id="rights" title="8. Your rights">
              <p>
                Depending on your jurisdiction, you may have rights to access, correct, export, or
                delete your personal data, and to object to or restrict certain processing. To
                exercise these rights, contact us using the details below.
              </p>
            </LegalSection>

            <LegalSection id="contact" title="9. Contact us">
              <p>
                For any privacy questions or requests, contact us at{" "}
                <a
                  href="mailto:privacy@docstician.com"
                  className="text-teal-300 underline underline-offset-4"
                >
                  privacy@docstician.com
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

export default Privacy;
