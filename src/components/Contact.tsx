import { Mail } from "lucide-react";
import SectionContainer from "./common/SectionContainer";
import SectionTitle from "./common/SectionTitle";
import { personalInfo } from "@/data/personalInfo";

export default function Contact() {
  return (
    <SectionContainer id="contact">
      <div className="max-w-2xl mx-auto w-full">
        <div className="text-center">
          <SectionTitle subtitle="Let's discuss how I can help with your AI projects">
            Get in Touch
          </SectionTitle>
        </div>

        {/* Email contact - prominent display */}
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-6 text-lg">
            Ready to collaborate? Reach out directly:
          </p>
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-3 text-2xl text-primary hover:underline font-semibold"
          >
            <Mail size={24} />
            {personalInfo.email}
          </a>
        </div>
      </div>
    </SectionContainer>
  );
}