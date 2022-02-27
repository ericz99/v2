import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import Seo from './Seo';
import { theme, breakpoint, BaseStyles, NormalizeStyles } from '../styles';

const StyledContainer = styled.div`
  height: 100%;
  min-height: 100%;
  background: ${props => props.theme.bg};
  position: relative;
  transition: all ease-in-out 0.3s;
`;

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
`;

const ThemeSwitchStyled = styled.div`
  position: fixed;
  top: 35px;
  right: 35px;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;

  span {
    font-size: 32px;
  }
`;

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [globalTheme, setTheme] = useState<string>('light');
  const isDarkTheme = globalTheme === 'dark';

  const toggleTheme = () => {
    const updatedTheme = isDarkTheme ? 'light' : 'dark';
    setTheme(updatedTheme);

    if (typeof window !== undefined) {
      localStorage.setItem('theme', updatedTheme);
    }
  };

  useEffect(() => {
    if (typeof window !== undefined) {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (savedTheme && ['dark', 'light'].includes(savedTheme)) {
        setTheme(savedTheme);
      } else if (prefersDark) {
        setTheme('dark');
      }
    }
  }, []);

  return (
    <ThemeProvider theme={isDarkTheme ? theme.dark : theme.light}>
      <StyledContainer>
        <Seo />

        <div id="root">
          <BaseStyles />
          <NormalizeStyles />

          <ThemeSwitchStyled onClick={toggleTheme}>
            {isDarkTheme ? (
              <span aria-label="Light mode" role="img">
                🌞
              </span>
            ) : (
              <span aria-label="Dark mode" role="img">
                🌜
              </span>
            )}
          </ThemeSwitchStyled>

          <StyledContent>
            <div id="content">{children}</div>
          </StyledContent>
        </div>
      </StyledContainer>
    </ThemeProvider>
  );
}
