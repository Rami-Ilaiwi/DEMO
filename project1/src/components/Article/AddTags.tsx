import React from "react";

interface tagsProps {
  tagsList: string[];
  handleDelete: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const AddTags: React.FC<tagsProps> = props => {
  return (
    <ul>
      {props.tagsList.map((tag, index: number) => (
        <li className="tagList" key={index}>
          <i
            className="ion-close"
            style={{ cursor: "pointer" }}
            onClick={props.handleDelete}
            id={tag}
          ></i>
          <span> {tag}</span>
        </li>
      ))}
    </ul>
  );
};

export default AddTags;
