import { useState } from "react";

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
    image: "https://ui-avatars.com/api/?name=Alex+Johnson&background=1e6bb8&color=fff&size=100",
    description: "Alex is the founder and owner of FakePixel X Giveaways. Responsible for overall management and strategic decisions.",
  },
  {
    id: 2,
    name: "Sarah Miller",
    role: "Co-Owner",
    image: "https://ui-avatars.com/api/?name=Sarah+Miller&background=1e6bb8&color=fff&size=100",
    description: "Sarah assists with daily operations and community engagement. She helps coordinate giveaways and events.",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Administrator",
    image: "https://ui-avatars.com/api/?name=Michael+Chen&background=1e6bb8&color=fff&size=100",
    description: "Michael manages server settings, moderates discussions, and ensures community guidelines are followed.",
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Moderator",
    image: "https://ui-avatars.com/api/?name=Emily+Davis&background=1e6bb8&color=fff&size=100",
    description: "Emily helps maintain order in the community, answers member questions, and assists with event coordination.",
  },
  {
    id: 5,
    name: "David Wilson",
    role: "Moderator",
    image: "https://ui-avatars.com/api/?name=David+Wilson&background=1e6bb8&color=fff&size=100",
    description: "David monitors community channels and helps resolve conflicts. He also assists with giveaway management.",
  },
  {
    id: 6,
    name: "Jessica Brown",
    role: "Event Coordinator",
    image: "https://ui-avatars.com/api/?name=Jessica+Brown&background=1e6bb8&color=fff&size=100",
    description: "Jessica plans and organizes community events and giveaways. She coordinates with sponsors and partners.",
  },
];

const Staff = () => {
  const [selectedMember, setSelectedMember] = useState<StaffMember | null>(null);

  const handleSelect = (member: StaffMember) => {
    setSelectedMember(selectedMember?.id === member.id ? null : member);
  };

  return (
    <div>
      <h1 className="mb-2 text-2xl font-bold text-foreground">Staff Members</h1>
      <p className="mb-6 text-muted-foreground">
        Click on a staff member to view their description.
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {staffMembers.map((member) => (
          <div
            key={member.id}
            onClick={() => handleSelect(member)}
            className={`cursor-pointer border bg-card p-4 rounded shadow-sm transition-all ${
              selectedMember?.id === member.id 
                ? "border-primary ring-1 ring-primary" 
                : "border-border hover:border-primary/50 hover:shadow"
            }`}
          >
            <img
              src={member.image}
              alt={member.name}
              className="mx-auto mb-3 h-16 w-16 rounded-full"
            />
            <div className="text-center">
              <div className="font-semibold text-foreground">{member.name}</div>
              <div className="text-sm text-muted-foreground">{member.role}</div>
            </div>
          </div>
        ))}
      </div>

      {selectedMember && (
        <div className="mt-6 border border-border bg-card p-5 rounded shadow-sm">
          <h2 className="mb-2 text-lg font-semibold text-foreground">
            {selectedMember.name} — {selectedMember.role}
          </h2>
          <p className="text-foreground leading-relaxed">{selectedMember.description}</p>
          <button 
            onClick={() => setSelectedMember(null)}
            className="mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Staff;
