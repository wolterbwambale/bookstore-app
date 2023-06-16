import React from 'react';

function InputForm() {
  return (
    <div>
      <form>
        <input type="text" placeholder="Add title" />
        <input type="text" placeholder="Auther" />
        <button type="submit">Add</button>
      </form>

    </div>
  );
}

export default InputForm;
