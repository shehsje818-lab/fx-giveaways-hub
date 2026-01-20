const Index = () => {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold text-foreground">
        Welcome to FakePixel X Giveaways Official Page
      </h1>

      <div className="space-y-4">
        <p className="text-foreground">
          FakePixel X Giveaways is a community dedicated to hosting giveaways 
          and events for our members. We strive to create a fair and enjoyable 
          experience for everyone.
        </p>

        <div className="border border-border bg-card p-4">
          <h2 className="mb-2 font-semibold text-foreground">Quick Links</h2>
          <ul className="list-inside list-disc space-y-1 text-foreground">
            <li>View our <a href="/staff" className="text-primary underline">Staff Team</a></li>
            <li>Learn how to <a href="/contribution" className="text-primary underline">Contribute</a></li>
            <li><a href="/apply" className="text-primary underline">Apply</a> to join our staff</li>
            <li><a href="/contact" className="text-primary underline">Contact</a> us via Discord</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Index;
