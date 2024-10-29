// Helper function to move the file
export function moveFile(file, uploadPath) {
  return new Promise((resolve, reject) => {
    file.mv(uploadPath, (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
}
