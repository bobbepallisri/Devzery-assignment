import React, { useEffect } from 'react';

const PostComments = ({ postId, onFetchComments, comments }) => {
  // Fetch comments on button click
  const handleFetchComments = () => {
    console.log(`Fetching comments for postId: ${postId}`); // Log postId to ensure it's correct
    onFetchComments(postId);
  };

  return (
    <div className="space-y-4">
      <button
        onClick={handleFetchComments}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Fetch Comments
      </button>

      {/* Display comments if they are available */}
      {comments.length > 0 ? (
        <div className="mt-4 space-y-2">
          <h3 className="text-xl font-semibold">Comments:</h3>
          <ul className="space-y-2">
            {comments.map((comment) => (
              <li key={comment.id} className="p-4 bg-gray-100 rounded">
                <p className="font-bold">{comment.name} ({comment.email})</p>
                <p>{comment.body}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No comments available. Click the button to fetch comments.</p>
      )}
    </div>
  );
};

export default PostComments;
