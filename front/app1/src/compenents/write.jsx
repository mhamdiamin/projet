import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = ({ user, addPost, editPost, currentPost }) => {
  const [title, setTitle] = useState(currentPost ? currentPost.title : '');
  const [content, setContent] = useState(currentPost ? currentPost.content : '');
  const [category, setCategory] = useState(currentPost ? currentPost.category : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = { title, content, category, author: user.userName };
    if (currentPost) {
      editPost(post);
    } else {
      addPost(post);
    }
    setTitle('');
    setContent('');
    setCategory('');
  };

  return (
    <div>
      <h2>{currentPost ? 'Edit Post' : 'Create a New Post'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Content:</label>
          <ReactQuill value={content} onChange={setContent} />
        </div>
        <div>
          <label>Category:</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} required>
            <option value="">Select Category</option>
            <option value="art">Art</option>
            <option value="science">Science</option>
            <option value="technology">Technology</option>
            {/* Add more categories as needed */}
          </select>
        </div>
        <button type="submit">{currentPost ? 'Update Post' : 'Submit'}</button>
      </form>
    </div>
  );
};

export default Write;
