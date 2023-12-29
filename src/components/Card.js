import {
  Box,
  Heading,
  HStack,
  Image,
  ring,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <HStack alignItems="flex-start" bg="white" color="black" borderRadius="5px">
      <VStack>
        <Image borderRadius="5px" src={imageSrc}></Image>
        <Heading>{title}</Heading>
        <Box padding="10px">
          <Text>{description}</Text>
          <br />
          <Text>
            See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </Text>
        </Box>
      </VStack>
    </HStack>
  );
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements
  // imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
};

export default Card;
