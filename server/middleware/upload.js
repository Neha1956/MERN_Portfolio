import multer from "multer";

const imageTypes = new Set([
  "image/avif",
  "image/gif",
  "image/jpeg",
  "image/png",
  "image/webp",
]);

const createUpload = (fileSize, files) =>
  multer({
    storage: multer.memoryStorage(),
    limits: { fileSize, files },
    fileFilter: (req, file, callback) => {
      if (
        ["image", "profileImage"].includes(file.fieldname) &&
        !imageTypes.has(file.mimetype)
      ) {
        const error = new Error("Project and profile images must be JPG, PNG, GIF, WebP, or AVIF.");
        error.code = "INVALID_IMAGE_TYPE";
        callback(error);
        return;
      }

      callback(null, true);
    },
  });

const upload = createUpload(4 * 1024 * 1024, 2);
export const projectUpload = createUpload(8 * 1024 * 1024, 1);
export default upload;

export const handleUploadError = (error, req, res, next) => {
  if (error instanceof multer.MulterError || error.code === "INVALID_IMAGE_TYPE") {
    const status = error.code === "LIMIT_FILE_SIZE" ? 413 : 400;
    return res.status(status).json({ message: error.message });
  }

  next(error);
};