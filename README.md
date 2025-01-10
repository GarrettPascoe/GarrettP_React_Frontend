# GarrettP_React_Frontend

## Project Description:

This React-Vite app is the frontend of my personal portfolio website [garrettpascoe.com](https://garrettpascoe.com/).
The backend is built using Django and has a seperate reposity called GarrettP_Django_Backend.
The React components are organized into multiple folders located within src/components.

- The content folder contains components that form the content on the pages such as
  textboxes. Many of these were created using MaterialUI components.
- The forms folder contains the forms that use axios to communicate and pass information
  to the Django backend of the website. (I currently have the functionality of submitting
  images to the backend, however, I am still working on embedding my AI classification model
  into my backend within the limitations of Azure's low budget plans.)
- The mobilePages folder will contain alternate components that will be used to render
  pages on mobile devices.
- The navigation folder contains all components dealing with navigating to other pages
  or other websites such as links to my Github and LinkedIn.
- The pages folder contains the components that comprise each webpage such as Home, About,
  etc...
- The pageSegments folder includes the components that are shared by almost every page.
  These are the Header, Footer, and Background.
