export interface FormField {
  label: string;
  fieldName: string;
  fieldType: string;
  options?:string[];
  category: string;
  validations:any;
  id?:string;
}
export interface FormDataFields {
  username: string;
  name: string;
  password: string;
  gender: string;
  role: string;
  exp: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  Citizen_OF: string;
  id: string;
}
