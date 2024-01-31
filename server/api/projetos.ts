import * as projectController from '../service/project-controller'

export default defineEventHandler(() => {
    return projectController.getProjects()
})