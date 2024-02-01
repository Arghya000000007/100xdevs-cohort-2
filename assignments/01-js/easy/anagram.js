/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // Check if the lengths are different, if yes, they can't be anagrams
  if (str1.length !== str2.length) {
    return false;
  }

  const sortstr1 = str1
    .replace(/\s/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
  const sortstr2 = str2
    .replace(/\s/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
  return sortstr1 === sortstr2;
}

module.exports = isAnagram;
