import * as Yup from 'yup';

export const ValidateFR = Yup.object({
  line1: Yup.string().min(6).max(25).required(' Address is required'),
  country: Yup.string().required('Please select a country').oneOf(['GB', 'FR'], 'Invalid Country'),
  postcode: Yup.string().matches(/^\d{5,7}$/, 'Invalid Postcode').required('Please Enter the Postcode'),
});
