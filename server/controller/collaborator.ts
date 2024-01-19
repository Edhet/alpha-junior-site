import collaboratorsJson from '~/data/collaborators.json'
import { Collaborator } from './../../interfaces/collabotator';

export const getCollaborators = async () => {
    return collaboratorsJson as Collaborator[];
}
