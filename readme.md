# Specification

Build a web application that allows users to view and manage a library's collection of books and their borrowing status.

## Helpful Links

- [Angular Documentation](https://angular.io/docs)
- [Exam Guide](https://github.com/sweko/uacs-internet-programming-exams/blob/main/readme.md)

## Getting Started

To start the project, you need to install the dependencies and start the development server. The project is based on Angular, so you need to have Node.js and npm installed on your machine. You can download Node.js from [here](https://nodejs.org/en/download/). After installing Node.js, you can install the Angular CLI by running the following command:

```bash
npm install -g @angular/cli
```

After installing the Angular CLI, you can install the dependencies by running the following commands:

```bash
npm install
```

After installing the dependencies, you can start the development server by running the following command:

```bash
npm start
```

This will start both the Angular development server and the API server. The Angular development server will be available at [http://localhost:4200](http://localhost:4200), and the API server will be available at [http://localhost:3000](http://localhost:3000). 


## Data

The data is provided via an API that provides the data. The url of the API is [https://localhost:3000](https://localhost:3000).

The api exposes the following endpoints:

- `GET /books` - Returns a list of books
- `GET /books/:id` - Returns a single book by ID
- `POST /books` - Creates a new book
- `PUT /books/:id` - Updates an existing book
- `DELETE /books/:id` - Deletes an existing book

- `GET /categories` - Returns a list of book categories

- `GET /publishers` - Returns a list of publishers
- `GET /publishers/:id` - Returns a single publisher by ID
- `GET /publishers?name=<publisher-name>` - Returns a single publisher by name

### Book Data

The format of the `book` object is as follows:

```jsonc
{
    "id": "number", // required, unique for each book
    "title": "string", // required
    "author": "string", // required
    "isbn": "string", // optional
    "publishedYear": "number", // required
    "publisher": "string", // must be a valid publisher from the publishers endpoint
    "categories": ["string"], // an array of strings, each string is a valid category, can be empty
    "available": "boolean", // whether the book is currently available for borrowing
    "condition": "string", // required one of: "New", "Good", "Fair", "Poor"
    "language": "string" // optional
}
```

### Category Data

The format of the `category` object is as follows

```jsonc
{
    "id": "number",  // required, unique for each category
    "name": "string" // required
}
```

### Publisher Data

The format of the `publisher` object is as follows:

```jsonc
{
    "id": "number",  // required, unique for each publisher
    "name": "string", // required
    "country": "string", // optional
    "foundedYear": "number", // optional
    "active": "boolean", // required
}
```

### Notes

- It is not guaranteed that all books will have all fields populated (all required fields **will be** populated)
- The publisher field of the book object is a string that represents the publisher's name. It is guaranteed that the publisher will have an entry in the publishers endpoint
- Not all categories will be used in every book
- A book can have multiple or no categories

## Application structure

The application should consist of the following pages:

- Book list page, available at `/books`
- Book details page, available at `/books/:id`
- Book edit page, available at `/books/:id/edit`
- Book create page, available at `/books/create`
- ***Bonus***: Publisher list page, available at `/publishers`
- ***Bonus***: Publisher details page, available at `/publishers/:id`
- ***Bonus***: Statistics page, available at `/statistics`
- About page, available at `/about`

Additionally, the application should have the following features:

- The home page should be the book list page
- The application should have a navigation bar that allows the user to navigate between the pages
- The application should have a footer that displays the current year, the student details (ID and name) and a link to the about page

### Book List Page

The book list page should display a list of books, with the following information:

#### Data Format

The list of books should show the following information:

- ID: The ID of the book
- Title: The title of the book
- Author: The author of the book
- ISBN: The ISBN of the book
- Published Year: The year the book was published
- Publisher: The name of the publisher (***Bonus***: make this a link to the publisher details page)
- Categories: The categories of the book, separated by commas
- Status: Whether the book is available or borrowed
- Condition: The condition of the book
- Language: The language of the book

#### Actions

Every list item should have the following actions:

- View: Navigates to the book details page
- Edit: Navigates to the book edit page
- Delete: Deletes the book from the list
- ***Bonus***: Borrow/Return: If the book is available, shows a "Borrow" button that changes the availability. If the book is not available, shows a "Return" button.

The delete action should display a confirmation dialog before deleting the book. ***Bonus*** The confirmation dialog should be a modal dialog (not a default browser one).

#### Add Book

The page should have a button that allows the user to add a new book. Clicking on the button should navigate to the book create page. For details on the book create page, see the book edit page description.

#### Sorting (**bonus**)

All fields displayed should be sortable, i.e. clicking on the column header should sort the list by that column. The default sort order should be ascending, and clicking on the same column header again should reverse the sort order. The current sort order should be indicated by an arrow next to the column header. The arrow should point up for ascending order and down for descending order. If the column is not sorted, the arrow should not be displayed, or should be greyed out.

#### Filtering (**bonus**)

The list should be filterable by the following fields:

- Title: The title of the book (free entry text box, with partial filtering)
- Author: The author of the book (free entry text box, with partial filtering)
- Publisher: Dropdown list of publishers (the list should be populated from the data)
- Category: Dropdown list of categories (the list should be populated from the data)
- Status: Radio buttons for "All", "Available", and "Borrowed"
- Language: Dropdown list of available languages

### Book Details Page

The book details page should display the details of a single book, with the following information:

#### Data Format

- ID: The ID of the book
- Title: The title of the book
- Author: The author of the book
- ISBN: The ISBN of the book
- Published Year: The year the book was published
- Publisher: The name of the publisher (***Bonus***: make this a link to the publisher details page)
- Categories: The categories of the book, in a list format
- Status: Whether the book is available or borrowed
- Condition: The condition of the book
- Language: The language of the book
- Actions:
  - Edit: Navigates to the book edit page
  - Delete: Deletes the book from the system
  - ***Bonus***: Borrow/Return: Based on availability status
- ***Bonus***: Similar Books: A list of books that share at least two categories with the current book

### Book Edit Page

The book edit page should allow the user to edit the details of a single book, with the following information:

- ID: The ID of the book (read only)
- Title: The title of the book (required, editable via text box)
- Author: The author of the book (required, editable via text box)
- ISBN: The ISBN of the book (optional, editable via text box)
- Published Year: The year the book was published (required, editable via number input)
- Publisher: The publisher of the book (required, editable via dropdown list populated from publishers endpoint)
- Categories: The categories of the book (required, multiple selection allowed, populated from categories endpoint)
- Condition: The condition of the book (required, radio buttons: New, Good, Fair, Poor)
- Language: The language of the book (optional, editable via text box)

The page should have a save button that saves the book and navigates back to the book details page.

### Publisher List Page

The publisher list page should display a list of publishers, with the following information:

- ID: The ID of the publisher
- Name: The name of the publisher
- Country: The country of the publisher
- Founded Year: The year the publisher was founded
- Status: Whether the publisher is active
- **Bonus**: Number of Books: The number of books published by this publisher

### Publisher Details Page

The publisher details page should display the details of a single publisher, with the following information:

- ID: The ID of the publisher
- Name: The name of the publisher
- Country: The country of the publisher
- Founded Year: The year the publisher was founded
- Status: Whether the publisher is active
- Books: A list of books published by this publisher
  - Each book should be a link to its details page
  - Should show the book's title, author, and published year
- **Bonus**: Statistics
  - Total number of books
  - Number of books by category
  - Number of books by language
  - Average books per year since founding

### Statistics Page

The statistics page should display the following information:

- Total number of books
- Total number of publishers
- Total number of categories
- Number of available books
- Number of borrowed books
- ***Bonus***: Books by condition (count for each condition)
- ***Bonus***: Books by language (count for each language)

### About Page

The about page should display the following information:

- The name of the student
- The ID of the student
- The current year
- A link to the github repository of the project
- Any other information that the student wishes to display

## Technical Requirements

- The application should be implemented using Angular, based on the provided scaffolding
- The application should be implemented using the following components (at least):
    - A component for the book list page
    - A component for the book details page
    - A component for the book edit page
    - A component for the book create page
    - ***Bonus*** A component for the publisher list page
    - ***Bonus*** A component for the publisher details page
    - ***Bonus*** A component for the statistics page
    - A component for the about page
    - A component for the navigation bar
    - A component for the footer
- The application should have a (at least one) service that provides access to the API data
- The components should use the service to access the data, and should not access the API directly
- The application should have a routing module that defines the routes for the pages
