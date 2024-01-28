import * as collaboratorController from '../controller/collaborator'
export default defineEventHandler(() => {
    return collaboratorController.getCollaborators()
})