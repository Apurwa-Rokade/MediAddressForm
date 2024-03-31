import * as Yup from 'yup';

export const ValidateGB = Yup.object({
  line1: Yup.string().min(6).max(25).required('Please Enter the Address'),
  line2: Yup.string().min(6).max(25).notRequired(), // Optional for GB address
  country: Yup.string().required('Please select a country').oneOf(['GB', 'FR'], 'Invalid Country'),
  postcode: Yup.string().matches(/^[A-Z]{1,2}[0-9][A-Z]?\s?[0-9][A-Z]{2}$/, 'Invalid Postcode').required('Please Enter the Postcode'),
  
});