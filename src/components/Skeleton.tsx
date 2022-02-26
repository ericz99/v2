import React from "react"
import styled from "styled-components"
import Skel, { SkeletonTheme } from "react-loading-skeleton"

const ProjectItem = styled.li`
  flex: 1;
  padding: 20px 25px;
  margin: 10px 0;
  border-radius: 10px;
  background: ${props => props.theme.bg3};
  color: ${props => props.theme.text2};
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    margin-right: 10px;
    font-weight: 600;
  }

  div {
    display: flex;
    align-items: center;

    a {
      text-decoration: none;
      padding: 8px 15px;
      border-radius: 5px;
      background: ${props => props.theme.bg};
      color: ${props => props.theme.text1};
      font-size: 12px;
      text-transform: uppercase;
      font-weight: 700;
      transition: all ease-in-out 0.2s;

      &:hover {
        background: ${props => props.theme.text2};
        color: #ffffff;
        transition: all ease-in-out 0.2s;
      }
    }
  }
`

const StyledTags = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const StyledTag = styled.span`
  display: flex;
  align-items: center;
  margin-right: 15px;
  color: ${props => props.theme.text1 || "#000000"};

  span {
    font-size: 16px;
    margin-left: 5px;
  }
`

export default function Project() {
  return (
    <SkeletonTheme highlightColor="#6e7c7c">
      <ProjectItem>
        <Skel height={5} width={5} />
        <StyledTags>
          <StyledTag>
            <Skel height={5} width={5} />
            <Skel height={5} width={5} />
          </StyledTag>

          <StyledTag>
            <Skel height={5} width={5} />
            <Skel height={5} width={5} />
          </StyledTag>

          <Skel height={5} width={5} />
        </StyledTags>
      </ProjectItem>
    </SkeletonTheme>
  )
}
