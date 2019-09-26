import React from "react";

interface TagListProps {
  tagList: Array<string>;
}

const TagList = (props: TagListProps) => {
  return (
    <ul>
      {props.tagList.map((item: string, index: number) => {
        return (
          <li key={index} className="tagList">
            {item}
          </li>
        );
      })}
    </ul>
  );
};
// TagList.defaultProps = {
//     tagList:[]
// }
export default TagList;
