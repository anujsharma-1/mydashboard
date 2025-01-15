export const formField = [
  {
    label: "Username",
    fieldName: "username",
    fieldType: "text",
    category: "User_Details",
    validations:{required: true, duplicateError: true },
  },
  {
    label: "Full Name",
    fieldName: "name",
    fieldType: "text",
    category: "User_Details",
    validations:{required: true },
  },
  {
    label: "Password",
    fieldName: "password",
    fieldType: "password",
    category: "User_Details",
    validations:{required: true, minLength: 8 },
  },
  {
    label: "Gender",
    fieldName: "gender",
    fieldType: "option",
    category: "User_Details",
    options: ["Male", "Female", "Prefer not to say"],
    validations:{required: true },
  }, // ye option m chhaiye

  {
    label: "Role",
    fieldName: "role",
    fieldType: "option",
    category: "Professional_Details",
    options: ["User", "Admin", "Super Admin"],
    validations:{required:true},
  }, // ye options m chahiye
  {
    label: "Experience",
    fieldName: "exp",
    fieldType: "text",
    category: "Professional_Details",
    validations:{required:true},
  },

  {
    label: "Email",
    fieldName: "email",
    fieldType: "email",
    category: "Contact_Details",
    validations:{required:true, duplicateError:true}
  },
  {
    label: "Phone",
    fieldName: "phone",
    fieldType: "tel",
    category: "Contact_Details",
    validations:{required:true, minLength:10, maxLength:10, duplicateError:true}
  },

  {
    label: "City",
    fieldName: "city",
    fieldType: "text",
    category: "Address_Details",
  },
  {
    label: "State",
    fieldName: "state",
    fieldType: "text",
    category: "Address_Details",
  },
  {
    label: "Citizen Of",
    fieldName: "Citizen_OF",
    fieldType: "text",
    category: "Address_Details",
    validations:{required:true}
  },

  {
    label: "ID",
    fieldName: "id",
    fieldType: "text",
    category: "User_Details",
    secretive: true,
  }, // ye nhi  chhaiye
];

export const categoryArray = [
  "User_Details",
  "Professional_Details",
  "Contact_Details",
  "Address_Details",
];
