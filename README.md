API Chaining Dashboard
Overview
This is a responsive web application demonstrating API chaining, where one API's response is used as input for subsequent API requests. It allows the user to:

Fetch a list of users
Create a post by selecting a user and inputting post details
Fetch comments related to the created post
The project uses React.js for building the interface, Axios for making API calls, and Tailwind CSS for styling. It showcases how to handle asynchronous operations, state management, and API chaining using both GET and POST requests.

Features
Fetch Users List: Makes a GET request to retrieve a list of users.
Create Post: Allows the user to create a new post associated with a specific user by making a POST request.
Fetch Comments: After creating a post, the user can fetch comments related to that post via a GET request.
Error Handling: Proper error messages are displayed when API requests fail.
Loading Indicators: Loader component is shown while fetching data to enhance user experience.
Technical Stack
React.js: For building the user interface and managing component states.
Tailwind CSS: For styling the application.
Axios: For making HTTP requests to the provided APIs.
Git: For version control.
Requirements
Node.js and npm installed on your local machine.
Installation
Clone the repository:

bash
Copy code
git clone <repository-url>
Navigate to the project folder:

bash
Copy code
cd api-chaining-dashboard
Install the required dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
The application will open on http://localhost:3000 in your default web browser.

Usage
Fetch Users: Click the Fetch Users button to retrieve the list of users.
Create Post: After fetching users, a form will appear to create a post. Select a user from the dropdown, add a title and body, then click Create Post.
Fetch Comments: After creating a post, click the Fetch Comments button to retrieve comments for that post.
File Structure
java
Copy code
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── ApiChain.js          // Main component that handles the API chaining logic
│   │   ├── UserList.js          // Displays the list of users fetched from the API
│   │   ├── CreatePostForm.js    // Form to create a post
│   │   ├── PostComments.js      // Displays comments for a post
│   │   ├── Loader.js            // Loading indicator component
│   │   └── Error.js             // Error message component
│   ├── App.js                   // Main app file
│   ├── index.js                 // Entry point of the React app
│   └── styles.css               // Additional styling
├── package.json
└── README.md
APIs Used
Get Users List:

URL: https://jsonplaceholder.typicode.com/users
Method: GET
Response: Array of user objects (id, name, email)
Create Post:

URL: https://jsonplaceholder.typicode.com/posts
Method: POST
Request Body:
json
Copy code
{
  "title": "string",
  "body": "string",
  "userId": "number"
}
Response: Created post object (id, title, body, userId)
Get Comments by Post:

URL: https://jsonplaceholder.typicode.com/comments?postId={postId}
Method: GET
Response: Array of comment objects (id, name, email, body)
Assumptions and Decisions
API Mock Data: The project uses mock APIs from jsonplaceholder.typicode.com for demonstration purposes.
Data Flow: The post creation process relies on user selection from the fetched user list. The created post’s postId is used to fetch comments.
Error Handling: Simple error handling is implemented to inform the user when API calls fail.
Known Issues
The application assumes successful API responses and does not handle more complex cases like partial data or invalid API responses.
Video Demo
Link to demo video (replace with actual link).
Conclusion
This project demonstrates how to build a functional and responsive API chaining dashboard using React.js, Tailwind CSS, and Axios. It emphasizes handling multiple API calls, managing component state, and providing a smooth user experience.

