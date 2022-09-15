import multer from "multer";
import shortid from "shortid";

// TODO: Add upload to cloud feartue
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "tmp/");
  },
  filename: function (req, file, cb) {
    const fileName =
      shortid.generate() + "-" + Date.now() + "-" + file.originalname;
    cb(null, fileName);
  },
});

const upload = multer({ storage });

const uploadSingleFile = (field) => upload.single(field);
const uploadMultipleFile = (field) => upload.array(field);

export { uploadSingleFile, uploadMultipleFile };
