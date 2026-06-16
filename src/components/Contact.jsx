const contactLinks = [
  {
    label: "Email",
    value: "shivam@example.com",
    href: "mailto:shivam@example.com",
  },
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: "https://www.linkedin.com/",
  },
  {
    label: "GitHub",
    value: "View my code",
    href: "https://github.com/",
  },
];

const availability = [
  "Frontend projects",
  "React interfaces",
  "Portfolio collaborations",
];

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-shell">
        <div className="contact-intro">
          <span className="contact-kicker">Contact</span>
          <h2>Have an idea? Let&apos;s build something clean and useful.</h2>
          <p>
            I am open to frontend work, creative web experiences, and
            collaborations where thoughtful UI matters. Send a message and I
            will get back to you soon.
          </p>

          <div className="contact-availability" aria-label="Available for">
            {availability.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <div className="contact-links">
            {contactLinks.map((item) => (
              <a
                href={item.href}
                key={item.label}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </a>
            ))}
          </div>
        </div>

        <form className="contact-form">
          <div className="form-row">
            <label>
              <span>Name</span>
              <input type="text" name="name" placeholder="Your name" />
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" placeholder="you@example.com" />
            </label>
          </div>

          <label>
            <span>Project type</span>
            <select name="projectType" defaultValue="">
              <option value="" disabled>
                Select a project type
              </option>
              <option>Portfolio website</option>
              <option>Business website</option>
              <option>React app</option>
              <option>UI improvement</option>
            </select>
          </label>

          <label>
            <span>Message</span>
            <textarea
              name="message"
              rows="6"
              placeholder="Tell me about your idea, timeline, and goals."
            />
          </label>

          <button type="submit">Send message</button>
        </form>
      </div>

      <style>{`
        .contact-section {
          position: relative;
          padding: 76px 7vw;
          background:
            linear-gradient(135deg, rgba(15, 23, 42, 0.97), rgba(17, 24, 39, 0.94)),
            radial-gradient(circle at 80% 20%, rgba(34, 197, 94, 0.24), transparent 34%);
          color: #f8fafc;
          overflow: hidden;
        }

        .contact-shell {
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 0.92fr) minmax(320px, 0.92fr);
          gap: 30px;
          align-items: start;
        }

        .contact-kicker {
          display: inline-flex;
          width: fit-content;
          color: #67e8f9;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0;
          text-transform: uppercase;
        }

        .contact-intro h2 {
          margin: 14px 0 20px;
          max-width: 680px;
          font-size: clamp(2rem, 4vw, 3.35rem);
          line-height: 1.04;
          letter-spacing: 0;
        }

        .contact-intro p {
          max-width: 610px;
          margin: 0;
          color: #cbd5e1;
          font-size: 1rem;
          line-height: 1.8;
        }

        .contact-availability {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 22px;
        }

        .contact-availability span {
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.08);
          color: #e2e8f0;
          padding: 10px 14px;
          border-radius: 999px;
          font-size: 0.9rem;
          font-weight: 700;
        }

        .contact-links {
          display: grid;
          gap: 12px;
          margin-top: 24px;
        }

        .contact-links a {
          display: flex;
          justify-content: space-between;
          gap: 18px;
          padding: 14px 16px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.07);
          color: inherit;
          text-decoration: none;
          transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;
        }

        .contact-links a:hover {
          transform: translateY(-2px);
          border-color: rgba(103, 232, 249, 0.52);
          background: rgba(255, 255, 255, 0.11);
        }

        .contact-links span {
          color: #94a3b8;
          font-size: 0.92rem;
          font-weight: 700;
        }

        .contact-links strong {
          color: #f8fafc;
          font-size: 0.95rem;
          text-align: right;
        }

        .contact-form {
          padding: 22px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.9);
          box-shadow: 0 28px 90px rgba(0, 0, 0, 0.28);
          color: #0f172a;
        }

        .form-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .contact-form label {
          display: grid;
          gap: 8px;
          margin-bottom: 14px;
        }

        .contact-form label span {
          color: #334155;
          font-size: 0.86rem;
          font-weight: 800;
        }

        .contact-form input,
        .contact-form select,
        .contact-form textarea {
          width: 100%;
          box-sizing: border-box;
          border: 1px solid #d8dee9;
          border-radius: 8px;
          background: #ffffff;
          color: #0f172a;
          font: inherit;
          padding: 12px 14px;
          outline: none;
          transition: border-color 160ms ease, box-shadow 160ms ease;
        }

        .contact-form textarea {
          resize: vertical;
          min-height: 116px;
        }

        .contact-form input:focus,
        .contact-form select:focus,
        .contact-form textarea:focus {
          border-color: #0891b2;
          box-shadow: 0 0 0 4px rgba(8, 145, 178, 0.13);
        }

        .contact-form button {
          width: 100%;
          border: 0;
          border-radius: 8px;
          background: #0f172a;
          color: #ffffff;
          cursor: pointer;
          font: inherit;
          font-weight: 800;
          padding: 13px 18px;
          transition: transform 180ms ease, background 180ms ease;
        }

        .contact-form button:hover {
          transform: translateY(-2px);
          background: #0891b2;
        }

        @media (max-width: 900px) {
          .contact-section {
            padding: 68px 24px;
          }

          .contact-shell {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 620px) {
          .contact-section {
            padding: 58px 18px;
          }

          .contact-form {
            padding: 22px;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .contact-links a {
            flex-direction: column;
            gap: 6px;
          }

          .contact-links strong {
            text-align: left;
          }
        }
      `}</style>
    </section>
  );
}

export default Contact;
