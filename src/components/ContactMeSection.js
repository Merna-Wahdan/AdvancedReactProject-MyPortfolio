import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  useEffect(() => {
    if (response && response.type && response.message) {
      onOpen(response.type, response.message);
    }
    if (response && response.type === "success") {
      formik.resetForm();
    }
  }, [response]);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "hireMe",
      comment: "",
    },
    onSubmit: async (values) => {
      await submit("/", values);
    },

    validationSchema: Yup.object({
      firstName: Yup.string().required(),
      email: Yup.string().email().required(),
      type: Yup.string().required(),
      comment: Yup.string(),
    }),
  });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl
                isInvalid={formik.touched.firstName && formik.errors.firstName}
                isRequired
              >
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  {...formik.getFieldProps("firstName")}
                  id="firstName"
                  name="firstName"
                />
                <FormErrorMessage>Name is Required</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={formik.touched.email && formik.errors.email}
                isRequired
              >
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  {...formik.getFieldProps("email")}
                  id="email"
                  name="email"
                  type="email"
                />
                <FormErrorMessage>Email is required</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select {...formik.getFieldProps("type")} id="type" name="type">
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl
                isInvalid={formik.touched.comment && formik.errors.comment}
                isRequired
              >
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  {...formik.getFieldProps("comment")}
                  id="comment"
                  name="comment"
                  height={250}
                />
                <FormErrorMessage>Message is required</FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                colorScheme="purple"
                width="full"
                disabled={isLoading}
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
