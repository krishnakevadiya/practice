import React from "react";

const Editpage = () => {
  return (
    <div>
      <form>
        <input data-testid="edit-task-title" />
        <select data-testid="edit-select-option">
          <option value="true"></option>
          <option value="false"></option>
        </select>
        <button data-testid="edit-update">Update</button>
      </form>
    </div>
  );
};

export default Editpage;
