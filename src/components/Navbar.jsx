function Navbar({ setMessage, setAnimation }) {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        padding: "20px 50px",
        display: "flex",
        alignItems: "center",
        background: "rgba(0,0,0,0.8)",
        backdropFilter: "blur(10px)",
        color: "white",
        zIndex: 1000,
      }}
    >
      <h2
        style={{
          position: "absolute",
          left: "50px",
        }}
      >
        Shivam
      </h2>

      <ul
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          listStyle: "none",
          margin: 0,
          padding: 0,
          cursor: "pointer",
        }}
      >
        {/* Home */}
        <li
          onMouseEnter={() => {
            setMessage("🙏 Welcome to my portfolio");
            setAnimation("greeting");
          }}
          onMouseLeave={() => {
            setMessage("");
            setAnimation("idle");
          }}
        >
          Home
        </li>

        {/* About */}
        <li
          onMouseEnter={() => {
            setMessage("🤔 Learn more about me");
            setAnimation("thinking");
          }}
          onMouseLeave={() => {
            setMessage("");
            setAnimation("idle");
          }}
        >
          About
        </li>

        {/* Skills */}
        <li
          onMouseEnter={() => {
            setMessage("💻 These are my skills");
            setAnimation("thinking");
          }}
          onMouseLeave={() => {
            setMessage("");
            setAnimation("idle");
          }}
        >
          Skills
        </li>

        {/* Projects */}
        <li
          onMouseEnter={() => {
            setMessage("🔥 Check out my projects");
            setAnimation("greeting");
          }}
          onMouseLeave={() => {
            setMessage("");
            setAnimation("idle");
          }}
        >
          Projects
        </li>

        {/* Contact */}
        <li
          onMouseEnter={() => {
            setMessage("🤝 Let's connect");
            setAnimation("bow");
          }}
          onMouseLeave={() => {
            setMessage("");
            setAnimation("idle");
          }}
        >
          Contact
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;