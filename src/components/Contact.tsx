import React from "react"
import styled from "styled-components"

import { breakpoint } from "../styles"

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  background: ${props => props.theme.bg3};
  padding: 25px;
  border-radius: 10px;
`

const StyledHeader = styled.h2`
  font-size: 32px;
  font-weight: 600;
  color: ${props => props.theme.text1};

  @media ${breakpoint.mobileL} {
    font-size: 28px;
  }
`

const StyledContent = styled.p`
  margin-top: 15px;
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.text1 || "#000000"};
  line-height: 200%;
  opacity: 0.8;

  @media ${breakpoint.mobileL} {
    font-size: 14px;
  }
`

export default function Contact() {
  return (
    <StyledSection>
      <StyledHeader>Contact</StyledHeader>
      <StyledContent>
        Hi there, I am currently looking for any opportunities, my inbox is
        always open for anyone. Whether you have a question or just want to say
        hi, I'll try my best to get back to you!
      </StyledContent>
    </StyledSection>
  )
}
