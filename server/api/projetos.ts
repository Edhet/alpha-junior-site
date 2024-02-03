import projectsJson from '~/data/projects.json'
import Project from '~/types/project';

export default defineEventHandler(() => {
    return projectsJson as Project[];
})