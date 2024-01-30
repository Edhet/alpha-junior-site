import * as projectController from '../service/project'

export default defineEventHandler(() => {
    return projectController.getProjects()
})