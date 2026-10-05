import { access } from "node:fs/promises";
import path from "node:path";
import Project from "../../models/project.js";
import { sendDataUri } from "../../utils/assets.js";

const getProjectImage = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id).select("image");
    if (!project) {
      return res.status(404).json({ message: "Project image not found." });
    }

    if (sendDataUri(res, project.image)) {
      return;
    }

    const legacyPath = project.image?.replace(/\\/g, "/");
    if (!legacyPath?.startsWith("uploads/")) {
      return res.status(404).json({ message: "Project image not found." });
    }

    const fileName = path.basename(legacyPath);
    if (!fileName || fileName !== legacyPath.slice("uploads/".length)) {
      return res.status(404).json({ message: "Project image not found." });
    }

    const filePath = path.resolve(process.cwd(), "uploads", fileName);
    await access(filePath);
    return res.sendFile(filePath);
  } catch (error) {
    if (error.code === "ENOENT") {
      return res.status(404).json({ message: "Project image not found." });
    }
    console.error("Failed to load project image:", error);
    res.status(500).json({ message: "Failed to load project image." });
  }
};

export default getProjectImage;
