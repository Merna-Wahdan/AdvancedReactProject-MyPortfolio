import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const [isScrollingDown, setScrollingDown] = useState(false);
  const lastScroll = useRef(0);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    console.log("use effect");
    const handleScroll = () => {
      console.log("on handleScroll");
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll.current) {
        setScrollingDown(true);
      } else {
        setScrollingDown(false);
      }
      lastScroll.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      style={{
        transform: isScrollingDown ? "translateY(-200px)" : "translateY(0)",
      }}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {socials.map((e, i) => (
              <a
                key={i}
                href={e.url}
                target="_blank"
                style={{ margin: "0 10px" }}
              >
                <FontAwesomeIcon icon={e.icon} size="2x" />
              </a>
            ))}
          </nav>
          ;
          <nav>
            <HStack fontSize="lg" spacing={8}>
              <a href={"/#projects-section"}>Projects</a>
              <a href={"/#contactme-section"}>Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
