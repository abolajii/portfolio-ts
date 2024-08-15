import { AJAuth } from ".";

const getAllProjects = async () => {
  return await AJAuth.get("/app/all");
};

const getProject = async (id: string) => {
  return await AJAuth.get(`/app/${id}`);
};

const getTasks = async (id: string) => {
  return await AJAuth.get(`/tasks/${id}`);
};

export { getAllProjects, getProject, getTasks };
