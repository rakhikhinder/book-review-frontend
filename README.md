![Build Status](https://img.shields.io/badge/build-passing-brightgreen) ![License](https://img.shields.io/badge/license-MIT-blue)
# Book Review Website - Frontend

## Project Overview

The **Frontend** for the **Book Review Website** allows users to explore, review, and purchase books. Built using **React.js** and **React Bootstrap**, the frontend is fully responsive and integrates seamlessly with the backend for real-time data handling. The homepage features a carousel of books, with dynamic book details pages and options for user sign-up, reviews, and ratings.

This project was developed with the help of **Manish** and **Shiwani** for frontend-related suggestions and implementation.

## Tech Stack

- **React.js**: JavaScript library for building the user interface. 
  ![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
- **React Router**: For page navigation and routing.
- **React Bootstrap**: For pre-built Bootstrap components that help in responsive and modern UI. 
  ![React Bootstrap](https://img.shields.io/badge/React%20Bootstrap-563d7c?style=flat&logo=react-bootstrap&logoColor=white)
- **React Icons**: For adding icons to elements like buttons and ratings.
  ![React Icons](https://img.shields.io/badge/React%20Icons-000000?style=flat&logo=react&logoColor=white)
- **Axios**: For making HTTP requests to the backend.
  ![Axios](https://img.shields.io/badge/Axios-5A29E3?style=flat&logo=axios&logoColor=white)


## Installation

1. Clone the repository:

```bash
git clone https://github.com/rakhikhinder/book-review-frontend.git

cd book-review-frontend
npm install
npm start

#### **4. Folder Structure**

Provide an overview of the folder structure, which will help developers understand how the frontend code is organized.

```markdown
## Folder Structure

book-review-frontend/frontend
│ ├── public/ # Static files (e.g., index.html)
├── src/ # Source files
 │ ├── assets/ # Images, fonts, icons
│ ├── components/ # Reusable components like Navbar, Footer, BookCard
│ ├── pages/ # Page components (e.g., Home, BookDetails)
│ ├── styles/ # Global CSS and styled-components
│ ├── App.js # Main React component
 │ └── index.js # React entry point
│ └── README.md # Project documentation




#### **5. Usage and Functionality**

Describe the key functionality of the frontend, and briefly explain how each major component works.

```markdown
## Usage and Functionality

### Home Page
The homepage features a **carousel** of books that users can browse. Each book on the carousel is clickable and will take the user to the **Book Details** page.

### Book Details Page
Each book page includes:
- **Book Description**: Detailed description of the book.
- **Rating System**: Users can rate the book from 1 to 5 stars using **React Icons**.
- **Upvote/Downvote**: Users can upvote or downvote the book.
- **Buy Now Button**: Redirects to an external site (e.g., Amazon).
- **Reviews Section**: Displays reviews left by other users.


## Design and Image Usage

For the **carousel** and **book detail pages**, use high-quality book images. Place all book images inside the `src/assets/images/` directory to maintain organization.

### Carousel Images:
1. Use images with a standard size, such as `600x400 px`.
2. Ensure images are **optimized** for web (use formats like **JPEG** or **WebP** for better performance).

**Example:**

```jsx
<img src={require('../assets/images/book1.jpg')} alt="Book 1" />

<Card.Img variant="top" src={image} />

<FaStar onClick={() => handleRating(index)} style={{ cursor: 'pointer', color: index <= rating ? 'gold' : 'gray' }} />


#### **7. Styling and Responsiveness**

Explain how **React Bootstrap** is being used for styling, and provide recommendations for keeping the design responsive.

```markdown
## Styling and Responsiveness

We are using **React Bootstrap** for pre-designed components like **Grid**, **Cards**, and **Buttons** to make the website **responsive** across all devices, from mobile to desktop. 

### Mobile-First Design

- The layout is designed with **mobile-first** in mind, using **Bootstrap's Grid System**. This allows for easy adaptation to various screen sizes (e.g., mobile, tablet, desktop).
- For example, the book cards in the **Explore More Books** section are set to:
  - **`col-xs-12`**: Each card takes full width on small screens (mobile).
  - **`col-md-4`**: The cards are displayed in a 3-column grid on medium and large screens (tablets and desktops).

### Example of Responsive Grid:

```jsx
<Row>
  <Col xs={12} md={4}>
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Button variant="primary">Details</Button>
      </Card.Body>
    </Card>
  </Col>
  {/* Repeat for other books */}
</Row>

#### **4. Enhance the Image and Icon Guidelines**

Since you're using images and icons, you can provide a **detailed guide** on how to properly use images, set aspect ratios, and name conventions.

```markdown
## Design and Image Usage

For the **carousel** and **book detail pages**, high-quality images are essential for the best user experience. Ensure that each image is optimized and has a consistent aspect ratio. Place all images in the `src/assets/images/` folder.

### Image Guidelines:
- **Carousel Images**:
  - Standard size: `600x400 px` for optimal display.
  - Use **JPEG** or **WebP** format for web optimization (smaller file sizes).
  - Name images descriptively (e.g., `book1.jpg`, `book2.jpg`).

- **Book Detail Images**:
  - Consistent size: `300x400 px`.
  - Use high-quality book covers for a professional look.

**Example:**

```jsx
<Card.Img variant="top" src={require('../assets/images/book1.jpg')} alt="Book Title" />

## Contributors

- **Rakhi Khinder**: Lead frontend developer.
  - GitHub: [rakhikhinder](https://github.com/rakhikhinder)
- **Manish**: Frontend development suggestions and code reviews.
  - GitHub: [manishgithub](https://github.com/manish)
- **Shiwani**: Frontend UI design and feedback.
  - GitHub: [shiwani](https://github.com/shiwani)

A big thank you to **Manish** and **Shiwani** for their valuable contributions and feedback on the frontend!


Thank you to **Manish** and **Shiwani** for their valuable contributions!
