// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "gpt-prompt-editor" is now active!');
    let disposable = vscode.commands.registerCommand('gpt-prompt-editor.helloWorld', () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user

        const snippetPromise = selectSnippet();
        if (snippetPromise) {
            snippetPromise.then(snippet => {
                if (snippet !== undefined) {
                    insertSnippet(snippet as string);
                }
            });
        }
        // vscode.window.showInformationMessage('Hello World from GPT Prompt Editor!');
    });

    context.subscriptions.push(disposable);
}

// Find md files under snippets/curated folder 

async function readAllFilePaths(): Promise<string[]> {
    const workspaceFolders = vscode.workspace.workspaceFolders;
    const filePaths: string[] = [];

    if (workspaceFolders) {
        console.log(`workspaceFolders: ${JSON.stringify(workspaceFolders)}`);

        const pattern = '**/snippets/curated/**/*.md';
        const files = await vscode.workspace.findFiles(pattern, '**/node_modules/**');

        for (const uri of files) {
            filePaths.push(uri.fsPath);
        }
    }

    const paths = Array.from(new Set(filePaths));
    console.log(`paths: ${paths}`);
    return paths;
}


// Show quickPick to select file

async function selectSnippet(): Promise<string | undefined> {

    const paths = await readAllFilePaths();
    const items = [];

    for (const uri of paths) {
        const relativePath = vscode.workspace.asRelativePath(uri);
        items.push(relativePath.split('curated/').slice(-1)[0]);
    }
    const snippet = await vscode.window.showQuickPick(items, { placeHolder: 'Select snippet.' });

    console.log(`snippet: ${snippet}`);
    if (snippet) {
        vscode.window.showInformationMessage(`Selected: ${snippet}`);
        console.log(`snippet: none`);
        return snippet;
    }
    else {
        console.log(`snippet: none`);
    };
}

// Insert selected snippet 

async function insertSnippet(snippet: string) {
    await vscode.window.activeTextEditor?.insertSnippet(new vscode.SnippetString(snippet));
}
//        




// This method is called when your extension is deactivated
export function deactivate() { }
