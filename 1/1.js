const fs = require("fs").promises;

const loadFile = async () => {
  const data = await fs.readFile("input.txt", "utf8");
  return data;
};

const checkForCalories = (data) => {
  let sum = 0;
  let allSnacks = [];
  const dataSplit = data.split("\n");

  dataSplit.forEach((singleData) => {
    const data = parseInt(singleData);
    if (isNaN(data)) {
      console.log("not num, summing");
      allSnacks.push(sum);
      sum = 0;
    } else {
      sum = sum + data;
    }
    allSnacks.sort(function (a, b) {
      return b - a;
    });
    console.log(allSnacks[0] + allSnacks[1] + allSnacks[2]);
  });
};

(async function () {
  const data = await loadFile();
  checkForCalories(data);
})();
