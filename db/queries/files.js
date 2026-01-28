import db from "../client.js";

export const createFile = async({ fileName, size, folderId }) => {
  try {
    const sql = `
    INSERT INTO files (name, size, folder_id)
    VALUES ('${fileName}', ${size}, ${folderId})
    RETURNING *
    `;
    const { rows: file } = await db.query(sql);
    return file;
  } catch(err) {
    console.log(`ERROR Creating File`, err);
  }
}