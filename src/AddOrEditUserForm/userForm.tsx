import { LoginController } from "../LoginModule/LoginController";
import { formField } from "./formFields";
import UserFormCSS from "./userForm.module.css";
import { InputField } from './inputField';
import { useEffect, useState } from "react";
import { FormDataFields, FormField } from "../commonComponents/types";
import { useLocation } from "react-router-dom";
export const UserForm = () => {
  const loginController = LoginController;
  const location = useLocation();
  const { id:EditId } = location.state || {};
  const { allLoginCreds } = loginController();
  const [formData, setFormData] = useState
  ({
    username:"",
    name: "",
    password: "",
    gender: "",
    role: " ",
    exp: " ",
    email:"",
    phone:"",
    city:"",
    state:"",
    Citizen_OF:"",
    id:"",
  })
  const onChangeHandler = (e:any) =>{
    const {name, value} = e.target
    setFormData((prevState)=>({...prevState, [name]:value}))
  }
  const handleSubmit = (data:any) => {
    console.log(data);
    console.log(formData)
  }
  useEffect(()=>{
    if(EditId){
        const editedUser = allLoginCreds.find((item:any)=>item.id === EditId)
        setFormData(editedUser);
    }
  }, [EditId])
  return (
    <>
      <div>
        <div>Dashboard Form</div>
        <div className={UserFormCSS.formParent}>
          <form action="">
                {formField.map((item:FormField)=>{
                    return (
                        <>
                            <InputField 
                                label={item.label}
                                id={item.fieldName}
                                name={item.fieldName}
                                type={item.fieldType}
                                value={formData[item.fieldName as keyof FormDataFields]}
                                onChange={(e:any)=>{onChangeHandler(e)}}                            
                            />
                        </>
                    )
                })}
         </form>
         <button type="button" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </>
  );
};
