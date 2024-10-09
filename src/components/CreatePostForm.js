import React, { useState } from 'react';

const CreatePostForm = ({ users, onCreatePost }) => {
  const [postDetails, setPostDetails] = useState({ title: '', body: '', userId: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!postDetails.userId) {
      alert('Please select a user');
      return;
    }
    onCreatePost(postDetails);
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">Create Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <select
          value={postDetails.userId}
          onChange={(e) => setPostDetails({ ...postDetails, userId: e.target.value })}
          className="block w-full px-4 py-2 border border-gray-300 rounded"
        >
          <option value="">Select a user</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Title"
          value={postDetails.title}
          onChange={(e) => setPostDetails({ ...postDetails, title: e.target.value })}
          className="block w-full px-4 py-2 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Body"
          value={postDetails.body}
          onChange={(e) => setPostDetails({ ...postDetails, body: e.target.value })}
          className="block w-full px-4 py-2 border border-gray-300 rounded"
        />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePostForm;
