# YouTube Note-Taking App

A web application that allows users to take, manage, and organize notes while watching YouTube videos. The app integrates with YouTube's API to fetch video details and provides a seamless experience for adding, searching, editing, and deleting notes linked to specific video timestamps.

## Live Project Link : [NoteMate](https://notematebypradeep.netlify.app/)
## Features

- **Add and Edit Notes**: Create and edit notes with associated timestamps from YouTube videos.
- **Search Functionality**: Search notes by title or content to quickly find relevant information.
- **Pagination**: Navigate through notes with pagination for better organization and readability.
- **Responsive Design**: Adaptive UI for mobile and desktop, including a floating "Add Note" button that opens a modal form on small screens.
- **Theme Support**: Light and dark themes to enhance user experience based on preference.
- **Local Storage**: Persist notes in local storage to ensure data is retained across sessions.
- **Video-Specific Notes**: Associate notes with specific videos using their `videoId`.

## Technologies Used : 
- React: Front-end library for building user interfaces.
- Redux: State management for handling notes and video data.
- React Hook Form: Form handling and validation.
- react-youtube : Fetch video details and timestamps.
- Tailwind CSS: Utility-first CSS framework for styling.

## Usage

1. **Adding Notes :**
   - Click the floating "Add Note" button to open the modal form.
   - Enter the note title and content, and the current timestamp from the video will be recorded.
   - Click "Add Note" to save.
2. **Editing Notes:**

   - Click the "Edit" button on an existing note to toggle edit mode.
   - Update the note content and click "Save" to apply changes.

3. **Deleting Notes:**

    - Click the "Delete" button on a note to remove it from the list.

4. **Searching Notes:**

    - Use the search bar to filter notes by title or content.
    Navigating Notes:

    - Use pagination controls to move between pages of notes.


## Installation

1. **Clone the repository:**

   ```
   git clone https://github.com/pradeepmaurya2023/NoteMate.git
   ```

2. **Installation:**

   ```
   npm install
   ```

3. **To Start Server:**

   ```
   npm run dev
   ```

4. **To Visit App:**

   ```
   localhost:5173
   ```



