import * as collaboratorController from '../controller/collaborator'


const router = createRouter()

router.get('/colaboradores', defineEventHandler(collaboratorController.getCollaborators))

export default useBase('/api', router.handler)