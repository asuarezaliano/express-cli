# Express Notes CLI

A command-line application for managing notes with tags built using Node.js.

## Features

- Create notes with custom tags
- List all notes
- Search notes by content
- Remove individual notes
- Remove all notes
- Web interface to view notes
- Command-line interface (CLI)

## Installation

1. Clone this repository: https://github.com/asuarezaliano/express-cli.git
2. Make sure you have Node.js version 20 or higher installed
3. Navigate to the project directory:
   ```bash
   cd express-cli
   ```
4. Install dependencies using npm:
   ```bash
   npm install
   ```
   Or using yarn:
   ```bash
   yarn install
   ```

## Commands Reference

| Command         | Description             | Options                              |
| --------------- | ----------------------- | ------------------------------------ |
| `new <note>`    | Create a new note       | `--tags, -t`: Comma-separated tags   |
| `all`           | List all notes          | None                                 |
| `find <filter>` | Search notes by content | None                                 |
| `remove <id>`   | Remove a specific note  | None                                 |
| `clean`         | Remove all notes        | None                                 |
| `web [port]`    | Launch web interface    | Optional port number (default: 5000) |

## Dependencies

- `yargs`: Command-line argument parsing
- `open`: Browser opening functionality
- `jest`: Testing framework (dev dependency)
