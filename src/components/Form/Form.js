import { Formik, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import PropTypes from 'prop-types';
import { FormBox, InputName, InputTel, Button } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, getContacts } from '../../redux/contactsSlice';
import { toast } from 'react-toastify';

const initialValues = {
  name: '',
  number: '',
};

const userSchema = object({
  name: string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),
  number: string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

export default function ContactForm() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  function handleSubmit({ name, number }, { resetForm }) {
    try {
      if (contacts.some(contact => contact.number === number)) {
        toast.error(`${number} is already in contacts.`);
      } else {
        dispatch(addContact(name, number));
      }
    } catch (error) {
      console.error('Error occurred:', error.message);
    }
    resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
    >
      <FormBox autoComplete="off">
        <label>
          <span>Name</span>
          <InputName type="text" name="name" />
          <ErrorMessage name="name" />
        </label>
        <label>
          <span>Tel</span>
          <InputTel type="tel" name="number" />
          <ErrorMessage name="number" />
        </label>
        <Button type="submit">Add contact</Button>
      </FormBox>
    </Formik>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
