import * as data from "../data/Diseases.json";

const years = [];
let preparedData = [];
let temp = {};
let obj = null;
let formattedData = [];

const prepareData = a => {
  preparedData = [];
  formattedData = [];
  temp = {};
  obj = null;
  for (let i = 0; i < data.data.length; i++) {
    let element = data.data[i];
    if (a === "19") {
      if (data.data[i].DISEASE === "Malaria") {
        preparedData.push({
          x: element.REF_YEAR,
          y: element.values[0]["CASES"] + element.values[0]["DEATHS"]
        });
      }
    } else if (a === "70+") {
      if (data.data[i].DISEASE === "70 plus years old") {
        preparedData.push({
          x: element.REF_YEAR,
          y: element.values[0]["CASES"] + element.values[0]["DEATHS"]
        });
      }
    } else {
      preparedData.push({
        x: element.REF_YEAR,
        y: element.values[0]["CASES"] + element.values[0]["DEATHS"]
      });
    }
  }
  groupData();
  return formattedData;
};

const groupData = () => {
  for (var i = 0; i < preparedData.length; i++) {
    obj = preparedData[i];

    if (!temp[obj.x]) {
      temp[obj.x] = obj;
    } else {
      temp[obj.x].y += obj.y;
    }
  }
  for (var prop in temp) formattedData.push(temp[prop]);
};

const calcYears = () => {
  formattedData.map(el => {
    return years.push(el.x);
  });
};

prepareData();
groupData();
calcYears();

export { prepareData, years };
