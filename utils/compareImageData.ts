export const compareImageData = (
  imageData1: FileList,
  imageData2: FileList
) => {
  if (imageData1.length !== imageData2.length) {
    return false;
  }
  for (let i = 0; i < imageData1.length; i++) {
    if (imageData1[i] !== imageData2[i]) {
      return false;
    }
  }
  return true;
};
