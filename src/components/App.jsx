import { useDispatch, useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import { AppBox, Empty } from './App.styled';
import { getContacts } from '../redux/selectors';
import { addContact } from '../redux/contactsSlice';
import Form from './Form/Form';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

export default function App() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  function notifiesAlert(numberContact) {
    return toast.error(`${numberContact} is already in contacts.`);
  }

  function checkContact(newNumber) {
    return contacts.some(contact => contact.number === newNumber);
  }

  function onSubmit(name, number) {
    try {
      if (checkContact(number)) {
        notifiesAlert(number);
      } else {
        dispatch(addContact(name, number));
      }
    } catch (error) {
      console.error('Error occurred:', error.message);
    }
  }

  return (
    <AppBox>
      <ToastContainer autoClose={2000} position="top-center" />
      <h1>Phonebook</h1>
      <Form onSubmit={onSubmit} />

      <h2>Contacts</h2>
      {contacts !== undefined && contacts.length > 0 ? (
        <>
          <Filter />
          <ContactsList />
        </>
      ) : (
        <Empty>Contacts list is empty</Empty>
      )}
    </AppBox>
  );
}
