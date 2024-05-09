export function generateUnderlineSVGs(widths: number[], heights: number[]) {
  const svgs = [];

  for (let i = 0; i < widths.length; i++) {
    const width = widths[i];
    const height = heights[i];

    const svg = (
      <svg
        key={i}
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1.5"
          y="1.5"
          width={width - 3}
          height={height - 3}
          rx="2.5"
          fill="white"
          stroke="#505050"
          strokeWidth="3"
        />
      </svg>
    );

    svgs.push(svg);
  }

  return svgs;
}
