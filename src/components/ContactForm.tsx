"use client";

import { styled } from "styled-components";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import SectionTitle, { SectionSubtitle, Text } from "./SectionTitle";
import { colors } from "@/styles/theme";

const Form = styled.form`
  background-color: ${colors.dark};
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 100%;
  max-width: 600px;
  margin: 1rem;

  @media (max-width: 768px) {
  max-width: 300px;
  }
`;

const FormInput = styled.input`
  padding: 0.5rem;
  margin: 1rem;
  border: 1px lightgray solid;
`;

const FormTextArea = styled.textarea`
  padding: 0.5rem;
  margin: 1rem;
  border: 1px lightgray solid;
  height: 80px;
`;

const FormButton = styled.button`
  height: 50px;
  border-radius: 2rem;
  background-color: ${colors.light};
  color: ${colors.dark};
  width: 40%;
  align-self: center;
  font-size: 1.5rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &&:hover {
  transform: scale(1.05);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
    background-color: ${colors.sales};
`;

const ErrorAlert = styled.p`
  color: red;
`;

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const request = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };

      const response = await fetch("/api/contact", request);
      const errorText = response.text;

      if (!response.ok) throw new Error(`Submit request failed ${errorText}`);
      reset();
      alert("Message sent! Thanks for contacting us.");
    } catch (error) {
      alert("There was an error sending your message.");
      console.error(error);
    }
  };

  return (
    <>
      <SectionTitle>Contact Us</SectionTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <SectionSubtitle>
          Contact us now for a free bat survey quote within 48 hours
        </SectionSubtitle>
        <Text $variant="light">First Name*</Text>
        {errors.firstName && (
          <ErrorAlert>{errors.firstName.message}</ErrorAlert>
        )}
        <FormInput {...register("firstName")} />
        <Text $variant="light">Last Name*</Text>
        {errors.lastName && <ErrorAlert>{errors.lastName.message}</ErrorAlert>}
        <FormInput {...register("lastName")} />
        <Text $variant="light">Email*</Text>
        {errors.email && <ErrorAlert>{errors.email.message}</ErrorAlert>}
        <FormInput {...register("email")} />
        <Text $variant="light">Tell us about your survey requirements*</Text>
        {errors.message && <ErrorAlert>{errors.message.message}</ErrorAlert>}
        <FormTextArea {...register("message")} />
        <FormButton type="submit" title="Submit">
          Submit
        </FormButton>
      </Form>
    </>
  );
};
export default ContactForm;
