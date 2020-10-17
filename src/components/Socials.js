import React from "react";
import { Box, Flex } from "theme-ui";
import { FaDiscord, FaEnvelope, FaGithub } from "react-icons/fa";

const socialsList = [
  {
    icon: <FaGithub />,
    onClick: () => window.open("https://github.com/aquild", "_blank"),
  },
  {
    icon: <FaEnvelope />,
    onClick: () => window.open("mailto://aquild@aquild.dev", "_blank"),
  },
  {
    icon: <FaDiscord />,
    onClick: () => window.open("https://discord.bio/p/aquild", "_blank"),
  },
];

function Socials() {
  return (
    <Flex sx={{ fontSize: 4 }}>
      {Object.entries(socialsList).map(([i, { icon, onClick }]) => (
        <Box key={i} onClick={onClick} m={2}>
          {icon}
        </Box>
      ))}
    </Flex>
  );
}

export default Socials;
