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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Sidebar mockup */}
                <div className="bg-secondary/50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                    <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                    <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-foreground/10" />
                      <span className="text-sm text-foreground">FakePixel X</span>
                    </div>
                    <div className="ml-2 space-y-2">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-3 h-3 rounded bg-muted-foreground/20" />
                        Giveaways
                      </div>
                      <div className="flex items-center gap-2 text-xs text-foreground bg-foreground/5 rounded px-2 py-1">
                        <div className="w-3 h-3 rounded bg-foreground/20" />
                        Active Events
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-3 h-3 rounded bg-muted-foreground/20" />
                        Members
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-3 h-3 rounded bg-muted-foreground/20" />
                        Winners
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main content mockup */}
                <div className="md:col-span-2 bg-secondary/30 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-foreground">Active Giveaways</span>
                    <div className="flex gap-2">
                      <div className="w-6 h-6 rounded bg-foreground/5 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-sm bg-muted-foreground/30" />
                      </div>
                      <div className="w-6 h-6 rounded bg-foreground/5 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-sm bg-muted-foreground/30" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {[
                      { title: "Monthly Premium Giveaway", status: "Active", time: "2h" },
                      { title: "Discord Nitro Event", status: "Pending", time: "5h" },
                      { title: "Gift Card Raffle", status: "Active", time: "1d" },
                      { title: "Community Milestone Reward", status: "Draft", time: "3d" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between py-2 px-3 rounded bg-background/50 hover:bg-background/80 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${item.status === 'Active' ? 'bg-green-500' : item.status === 'Pending' ? 'bg-yellow-500' : 'bg-muted-foreground/30'}`} />
                          <span className="text-sm text-foreground">{item.title}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{item.time}</span>
                      </div>
                    ))}
                  </div>
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
