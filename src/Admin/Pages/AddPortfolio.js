import Editor from "../Tools/EditorJs/Editor";
import AdminHeader from "../partials/AdminHeader";
function AddPortfolio() {
  return (
    <div className="container-xl">
      <AdminHeader />
      <div className="mb-5">
        <Editor />
      </div>
      <button className="btn btn-success mt-3">Save</button>
    </div>
  );
}

export default AddPortfolio;
