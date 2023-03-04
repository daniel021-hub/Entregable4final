import React from "react";

const UserCard = ({
  user,
  deleteUser,
  setUpdatingUser,
  handleClickShowModal,
}) => {
  const handleClickEdit = () => {
    setUpdatingUser(user);
    handleClickShowModal();
  };

  return (
    <article key={user.id} className="grid-card">
      <p className="card-title">
        {user.first_name} {user.last_name}
      </p>
      <hr className="divider" />
      <ul className="card-body">
        <li>
          <span className="card-label">CORREO</span>
          <span className="card-content">{user.email}</span>
        </li>
        <li>
          <span className="card-label">CUMPLEAÑOS</span>
          <span className="card-content">
            <i className="bx bx-gift"></i> {user.birthday}
          </span>
        </li>
      </ul>
      <hr className="divider" />
      <footer className="card-footer">
        <button
          className="icon-button is-error"
          onClick={() => deleteUser(user.id)}
        >
          <i className="bx bx-trash"></i>
        </button>
        <button className="icon-button" onClick={handleClickEdit}>
          <i className="bx bx-pencil"></i>
        </button>
      </footer>
    </article>
  );
};

export default UserCard;
