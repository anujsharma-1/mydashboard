import { LoginController } from "../LoginModule/LoginController";
import { categoryArray, formField } from "./formFields";
import UserFormCSS from "./userForm.module.css";
import { InputField } from "./inputField";
import { useEffect, useState } from "react";
import { FormDataFields, FormField } from "../commonComponents/types";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editUserDetails } from "../LoginModule/LoginAction";
import { successToast } from "../commonComponents/toastr/toastrAction";
export const UserForm = () => {
  const loginController = LoginController;
  const location = useLocation();
  const { id: editId } = location.state || {};
  const { allLoginCreds, updateSidebarActiveTab } = loginController();
  const [categorizedFormField, setCategorizedFormField] = useState([]);
  const [error, setError] = useState<FormDataFields>({
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

  const formValidator = (fieldName: string, value: string, validations: any) => {
    if (validations?.required && value.trim().length < 1) {
      return `This field is mandatory`;
    } else if (
      validations?.maxLength &&
      !validations?.minLength &&
      value.length > validations?.maxLength
    ) {
      return `Maximum ${validations?.maxLength} characters are required`;
    } else if (
      validations?.minLength &&
      !validations?.maxLength &&
      value.length < validations?.minLength
    ) {
      return `Minimum ${validations?.minLength} characters required`;
    } else if (
      validations?.maxLength &&
      validations?.minLength &&
      validations?.maxLength !== validations?.minLength &&
      value.length > validations?.maxLength &&
      value.length < validations?.minLength
    ) {
      return `Minimum ${validations?.minLength} and maximum ${validations?.maxLength} character are required`;
    } else if (
      validations?.maxLength === validations?.minLength &&
      validations?.maxLength &&
      validations?.minLength && value.length !== validations.minLength
    ) {
      return `Exactly ${validations?.maxLength} characters are required`
    } else if (validations?.duplicateError) {
      for(let i=0;i<allLoginCreds.length;i++){
        if(allLoginCreds[i][fieldName] === value && editId !== allLoginCreds[i].id){
          return `This field must be unique`;
        }
      }
    }
    return "";
  };
  const validateFields = () => {
    let newError:FormDataFields={
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
    };
    formField.forEach((item)=>{
      const error = formValidator(item.fieldName, formData[item.fieldName as keyof FormDataFields], item.validations)
      if(error)newError[item.fieldName as keyof FormDataFields] = error;
      else if(item.fieldName in newError) delete newError[item.fieldName as keyof FormDataFields];
    })
    setError(newError);
    if(Object.keys(newError).length > 0)
      return true;
    else  
      return false
  }
  const handleSubmit = (data: any) => {
    if(validateFields()){
      return true;
    }
    dispatch(editUserDetails(formData));
    dispatch(successToast({
      message:"Data Submitted Successfully"
    }))
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
                <div key={index} className={UserFormCSS.categoryParent}>
                  <div className={UserFormCSS.categoryHeading}>
                    {keyItem.key}
                  </div>
                  <div className={UserFormCSS.categoryInputsParent}>
                    {keyItem.value.map((valueItem: FormField, index:number) => {
                      return (
                        <span
                          key={index}
                          className={UserFormCSS.categoryInputs}
                        >
                          <InputField
                            label={valueItem.label}
                            id={valueItem.fieldName}
                            name={valueItem.fieldName}
                            type={valueItem.fieldType}
                            required={valueItem?.validations?.required}
                            value={
                              formData[
                                valueItem.fieldName as keyof FormDataFields
                              ]
                            }
                            options={valueItem?.options}
                            onChange={(e: any) => {
                              onChangeHandler(e);
                            }}
                            error={error[valueItem.fieldName as keyof FormDataFields]}
                          />
                        </span>
                      );
                    })}
                  </div>
                </div>
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
