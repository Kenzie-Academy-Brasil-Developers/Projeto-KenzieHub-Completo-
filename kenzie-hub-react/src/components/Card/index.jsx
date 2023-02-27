// import uuid from 'react-uuid';
import { BsTrash } from "react-icons/bs";
import CardTechstyled from "../../Styles/Card";

function Card({ elem, RemoveTech }) {
  return (
    <CardTechstyled>
      <ul>
        <li>
          <p>{elem.title}</p>
          <div className="trash">
            <span>{elem.status}</span>
            <button
              id={elem.id}
              onClick={(event) => RemoveTech(event.currentTarget.id)}
              className="RemoveTech"
            >
              <BsTrash />
            </button>
          </div>
        </li>
      </ul>
    </CardTechstyled>
  );
}

export default Card;
