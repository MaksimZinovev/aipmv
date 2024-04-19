# Produced by character: [GPTPT]Project description

Here is a detailed project description for the "Prompt Editor" VS Code extension:

**One Line Description:**
A powerful VS Code extension for effortless management of AI prompts, enabling seamless import, search, organization, insertion, editing, and reuse of prompt snippets.

**Features:**

1. Intuitive keyboard-driven interface for efficient prompt handling.
2. Advanced search capabilities for finding prompts by name, type, tags, and other metadata.
3. Metadata management tools for organizing, tagging, and categorizing prompts.
4. Easy import of prompts from raw text files into a curated library.
5. Integration with Visual Studio Code for seamless insertion of prompts into the editor.

**Functional Specification:**

- Import raw prompts from text files into a "prompts/raw" folder using a file explorer or drag-and-drop.
- Search and insert raw prompts from the "prompts/raw" folder into the active VS Code editor.
- Add prompts from "prompts/raw" to a curated library in "prompts/curated", with automatic metadata generation (ID, timestamp, etc.).
- Manage prompt metadata (type, tags, triggers, archive status) through a user-friendly interface.
- Search the curated library for prompts by name, type (e.g., "@identity"), tags, or other metadata.
- Insert curated prompts from the library into the active VS Code editor with a keyboard-driven workflow.
- Automatically sync metadata updates to a central "snippets.json" file for version control.

**Technical Specification:**

- Language: TypeScript
- Integration with Visual Studio Code API for editor interaction, UI creation, and file operations.
- File system operations for reading and writing prompt files and metadata.
- Keyboard-driven user interface inspired by Raycast app for efficient prompt management.
- No external API integration or custom API usage required.

**Value Proposition:**
The "Prompt Editor" extension streamlines the workflow of AI prompt management within Visual Studio Code, empowering developers and writers to work with prompts more productively and effectively, saving time and enhancing the overall experience of working with AI-powered tools.
