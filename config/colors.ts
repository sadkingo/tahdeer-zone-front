import tailwindConfig from "@/tailwind.config";

const colors = {
  accent: tailwindConfig.theme.extend.colors.accent,
  dark: tailwindConfig.theme.extend.colors.dark,
  mediumDark: tailwindConfig.theme.extend.colors.mediumDark,
  medium: tailwindConfig.theme.extend.colors.medium,
  mediumLight: tailwindConfig.theme.extend.colors.mediumLight,
  light: tailwindConfig.theme.extend.colors.light,
};

export default colors;
