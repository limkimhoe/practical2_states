const modules = ["m0", "m1", "m2"];
const students = ["s0", "s1", "s2"];
const relationships = [
  ["m0", "s0", "Passed"],
  ["m1", "s0", "Failed"],
  ["m2", "s1", "Taking"],
  ["m0", "s2", "Taking"],
];

const results = {
  m0: {
    s2: "Passed",
  },
  m2: {
    s1: "Passed",
  },
};

function semesterEnds(relationships, results) {
  for (let i = 0; i < relationships.length; i++) {
    const relationship = relationships[i];
    const module = relationship[0];
    const student = relationship[1];
    const currentState = relationship[2];
    if (currentState !== "Taking") continue; // All other states are not affected by the ending of a semester

    const result = results[module][student];
    if (!result) throw new Error("No matching result found"); // Why?

    relationships[i][2] = result;
  }
  console.table(relationships);
}
semesterEnds(relationships, results);
