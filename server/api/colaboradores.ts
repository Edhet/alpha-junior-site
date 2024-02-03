import collaboratorsJson from '~/data/collaborators.json'
import { Collaborator } from '~/types/collaborator';

export default defineEventHandler(() => {
    return collaboratorsJson as Collaborator[];
})