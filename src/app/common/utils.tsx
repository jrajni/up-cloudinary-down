export const fileToBase64 = (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      resolve(event?.target?.result);
    };

    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsDataURL(file);
  });
};
