const Contribution = () => {
  return (
    <div>
      <h1 className="mb-2 text-2xl font-bold text-foreground">Contribution</h1>

      <div className="space-y-8">
        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">
            How to Contribute
          </h2>
          <p className="text-foreground leading-relaxed">
            FakePixel X Giveaways relies on community support and contributions. 
            There are several ways you can help our community grow and improve.
          </p>
        </section>

        <section className="border border-border bg-card p-5 rounded shadow-sm">
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            Ways to Contribute
          </h2>
          <ul className="list-inside list-disc space-y-2 text-foreground">
            <li>Participate actively in community discussions</li>
            <li>Report issues or suggest improvements</li>
            <li>Help answer questions from new members</li>
            <li>Share our community with others who may be interested</li>
            <li>Follow community guidelines and maintain a positive environment</li>
            <li>Provide feedback on giveaways and events</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">
            Donation Information
          </h2>
          <p className="text-foreground leading-relaxed">
            While donations are not required, they help support the community 
            and allow us to host larger giveaways. If you wish to donate, 
            please contact the staff team through our Discord server.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">
            Sponsorship Opportunities
          </h2>
          <p className="text-foreground leading-relaxed">
            If you represent a brand or organization and would like to sponsor 
            a giveaway, please reach out to our team via the Contact page. 
            We welcome partnerships that benefit our community.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Contribution;
