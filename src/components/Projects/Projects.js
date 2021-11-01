import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
//styled project components
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
//styled global components
import { projects } from '../../constants/constants';


const Projects = () => (
  <section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({ id, image, title, description, tags, source, visit }) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>

              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href = {visit}>Code</ExternalLinks>
            <ExternalLinks href = {source}>Source</ExternalLinks>
          </UtilityList>

        </BlogCard>
      ))}
    </GridContainer>
  </section>
);

export default Projects;