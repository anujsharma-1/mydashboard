import { LoginController } from "../LoginModule/LoginController";
import { categoryArray, formField } from "./formFields";
import UserFormCSS from "./userForm.module.css";
import { InputField } from "./inputField";
import { useEffect, useState } from "react";
import { FormDataFields } from "../commonComponents/types";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editUserDetails } from "../LoginModule/LoginAction";
export const UserForm = () => {
  const loginController = LoginController;
  const location = useLocation();
  const { id: editId } = location.state || {};
  const { allLoginCreds, updateSidebarActiveTab } = loginController();
  const [categorizedFormField, setCategorizedFormField] = useState([]);
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    password: "",
    gender: "",
    role: " ",
    exp: " ",
    email: "",
    phone: "",
    city: "",
    state: "",
    Citizen_OF: "",
    id: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onChangeHandler = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = (data: any) => {
    dispatch(editUserDetails(formData));
    updateSidebarActiveTab(0);
    navigate("/app/home");
  };
  const handleCancel = () => {
    updateSidebarActiveTab(0);
    navigate("/app/home");
  };
  useEffect(() => {
    let itemArray: any = [];
    categoryArray.map((categoryItem: string) => {
      const itemList = formField.filter(
        (item: any) => item.category === categoryItem && item.secretive !== true
      );
      itemArray.push({
        key: categoryItem,
        value: itemList,
      });
    });
    setCategorizedFormField(itemArray);
  }, []);

  useEffect(() => {
    if (editId) {
      const editedUser = allLoginCreds.find((item: any) => item.id === editId);
      setFormData(editedUser);
    } else {
      setFormData({
        username: "",
        name: "",
        password: "",
        gender: "",
        role: "",
        exp: " ",
        email: "",
        phone: "",
        city: "",
        state: "",
        Citizen_OF: "",
        id: "",
      });
    }
  }, [editId]);
  console.log(categorizedFormField);
  console.log(editId);
  return (
    <>
      <div className={UserFormCSS.parentContainer}>
        {editId !== null && editId !== undefined ? (
          <h2> Edit User</h2>
        ) : (
          <h2>Add New User</h2>
        )}
        <div className={UserFormCSS.formParent}>
          <form action="">
            {categorizedFormField.map((keyItem: any, index: number) => {
              return (
                <>
                  <div key={index} className={UserFormCSS.categoryParent}>
                    <div className={UserFormCSS.categoryHeading}>
                      {keyItem.key} *
                    </div>
                    <div className={UserFormCSS.categoryInputsParent}>
                      {keyItem.value.map((valueItem: any) => {
                        return (
                          <span
                            key={valueItem.id}
                            className={UserFormCSS.categoryInputs}
                          >
                            <InputField
                              label={valueItem.label}
                              id={valueItem.fieldName}
                              name={valueItem.fieldName}
                              type={valueItem.fieldType}
                              value={
                                formData[
                                  valueItem.fieldName as keyof FormDataFields
                                ]
                              }
                              options={valueItem?.options}
                              onChange={(e: any) => {
                                onChangeHandler(e);
                              }}
                            />
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </>
              );
            })}
          </form>
          <div className={UserFormCSS.buttonParent}>
            <button
              type="button"
              onClick={handleCancel}
              className={UserFormCSS.cancelBtn}
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className={UserFormCSS.submitBtn}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
