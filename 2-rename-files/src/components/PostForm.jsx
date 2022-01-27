import React from "react";

function PostForm(props) {
  function postPost(e) {
    e.preventDefault();
    let formData = new FormData(document.querySelector("#post-form"));
    let post = {
        sender: {
          name: formData.get("sender"),
          handle: formData.get("handle"),
        },
        body: formData.get("body"),
        timestamp: new Date().getTime()
    };
    props.submitPost(post);
  }

  return (
    <form id="post-form" onSubmit={postPost}>
      <div className="rows">
      <label>
        <span>Name</span>
        <input type="text" name="sender" id="sender" />
      </label>
      <label>
        <span>Username</span>
        <input type="text" name="handle" id="handle" />
      </label>
      <label>
        <span>Words</span>
      <input type="text" name="body" id="body" />
      </label>
      </div>
      <input type="submit" value="Submit"/>
    </form>
  );
}

export default PostForm;
