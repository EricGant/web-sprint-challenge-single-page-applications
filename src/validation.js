import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
    .string()
    .required("Name is required")
    .min(2, "name must be at least 2 characters"),
  size:yup.string().oneOf(['Small','Medium','Large']).required(),
  specialInstructions:yup.string(),
  pepperoni:yup.boolean(),
  sausage:yup.boolean(),
  bacon:yup.boolean(),
  cheese:yup.boolean(),
  ham:yup.boolean()
});

export default formSchema