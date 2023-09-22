import media from './sample.json';

export const getMedia = (type) => {
  return new Promise((res) => {
    setTimeout(() => {
      const data = media.entries.filter((med) => med.programType === type);
      res(data);
    }, 700);
  });
};
