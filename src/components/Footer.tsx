import SocialLink from "./common/SocialLink";
import { personalInfo } from "@/data/personalInfo";

export default function Footer() {
  return (
    <footer className="border-t py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            {personalInfo.socials.map((social) => (
              <SocialLink
                key={social.label}
                href={social.href}
                icon={social.icon}
                label={social.label}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}