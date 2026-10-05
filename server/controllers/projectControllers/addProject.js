import Project from "../../models/project.js"
import { toDataUri } from "../../utils/assets.js";

 const addProject = async (req, res) => {
  try {
    const {
      title,
      description,
      techStack,
      githubLink,
      liveLink,
    } = req.body;

    //console.log("Received project data:", req.body);

    if (!title || !description) {
      return res.status(400).json({
        message: "Title and description are required",
      });
    }

    const newProject = await Project.create({
      title,
      description,
      techStack,
      githubLink,
      liveLink,
      image: req.file
        ? toDataUri(req.file)
        : "",
    });
    const responseProject = newProject.toObject();
    if (responseProject.image?.startsWith("data:")) {
      responseProject.image = `/api/projects/image/${responseProject._id}`;
    }

    res.status(201).json({
      message: "Project added successfully",
      project: responseProject,
    });
  } catch (error) {
    console.error("Failed to add project:", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
export default addProject;