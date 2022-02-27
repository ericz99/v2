import React from "react"
import styled from "styled-components"
import { breakpoint } from "../styles"

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`

const StyledHeader = styled.h2`
  font-size: 48px;
  font-weight: 600;
  color: ${props => props.theme.text1};

  .color-name {
    color: ${props => props.theme.text2};
  }

  @media ${breakpoint.mobileL} {
    font-size: 42px;
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

export default function MiniBio() {
  return (
    <StyledSection>
      <StyledHeader>
        Hi, I'm <span className="color-name">Eric</span>
      </StyledHeader>
      <StyledContent>
        My name is Eric, I'm a software engineer based in Brooklyn, NY. I am
        also a technology enthusiast because I love learning new things. Feel
        free to poke around my portfolio website. ✌️
      </StyledContent>
    </StyledSection>
  )
}
