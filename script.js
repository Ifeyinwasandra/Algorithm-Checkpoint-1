// Question 1:

// write an algorithm that read a sentence, which ends with a point, 
// character by character, and to determine:The length of the sentence (the number of characters).

function LongestWordLength(str)
      {
        var n = str.length;
        var res = 0,
          curr_len = 0;
        for (var i = 0; i < n; i++)
        {
         
          // If current character is not
          // end of current word.
          if (str[i] !== " ") curr_len++;
          // If end of word is found
          else
          {
            res = Math.max(res, curr_len);
            curr_len = 0;
          }
        }

        return Math.max(res, curr_len);
    }

// Question 2:

    // write an algorithm that read a sentence, which ends with a point, 
    // character by character, and to determine:The number of words in the sentence (assuming that the words are separated by a single space).

    // Function to count the number of words in a string
function countWords(str) {
    if (str.length === 0) {
        return 0;
    }
    let wordCount = 0;
    let state = 0; // Initial state is OUT

    // Traverse all characters of the input string
    for (let i = 0; i < str.length; i++) {
        // Check for backslash first
        if (str[i] === '\\') {
            i++; // Skip next character (after backslash)
            continue;
        }

        // If the current character is a word character
        if (str[i].match(/[a-zA-Z0-9]/)) {
            // If previous state was OUT, increment word count and change state to IN
            if (state === 0) {
                wordCount++;
                state = 1;
            }
        }
        // If the current character is not a word character
        else {
            // Change state to OUT
            state = 0;
        }
    }

    return wordCount;
}

// using String.split() method.

// Function to count total number
// of words in the string
function countWords(str)
{

  // Check if the string is null
  // or empty then return zero
  if (str.length == 0) {
    return 0;
  }
  
  // Splitting the string around
  // matches of the given regular
  // expression
  words = [];
  var temp = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      words.push(temp);
      temp = "";
    }
    else {
      temp += str[i];
    }
  }

  var count = 1;

  for (var i = 0; i < words.length; i++) {
    if (words[i].length != 0)
      count++;
  }

  // Return number of words
  // in the given string
  return count;
}

// Question 3:

// // write an algorithm that read a sentence, which ends with a point, 
// // character by character, and to determine:The number of vowels in the sentence.

function getCount(str) {
    var vowelsCount = 0
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for(let char of str) {
        if(vowels.includes(char)) {
            vowelsCount++
        }
    }
    return vowelsCount
}

 