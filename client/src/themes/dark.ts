import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  components:{
    MuiPaper:{
      styleOverrides:{
        root:{
          flexGrow: 1
        }
      }
    },
    MuiTable:{
      styleOverrides:{
        root: {
          height: 'auto',
        }
      }
    }
  },
  palette: {
    mode: "dark",
  },
});