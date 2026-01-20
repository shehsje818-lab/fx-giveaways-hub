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
  {
    id: 1,
    name: "Alex Johnson",
    role: "Owner",
    image: "https://ui-avatars.com/api/?name=Alex+Johnson&background=ffffff&color=141414&size=200&font-size=0.4&bold=true",
    description: "Alex is the founder and owner of FakePixel X Giveaways. Responsible for overall management and strategic decisions.",
  },
  {
    id: 2,
    name: "Sarah Miller",
    role: "Co-Owner",
    image: "https://ui-avatars.com/api/?name=Sarah+Miller&background=ffffff&color=141414&size=200&font-size=0.4&bold=true",
    description: "Sarah assists with daily operations and community engagement. She helps coordinate giveaways and events.",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Administrator",
    image: "https://ui-avatars.com/api/?name=Michael+Chen&background=ffffff&color=141414&size=200&font-size=0.4&bold=true",
    description: "Michael manages server settings, moderates discussions, and ensures community guidelines are followed.",
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Moderator",
    image: "https://ui-avatars.com/api/?name=Emily+Davis&background=ffffff&color=141414&size=200&font-size=0.4&bold=true",
    description: "Emily helps maintain order in the community, answers member questions, and assists with event coordination.",
  },
  {
    id: 5,
    name: "David Wilson",
    role: "Moderator",
    image: "https://ui-avatars.com/api/?name=David+Wilson&background=ffffff&color=141414&size=200&font-size=0.4&bold=true",
    description: "David monitors community channels and helps resolve conflicts. He also assists with giveaway management.",
  },
  {
    id: 6,
    name: "Jessica Brown",
    role: "Event Coordinator",
    image: "https://ui-avatars.com/api/?name=Jessica+Brown&background=ffffff&color=141414&size=200&font-size=0.4&bold=true",
    description: "Jessica plans and organizes community events and giveaways. She coordinates with sponsors and partners.",
  },
];

const Staff = () => {
  const [selectedMember, setSelectedMember] = useState<StaffMember | null>(null);

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-16">
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {staffMembers.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onClick={() => setSelectedMember(member)}
              className="group cursor-pointer glass-card rounded-lg p-6 hover:bg-foreground/5 transition-colors"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-16 h-16 rounded-full mb-4"
              />
              <h3 className="font-medium text-foreground mb-1">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </motion.div>
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
