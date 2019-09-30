import React from "react";

interface DeleteButtonProps {
  handleDelete: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = props => {
  return (
    <button onClick={props.handleDelete} className={`btn deleteArticle`}>
      <i className="ion-android-delete"></i>
      <span> Delete Article</span>
    </button>
  );
};

export default DeleteButton;
