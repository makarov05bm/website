import React, { useContext } from 'react'
import Filter from '../../components/Filter'
import Meta from '../../components/Meta'
import PostGrid from '../../components/posts/PostGrid'
import ProjectItem from '../../components/projects/ProjectItem'
import { getAllProjects } from '../../lib/projects-lib'
import BlogContext from '../../store/contactContext'

const ProjectsScreen = ({ projects }) => {
  const blogContext = useContext(BlogContext)

  return (
    <>
      <Meta title="'s | Projects" description='A list of my blogs' />
      <section className='all-posts'>
        <Filter />
      <div className="header">
        <span>from practice to freelnace projects</span>
        <h1>
          Browse My Projects
        </h1>
      </div>
      <div className='all-posts-main-content'>
        <div className="container">
          <PostGrid>
            {projects.map((project, index) => {
              if (project.type === blogContext.filterType) {
                return (
                  <div key={index}>
                    <ProjectItem title={project.title} image={`/images/${project.slug}/${project.image}`} slug={project.slug} link={project.link}  />
                  </div>
                )
              } else if (blogContext.filterType === 'all') {
                return (
                  <div key={index}>
                    <ProjectItem title={project.title} image={`/images/${project.slug}/${project.image}`} slug={project.slug} link={project.link}  />
                  </div>
                )
              }
            })}
          </PostGrid>
        </div>
      </div>
    </section>
    </>
  )
}

export async function getStaticProps() {
  const allProjects = getAllProjects()

  return {
    props: {
      projects: allProjects,
    }
  }
}

export default ProjectsScreen