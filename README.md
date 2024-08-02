# npx create-file command

## Project Overview

This project demonstrates how to create a Node.js command-line tool that generates files with standard JSDoc file-level comments. The tool includes features to add author information from Git, the current date, and a description.

### Key Features

- **File-Level Comments**: Automatically adds a JSDoc comment with a description, author name from Git, and the current date.
- **File Existence Check**: Ensures that the file is not overwritten if it already exists.
- **Command-Line Interface**: Easy-to-use CLI with options for filename and description.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd create-file-command
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Link the package globally:
   ```bash
   npm link
   ```

### Usage

To create a new file with a JSDoc file-level comment, use the following command:
```bash
npx create-file --filename example.js --description "This is an example file"
```

### Example

Running the above command will create a file named `example.js` with the following content:
```javascript
/**
 * @file This is an example file
 * @fileauthor Your Git Username
 * @date 2024-08-02
 */

// Your code here
```