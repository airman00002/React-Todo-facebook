import React, { useState } from "react";
import PropTypes from "prop-types";
function Input({ addPosts }) {
  const [input, setInput] = useState("");

  function onKeyDown(event) {
    const title = event.target.value;
    if (event.key === "Enter" && title) {
      addPosts(title);
      setInput("");
    }
  }

  return (
    <div className="input">
      <div className="input__header">Create Post</div>
      <input
        className="input__field"
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        onKeyDown={onKeyDown}
      />
    </div>
  );
}

Input.propTypes = {
  addPosts: PropTypes.func.isRequired,
};

export default Input;
