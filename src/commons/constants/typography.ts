// commons/constants/typography.ts
// Figma Design Token - Commerce & Admin (TalkToFigma dhv9j3q7)

export const fontFamily = {
  heading: "Poppins",
  body: "Inter",
} as const;

export type FontWeight = "regular" | "medium" | "semiBold" | "bold";

const weightMap = {
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
} as const;

// 공통 타이포그래피 스케일 (커머스·어드민 공용)
export const typography = {
  hero: {
    fontSize: 96,
    fontFamily: fontFamily.heading,
    fontWeight: weightMap.medium,
  },
  headline1: {
    fontSize: 80,
    fontFamily: fontFamily.heading,
    fontWeight: weightMap.medium,
  },
  headline2: {
    fontSize: 72,
    fontFamily: fontFamily.heading,
    fontWeight: weightMap.medium,
  },
  headline3: {
    fontSize: 54,
    fontFamily: fontFamily.heading,
    fontWeight: weightMap.medium,
  },
  headline4: {
    fontSize: 40,
    fontFamily: fontFamily.heading,
    fontWeight: weightMap.medium,
  },
  headline5: {
    fontSize: 34,
    fontFamily: fontFamily.heading,
    fontWeight: weightMap.medium,
  },
  headline6: {
    fontSize: 28,
    fontFamily: fontFamily.heading,
    fontWeight: weightMap.medium,
  },
  headline7: {
    fontSize: 20,
    fontFamily: fontFamily.heading,
    fontWeight: weightMap.medium,
  },
  body1: {
    fontSize: 20,
    fontFamily: fontFamily.body,
    fontWeight: weightMap.regular,
  },
  body1Semi: {
    fontSize: 20,
    fontFamily: fontFamily.body,
    fontWeight: weightMap.semiBold,
  },
  body1Bold: {
    fontSize: 20,
    fontFamily: fontFamily.body,
    fontWeight: weightMap.bold,
  },
  body2: {
    fontSize: 16,
    fontFamily: fontFamily.body,
    fontWeight: weightMap.regular,
  },
  body2Semi: {
    fontSize: 16,
    fontFamily: fontFamily.body,
    fontWeight: weightMap.semiBold,
  },
  body2Bold: {
    fontSize: 16,
    fontFamily: fontFamily.body,
    fontWeight: weightMap.bold,
  },
  caption1: {
    fontSize: 14,
    fontFamily: fontFamily.body,
    fontWeight: weightMap.regular,
  },
  caption1Semi: {
    fontSize: 14,
    fontFamily: fontFamily.body,
    fontWeight: weightMap.semiBold,
  },
  caption1Bold: {
    fontSize: 14,
    fontFamily: fontFamily.body,
    fontWeight: weightMap.bold,
  },
  caption2: {
    fontSize: 12,
    fontFamily: fontFamily.body,
    fontWeight: weightMap.regular,
  },
  caption2Semi: {
    fontSize: 12,
    fontFamily: fontFamily.body,
    fontWeight: weightMap.semiBold,
  },
  caption2Bold: {
    fontSize: 12,
    fontFamily: fontFamily.body,
    fontWeight: weightMap.bold,
  },
  hairline1: {
    fontSize: 16,
    fontFamily: fontFamily.body,
    fontWeight: weightMap.bold,
  },
  hairline2: {
    fontSize: 12,
    fontFamily: fontFamily.body,
    fontWeight: weightMap.bold,
  },
  buttonXL: {
    fontSize: 26,
    fontFamily: fontFamily.body,
    fontWeight: weightMap.medium,
  },
  buttonL: {
    fontSize: 22,
    fontFamily: fontFamily.body,
    fontWeight: weightMap.medium,
  },
  buttonM: {
    fontSize: 18,
    fontFamily: fontFamily.body,
    fontWeight: weightMap.medium,
  },
  buttonS: {
    fontSize: 16,
    fontFamily: fontFamily.body,
    fontWeight: weightMap.medium,
  },
  buttonXS: {
    fontSize: 14,
    fontFamily: fontFamily.body,
    fontWeight: weightMap.medium,
  },
} as const;

// CSS font-family 문자열
export const fontFamilyCss = {
  heading: '"Poppins", sans-serif',
  body: '"Inter", sans-serif',
} as const;
