import Project from "../../models/project.js"
import { toDataUri } from "../../utils/assets.js";
const updateProject = async (req, res) => {
  try {
    const updateData = {
      ...req.body,
    };

    if (req.file) {
      updateData.image = toDataUri(req.file);
    }

    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!updatedProject) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    const responseProject = updatedProject.toObject();
    if (responseProject.image?.startsWith("data:")) {
      responseProject.image = `/api/projects/image/${responseProject._id}`;
    }

    res.status(200).json({
      message: "Project updated successfully",
      project: responseProject,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
export default updateProject;