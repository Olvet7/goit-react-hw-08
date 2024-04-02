import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContactList from "../../components/Contacts/ContactList/ContactList";
import { fetchContacts } from "../../redux/contacts/operations";

// Contacts
export default function Contacts() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
  return (
    <div>
      <h1>Contacts</h1>
      <ContactList />
    </div>
  );
}
