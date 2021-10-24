import { defaultTheme } from '../theme';

export function hexToRGB(hex: string, alpha: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  return `rgb(${r}, ${g}, ${b})`;
}

export const calcContrast = (hexBackground: string) => {
  const ColorLuminance = () => {
    const hasFullSpec = hexBackground.length === 7;
    const m = hexBackground
      .substr(1)
      .match(hasFullSpec ? /(\S{2})/g : /(\S{1})/g);
    let r = 0;
    let g = 0;
    let b = 0;
    if (m) {
      r = parseInt(m[0] + (hasFullSpec ? '' : m[0]), 16);
      g = parseInt(m[1] + (hasFullSpec ? '' : m[1]), 16);
      b = parseInt(m[2] + (hasFullSpec ? '' : m[2]), 16);
    }

    return (r * 299 + g * 587 + b * 114) / 1000;
  };

  const returnColor = () => {
    const luminance = ColorLuminance();
    if (luminance <= 130) {
      return defaultTheme.colors.primary.contrast;
    }
    return defaultTheme.colors.primary.light;
  };

  return returnColor();
};
