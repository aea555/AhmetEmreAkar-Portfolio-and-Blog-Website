const toolbarOptions = [["image"]];

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
  },
  theme: "snow",
};

export default options;
