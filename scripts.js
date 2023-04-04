"use strict";


const $resultArea = $("#results");

/**
 *
 * PART ONE
 *
 */
//return the actual fact
async function getNumberFact(num) {
  return await axios({
    method: "GET",
    url: `http://numbersapi.com/${num}?json`
  });
}

/**
 *
 * PART TWO
 *
 */
//move responsibility of handling web response to where the request is made
//assess name for promise variable
async function putMultipleNumberFactsOnPage(...nums) {
  let promise = await getMultipleNumberFacts(nums);
  let numberFacts = Object.values(promise.data);
  for (let fact of numberFacts) {
    $resultArea.append(`<li>${fact}</li>`)
  }
}

async function getMultipleNumberFacts(...nums) {
  let stringOfNumbers = nums.toString();
  return await axios({
    method: "GET",
    url: `http://numbersapi.com/${stringOfNumbers}?json`
  });
}


// putMultipleNumberFactsOnPage(42, 23, 1);


/**
 *
 * PART THREE
 *
 */
//move any handling of promise.allsettled to function which makes request
async function putSingleNumberFactsOnPage(num) {

  let promise = await getSingleNumberMultipleFacts(num);

  let facts = promise.map(promise => promise.value.data.text);
  console.log(facts);
  for (let fact of facts) {
    $resultArea.append(`<li>${fact}</li>`)
  }
}


async function getSingleNumberMultipleFacts(num){

  let fact1 = axios({
    method: "GET",
    url: `http://numbersapi.com/${num}?json`
  });

  let fact2 = axios({
    method: "GET",
    url: `http://numbersapi.com/${num}?json`
  });

  let fact3 = axios({
    method: "GET",
    url: `http://numbersapi.com/${num}?json`
  });

  let fact4 = axios({
    method: "GET",
    url: `http://numbersapi.com/${num}?json`
  });

  return await Promise.allSettled([fact1, fact2, fact3, fact4]);
}


putSingleNumberFactsOnPage(17);