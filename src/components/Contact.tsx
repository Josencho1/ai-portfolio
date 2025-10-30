import { api } from "@/convex/_generated/api";
import { motion } from "framer-motion";
import { Loader2, Mail, Send } from "lucide-react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useMutation } from "convex/react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const createMessage = useMutation(api.messages.create);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    try {
      await createMessage({ name, email, message });
      toast.success("Message sent successfully! I'll get back to you soon.");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-32">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto w-full"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Get in Touch</h2>
          <p className="text-xl text-muted-foreground">
            Let's discuss how I can help with your AI projects
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              name="name"
              placeholder="Your Name"
              required
              disabled={isSubmitting}
              className="h-12"
            />
          </div>

          <div>
            <Input
              name="email"
              type="email"
              placeholder="your.email@example.com"
              required
              disabled={isSubmitting}
              className="h-12"
            />
          </div>

          <div>
            <Textarea
              name="message"
              placeholder="Tell me about your project..."
              required
              disabled={isSubmitting}
              className="min-h-[150px] resize-none"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full gap-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin" size={18} />
                Sending...
              </>
            ) : (
              <>
                <Send size={18} />
                Send Message
              </>
            )}
          </Button>
        </form>

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
      </motion.div>
    </section>
  );
}
