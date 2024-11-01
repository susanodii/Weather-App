import * as yup from "yup";

const ValidationSchema = yup.object({
  city: yup.string().required("City name required"),
});

export default ValidationSchema;
