import * as Yup from 'yup'

export const signUpSchema= Yup.object({
    name:Yup.string()
   .required("Please enter the required field")
   .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    email:Yup.string().email().required("Please enter your email"),
    password:Yup.string().min(8).required("Please enter your password"),

})