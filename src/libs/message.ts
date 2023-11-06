import fs from 'fs'
import path from 'path'

const messagesDirectory = path.join(process.cwd(), 'documents', 'messages')

export function getTopMessage() {
  const fullPath = path.join(messagesDirectory, 'top_message.txt')
  const fullContents = fs.readFileSync(fullPath, 'utf8')
  return fullContents
}
