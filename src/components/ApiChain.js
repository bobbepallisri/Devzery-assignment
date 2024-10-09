import React, { useState } from 'react';
import axios from 'axios';
import UserList from './UserList';
import CreatePostForm from './CreatePostForm';
import PostComments from './PostComments';
import Loader from './Loader';
import Error from './Error';

const ApiChain = () => {
  const [users, setUsers] = useState([]);
  const [createdPost, setCreatedPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch Users
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (error) {
      setError('Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

  // Create Post
  const createPost = async (postDetails) => {
    setLoading(true);
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', postDetails);
      setCreatedPost(response.data);
    } catch (error) {
      setError('Failed to create post');
    } finally {
      setLoading(false);
    }
  };

  // Fetch Comments
const fetchComments = async (postId) => {
    setLoading(true);
    try {
      console.log(`Fetching comments for postId: ${postId}`); // Log postId
      const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
      console.log('Comments response:', response.data); // Log the comments response
      setComments(response.data);  // Store comments in state
    } catch (error) {
      console.error('Error fetching comments:', error); // Log the error
      setError('Failed to fetch comments');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="space-y-6">
      {loading && <Loader />}
      {error && <Error message={error} />}

      <button
        onClick={fetchUsers}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Fetch Users
      </button>

      {users.length > 0 && <UserList users={users} />}

      {users.length > 0 && (
        <CreatePostForm
          users={users}
          onCreatePost={createPost}
        />
      )}

      {/* Render PostComments if a post is created */}
      {createdPost && (
        <PostComments postId={createdPost.id} onFetchComments={fetchComments} comments={comments} />
      )}
    </div>
  );
};

export default ApiChain;
