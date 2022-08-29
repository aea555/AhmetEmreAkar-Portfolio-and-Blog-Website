const toolbarOptions = [["image"]];

const options = {
  debug: "info",
  modules: {
    toolbar: toolbarOptions,
    imageCompress: {
      quality: 0.7, // default
      maxWidth: 768, // default
      maxHeight: 768, // default
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
