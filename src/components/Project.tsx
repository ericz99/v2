import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { AiFillStar, AiOutlineFork } from 'react-icons/ai';

import Skeleton from './Skeleton';
import { breakpoint } from '../styles';

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;

const StyledHeader = styled.h2`
  font-size: 32px;
  font-weight: 600;
  color: ${props => props.theme.text1};

  @media ${breakpoint.mobileL} {
    font-size: 28px;
  }
`;

const StyledContent = styled.p`
  margin-top: 15px;
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.text1 || '#000000'};
  line-height: 200%;
  opacity: 0.8;

  @media ${breakpoint.mobileL} {
    font-size: 14px;
  }
`;

const ProjectList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;

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
        color: ${props => props.theme.bg};
        transition: all ease-in-out 0.2s;
      }
    }
  }

  @media ${breakpoint.mobileL} {
    p {
      font-size: 14px;
    }
  }
`;

const StyledTags = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledTag = styled.span`
  display: flex;
  align-items: center;
  margin-right: 15px;
  color: ${props => props.theme.text1 || '#000000'};

  span {
    font-size: 16px;
    margin-left: 5px;
  }

  @media ${breakpoint.mobileL} {
    span {
      font-size: 12px;
    }
  }
`;

const filterKey: string[] = ['api-builder', 'profiler', 'euphoria', 'captcha-harvester', 'covid19-web', 'realtime-twitter-stream', 'url-shorter'];

export default function Project() {
  const defaultArr = new Array(filterKey.length).fill(0);
  const [projects, setProjects] = useState<any[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // # get projects
      const { data } = await axios({
        url: 'https://api.github.com/users/ericz99/repos?per_page=100',
        method: 'GET'
      });

      // # filter by key
      const filtered = data.filter((d: any) => filterKey.includes(d.name));
      // # set to project repo
      setProjects(filtered);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setLoading(false);
      }, 2500);
    }
  }, [isLoading]);

  return (
    <StyledSection>
      <StyledHeader>About Me</StyledHeader>
      <StyledContent>
        Hello World! I&apos;m current working as an Software Engineer for LogiCloud Technologies - where we specialized in maintaining and building
        features for our clients application. Below are some of my most recent work that I&apos;ve worked on. Thank you! 💖
      </StyledContent>

      {isLoading ? (
        defaultArr.map((_, key) => <Skeleton key={key} />)
      ) : (
        <ProjectList>
          {projects.map(project => (
            <ProjectItem key={project?.id}>
              <p>{project.name}</p>
              <StyledTags>
                <StyledTag>
                  <AiFillStar style={{ fontSize: 14, color: '#D29D2B' }} />
                  <span>{project.stargazers_count}</span>
                </StyledTag>

                <StyledTag>
                  <AiOutlineFork style={{ fontSize: 14 }} />
                  <span>{project.stargazers_count}</span>
                </StyledTag>

                <a href={project.svn_url} target="_blank" rel="noreferrer" aria-label="Project Item">
                  View
                </a>
              </StyledTags>
            </ProjectItem>
          ))}
        </ProjectList>
      )}
    </StyledSection>
  );
}
