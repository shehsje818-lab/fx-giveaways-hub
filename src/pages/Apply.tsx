const Apply = () => {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold text-foreground">
        Apply on FXG Staff Team
      </h1>

      <p className="mb-6 text-foreground">
        Interested in joining our staff team? Click the button below to access 
        the staff application form.
      </p>

      <a
        href="https://forms.example.com/fxg-staff-application"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
      >
        Open Staff Application
      </a>

      <div className="mt-6 border border-border bg-muted p-4">
        <h2 className="mb-2 font-semibold text-foreground">Requirements</h2>
        <ul className="list-inside list-disc space-y-1 text-foreground">
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
