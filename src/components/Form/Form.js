import { Formik, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import PropTypes from 'prop-types';
import { FormBox, InputName, InputTel, Button } from './Form.styled';

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
