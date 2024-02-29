import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// get the path of the folder where the posts are stored
const projectsDir = path.join(process.cwd(), 'content', 'projects')

export const getProjectsFiles = () => {
    return fs.readdirSync(projectsDir)
}

// read the file and return an object with the slug, meta-data(YAML format) and the MD
export const getProjectData = (id) => {
    const slug = id.replace(/\.md$/, '')
    const filePath = path.join(projectsDir, `${slug}.md`)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)


    return {
        slug,
        ...data,
        content
    }
}

export const getAllProjects = () => {
    // return the file names in the directory
    const projectFiles = fs.readdirSync(projectsDir)

    const allProjects = projectFiles.map(projectFile => {
        return getProjectData(projectFile)
    })

    return allProjects.sort((a, b) => a.date > b.date ? -1 : 1)
}