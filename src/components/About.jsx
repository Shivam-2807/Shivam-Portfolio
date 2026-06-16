const strengths = [
  "Responsive interfaces",
  "React component systems",
  "Clean UI interactions",
  "Performance focused builds",
];

const metrics = [
  { value: "15+", label: "UI screens built" },
  { value: "8+", label: "Projects shipped" },
  { value: "100%", label: "Frontend focus" },
];

const highlights = [
  {
    title: "Frontend Development",
    text: "Building polished React experiences with reusable components, smooth interactions, and layouts that work across screen sizes.",
  },
  {
    title: "Creative Problem Solving",
    text: "Turning rough ideas into practical interfaces by balancing visual detail, user flow, and maintainable code.",
  },
  {
    title: "Continuous Learning",
    text: "Improving through modern tooling, production-ready patterns, and hands-on projects that sharpen real-world development skills.",
  },
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-shell">
        <div className="about-copy">
          <span className="about-kicker">About me</span>
          <h2>Design-minded frontend developer building clean digital experiences.</h2>
          <p>
            I am Shivam, a frontend developer focused on creating modern,
            responsive, and engaging web interfaces. I enjoy shaping ideas into
            products that feel clear, smooth, and easy to use.
          </p>
          <p>
            My work sits at the intersection of visual design and practical
            engineering: structured React components, thoughtful spacing,
            readable code, and small interactions that make a page feel alive.
          </p>

          <div className="about-tags" aria-label="Core strengths">
            {strengths.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="about-panel">
          <div className="about-card profile-card">
            <div>
              <span className="card-label">Current focus</span>
              <h3>React, 3D web visuals, and portfolio-grade UI</h3>
            </div>
            <p>
              I am refining my frontend craft through interactive projects,
              stronger design systems, and smoother user experiences.
            </p>
          </div>

          <div className="about-metrics">
            {metrics.map((metric) => (
              <div className="about-card metric-card" key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="about-highlights">
        {highlights.map((item) => (
          <article className="about-card highlight-card" key={item.title}>
            <span />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>

      <style>{`
        .about-section {
          position: relative;
          padding: 110px 7vw;
          background:
            radial-gradient(circle at 10% 10%, rgba(14, 165, 233, 0.12), transparent 30%),
            linear-gradient(135deg, #f8fafc 0%, #eef2ff 48%, #ecfeff 100%);
          color: #101828;
          overflow: hidden;
        }

        .about-shell {
          position: relative;
          z-index: 1;
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
          gap: 42px;
          align-items: center;
        }

        .about-copy {
          max-width: 690px;
        }

        .about-kicker,
        .card-label {
          display: inline-flex;
          width: fit-content;
          color: #0369a1;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0;
          text-transform: uppercase;
        }

        .about-copy h2 {
          margin: 14px 0 22px;
          font-size: clamp(2.35rem, 5vw, 4.7rem);
          line-height: 0.98;
          letter-spacing: 0;
          color: #0f172a;
        }

        .about-copy p,
        .about-card p {
          margin: 0;
          color: #475467;
          font-size: 1rem;
          line-height: 1.75;
        }

        .about-copy p + p {
          margin-top: 16px;
        }

        .about-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 28px;
        }

        .about-tags span {
          border: 1px solid rgba(15, 23, 42, 0.11);
          background: rgba(255, 255, 255, 0.72);
          color: #1f2937;
          padding: 10px 14px;
          border-radius: 999px;
          font-size: 0.9rem;
          font-weight: 700;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);
        }

        .about-panel {
          display: grid;
          gap: 16px;
        }

        .about-card {
          border: 1px solid rgba(15, 23, 42, 0.1);
          background: rgba(255, 255, 255, 0.82);
          border-radius: 8px;
          box-shadow: 0 24px 80px rgba(15, 23, 42, 0.11);
          backdrop-filter: blur(18px);
        }

        .profile-card {
          min-height: 250px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 30px;
        }

        .profile-card h3 {
          margin: 12px 0 0;
          color: #0f172a;
          font-size: clamp(1.55rem, 3vw, 2.35rem);
          line-height: 1.08;
          letter-spacing: 0;
        }

        .about-metrics {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        .metric-card {
          min-height: 126px;
          padding: 22px 18px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 8px;
        }

        .metric-card strong {
          color: #0f172a;
          font-size: clamp(1.7rem, 4vw, 2.45rem);
          line-height: 1;
        }

        .metric-card span {
          color: #64748b;
          font-size: 0.86rem;
          font-weight: 700;
          line-height: 1.35;
        }

        .about-highlights {
          max-width: 1180px;
          margin: 34px auto 0;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        .highlight-card {
          padding: 24px;
        }

        .highlight-card > span {
          display: block;
          width: 38px;
          height: 4px;
          margin-bottom: 22px;
          border-radius: 999px;
          background: linear-gradient(90deg, #0891b2, #22c55e);
        }

        .highlight-card h3 {
          margin: 0 0 12px;
          color: #0f172a;
          font-size: 1.1rem;
          line-height: 1.25;
        }

        @media (max-width: 900px) {
          .about-section {
            padding: 86px 24px;
          }

          .about-shell,
          .about-highlights {
            grid-template-columns: 1fr;
          }

          .about-copy h2 {
            line-height: 1.05;
          }
        }

        @media (max-width: 620px) {
          .about-section {
            padding: 76px 18px;
          }

          .profile-card,
          .highlight-card {
            padding: 22px;
          }

          .about-metrics {
            grid-template-columns: 1fr;
          }

          .metric-card {
            min-height: auto;
          }
        }
      `}</style>
    </section>
  );
}
