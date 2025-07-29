"use-client";

import { styled } from "styled-components";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const FormContainer = styled.div`
  background-color: #f4f3e8;
  border-radius: 1rem;
  display: flex;
  width: inherit%;
  max-width: 100%;
`;

const Form = styled.form`
background-color = white;
display: flex;
flex-direction: column;
padding: 2rem;
`;

const FormInput = styled.input`
  padding: 2rem;
  margin: 1rem;
`;

const FormButton = styled.button`
  height: 100px;
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

      if (!response.ok) throw new Error("Submit request failed");
      reset();
      alert("Message sent! Thanks for contacting us.");
    } catch (error) {
      alert("There was an error sending your message.");
      console.error(error);
    }
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormInput placeholder="First Name:" {...register("firstName")} />
        <FormInput placeholder="Last Name:" {...register("lastName")} />
        <FormInput placeholder="Email" {...register("email")} />
        <FormInput placeholder="Message" {...register("message")} />
        <FormButton type="submit" title="Submit">
          Submit
        </FormButton>
      </Form>
    </FormContainer>
  );
};
export default ContactForm;
