## Testing
![Sign Up](https://github.com/rakhikhinder/book-review-frontend/blob/main/src/assets/images/photo_6307711004267627937_y%20(1).jpg)
* Sign Up working properly 
### Solved Bugs

| No | Bug | How I solved the issue |
| :--- | :--- | :--- |
| 1 | Sign-in Module Layout Issues & Pop-up Visibility. |  Wrapped the sign-in module in a Bootstrap container-fluid with row/col classes.Used React state to toggle pop-up: {showPopup && <Modal />}.Added z-index: 1050; to modal CSS (Bootstrap modals use 1040 by default). |
| 2 | Carousel Slide (Hero Section) Not Smooth |Replaced custom carousel with React Slick. Added CSS: .slick-track { will-change: transform; }.Configured autoplay speed: autoplaySpeed: 3000 |
| 3 | Book Grid Layout & Click Description Failure. | Applied Bootstrap’s row-cols-* classes for grid layout. Used event delegation (React onClick on parent div with data-book-id).State-managed description visibility: setSelectedBook(book.id).|
| 4 | Vote/Upvote Not Counting & Rating Stale.| Used await on POST to Firebase:await updateDoc(docRef, { votes: increment(1) }).Added useEffect to refresh ratings: [votes] dependency.Debounced rapid clicks with lodash.debounce.
 |

![Sign In](https://github.com/rakhikhinder/book-review-frontend/blob/main/src/assets/images/photo_6307711004267627938_y.jpg)

### Known Bugs

* When viewing on screens that use touch rather than a cursor, the colour change for the Submit Review button selected is not immediately obvious as the hover state remains on the button. If the user clicks away from the button the colour can then been seen.

* There is a a warning displaying in the console on the live page. This error seems to be because GitHub hosted pages disable googles 3rd party cookie alternative FLoC, which then throws this error. The error doesn't affect the site in any way.

* When friends tested the site they found that very rarely site will get stuck on a home page, and it will not populate a book-description but not not the buy button functions and vote and upvote. 

- - -
![Update profile](https://github.com/rakhikhinder/book-review-frontend/blob/main/src/assets/images/photo_6307711004267627936_y.jpg)
### Code Used

* I used [this You Tube tutorial](https://www.youtube.com/watch?v=0iCmz90nR9k) to learn how to create a website and make the book store.

* As the API I used for the questions declared the correct answer and then had an array of incorrect answers, I had to find a way to shuffle the answers together so that the correct answer wouldn't always appear on the same button. 

* I had to do a bit of research into this topic myself in order to set up the high scores section of my site.

* I used this [video tutorial](https://www.youtube.com/watch?v=jfc3dcLS7l4) on YouTube by [RANAsVFX
]which taught me to how to make the book selling website.

* I used this [video tutorial](https://www.youtube.com/watch?v=w5V2UTQY6KA) on YouTube by [Mr Web](https://www.youtube.com/watch?v=w5V2UTQY6KA) to make it more attractive and user friendly
### Content

All other content for the site, such as Book details descriptions ,Reviews ,Book images and instructions were written by myself.




