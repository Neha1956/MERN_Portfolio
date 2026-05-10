import Project from "../../models/project.js"

 const addProject = async (req, res) => {
  try {
    const {
      title,
      description,
      techStack,
      githubLink,
      liveLink,
      image,
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
      liveLink: req.body.liveLink,
      image: req.file
        ? req.file.path.replace(/\\/g, "/")
        : "",
    });
   // console.log("image path:", req.file.path.replace(/\\/g, "/"));
//console.log("file:", req.file);
//console.log("newProject:", newProject);
    res.status(201).json({
      message: "Project added successfully",
      project: newProject,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
export default addProject;