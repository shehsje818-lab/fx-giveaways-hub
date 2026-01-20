import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface StaffMember {
  id: number;
  name: string;
  role: string;
  image: string;
  description: string;
}

const staffMembers: StaffMember[] = [
  // Owners
  {
    id: 1,
    name: "sigmacat",
    role: "Owner",
    image: "https://cdn.discordapp.com/avatars/1050893860747870261/401f66beffceb77c241ae5d610267e96.webp?size=128",
    description: "The owner of FakePixel Giveaways and professional Python and bot developer with more than 4 years of experience.",
  },
  {
    id: 2,
    name: "darkwall",
    role: "Owner",
    image: "https://cdn.discordapp.com/avatars/1238914120179515402/d5c5717f8e15c440f30c184d8136ca35.webp?size=128",
    description: "Circulator and operator of FakePixel Giveaways. A cybersecurity specialist who has worked for more than 3 companies including BDIX, the network provider of Bangladesh. Professional business handler and freelancer specializing in web development, Discord bots, Termux tools, Kali Linux tools, and web security applications.",
  },
  // Curators
  {
    id: 3,
    name: "Mr_Vari",
    role: "Curator",
    image: "https://cdn.discordapp.com/avatars/959812686961582120/a_fa400cd8d53f11dd99ef03d7e22c478e.gif?size=128",
    description: "Admin of FakePixel, the main server that FXG is related to. FXG operates as a sub-server of FakePixel.",
  },
  {
    id: 4,
    name: "Not kaneku?",
    role: "Curator",
    image: "https://cdn.discordapp.com/avatars/1331299009536725216/a3793ab197d1dcbdfa89c26f5ecfbfdd.webp?size=128",
    description: "One of the best and hardest working members of FXG. The oldest member of the community.",
  },
  // Deputies
  {
    id: 5,
    name: "Meow",
    role: "Deputy",
    image: "https://cdn.discordapp.com/avatars/984727935950946354/3d83d287f01fc084f4e197b27d2cceff.webp?size=128",
    description: "A kitty that is cute and fluffy.",
  },
  {
    id: 6,
    name: "qmwn4962",
    role: "Deputy",
    image: "https://cdn.discordapp.com/avatars/1152639517954670744/21ccd5031f8bae4954d098eadc9a4c5c.webp?size=128",
    description: "We don't know much about him. A mysterious guy.",
  },
  {
    id: 7,
    name: "ShahanCot",
    role: "Deputy",
    image: "https://cdn.discordapp.com/avatars/1413978411050733722/e26424582c84e7fb84897cc8e3e27e16.webp?size=128",
    description: "One of the oldest members of FXG who helped grow this community.",
  },
  // Admins
  {
    id: 8,
    name: "Afsank",
    role: "Admin",
    image: "https://cdn.discordapp.com/avatars/1218586070157889648/950484f786be3bb0de95238f367adf91.webp?size=128",
    description: "One of the best and #3 giveaway holder of FXG. Has hosted more than 4B coins and 7B worth of items.",
  },
  {
    id: 9,
    name: "Akshram",
    role: "Admin",
    image: "https://cdn.discordapp.com/avatars/744466067564396616/b4cf04b82212c7ed18b34b6a45705cb3.webp?size=128",
    description: "A helper of FakePixel and giveaways who has contributed a lot to the community.",
  },
  {
    id: 10,
    name: "sky",
    role: "Admin",
    image: "https://cdn.discordapp.com/avatars/905352681999188018/cec46c4e50f23189a44c1306138a6e4e.webp?size=128",
    description: "Still grinding for Judgment Core to make his Terminator.",
  },
];

const roleOrder = ["Owner", "Curator", "Deputy", "Admin"] as const;

const groupedStaff = roleOrder.map((role) => ({
  role,
  members: staffMembers.filter((m) => m.role === role),
}));

const Staff = () => {
  const [selectedMember, setSelectedMember] = useState<StaffMember | null>(null);

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-2">
          Staff
        </h1>
        <p className="text-muted-foreground mb-12 max-w-xl">
          Meet the people behind FakePixel X Giveaways.
        </p>

        <div className="space-y-12">
          {groupedStaff.map((group, groupIndex) => (
            <motion.section
              key={group.role}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: groupIndex * 0.1 }}
            >
              <h2 className="text-lg font-medium text-foreground mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                {group.role}s
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {group.members.map((member, i) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: groupIndex * 0.1 + i * 0.05 }}
                    onClick={() => setSelectedMember(member)}
                    className="group cursor-pointer glass-card rounded-lg p-6 hover:bg-foreground/5 transition-colors"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-16 h-16 rounded-full mb-4 object-cover"
                    />
                    <h3 className="font-medium text-foreground mb-1">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </motion.div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card rounded-xl p-8 max-w-md w-full relative"
            >
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-md hover:bg-foreground/10 transition-colors"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>

              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-20 h-20 rounded-full mb-4"
              />
              <h2 className="text-xl font-semibold text-foreground mb-1">
                {selectedMember.name}
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                {selectedMember.role}
              </p>
              <p className="text-foreground/80 leading-relaxed">
                {selectedMember.description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Staff;
