import { motion } from "framer-motion";

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
            <ul className="space-y-3">
              {[
                "Participate actively in community discussions",
                "Report issues or suggest improvements",
                "Help answer questions from new members",
                "Share our community with others who may be interested",
                "Follow community guidelines and maintain a positive environment",
                "Provide feedback on giveaways and events",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                  {item}
                </li>
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
