#!/usr/bin/env node

let colors = require("colors");
let fs = require("fs");
let path = require("path");

let types = {
  media: ["mp4", "mkv"],
  archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
  documents: [
    "docx",
    "doc",
    "pdf",
    "xlsx",
    "xls",
    "odt",
    "ods",
    "odp",
    "odg",
    "odf",
    "txt",
    "ps",
    "tex",
  ],
  app: ["exe", "dmg", "pkg", "deb"],
  images: ["png", "jpg", "jpeg"],
  code: ["js", "html", "css", "java", "py"],
  database: ["sql", "db", "dbms", "json", "csv"],
};

let inputArray = process.argv.slice(2);

let command = inputArray[0];
switch (command) {
  case "organize":
    organizeFn(inputArray[1]);
    break;
  case "help":
    helpFn();
    break;
  default:
    console.log("Please 🙏 Input Right Command");
    break;
}

function organizeFn(dirPath) {
  console.log("Organize command implemented for", dirPath);
  let orgPath;
  // 1. input -> directory path given
  if (dirPath == undefined) {
    destPath = process.cwd();
    return;
  } else {
    let doesExist = fs.existsSync(dirPath);
    if (doesExist) {
      // 2. create -> organized_files -> directory
      orgPath = path.join(dirPath, "organized_files");
      if (fs.existsSync(orgPath) == false) {
        fs.mkdirSync(orgPath);
      }
    } else {
      console.log("Kindly enter the correct path");
      return;
    }
  }

  organizeHelper(dirPath, orgPath);
}
function organizeHelper(src, dest) {
  // 3. identify categories of all the files present in that input directory - ›
  let ChildName = fs.readdirSync(src);
  for (let i = 0; i < ChildName.length; i++) {
    let childAddress = path.join(src, ChildName[i]);
    let isFile = fs.lstatSync(childAddress).isFile();
    if (isFile) {
      let category = getCategory(ChildName[i]);
      console.log(colors.brightGreen(ChildName[i], "belongs to -->", category));
      sendFiles(childAddress, dest, category);
    }
  }
}
function sendFiles(srcFile, dest, category) {
  let categoryPath = path.join(dest, category);
  if (fs.existsSync(categoryPath) == false) {
    fs.mkdirSync(categoryPath);
  }
  let fileName = path.basename(srcFile);
  let destFilePath = path.join(categoryPath, fileName);
  fs.copyFileSync(srcFile, destFilePath);
  fs.unlinkSync(srcFile);
  console.log(fileName, "copied to", category);
}

function getCategory(name) {
  let ext = path.extname(name);
  ext = ext.slice(1);
  for (let type in types) {
    let cTypeArray = types[type];
    for (let i = 0; i < cTypeArray.length; i++) {
      if (ext == cTypeArray[i]) {
        return type;
      }
    }
  }
  return "others";
}

function helpFn() {
  console.log(
    `
    List of All the commands:
    
            node main.js organize "directoryPath"
            node main.js help
            
    `.brightYellow
  );
}
