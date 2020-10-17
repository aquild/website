import React from "react";
import { ThemeProvider, Flex, Text, Heading } from "theme-ui";
import theme from "./theme";
import Socials from "./components/Socials"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Flex
        sx={{
          height: "100vh",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Heading sx={{ fontSize: 100 }}>Aquild</Heading>
        <Text m={3}>Yep. That's my name.</Text>
        <Socials />
      </Flex>
    </ThemeProvider>
  );
}

export default App;
