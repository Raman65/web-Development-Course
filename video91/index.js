// You have to write a Node.js program to clear clutter inside of a directory and organize the contents of a directory into different folders

// for example, these files become:

// 1. name.jpg
// 2. name.png
// 3. this.pdf
// 4. raman.zip
// 5. rohan.zip
// 6. cat.jpg
// 7. raman.pdf

// this:
// jpg/name.jpg, jpg/cat.jpg
// png/name.png
// pdf/this.pdf, pdf/raman.pdf
// zip/raman.zip, zip/rohan.zip

const fs = require('fs');
const path = require('path');

// The directory you want to organize
const directoryPath = './tae_directory'; // Update with your directory path

// Function to organize files by extension
function organizeFiles(dirPath) {
    // Read the contents of the directory
    fs.readdir(dirPath, (err, files) => {
        if (err) {
            return console.log(`Unable to scan directory: ${err}`);
        }
        
        files.forEach(file => {
            const fullPath = path.join(dirPath, file);

            // Check if it's a file (not a directory)
            if (fs.lstatSync(fullPath).isFile()) {
                // Get the file extension
                const ext = path.extname(file).slice(1); // Removing the dot (.)
                
                // Define the new directory path based on the extension
                const newDir = path.join(dirPath, ext);
                
                // Create the directory if it doesn't exist
                if (!fs.existsSync(newDir)) {
                    fs.mkdirSync(newDir);
                }
                
                // Define the new path for the file
                const newFilePath = path.join(newDir, file);
                
                // Move the file to the new directory
                fs.rename(fullPath, newFilePath, err => {
                    if (err) {
                        console.log(`Error moving file: ${err}`);
                    } else {
                        console.log(`Moved: ${file} -> ${newFilePath}`);
                    }
                });
            }
        });
    });
}

// Run the organizeFiles function
organizeFiles(directoryPath);
