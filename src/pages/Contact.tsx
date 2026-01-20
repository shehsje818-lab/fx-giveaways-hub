const Contact = () => {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold text-foreground">Contact</h1>

      <p className="mb-6 text-foreground">
        The best way to reach us is through our Discord server. 
        Join using the link below.
      </p>

      <div className="mb-6">
        <h2 className="mb-2 font-semibold text-foreground">Discord Server</h2>
        <a
          href="https://discord.gg/example"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline hover:text-primary/80"
        >
          https://discord.gg/example
        </a>
      </div>

      <div className="border border-border bg-muted p-4">
        <h2 className="mb-2 font-semibold text-foreground">Note</h2>
        <p className="text-foreground">
          For general inquiries, please use the appropriate channels in our 
          Discord server. For urgent matters or partnership inquiries, 
          you may directly message a staff member.
        </p>
      </div>
    </div>
  );
};

export default Contact;
