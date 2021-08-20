const localStorageObject = {
  get: () => localStorage.getItem(this.key),
  set: (str) => localStorage.setItem(this.key, str),
  clear: () => localStorage.setItem(this.key, "")
};

const storageObject = Object.create(localStorageObject);
//storageObject.get = "HI";

storageObject.get = (callback) => {
  let storage = localStorageObject.get.call(this);
  if (callback && typeof callback === "function") {
    return callback(storage);
  } else {
    return storage;
  }
};

storageObject.set = (storage, callback) => {
  let storageString;
  if (callback && typeof callback === "function") {
    storageString = callback(storage);
  } else {
    storageString = storage.toString();
  }
  localStorageObject.set.call(this, storageString);
};

let getStorage = (key) => {
  let t = Object.create(storageObject);
  t.key = t;
  return t;
};
