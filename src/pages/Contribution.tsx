import { motion } from "framer-motion";
import { Check } from "lucide-react";

const Contribution = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl"
      >
        <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-2">
          Contribution
        </h1>
        <p className="text-muted-foreground mb-12">
          Learn how you can support and contribute to our community.
        </p>

        <div className="space-y-12">
          <section>
            <h2 className="text-xl font-medium text-foreground mb-4">
              How to Contribute
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              FakePixel X Giveaways relies on community support and contributions. 
              There are several ways you can help our community grow and improve.
            </p>
          </section>

          <section className="glass-card rounded-xl p-6">
            <h2 className="text-lg font-medium text-foreground mb-6">
              Ways to Contribute
            </h2>
            <ul className="space-y-4">
              {[
                "Participate actively in community discussions",
                "Report issues or suggest improvements",
                "Help answer questions from new members",
                "Share our community with others who may be interested",
                "Follow community guidelines and maintain a positive environment",
                "Provide feedback on giveaways and events",
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
          </section>

          <section>
            <h2 className="text-xl font-medium text-foreground mb-4">
              By Sponsoring
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              You can get more support and cool roles by sponsoring giveaways! 
              Reach out to our team via the Contact page to learn more about 
              sponsorship opportunities and exclusive benefits.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default Contribution;
