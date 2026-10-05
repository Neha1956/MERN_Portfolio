const dataUriPattern = /^data:([a-z0-9.+/-]+);base64,([a-z0-9+/=]+)$/i;

export const toDataUri = (file) =>
  `data:${file.mimetype};base64,${file.buffer.toString("base64")}`;

export const sendDataUri = (res, value, { attachment = false } = {}) => {
  const match = typeof value === "string" ? value.match(dataUriPattern) : null;
  if (!match) {
    return false;
  }

  const [, contentType, encoded] = match;
  if (!contentType.startsWith("image/") && !attachment) {
    return false;
  }

  res.set("Content-Type", contentType);
  res.set("X-Content-Type-Options", "nosniff");
  res.set("Cache-Control", "public, max-age=0, must-revalidate");
  if (attachment) {
    res.set("Content-Disposition", "attachment");
  }
  res.send(Buffer.from(encoded, "base64"));
  return true;
};
