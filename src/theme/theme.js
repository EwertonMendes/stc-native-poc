import { extendTheme } from "native-base";

const theme = extendTheme({
  colors: {
    primary: {
      50: "#f9f3ec",
      100: "#eddac5",
      200: "#e1c19e",
      300: "#d5a977",
      400: "#c99050",
      500: "#af7636",
      600: "#af7636",
      700: "#885c2a",
      800: "#61421e",
      900: "#3a2712",
    },
    secondary: {
      50: "#b78de0",
      100: "#9a5fd4",
      200: "#8b48cd",
      300: "#7d31c7",
      400: "#6e1ac1",
      500: "#6317ae",
      600: "#58159a",
      700: "#4d1287",
      800: "#421074",
      900: "#370d61",
    },
    amber: {
      400: "#d97706",
    },
    pink: {
      50: "#ff11ff",
      100: "#e60fe6",
      200: "#cc0ecc",
      300: "#b30cb3",
      400: "#990a99",
      500: "#800980",
      600: "#660766",
      700: "#4c054c",
      800: "#330333",
      900: "#190219",
    },
  },
  config: {
    initialColorMode: "light",
  },
});

export default theme;
