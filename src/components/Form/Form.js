import { Formik, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import PropTypes from 'prop-types';
import { FormBox, InputName, InputTel, Button } from './Form.styled';

const initialValues = {
  name: '',
  number: '',
};

export default function ContactForm({ onSubmit }) {
  function handleSubmit({ name, number }, { resetForm }) {}
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
    >
      <FormBox autoComplete="off">
        <label>
          <span>Name</span>
        </label>
        <label>
          <span>Tel</span>
        </label>
        <Button type="submit">Add contact</Button>
      </FormBox>
    </Formik>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
