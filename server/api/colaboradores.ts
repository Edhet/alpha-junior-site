import * as collaboratorController from '../service/collaborator'

export default defineEventHandler(() => {
    return collaboratorController.getCollaborators()
})