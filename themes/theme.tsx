import { createTheme } from "@mui/material/styles";
declare module '@mui/material/styles' {
  interface TypographyVariants {
    title: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    title?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    title: true;
    h3: false;
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    textcolor: Palette['success'];
    border: Palette['error'];
  }

  interface PaletteOptions {
    textcolor?: PaletteOptions['success'];
    border?: PaletteOptions['error'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    textcolor: true;
    border: true;
  }
}
export const theme = createTheme({
  palette: {
    primary: {
      main: "#6C5DD3",
      dark:"#393552",
      light:"#B4A9FF",
      contrastText: "#E8E8E9",
    },
    secondary: {
      main: "#2D2D30",
      dark:"#19181C",
      light:"#201F24",
      contrastText: "#C9C8CC",
    },
    border:{
      main: "#28272B",
      light:'#413F4D',
      contrastText: "#C9C8CC",
    },
    textcolor:{
      main: "#E8E7F0",
      dark:"#C9C8CC",
      light:"#A5A5A6",
    }
  },
  typography: {
    fontFamily: "Gilroy",

    title: {
      fontWeight: 700,
      fontSize: 36,
      color:"#E8E7F0"
    },
    h1: {
      fontWeight: 600,
      fontSize: 24,
      color:"#E8E7F0"
    },
    h2: {
      fontWeight: 500,
      fontSize: 18,
      color:"#A5A5A6"
    },
    body1: {
      fontSize: 16,
      fontWeight: 600,
      color:"#E8E7F0"
    },
    body2: {
      fontSize: 14,
      fontWeight: 600,
    },
    caption: {
      fontSize: 12,
      fontWeight: 500,
    },
    button: {
      textTransform: "capitalize",
    },
  },
});
