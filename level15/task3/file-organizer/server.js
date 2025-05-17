const fs = require("fs");
const path = require("path");

const categories = {
  Images: [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".svg"],
  Documents: [".pdf", ".doc", ".docx", ".txt", ".xls", ".xlsx", ".ppt", ".pptx"],
  Videos: [".mp4", ".mkv", ".avi", ".mov", ".wmv"],
  Audio: [".mp3", ".wav", ".aac", ".flac"],
  Archives: [".zip", ".rar", ".tar", ".gz", ".7z"],
  Others: [],
};

function getCategory(ext) {
  for (const category in categories) {
    if (categories[category].includes(ext)) {
      return category;
    }
  }
  return "Others";
}

async function organizeFilesAsync(directory) {
  try {
    if (!fs.existsSync(directory)) {
      console.error("Error: Directory does not exist -", directory);
      return;
    }

    const files = await fs.promises.readdir(directory);
    const report = [];

    for (const file of files) {
      const filePath = path.join(directory, file);
      const stats = await fs.promises.stat(filePath);

      if (stats.isFile()) {
        const ext = path.extname(file).toLowerCase();
        const category = getCategory(ext);
        const categoryPath = path.join(directory, category);

        if (!fs.existsSync(categoryPath)) {
          await fs.promises.mkdir(categoryPath);
        }

        const newFilePath = path.join(categoryPath, file);
        await fs.promises.rename(filePath, newFilePath);

        report.push(`${file} -> ${category}/`);
      }
    }

    const logPath = path.join(directory, "log.txt");
    await fs.promises.appendFile(logPath, report.join("\n") + "\n", "utf8");

    console.log("✅ File organization complete!\n", report.join("\n"));
  } catch (error) {
    console.error(" Error organizing files:", error);
  }
}

function watchDirectory(directory) {
  if (!fs.existsSync(directory)) {
    console.error("Error: Directory does not exist -", directory);
    return;
  }

  console.log(` Watching directory: ${directory} for new files...`);

  fs.watch(directory, (eventType, filename) => {
    if (filename && (eventType === "rename" || eventType === "change")) {
      const filePath = path.join(directory, filename);
      if (fs.existsSync(filePath)) {
        console.log(` New file detected: ${filename}`);
        organizeFilesAsync(directory);
      } else {
        console.log(` File deleted: ${filename}`);
      }
    }
  });
}

const targetDirectory = "D:\\Phase 1\\level15\\task3\\file-organizer\\sample-folder\\Images";

organizeFilesAsync(targetDirectory); 
