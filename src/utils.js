// utils.js
export const getHoverGradient = (color) => {
  if (!color) return 'linear-gradient(to bottom, #1E1E1E, #0a0a0a)';
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);
  return `
    radial-gradient(ellipse at top center,
      rgba(${r},${g},${b},0.25) 0%,
      rgba(${r},${g},${b},0.2) 40%,
      rgba(${r},${g},${b},0.15) 70%,
      rgba(${r},${g},${b},0.1) 100%),
    linear-gradient(to bottom, transparent, #0a0a0a)
  `;
};