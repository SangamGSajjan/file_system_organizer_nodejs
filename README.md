File System Organizer (Node.js)
This is a simple command-line tool for organizing files in a directory based on their file types. It categorizes files into different folders such as media, archives, documents, apps, images, code, and databases. You can use this tool to keep your files organized and easily locate specific types of files.

Prerequisites
Before using this tool, ensure that you have the following software installed on your system:

Node.js: You can download and install Node.js from https://nodejs.org/
Installation
Clone this GitHub repository to your local machine or download the code as a ZIP file and extract it.

Open your terminal or command prompt and navigate to the project directory.

Install the required dependencies by running the following command:

Copy code
npm install
Usage
Organize Files
To organize files in a directory, use the organize command followed by the path to the directory you want to organize. If you don't specify a directory path, it will organize the files in the current working directory.

shell
Copy code
node main.js organize "directoryPath"
Example:

shell
Copy code
node main.js organize "/path/to/directory"
Help
To view a list of available commands, use the help command:

shell
Copy code
node main.js help
Supported File Types
This tool can categorize files into the following types:

Media (e.g., mp4, mkv)
Archives (e.g., zip, 7z, rar, tar)
Documents (e.g., docx, pdf, xlsx)
Apps (e.g., exe, dmg, pkg)
Images (e.g., png, jpg)
Code (e.g., js, html, css, java)
Database (e.g., sql, json, csv)
Others (files with unsupported extensions)
How It Works
The tool identifies the file type based on its extension.

It creates a folder for each file type (e.g., media, archives) in the specified directory or the current working directory.

Files are moved to their respective folders based on their types.

Examples
shell
Copy code
# Organize files in the current working directory
node main.js organize

# Organize files in a specific directory
node main.js organize "/path/to/directory"

# View a list of available commands
node main.js help
Contributing
If you would like to contribute to this project, please open an issue or create a pull request on the GitHub repository.
