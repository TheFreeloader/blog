import { promises as fs } from 'fs'
import path from 'path'

export default defineEventHandler(async (event) => {
  try {
    const filePath = path.join(process.cwd(), 'server', 'dataset.json')
    const raw = await fs.readFile(filePath, 'utf-8')
    const json = JSON.parse(raw)
    // return the dataset as-is so the frontend can consume it
    return json
  } catch (err) {
    // log server-side and return an error payload
    // eslint-disable-next-line no-console
    console.error('Failed to read dataset.json', err)
    event.node.res.statusCode = 500
    return { success: false, error: String(err) }
  }
})
