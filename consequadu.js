function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  let clone = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }
  return clone;
}
const originalObject = { name: "John", age: 30, address: { city: "New York", country: "USA" } };
const clonedObject = deepClone(originalObject);
