import db from "#db/client";
// import { faker } from `@faker-js/faker`;
import { createFolder } from "./queries/folders.js";
import { createFile } from "./queries/files.js";

const seed = async() => {
  for (let folderCounter = 1; folderCounter <= 3; folderCounter++) {
    const name = 'folder' + folderCounter.toString();
    await createFolder(name);

    for (let fileCounter = 1; fileCounter <= 5; fileCounter++) {
      const fileName = 'file' + name  + fileCounter.toString();
      const size = fileCounter * 17;
      const folderId = folderCounter;
      await createFile({ fileName, size, folderId });
    };
  };
};

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

  // TODO
