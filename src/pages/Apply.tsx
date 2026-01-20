import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const Apply = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl"
      >
        <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-2">
          Apply
        </h1>
        <p className="text-muted-foreground mb-8">
          Join our staff team and help shape the community.
        </p>

        <a
          href="https://forms.example.com/fxg-staff-application"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-md font-medium text-sm hover:bg-foreground/90 transition-colors group mb-12"
        >
          Open Staff Application
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </a>

        <div className="glass-card rounded-xl p-6">
          <h2 className="text-lg font-medium text-foreground mb-6">
            Requirements
          </h2>
          <ul className="space-y-4">
            {[
              "Must be at least 16 years old",
              "Must be an active member of the community",
              "Must have a Discord account in good standing",
              "Must be able to dedicate time to staff duties",
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex items-start gap-3"
              >
                <div className="w-5 h-5 rounded-full bg-foreground/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-foreground" />
                </div>
                <span className="text-foreground/80">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Apply;
