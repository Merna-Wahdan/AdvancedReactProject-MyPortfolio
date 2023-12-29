import React from "react";
import { Avatar, Heading, Img, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
      <Img
        borderRadius="full"
        boxSize="150px"
        src={"https://i.pravatar.cc/150?img=7"}
      />
      <h4>{greeting}</h4>

      <Heading>{bio1}</Heading>
      <Heading>{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
