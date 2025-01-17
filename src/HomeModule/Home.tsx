import homeCSS from "./home.module.css";
import { LoginController } from "../LoginModule/LoginController";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteUserEntry } from "../LoginModule/LoginAction";
import { successToast } from "../commonComponents/toastr/toastrAction";
export const HomeDashboard = () => {
  const loginController = LoginController;
  const { allLoginCreds, updateSidebarActiveTab } = loginController();
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const onEditClick = (id:string) =>{
    updateSidebarActiveTab(1);
    navigate("/app/form", {state:{id:id}});
  }
  const onDeleteClick = (id:string) => {
    dispatch(deleteUserEntry(id));
    dispatch(successToast({
      message:"Data deleted Successfully"
    }))
  }
  return (
    <>
      <div>
        <div className={homeCSS.tableParent}>
          <table className={homeCSS.table} border={2}>
            <thead>
              <tr>
                <td>S No.</td>
                <td>Full Name</td>
                <td>Gender</td>
                <td>Role</td>
                <td>Experiance</td>
                <td>Email</td>
                <td>Phone</td>
                <td>City</td>
                <td>State</td>
                <td>Citizen_OF</td>
                <td>Update</td>
                <td>Delete</td>
              </tr>
            </thead>
            <tbody>
              {allLoginCreds.map((item: any, index: number, array: []) => {
                return (
                  <tr key = {item.id} className={index % 2===0 ? homeCSS.oddRows : homeCSS.evenRows}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.gender}</td>
                    <td>{item.role}</td>
                    <td>{item.exp}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.city}</td>
                    <td>{item.state}</td>
                    <td>{item.Citizen_OF}</td>
                    <td onClick={()=>onEditClick(item.id)} className={homeCSS.updateUser}>
                      <FontAwesomeIcon icon={faPenToSquare} />
                    </td>
                    <td onClick={()=>onDeleteClick(item.id)} className={homeCSS.updateUser}>
                      <FontAwesomeIcon icon={faTrashCan} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};