# User Notes Manager project.

---

## Description

This is a React application that allows users to create, edit, delete, and
filter notes. The app uses two databases: indexedDB and Quinta DB.

---

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Databases](#databases)
- [Compatibility](#compatibility)
- [Technologies Used](#technologies)

---

## Installation <a id="installation"></a>

```
$ git clone https://github.com/Siryi-Oleksandr/notes-app-test.git
$ cd your-project
$ npm install
$ npm start // (will build app use indexedDB as default database)

Windows (cmd.exe)
$ npm run quinta // (will build app use Quinta database)
$ npm run indexed // (will build app use indexedDB database)

Linux, macOS (Bash)
$ npm run quinta:linux // (will build app use Quinta database)
$ npm run indexed:linux // (will build app use indexedDB database)

```

---

## Features <a id="features"></a>

- Create notes: Users can create new notes by entering a title and content for
  the note. The note is saved to the database automatically.
- Edit notes: Users can edit existing notes by clicking on the note and
  modifying its title or content. The changes are saved to the database
  automatically.
- Delete notes: Users can delete notes by clicking on the delete button above
  the note. The note is removed from the database.
- Filter notes: Users can filter their notes by typing a search query into the
  search bar. The app displays only the notes that match the query.
- Responsive layout: The app is designed to work on different screen sizes and
  devices, with a responsive layout that adapts to the user's device.

---

## Databases <a id="databases"></a>

The app uses two databases to store user notes:

- Indexed DB: This is a client-side database that is built into most modern web
  browsers. It allows the app to store notes locally on the user's device, even
  when they are offline.
- Quinta DB: This is a cloud-based database that allows the app to synchronize
  notes between multiple devices. When a user creates, edits, or deletes a note,
  the change is saved to Quinta DB and propagated to all other devices that are
  logged in to the app.

---

## Compatibility <a id="compatibility"></a>

The user notes manager is designed to be compatible with a wide range of devices
and screen sizes. The app is optimized for desktop and laptop computers, but it
can also be used on tablets and smartphones.

---

## Technologies Used <a id="technologies"></a>

- React
- indexedDB
- Quinta DB
- Axios
- idb
- Styled-components
