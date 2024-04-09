import { Gi3DMeeple } from "react-icons/gi";
import { GiPerspectiveDiceSixFacesOne } from "react-icons/gi";
import css from "../Contact/Contact.module.css";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { deleteContact } from "../../../redux/contacts/operations";
import { useState } from "react";

export default function Contact({ contact }) {
  const dispatch = useDispatch();
   
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleting = () => {
    if (isDeleting) { 
      return
    } else {
      setIsDeleting(true)
    }

    dispatch(deleteContact(contact.id))
            .unwrap()
            .then(() => {
              toast.success("Contact deleted 😁");
            })
            .catch(() => {
              toast.error("Something went wrong... 😥");
            })
            .finally(() => {
              setIsDeleting(false);
            })
  }

  return (
    <div className={css.card}>
      <ul className={css.item}>
        <li className={css.text}>
          <Gi3DMeeple size="24" />
          {contact.name}
        </li>
        <li className={css.text}>
          <GiPerspectiveDiceSixFacesOne size="24" />
          {contact.number}
        </li>
      </ul>
      <button
        onClick={handleDeleting}
        className={css.btn}
        type="button"
        disabled={isDeleting}
      >
        Delete
      </button>
    </div>
  );
}

// export const Contact = ({ name, number, onDelete }) => {
//   return (
//     <div className={css.card}>
//       <ul className={css.item}>
//         <li className={css.text}><Gi3DMeeple size="24"/>{name}</li>
//         <li className={css.text}><GiPerspectiveDiceSixFacesOne size="24"/>{number}</li>
//       </ul>
//       <button type="button" className={css.btn} onClick={onDelete}>
//         Delete
//       </button>
//     </div>
//   );
// };
