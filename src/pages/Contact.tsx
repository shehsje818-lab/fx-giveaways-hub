const Contact = () => {
  return (
    <div>
      <h1 className="mb-2 text-2xl font-bold text-foreground">Contact</h1>

      <p className="mb-6 text-muted-foreground">
        The best way to reach us is through our Discord server. 
        Join using the link below.
      </p>

      <div className="mb-6 border border-border bg-card p-5 rounded shadow-sm">
        <h2 className="mb-2 font-semibold text-foreground">Discord Server</h2>
        <a
          href="https://discord.gg/example"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline transition-colors"
        >
          https://discord.gg/example
        </a>
      </div>

      <div className="border border-border bg-muted/50 p-5 rounded">
        <h2 className="mb-2 font-semibold text-foreground">Note</h2>
        <p className="text-foreground leading-relaxed">
          For general inquiries, please use the appropriate channels in our 
          Discord server. For urgent matters or partnership inquiries, 
          you may directly message a staff member.
        </p>
      </div>
    </div>
  );
};

export default Contact;
