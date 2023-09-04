import fs from 'fs'
import path from 'path'

export type IMessage = string[]

const messagesDirectory = path.join(process.cwd(), 'messages')

// export function getSortedCoursesData() {
//   const fileNames = fs.readdirSync(coursesDirectory)
//   const allCoursesData = fileNames.map((fileName) => {
//     const id = fileName.replace(/\.md$/, '')

//     const fullPath = path.join(coursesDirectory, fileName)
//     const fileContents = fs.readFileSync(fullPath, 'utf8')
//     const imagePath = path.join('/images', `${id}.jpg`)

//     const matterResult = matter(fileContents)

//     return {
//       id,
//       imagePath,
//       ...(matterResult.data as { title: string }),
//     } as ICourseData
//   })

//   return allCoursesData.sort((a, b) => {
//     if (a.id > b.id) {
//       return 1
//     } else {
//       return -1
//     }
//   })
// }

// export function getAllCourseIds() {
//   const fileNames = fs.readdirSync(coursesDirectory)
//   return fileNames.map((fileName) => {
//     return {
//       params: {
//         id: fileName.replace(/\.md$/, ''),
//       },
//     }
//   })
// }

export function getTopMessage() {
  const fullPath = path.join(messagesDirectory, 'top_message.txt')
  const fullContents = fs.readFileSync(fullPath, 'utf8')
  return fullContents
}
