import Contact from "../../Contacts/Contact/Contact";
import { useSelector } from "react-redux";
// import css from "../ContactList/ContactList.module.css";
import { selectFilteredContacts } from "../../../redux/contacts/selectors";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    // <div className={css.list}>
    //   <ul className={css.card}>
    //   {contacts.length === 0 ? (<p>No contacts, lets create some</p>) : (
    //     <div>
    //       {contacts.map((contact) => {
    //     return (
    //       <li key={contact.id}>
    //         <Contact contact={contact} />
    //       </li>
    //     );
    //   })}
    //     </div>
    //   )}
    // </ul>
    // </div>
      <ul>
      {contacts.length === 0 ? (<p>No contacts, lets create some</p>) : (
        <div>
          {contacts.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
        </div>
      )}
    </ul>
  );
}
