export default function PilotPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Request a Client Engineering Pilot</h1>
        <p className="mt-4 text-lg text-gray-600">No-cost, co-creation engagements that prove business value with IBM Automation & Watson x™.</p>
      </section>

      <section className="max-w-3xl mx-auto space-y-10 py-12 px-4">
        {/* PEM Section */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Client Engineering Pilot Engineering Methodology (PEM)</h2>
          <p>
            IBM Client Engineering offers clients a no-cost experience to rapidly innovate and co-create IBM solutions that solve their business needs.
          </p>
          <p>
            We use Client Engineering's Pilot Engineering Methodology as a framework and timeline to identify, scope, build, and deliver the IBM solutions we co-create with our clients.
          </p>
          <p>
            Each phase of the Pilot Engineering Method is developed to provide clients with consistent experiences, as well as be flexible to a variety of scenarios.
          </p>
        </div>

        {/* What is Platform Engineering? */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">What is Platform Engineering?</h2>
          <p>
            Platform Engineering in Client Engineering focuses on building scalable, secure, and efficient platforms that empower teams to rapidly and reliably deliver technology solutions during pilots. These platforms streamline deployment and automate processes, breaking down the barriers between pilot and production environments while showcasing the value of IBM technology.
          </p>
          <p>
            With a product-centric approach, Platform Engineers treat the platforms as products, offering robust, repeatable solutions that enable clients to accelerate delivery. This ensures seamless integration, automation, and support for the entire lifecycle of pilots, from concept to potential production deployment.
          </p>
        </div>

        {/* Why Platform Engineering matters */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Why is Platform Engineering important?</h2>
          <p>
            Platform Engineering is essential for enhancing and streamlining pilot delivery. It enables Client Engineering teams to rapidly deliver pilots by providing automated, self-service platforms equipped with key capabilities such as Infrastructure as Code, CI/CD pipelines, security, governance, and monitoring.
          </p>
          <p>
            By reducing complexity and simplifying processes, Platform Engineering allows Client Engineering teams to focus on innovation, accelerating pilots and demonstrating the value of IBM technology. Platform Engineering ensures that all necessary tools and services are readily available to drive seamless pilots.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Our Mission Statement</h2>
          <blockquote className="italic border-l-4 border-blue-600 pl-4 text-gray-700">
            The mission of Client Engineering Platform Engineering is to drive IBM sales execution by engineering Platforms that deliver customer technical and business outcomes.
            <br />
            <br />
            <span className="not-italic font-normal">How:</span> Ensuring that the platform used in our Pilots will meet our well-architected framework in a way that will generate realistic evidence and effectively transition to a proposal for a deployment version of that same solution that supports both the customers business case and IBM's sales narrative.
            <br />
            <span className="not-italic font-normal">Who:</span> Platform Engineers will establish a strong working relationship with Account Technical Leaders, Solution Architects, Brand Technical Specialists and Customer Success Managers that will empower them to create and implement Pilot platforms effectively.
            <br />
            <span className="not-italic font-normal">Why:</span> A strong value proposition can only be created when a high-performing application is supported by well-configured platform.
          </blockquote>
        </div>

        {/* Focus Areas 2025 */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Focus Areas 2025</h2>
          <ul className="list-disc list-inside ml-4">
            <li>Watson x pilots</li>
            <li>Automation Platform alignment</li>
          </ul>
        </div>

        {/* Role of a Platform Engineer */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Role of a Platform Engineer</h2>
          <p>
            Platform Engineers are responsible for implementing technical aspects of solutions, in support of PoCs. They partner with other technical, business, and user experience roles to implement a comprehensive solution that meets pre-defined success criteria.
          </p>
        </div>
      </section>

      {/* Concluding CTA */}
      <section className="text-center py-8">
        <p className="text-lg">Ready to co-create? Email me at <a href="mailto:apalumbo@ibm.com" className="text-blue-600 underline">apalumbo@ibm.com</a> or connect via <a href="https://www.linkedin.com/in/alejandro-palumbo/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">LinkedIn</a> to schedule a discovery call.</p>
      </section>
    </main>
  );
} 