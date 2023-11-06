import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

const markdownDirectory = path.join(process.cwd(), 'documents', 'terms_of_service')

export function getAllMarkdowns() {
  const fileNames = fs.readdirSync(markdownDirectory)
  return fileNames.map((fileName) => {
    return {
      params: {
        type: fileName.replace(/\.md$/, ''),
      },
    }
  })
}

export const getContent = async (type: string): Promise<string> => {
  const fullPath = path.join(markdownDirectory, `${type}.md`)
  const fullContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fullContents)
  const content = matterResult.content
  return content
}
