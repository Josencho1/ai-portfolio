import { Github, Linkedin } from "lucide-react";
import SocialLink from "./common/SocialLink";

export default function Footer() {
  return (
    <footer className="border-t py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground">
            © 2024 Jose Francisco Santos Hidalgo Alvarez. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <SocialLink
              href="https://github.com"
              icon={Github}
              label="GitHub Profile"
            />
            <SocialLink
              href="https://linkedin.com"
              icon={Linkedin}
              label="LinkedIn Profile"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}