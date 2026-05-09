import Project from "../../models/project.js"
const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();

    res.status(200).json({
      projects,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
export default getProjects;