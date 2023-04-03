"use strict";

// Async function
// Axios request -> query lucky number + ?json

const $resultArea = $("#results");

async function getNumberFact(num) {
  return await axios({
    method: "GET",
    url: `http://numbersapi.com/${num}?json`
  });
}

async function getMultipleNumberFacts(...nums) {
  let stringOfNumbers = nums.toString();
  return await axios({
    method: "GET",
    url: `http://numbersapi.com/${stringOfNumbers}?json`
  });
}

async function putNumbersOnPage(...nums) {
  let promise = await getMultipleNumberFacts(nums);
  let numberFacts = Object.values(promise.data);
  for (let fact of numberFacts) {
    $resultArea.append(`<li>${fact}</li>`)
  }
}

putNumbersOnPage(42, 23, 1);


// console.log(Object.values(numberFacts))