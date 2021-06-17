import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Routes from "./routes";
import GlobalStyles from "./styles/global";
import Theme from "./styles/theme";

const App: React.FC = () => {
  return (
    <BrowserRouter>
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Routes/>
    </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
