export default function CharacterMessage({ message }) {
  if (!message) return null;

  return (
    <div className="character-message">
      {message}

      <style>{`
        .character-message {
          position: fixed;
          right: clamp(24px, 9vw, 140px);
          top: 138px;
          bottom: auto;
          max-width: min(320px, calc(100vw - 36px));
          background: rgba(255, 255, 255, 0.94);
          color: #0f172a;
          padding: 14px 18px;
          border: 1px solid rgba(15, 23, 42, 0.1);
          border-radius: 8px;
          z-index: 1001;
          box-shadow: 0 18px 50px rgba(15, 23, 42, 0.18);
          font-size: 0.95rem;
          font-weight: 800;
          line-height: 1.4;
        }

        @media (max-width: 820px) {
          .character-message {
            top: auto;
            right: 18px;
            bottom: 292px;
          }
        }

        @media (max-width: 560px) {
          .character-message {
            right: 14px;
            bottom: 246px;
            font-size: 0.88rem;
          }
        }
      `}</style>
    </div>
  );
}
