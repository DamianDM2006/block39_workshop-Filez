import db from "../client.js";

export const createFolder = async (name) => {
  try {
    const sql = `
    INSERT INTO folders (name)
    VALUES ('${name}')
    RETURNING *
    `;
    const { rows: [folder] } = await db.query(sql);
    return folder;
  } catch(err) {
    console.log(`ERROR Creating Folder`, err);
  }
};

export const getAllFolders = async () => {
  try {
    const sql = `
    SELECT * FROM folders
    `;
    const { rows: folders } = await db.query(sql);
    return folders;
  } catch(err) {
    console.log(`ERROR Getting All Folders.`, err);
  }
};