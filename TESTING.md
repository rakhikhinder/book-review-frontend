## 🧪 Full Testing Report

### 🔐 Authentication Testing

![Sign Up](https://github.com/rakhikhinder/book-review-frontend/blob/main/src/assets/images/WhatsApp%20Image%202025-04-05%20at%2021.44.54_80e859fe.jpg)
* Sign Up form is working correctly with validation and error handling.

![User Already Exists](https://github.com/rakhikhinder/book-review-frontend/blob/main/src/assets/images/WhatsApp%20Image%202025-04-05%20at%2021.45.09_9c32854d.jpg)
* Proper error is displayed when trying to register an already existing user.

### ✅ Tested Functionalities

| No | Test Case | Input | Expected Result | Status |
|:--:|:----------|:------|:----------------|:-------|
| 1 | Sign Up with valid details | Unique email, username, password | Account created & redirected to home | ✅ Pass |
| 2 | Sign Up with existing email | Existing user email | Show error "User already exists" | ✅ Pass |
| 3 | Sign In with correct credentials | Valid email & password | Logged in successfully | ✅ Pass |
| 4 | Sign In with incorrect credentials | Wrong password | Show error "Invalid credentials" | ✅ Pass |
| 5 | Empty form submission | Empty fields | Show validation errors | ✅ Pass |
| 6 | Toggle between Sign In/Sign Up | Click toggle link | Switches form view | ✅ Pass |
| 7 | Password visibility toggle | Eye icon click | Show/hide password | ✅ Pass |

---

### 🛠️ Solved Bugs

![Sign Up](https://github.com/rakhikhinder/book-review-frontend/blob/main/src/assets/images/photo_6307711004267627937_y%20(1).jpg)

| No | Bug | How I solved the issue |
| :--- | :--- | :--- |
| 1 | Sign-in Module Layout Issues & Pop-up Visibility. | Wrapped the sign-in module in a Bootstrap container-fluid with row/col classes. Used React state to toggle pop-up: `{showPopup && <Modal />}`. Added `z-index: 1050` to modal CSS (Bootstrap modals use 1040 by default). |
| 2 | Carousel Slide (Hero Section) Not Smooth | Replaced custom carousel with React Slick. Added CSS: `.slick-track { will-change: transform; }`. Configured autoplay speed: `autoplaySpeed: 3000` |
| 3 | Book Grid Layout & Click Description Failure | Applied Bootstrap’s `row-cols-*` classes for grid layout. Used event delegation (`onClick` on parent div with `data-book-id`). State-managed description visibility using `setSelectedBook(book.id)`. |
| 4 | Vote/Upvote Not Counting & Rating Stale | Used `await` on POST to Firebase: `await updateDoc(docRef, { votes: increment(1) })`. Added `useEffect` to refresh ratings with `[votes]` dependency. Debounced rapid clicks using `lodash.debounce`. |

---

![Sign In](https://github.com/rakhikhinder/book-review-frontend/blob/main/src/assets/images/photo_6307711004267627938_y.jpg)

### 🐛 Known Bugs

* On mobile touchscreens, the hover state on the Submit Review button remains, making the selected state unclear until clicked away.
* GitHub Pages throws a console warning due to Google’s FLoC being disabled — doesn't affect performance.
* Rare bug where the homepage fails to load the book description or buttons (under investigation).

---

### 📸 UI Screens

![GoodReads Store UI](https://github.com/rakhikhinder/book-review-frontend/blob/main/src/assets/images/WhatsApp%20Image%202025-04-05%20at%2021.44.54_80e859fe.jpg)

![Sign Up Error Message](https://github.com/rakhikhinder/book-review-frontend/blob/main/src/assets/images/WhatsApp%20Image%202025-04-05%20at%2021.45.09_9c32854d.jpg)

![Update Profile](https://github.com/rakhikhinder/book-review-frontend/blob/main/src/assets/images/photo_6307711004267627936_y.jpg)

---

## 🧑‍💻 Code Used

* [This YouTube tutorial](https://www.youtube.com/watch?v=0iCmz90nR9k) helped set up the initial layout and project structure.
* [RANAsVFX's tutorial](https://www.youtube.com/watch?v=jfc3dcLS7l4) for building the bookstore UI and styling.
* [Mr Web's tutorial](https://www.youtube.com/watch?v=w5V2UTQY6KA) to improve design and user experience.
* For the quiz component: manually shuffled correct and incorrect answers to ensure randomness.
* High score functionality and Firebase integration were custom-researched and implemented.

---

## ✍️ Content

All book descriptions, reviews, images, and UI instructions were created and written manually.

---

Let me know if you want this section split across multiple files or if I should push it into a GitHub repo `README.md` format for upload.
