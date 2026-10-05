import Project from "../../models/project.js"
const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    const publicProjects = projects.map((project) => {
      const result = project.toObject();
      if (result.image?.startsWith("data:") || result.image?.startsWith("uploads/") || result.image?.startsWith("uploads\\")) {
        result.image = `/api/projects/image/${result._id}`;
      }
      return result;
    });

    res.status(200).json({
      projects: publicProjects,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
export default getProjects;