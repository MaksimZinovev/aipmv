// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "gpt-prompt-editor" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('gpt-prompt-editor.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		areadAllFilePaths();
		vscode.window.showInformationMessage('Hello World from GPT Prompt Editor!');
	});

	context.subscriptions.push(disposable);
}

// Find files 

function readAllFilePaths(): string[] {
    const workspaceFolders = vscode.workspace.workspaceFolders;
    const filePaths: string[] = [];

    if (workspaceFolders) {
        console.log(`workspaceFolders: ${JSON.stringify(workspaceFolders)}`);


            // const curatedFolder = vscode.Uri.joinPath(folder.uri, 'snippets/curated');
			
            const pattern = '**/snippets/curated**/*.md';
            const files = vscode.workspace.findFiles(pattern, '**/node_modules/**');
			
            files.then((fileUris: vscode.Uri[]) => {
				console.log(`files: ${  files}`);
                for (const uri of fileUris) {
                    filePaths.push(uri.fsPath);
                }
            });
    }

    const paths = Array.from(new Set(filePaths));
    console.log(`paths: ${paths}`);
    return paths;
}

async function areadAllFilePaths(): Promise<string[]> {
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


// This method is called when your extension is deactivated
export function deactivate() {}
