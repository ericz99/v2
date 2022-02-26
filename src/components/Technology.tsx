import React from "react"
import styled from "styled-components"
import {
  SiTypescript,
  SiJavascript,
  SiJava,
  SiPython,
  SiNodedotjs,
  SiReact,
  SiAmazonaws,
  SiSequelize,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiGit,
  SiGatsby,
  SiDocker,
} from "react-icons/si"

import { breakpoint } from "../styles"

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`

const StyledHeader = styled.h2`
  font-size: 32px;
  font-weight: 600;

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

const TechnologyList = styled.ul`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 12px;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 15px;
`

const TechnologyItem = styled.li`
  flex: 1;
  padding: 20px 25px;
  border-radius: 10px;
  background: ${props => props.theme.bg3};
  color: ${props => props.theme.text2};
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  p {
    margin-left: 10px;
    font-size: 14px;
    font-weight: 600;
  }

  div {
    display: flex;
    align-items: center;

    div {
      margin-right: 10px;
    }
  }

  @media ${breakpoint.mobileL} {
    font-size: 12px;
  }
`

interface Data {
  icon: React.ReactElement
  name: string
}

const datas: Data[] = [
  {
    icon: <SiDocker />,
    name: "Docker",
  },
  {
    icon: <SiTypescript />,
    name: "TypeScript",
  },
  {
    icon: <SiJavascript />,
    name: "JavaScript",
  },
  {
    icon: <SiReact />,
    name: "React.js",
  },
  {
    icon: <SiNodedotjs />,
    name: "Node.js",
  },
  {
    icon: <SiJava />,
    name: "Java",
  },
  {
    icon: <SiPython />,
    name: "Python",
  },
  {
    icon: <SiSequelize />,
    name: "Sequelize",
  },
  {
    icon: <SiMysql />,
    name: "MySQL",
  },
  {
    icon: <SiMongodb />,
    name: "MongoDB",
  },
  {
    icon: <SiRedis />,
    name: "Redis",
  },
  {
    icon: <SiGatsby />,
    name: "Gatsby.js",
  },
  {
    icon: <SiAmazonaws />,
    name: "AWS",
  },
  {
    icon: <SiGit />,
    name: "Git",
  },
]

export default function Project() {
  return (
    <StyledSection>
      <StyledHeader>Technologies</StyledHeader>
      <StyledContent>
        As a software engineer, I have the flexibilty of using different
        language or framework. But, I primarily use TypeScript, Node, and React
        for all of my development work with my clients. I also have working
        knowledge in devops ecosystem such as, CICD, containerisation and many
        more. Below are my extensive used technologies...
      </StyledContent>

      <TechnologyList>
        {datas.map((data: Data, idx) => (
          <TechnologyItem key={idx}>
            <span>{data.icon}</span>
            <p>{data.name}</p>
          </TechnologyItem>
        ))}
      </TechnologyList>
    </StyledSection>
  )
}
