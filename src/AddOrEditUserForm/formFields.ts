export const formField = [
    { label: "Username", fieldName: "username", fieldType: "text", category:"User_Details" },
    { label: "Full Name", fieldName: "name", fieldType: "text", category:"User_Details"},
    { label: "Password", fieldName: "password", fieldType: "password", category:"User_Details" }, 
    { label: "Gender", fieldName: "gender", fieldType: "option", category:"User_Details", options:["Male", "Female", "Prefer not to say"] }, // ye option m chhaiye

    { label: "Role", fieldName: "role", fieldType: "option", category:"Professional_Details", options:["User", "Admin", "Super Admin"] }, // ye options m chahiye
    { label: "Experience", fieldName: "exp", fieldType: "text", category:"Professional_Details" }, 

    { label: "Email", fieldName: "email", fieldType: "email", category:"Contact_Details" },
    { label: "Phone", fieldName: "phone", fieldType: "tel", category:"Contact_Details"},       
    
    { label: "City", fieldName: "city", fieldType: "text", category:"Address_Details" },
    { label: "State", fieldName: "state", fieldType: "text", category:"Address_Details" },
    { label: "Citizen Of", fieldName: "Citizen_OF", fieldType: "text", category:"Address_Details" },
    
    { label: "ID", fieldName: "id", fieldType: "text", category:"User_Details", secretive:true }, // ye nhi  chhaiye
]

export const categoryArray = ['User_Details', 'Professional_Details', 'Contact_Details', 'Address_Details']
