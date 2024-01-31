import * as collaboratorController from '../service/collaborator-controller'

export default defineEventHandler(() => {
    return collaboratorController.getCollaborators()
})