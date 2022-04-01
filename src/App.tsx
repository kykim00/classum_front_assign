import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Result } from "./components/result";
import MainPage from "./pages/MainPage";
import Preview from "./pages/Preview";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;
