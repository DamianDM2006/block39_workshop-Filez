import db from "../client.js";

export const createFile = async (fileName, size, folderId) => {
  try {
    const sql = `
    INSERT INTO files (name, size, folder_id)
    VALUES ('${fileName}', ${size}, ${folderId})
    RETURNING *
    `;
    const { rows: file } = await db.query(sql);
    return file;
  } catch(err) {
    console.log(`ERROR Creating File.`, err);
  }
};

export const getAllFiles = async () => {
  try {
    const sql = `
    SELECT 
      files.*,
      folders.name AS folder_name
    FROM
      files
    JOIN folders ON folders.id = files.folder_id
    `;
    const { rows: files } = await db.query(sql);
    return files;
  } catch(err) {
    console.log(`ERROR Getting All Files.`, err);
  }
}