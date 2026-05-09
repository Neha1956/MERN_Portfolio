import Project from "../../models/project.js"
const deleteProject = async (req, res) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(
      req.params.id
    );

    if (!deletedProject) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    res.status(200).json({
      message: "Project deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
export default deleteProject;