/**
 * Use fetch() to get following URL https://api.datamuse.com/words?sl=classroom
 * console.log the results
 */

/**
 * Problem 2: Update the value of apiUrl so it begins with
 * `https://api.datamuse.com/words?sl=` and ends with THE VARIABLE `wordToCheck`,
 * console.log the output.
 * 
 * Basically, `apiUrl should be a different URL if the value of wordToCheck changes.

 * Hint: Use template strings with variable substitutions 
 * @see https://www.w3schools.com/js/js_string_templates.asp
*/
wordToCheck = 'mousetrap';
const apiUrl = ``;

/**
 * Problem 3 
 * 
 * This exercise has already provided a function called processProblem3()
 * 
 * Call fetch(apiUrl) then chain a `then()` guarantee to it that calls
 * processProblem3
 * 
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
 * 
 */

/**
 * Problem 4:
 * 
 * In a new call to fetch(apiUrl), chain a `then()` with an anonymous
 * function as the first argument. Inside this function, send the 
 * result to console.log.
 * 
 * Hint: in https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
 * Look for examples that have `.then(function(result)`
 */


/**
* Problem 5:
* 
* Look through the console.log response from 4. Notice that this doesn't
* actually have the word data in there. We have a successful response, but
* we still need to parse the data!
*
* Lets get our data as JSON. copy the answer from problem 4 but add 
* the .json() method.
* So if you had     
*    console.log(result);
* Change it to
*    console.log(result.json()) 
*/

/**
 * Problem 6:
 * 
 * Look at the log! result.json() returned another Promise, not the
 * json() we expected. We need to wait for the call to .json()
 * to finish processing before we can do something with it!
 * 
 * Lets do that...
 * - Copy the solution to problem 5
 * - Change the call to console.log to a return. Ex:
 *    BEFORE: console.log(result.json());
 *    AFTER: return result.json();
 * - Finally Chain a second then() and console.log the results inside THAT callback.
 * 
 * Hint @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
 *   Look for `console.log('Got the final result: ' + finalResult);`
 */
        
/**
 * These variables are already created for you.
 * They are all the elements of the dataMuse UI we are building
 */
const dataMuseWordInput = document.querySelector('#datamuse-word-input');
const dataMuseFunctionSelect = document.querySelector('#datamuse-function');
const dataMuseQueryButton = document.querySelector('#datamuse-query');
const dataMuseRealTimeCheckbox = document.querySelector('#datamuse-real-time');
const dataMuseResults = document.querySelector('#datamuse-results');

// This function that updates the results box is already created for you too.
const updateResults = function (result) {
    dataMuseResults.textContent = getTopMatchesAsString(result); 
};


/**
 * Problem 7 
 * Add a click listener to dataMuseQueryButton
 * It should 
 *  - Create a variable `word` with the value typed into dataMuseWordInput
 *  - call the function `callDataMuse()`, arg1 is `word`, arg2 is `updateResults` 
 *    (callDataMuse) has a third optional arg that we will deal with later...
 *  - Make the border color of dataMuseResults blue
 */

/**
 * Problem 8
 * 
 * dataMuseQueryButton needs to be hidden if dataMuseRealTimeCheckbox is checked
 */

/**
 * Problem 9
 * Add a `keyup` listener to dataMuseWordInput that makes the same
 * callDataMuse request as Problem 7, but only if dataMuseQueryButton
 * is checked
 */

/**
 * Problem 10
 * In the two event listeners you've added, update them so
 * we get the value of dataMuseFunctionSelect and use that as
 * the third argument sent to callDataMuse();
 */
