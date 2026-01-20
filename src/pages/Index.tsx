import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold text-foreground">
        Welcome to FakePixel X Giveaways Official Page
      </h1>

      <div className="space-y-6">
        <p className="text-foreground leading-relaxed">
          FakePixel X Giveaways is a community dedicated to hosting giveaways 
          and events for our members. We strive to create a fair and enjoyable 
          experience for everyone.
        </p>

        <div className="border border-border bg-card p-5 rounded shadow-sm">
          <h2 className="mb-3 font-semibold text-foreground">Quick Links</h2>
          <ul className="list-inside list-disc space-y-2 text-foreground">
            <li>
              View our{" "}
              <Link to="/staff" className="text-primary hover:underline transition-colors">
                Staff Team
              </Link>
            </li>
            <li>
              Learn how to{" "}
              <Link to="/contribution" className="text-primary hover:underline transition-colors">
                Contribute
              </Link>
            </li>
            <li>
              <Link to="/apply" className="text-primary hover:underline transition-colors">
                Apply
              </Link>{" "}
              to join our staff
            </li>
            <li>
              <Link to="/contact" className="text-primary hover:underline transition-colors">
                Contact
              </Link>{" "}
              us via Discord
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Index;
