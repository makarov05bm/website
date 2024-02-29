import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export const getPostsFiles = () => {
    return fs.readdirSync(postsDir)
}

// get the path of the folder where the posts are stored
const postsDir = path.join(process.cwd(), 'content', 'posts')

// read the file and return an object with the slug, meta-data(YAML format) and the MD
export const getPostData = (id) => {
    const slug = id.replace(/\.md$/, '')
    const filePath = path.join(postsDir, `${slug}.md`)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)


    return {
        slug,
        ...data,
        content
    }
}

export const getAllPosts = () => {
    // return the file names in the directory
    const postFiles = fs.readdirSync(postsDir)

    const allPosts = postFiles.map(postFile => {
        return getPostData(postFile)
    })

    const allPostsFiltered = allPosts.filter(p => !p.isProject)

    return allPostsFiltered.sort((a, b) => a.date > b.date ? -1 : 1)
}

export const getFeaturedPosts = () => {
    const allPosts = getAllPosts()

    return allPosts.filter(p => p.isFeatured)
}