"use client"
import {
    Body,
    Container,
    Html,
    Head,
    Heading,
    Preview,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  interface EmailTemplateProps {
    name: string;
    message: string;
  } 
  
  export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    message,
  }) => (
    <Html>
      <Head />
      <Preview>Un message a été reçu depuis le portfolio</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>You have received this message from the portfolio.</Heading>
          <Text style={text}>
            This is your message : {message}
          </Text>
        </Container>
      </Body>
    </Html>
  );
  
  export default EmailTemplate;
  
  const main = {
    backgroundColor: "#000000",
    margin: "0 auto",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  };
  
  const container = {
    margin: "auto",
    padding: "96px 20px 64px",
  };
  
  const h1 = {
    color: "#ffffff",
    fontSize: "24px",
    fontWeight: "600",
    lineHeight: "40px",
    margin: "0 0 20px",
  };
  
  const text = {
    color: "#aaaaaa",
    fontSize: "14px",
    lineHeight: "24px",
    margin: "0 0 40px",
  };