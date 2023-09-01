import * as yup from 'yup';

export const bankValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  status: yup.string().nullable(),
  name: yup.string().required(),
  address: yup.string().nullable(),
  ifsc_code: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
