# VS Code Prompt Editor

The Prompt Editor is a powerful VS Code extension for effortless management of AI prompts, enabling seamless import, search, organization, insertion, editing, and reuse of prompt snippets.

## Overview

The extension is built using TypeScript and integrates with the Visual Studio Code API for editor interaction, UI creation, and file operations. It provides a keyboard-driven user interface inspired by the Raycast app for efficient prompt management. The extension does not require any external API integration or custom API usage.

The project structure includes:

- `src/extension.ts`: The main extension code.
- `src/test/extension.test.ts`: Extension tests.
- `data/prompts.json`: Centralized metadata for curated prompts.
- `prompts/curated/`: Folder for curated prompts with metadata.
- `prompts/raw/`: Folder for importing raw prompts from text files.

## Features

1. Intuitive keyboard-driven interface for efficient prompt handling.
2. Advanced search capabilities for finding prompts by name, type, tags, and other metadata.
3. Metadata management tools for organizing, tagging, and categorizing prompts.
4. Easy import of prompts from raw text files into a curated library.
5. Integration with Visual Studio Code for seamless insertion of prompts into the editor.

## Getting started

### Requirements

- Visual Studio Code
- Node.js (for extension development)

### Quickstart

1. Clone the repository or download the extension files.
2. Open the project folder in Visual Studio Code.
3. Run the `npm install` command to install dependencies.
4. Press `F5` to launch the extension in the VS Code Extension Host.
5. Use the keyboard-driven interface to manage and insert prompts.

## Extension Settings

This extension contributes the following settings:

* `promptEditor.enable`: Enable/disable this extension.
* `promptEditor.showRawPrompts`: Show raw prompts in the search results.

## Known Issues

- Prompt insertion may not work correctly in certain file types or programming languages.
- Large prompt libraries may impact performance.

## Release Notes

### 1.0.0

Initial release of the Prompt Editor VS Code extension.

### 1.0.1

- Fixed issue with prompt insertion in Python files.
- Improved search performance for large prompt libraries.

### 1.1.0

- Added support for importing prompts from URLs.
- Introduced a new "Favorites" section for frequently used prompts.

### License

Copyright (c) 2024.