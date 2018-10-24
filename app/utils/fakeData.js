export const fakeOnline = (dummyData, cb) => {
  const clone = [...dummyData];
  const newRandom = Math.floor(Math.random() * 100) + 10;
  const cutFirstData = clone.slice(1);
  const addMoreData = [...cutFirstData, newRandom];
  if (cb) {
    cb(addMoreData);
  }
};
