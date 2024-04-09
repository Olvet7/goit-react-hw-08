import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContactList from "../../components/Contacts/ContactList/ContactList";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactForm from "../../components/ContactForm/ContactForm/";
import SearchBox from "../../components/SearchBox/SearchBox";
import { Toaster } from "react-hot-toast";

// Contacts
export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Toaster/>
      {/* <p>There are your Contact list</p> */}
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
