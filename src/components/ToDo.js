import React from "react";
import moment from "moment";

const ToDo = ({ task, toggleChacked, removeTask, getTaskByClick }) => {
  const { isChecked, id, text, startDate } = task;

  const getCreateDate = moment(startDate).format("DD/ MM/ YYYY - hh:mm");

  return (
    <>
      <li className={isChecked ? "checked" : "unchecked"}>
        <input
          className="input-checkbox"
          type="checkbox"
          value="Done"
          defaultChecked={isChecked}
          onChange={() => toggleChacked(id)}
        />
        <div className="content-wrapper">
          <p className={"date"}>{getCreateDate}</p>
          <p className={isChecked ? "text-cnt" : "text-cnt-no"}>{text}</p>
        </div>
        <div className="button-wrapper">
          <button
            className="edit-btn"
            type="button"
            onClick={() => getTaskByClick(id, text)}
          >
            E
          </button>
          <button
            className="delete-btn"
            type="button"
            onClick={() => removeTask(id)}
          >
            X
          </button>
        </div>
      </li>
    </>
  );
};

export default ToDo;
