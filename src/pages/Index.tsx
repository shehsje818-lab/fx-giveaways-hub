import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="relative">
      {/* Hero glow effect */}
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      
      {/* Hero Section */}
      <section className="relative max-w-[1200px] mx-auto px-6 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-[1.1] tracking-tight mb-6">
            Welcome to FakePixel X Giveaways Official Page
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Meet the system for modern community engagement. Streamline giveaways, events, and member experiences.
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <Link
              to="/apply"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-md font-medium text-sm hover:bg-foreground/90 transition-colors"
            >
              Start building
            </Link>
            
            <Link
              to="/staff"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              Meet our team
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Product Screenshot Section */}
      <section className="max-w-[1200px] mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative"
        >
          <div className="glass-card rounded-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-medium text-foreground">Giveaways We Host</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { title: "FakePixel Skyblock In-Game Coins", icon: "🪙" },
                    { title: "VIP, VIP+, MVP, MVP+ & Custom Ranks", icon: "⭐" },
                    { title: "Discord Nitro", icon: "🎮" },
                    { title: "Giftcards", icon: "🎁" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 py-3 px-4 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors">
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-sm text-foreground">{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default Index;
