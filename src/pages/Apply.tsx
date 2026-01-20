import { useState } from "react";

const Apply = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <h1 className="mb-2 text-2xl font-bold text-foreground">
        Apply on FXG Staff Team
      </h1>

      <p className="mb-6 text-muted-foreground">
        Interested in joining our staff team? Click the button below to access 
        the staff application form.
      </p>

      <a
        href="https://forms.example.com/fxg-staff-application"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`inline-block px-5 py-2.5 font-medium rounded shadow-sm transition-all ${
          isHovered 
            ? "bg-primary/90 text-primary-foreground shadow" 
            : "bg-primary text-primary-foreground"
        }`}
      >
        Open Staff Application
      </a>

      <div className="mt-8 border border-border bg-muted/50 p-5 rounded">
        <h2 className="mb-3 font-semibold text-foreground">Requirements</h2>
        <ul className="list-inside list-disc space-y-2 text-foreground">
          <li>Must be at least 16 years old</li>
          <li>Must be an active member of the community</li>
          <li>Must have a Discord account in good standing</li>
          <li>Must be able to dedicate time to staff duties</li>
        </ul>
      </div>
    </div>
  );
};

export default Apply;
