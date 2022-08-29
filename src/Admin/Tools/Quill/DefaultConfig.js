const toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }],
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction

  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],

  ["link", "image", "video", "formula"],

  ["clean"], // remove formatting button
];

const options = {
  debug: "info",
  modules: {
    toolbar: toolbarOptions,
    imageCompress: {
      quality: 0.8, // default
      maxWidth: 1024, // default
      maxHeight: 1024, // default
      imageType: "image/jpeg", // default
      debug: true, // default
      suppressErrorLogging: false, // default
      insertIntoEditor: undefined, // default
    },
    imageResize: {
      modules: ["Resize", "DisplaySize", "Toolbar"],
    },
  },
  theme: "snow",
};

export default options;
