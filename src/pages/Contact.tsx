import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl"
      >
        <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-2">
          Contact
        </h1>
        <p className="text-muted-foreground mb-12">
          Get in touch with us through Discord.
        </p>

        <div className="glass-card rounded-xl p-8 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-lg bg-foreground/10 flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-foreground" />
            </div>
            <div>
              <h2 className="font-medium text-foreground">Discord Server</h2>
              <p className="text-sm text-muted-foreground">Join our community</p>
            </div>
          </div>
          
          <a
            href="https://discord.gg/example"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-md font-medium text-sm hover:bg-foreground/90 transition-colors group"
          >
            Join Discord
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        <div className="border border-border rounded-xl p-6">
          <h2 className="font-medium text-foreground mb-3">Note</h2>
          <p className="text-muted-foreground leading-relaxed">
            For general inquiries, please use the appropriate channels in our 
            Discord server. For urgent matters or partnership inquiries, 
            you may directly message a staff member.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
