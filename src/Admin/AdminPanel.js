import { useContext } from "react";
import AdminHeader from "./partials/AdminHeader";
function AdminPanel() {
  let [workOrBlog, setWorkOrBlog] = useContext("");
  return (
    <div className="container-xl">
      <AdminHeader />
    </div>
  );
}

export default AdminPanel;
