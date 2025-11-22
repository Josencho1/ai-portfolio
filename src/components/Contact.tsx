import { Mail } from "lucide-react";
import SectionContainer from "./common/SectionContainer";
import SectionTitle from "./common/SectionTitle";
import ContactForm from "./Contact/ContactForm";

export default function Contact() {
  return (
    <SectionContainer id="contact">
      <div className="max-w-2xl mx-auto w-full">
        <div className="text-center">
          <SectionTitle subtitle="Let's discuss how I can help with your AI projects">
            Get in Touch
          </SectionTitle>
        </div>

        <ContactForm />

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Or reach out directly</p>
          <a
            href="mailto:josepakohidalgo@gmail.com"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            <Mail size={18} />
            josepakohidalgo@gmail.com
          </a>
        </div>
      </div>
    </SectionContainer>
  );
}