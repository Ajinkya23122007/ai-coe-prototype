const pieces = [
  { label: "AI", x: 55, y: 78, color: "blue" },
  { label: "LLM", x: 155, y: 78, color: "purple" },
  { label: "RAG", x: 255, y: 78, color: "green" },
  { label: "MCP", x: 55, y: 178, color: "orange" },
  { label: "API", x: 155, y: 178, color: "yellow" },
  { label: "DATA", x: 255, y: 178, color: "teal" },
];

export function HeroPuzzle() {
  return (
    <svg className="hero-puzzle" viewBox="0 0 430 360" role="img" aria-labelledby="puzzle-title">
      <title id="puzzle-title">AI, LLM, RAG, MCP, API and DATA puzzle pieces snapping together</title>
      {pieces.map((piece) => (
        <g key={piece.label} transform={`translate(${piece.x} ${piece.y})`}>
          <g className={`puzzle-tile puzzle-tile-${piece.color}`}>
            <path d="M 0 0 H 37 C 37 -22 63 -22 63 0 H 100 V 37 C 122 37 122 63 100 63 V 100 H 63 C 63 78 37 78 37 100 H 0 V 63 C 22 63 22 37 0 37 Z" />
            <text x="53" y="53" dominantBaseline="middle" textAnchor="middle">{piece.label}</text>
          </g>
        </g>
      ))}
    </svg>
  );
}