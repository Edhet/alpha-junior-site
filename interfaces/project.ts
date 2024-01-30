import type { Collaborator } from "./collaborator"

export default interface Project {
    name: string
    description: string
    deployUrl?: string
    image: string
    collaborators?: string[]
}