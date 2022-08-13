import Editor from "../Quill/Editor";
import ThumbnailUploader from "./ThumbnailUploader";
import Modal from "./Modal";
function EditForm() {
  return (
    <form id="editWork">
      <Editor />
      <ThumbnailUploader />
      <Modal />
    </form>
  );
}

export default EditForm;
