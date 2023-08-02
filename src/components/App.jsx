import { useDispatch, useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import { AppBox } from './App.styled';
import { getContacts } from '../redux/selectors';
import { addContact } from '../redux/contactsSlice';
import Form from './Form/Form';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

export default function App() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  return <AppBox></AppBox>;
}
