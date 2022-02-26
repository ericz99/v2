import React from "react"
import styled from "styled-components"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { AiFillMail } from "react-icons/ai"

const StyledSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 35px;
`

const StyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-size: 28px;
  margin-right: 15px;
`

export default function Social() {
  return (
    <StyledSection>
      <StyledLink
        href="https://github.com/ericz99/"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub Profile"
      >
        <FaGithub />
      </StyledLink>

      <StyledLink
        href="https://www.linkedin.com/in/eric-zhang-241684155/"
        target="_blank"
        rel="noreferrer"
        aria-label="Linkedin Profile"
      >
        <FaLinkedin />
      </StyledLink>

      <StyledLink
        href="mailto:ericzhang128@gmail.com"
        target="_blank"
        rel="noreferrer"
        aria-label="Email"
      >
        <AiFillMail />
      </StyledLink>
    </StyledSection>
  )
}
