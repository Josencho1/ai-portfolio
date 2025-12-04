import { useState } from "react";
import { useMutation } from "convex/react";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { api } from "@/convex/_generated/api";

export default function ContactForm() {
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
  );
}
