import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'
import ParticlesBackground from '../Particles/ParticlesBackground'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <ParticlesBackground/>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web application to web apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'Frontend app' ?
            <ToggleButton active value="Frontend app" onClick={() => setToggle('Frontend app')}>FRONT-END APP'S</ToggleButton>
            :
            <ToggleButton value="Frontend app" onClick={() => setToggle('Frontend app')}>FRONT-END APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'Backend app' ?
            <ToggleButton active value="Backend app" onClick={() => setToggle('Backend app')}>BACK-END APP'S</ToggleButton>
            :
            <ToggleButton value="Backend app" onClick={() => setToggle('Backend app')}>BACKEND APP'S</ToggleButton>
          }
          <Divider />
          { toggle === 'Java Full Stack app' ?
            <ToggleButton active value="Java Full Stack app" onClick={() => setToggle('Java Full Stack app')}>JAVA FULL STACK APP</ToggleButton>
            :
            <ToggleButton value="Java Full Stack app" onClick={() => setToggle('Java Full Stack app')}>JAVA FULL STACK APP</ToggleButton>
          } 
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects