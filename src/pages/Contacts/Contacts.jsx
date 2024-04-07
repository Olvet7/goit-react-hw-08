import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContactList from "../../components/Contacts/ContactList/ContactList";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactForm from "../../components/ContactForm/ContactForm/";

// Contacts
export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {/* <p>There are your Contact list</p> */}
      <ContactForm />
      <ContactList />
    </div>
  );
}
