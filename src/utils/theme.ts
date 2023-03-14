import { createTheme } from "@mui/material";
import "../assets/styles/layout.css";

export enum FontFamily {
  InterBlack = "Inter-Black",
  InterBold = "Inter-Bold",
  InterExtraBold = "Inter-ExtraBold",
  InterExtraLight = "Inter-ExtraLight",
  InterLight = "Inter-Light",
  InterMedium = "Inter-Medium",
  InterRegular = "Inter-Regular",
  InterSemiBold = "Inter-SemiBold",
  InterThin = "Inter-Thin",
}

export const rpTheme = createTheme({
  typography: {
    fontFamily: FontFamily.InterRegular,
    h1: {
      fontFamily: FontFamily.InterBlack,
      fontSize: "32px",
      textTransform: "none",
      lineHeight: "1.3",
    },
    h2: {
      fontFamily: FontFamily.InterBlack,
      fontSize: "24px",
      fontWeight: 100,
      textTransform: "none",
      lineHeight: "1.3",
    },
    h3: {
      fontFamily: FontFamily.InterMedium,
      fontSize: "16px",
      fontWeight: 100,
      textTransform: "none",
      lineHeight: "1.3",
    },
    body2: {
      fontFamily: FontFamily.InterRegular,
      fontSize: "14px",
      textTransform: "none",
    },
    button: {
      fontFamily: FontFamily.InterRegular,
      fontSize: "14px",
      textTransform: "none",
    },
    subtitle1: {
      fontSize: "18px",
      fontFamily: FontFamily.InterBold,
      textTransform: "none",
      lineHeight: "1.3",
    },
    caption: {
      fontSize: "12px",
      fontFamily: FontFamily.InterRegular,
      textTransform: "none",
    },
  },
});

export const boxShadow = "rgb(0 0 0 / 10%) 0px 15px 50px 0px";
