import React, { useState } from "react"
import styled from "styled-components"

import { breakpoint } from "../styles"
import { jobs } from "../data"

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`

const StyledHeader = styled.h2`
  font-size: 32px;
  font-weight: 600;
  color: ${props => props.theme.text1};

  .color-name {
    color: ${props => props.theme.text2};
  }

  @media ${breakpoint.mobileL} {
    font-size: 28px;
  }
`

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 50px 0;
`

const StyledJobList = styled.div`
  list-style: none;
  display: flex;
  align-items: flex-start;

  @media ${breakpoint.mobileL} {
    flex-direction: column;
    overflow-x: scroll;
    width: 100%;
  }
`

const StyledJobNameList = styled.div`
  flex: 1;
  position: relative;

  button {
    height: 50px;
    padding: 0 25px;
    cursor: pointer;
    border-left: 3px solid ${props => props.theme.bg4};

    span {
      font-size: 14px;
      color: ${props => props.theme.text1};
    }
  }

  @media ${breakpoint.mobileL} {
    button {
      border-left: none;
      border-bottom: 3px solid ${props => props.theme.bg4};
    }
  }
`

const StyledJobDescription = styled.div`
  flex: 2;

  div {
    display: flex;
    flex-direction: column;
    margin-left: 15px;

    p,
    span {
      font-size: 14x;
      color: ${props => props.theme.text1};
      margin-bottom: 10px;

      a {
        text-decoration: none;
        color: ${props => props.theme.bg4};
        font-weight: 900;
      }
    }

    span {
      font-size: 12px;
      opacity: 0.7;
    }

    ul {
      display: flex;
      flex-direction: column;

      li {
        color: ${props => props.theme.text1};
        margin: 5px 0;
        padding-left: 25px;
        font-size: 14px;
        line-height: 200%;
        position: relative;

        &:before {
          content: "▹";
          position: absolute;
          left: 0px;
          color: var(--green);
        }
      }
    }
  }

  @media ${breakpoint.mobileL} {
    margin-top: 25px;

    div {
      margin: 0;

      p,
      span,
      a {
        font-size: 14px;
      }

      ul {
        margin-top: 15px;
        li {
          font-size: 12px;
        }
      }
    }
  }
`

export default function Experience() {
  const companies = jobs.map(job => job.company)

  return (
    <StyledSection>
      <StyledHeader>Experiences</StyledHeader>

      <StyledContent>
        <StyledJobList>
          <StyledJobNameList>
            {companies.map((company, idx) => (
              <button key={idx}>
                <span>{company}</span>
              </button>
            ))}
          </StyledJobNameList>

          <StyledJobDescription>
            {jobs.map((job, idx) => (
              <div key={idx}>
                <p>
                  {job.title} -{" "}
                  <a
                    href={job.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Company Website"
                  >
                    @ {job.company}
                  </a>
                </p>
                <span>{job.range}</span>

                <ul>
                  {job.descriptions.map((desc, idx2) => (
                    <li key={idx2}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </StyledJobDescription>
        </StyledJobList>
      </StyledContent>
    </StyledSection>
  )
}
