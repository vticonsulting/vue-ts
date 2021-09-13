import { ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export interface EventItem {
  id: number
  category: string
  title: string
  description: string
  location: string
  date: string
  time: string
  organizer: string
}
