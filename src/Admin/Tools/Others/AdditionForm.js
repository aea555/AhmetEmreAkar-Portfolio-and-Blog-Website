import Editor from "../Quill/Editor";
import ThumbnailUploader from "./ThumbnailUploader";
import Modal from "./Modal";
function AdditionForm() {
  return (
    <form id="saveNewWork">
      <Editor />
      <ThumbnailUploader />
      <Modal />
    </form>
  );
}

export default AdditionForm;
