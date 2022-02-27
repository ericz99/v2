import React from "react"
import styled from "styled-components"

const StyledSection = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 125px;
`

const StyledHeader = styled.h2`
  font-size: 36px;
  font-weight: 900;
  opacity: 0.8;
  color: ${props => props.theme.text1};
`

const StyledContent = styled.p`
  margin-top: 5px;
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.text1 || "#000000"};
  line-height: 200%;
  opacity: 0.6;
`

export default function Footer() {
  return (
    <StyledSection>
      <StyledHeader>Eric Zhang</StyledHeader>
      <StyledContent>Software Engineer • 2022</StyledContent>
    </StyledSection>
  )
}
