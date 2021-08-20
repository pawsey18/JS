let localStorageObject = {
  get: function () {
    return localStorage.getItem(this.key);
  },
  set: function (str) {
    localStorage.setItem(this.key, str);
  },
  clear: function () {
    localStorage.setItem(this.key, "");
  }
};

let storageObject = Object.create(localStorageObject);
/**
 * the get and set methods use callback functions to determine their inner work
 * ings . they are checking to see if a function has been passed
 * if it has been then if false it passes along whatever was in storage (get) , or whatever
 * was in passed in set
 *
 *
 */

storageObject.get = function (callback) {
  let storage = localStorageObject.get.call(this);
  if (callback && typeof callback === "function") {
    return callback(storage);
  } else {
    return storage;
  }
};

storageObject.set = function (storage, callback) {
  let storageString;
  if (callback && typeof callback === "function") {
    storageString = callback(storage);
  } else {
    storageString = storage.toString();
  }
  localStorageObject.set.call(this, storageString);
};

let getStorage = function (key) {
  let t = Object.create(storageObject);
  t.key = key;
  return t;
};
