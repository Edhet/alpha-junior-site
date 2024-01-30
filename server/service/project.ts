import projectsJson from '~/data/projects.json'
import Project from '~/interfaces/project';

export const getProjects = async () => {
    return projectsJson as Project[];
}
