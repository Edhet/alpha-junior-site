import collaboratorsJson from '~/data/collaborators.json'
import { Collaborator } from '~/interfaces/collaborator';

export const getCollaborators = async () => {
    return collaboratorsJson as Collaborator[];
}
