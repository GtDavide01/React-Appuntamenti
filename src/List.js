import React from "react";

const List = (props) => {
  return (
    <ul className="user-list">
      {props.data.map((person) => (
        <li key={person.id}>
          <Person {...person} removePerson={props.removePerson} />
        </li>
      ))}
    </ul>
  );
};

const Person = ({ id, nome, stato, img, removePerson }) => {
  return (
    <article>
      <img src={img} alt="prs" className="person-img" />
      <div className="person-info">
        <div className="person-action">
          <h4>{nome}</h4>
          <button className="btn" onClick={() => removePerson(id)}>
            {" "}
            X{" "}
          </button>
        </div>
        <p>{stato}</p>
      </div>
    </article>
  );
};

export default List;
