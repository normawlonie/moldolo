const data = Object.freeze({
  n: "John Doe", // Shortened from 'name'
  a: 30,         // Shortened from 'age'
  o: "SE",       // Shortened from 'occupation', 'SE' for 'Software Engineer'
  h: ["coding", "reading", "gaming"], // Shortened 'playing video games' to 'gaming'
  ad: {          // Shortened from 'address'
    st: "123 MS", // Shortened from 'street' and 'Main Street'
    c: "Anytown",
    s: "CA",
    z: "12345",   // Shortened from 'zip'
  },
});

// Example of destructuring
const { n: name, a: age, o: occupation } = data;
