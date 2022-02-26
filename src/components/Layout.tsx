import React, { useState } from "react"
import styled, { ThemeProvider } from "styled-components"

import Seo from "./Seo"
import { theme, breakpoint, BaseStyles, NormalizeStyles } from "../styles"

const StyledContainer = styled.div`
  height: 100%;
  min-height: 100%;
  background: ${props => props.theme.bg};
  position: relative;
`

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media ${breakpoint.desktop} {
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    padding: 50px 25px;
  }

  @media ${breakpoint.mobileL} {
    padding: 25px 25px;
  }
`

const ThemeSwitchStyled = styled.div`
  position: fixed;
  top: 0;
  right: 0;

  border-radius: 50%;
  padding: 15px;
  border: 1px solid #000000;
`

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [globalTheme, setTheme] = useState<string>("light")
  const isDarkTheme = globalTheme === "dark"
  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark")

  return (
    <ThemeProvider theme={isDarkTheme ? theme.dark : theme.light}>
      <StyledContainer>
        <Seo />

        <div id="root">
          <BaseStyles />
          <NormalizeStyles />

          <ThemeSwitchStyled />

          <StyledContent>
            <div id="content">{children}</div>
          </StyledContent>
        </div>
      </StyledContainer>
    </ThemeProvider>
  )
}
