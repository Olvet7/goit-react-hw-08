import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactList from "../components/Contacts/ContactList/ContactList";
import { fetchContacts } from "../redux/contacts/operations";
import SearchBox from "../components/SearchBox/SearchBox";
import { Toaster } from "react-hot-toast";
import ContactForm from "../components/ContactForm/ContactForm";
import { selectContacts } from "../redux/contacts/selectors";

// Contacts
export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectContacts);

  return (
    <div>
      <Toaster/>
      {/* <p>There are your Contact list</p> */}
      <ContactForm />
      {contacts.length > 0 && <SearchBox />}
      <ContactList />
    </div>
  );
}
