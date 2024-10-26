import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

import { useState } from "react";

import light from "./themes/light";
import dark from "./themes/dark";
import { ButtonMode } from "./components/ButtonMode/styles";

export function App() {
  // Estado para controlar o tema atual, iniciando com o tema claro
  const [currentTheme, setCurrentTheme] = useState(light);

  // Função para alternar entre o tema claro e escuro
  function toggleTheme() {
    setCurrentTheme((prevTheme) => (prevTheme === light ? dark : light));
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />

        <ButtonMode onClick={toggleTheme}>
          {currentTheme === light ? "Modo Escuro" : "Modo Claro"}
        </ButtonMode>

      <RouterProvider router={router} /> 
    </ThemeProvider>
  );
}


