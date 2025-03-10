import * as fs from "fs";

interface reader {
  readFile(): string
}

interface writer {
  writeFile(data: string): void
}

class FileReader implements reader {
  constructor(private filePath: string) {}

  // Reads file
  public readFile(): string {
    try {
      const content: string = fs.readFileSync(this.filePath, "utf-8");
      return content;
    } catch (error) {
      console.error("Error al leer el archivo");
      return "";
    }
  }
}

class FileWriter implements writer {
  constructor(private filePath: string) {}

  // Writes file
  public writeFile(data: string): void {
    try {
      fs.writeFileSync(this.filePath, data, "utf-8");
      console.log("Archivo escrito exitosamente.");
    } catch (error) {
      console.error("Error al escribir en el archivo");
    }
  }
}

// Client code
const fileReader = new FileReader("example.txt");

// Reading content
const currentContent = fileReader.readFile();
console.log("Current content:", currentContent);

// Writing content
const fileWriter = new FileWriter("example.txt")
const newData = "This is new content to be written into the file.";
fileWriter.writeFile(newData);

// Updating content
const updatedContent = fileReader.readFile();
console.log("Updated content:", updatedContent);