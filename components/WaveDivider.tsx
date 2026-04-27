export default function WaveDivider() {
  return (
    <div className="wave-divider animate-wave">
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="wave-fill"
          d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
        />
        <path
          className="wave-fill opacity-50"
          d="M0,80 C400,20 800,100 1200,60 L1200,120 L0,120 Z"
        />
      </svg>
    </div>
  );
}
