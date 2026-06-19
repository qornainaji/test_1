/**
 * Direction:
 * Find maximum number of words from given sentences.
 *
 * Expected:
 * 23
 */
const sentences = [
  'Mauris ultricies sed sapien eget malesuada. Suspendisse et aliquet odio, id ultrices erat. Praesent vehicula erat nulla. Aliquam a lorem urna. Donec.',
  'Duis at tellus et ex bibendum pellentesque sed in nibh. Sed aliquet, diam id mollis facilisis, massa metus accumsan elit, at mattis magna.',
  'Sed non nibh quam. Pellentesque eget ultrices diam. Aliquam diam justo, consectetur ac dui lobortis, vestibulum bibendum lorem. Sed porta pulvinar.',
];



function result(sentences) {

    

    let longest = 0;
    let sentence_concat = [];
    for(let sentence of sentences){
        sentence_concat = sentence.split(" ");
        // console.log(sentence_concat.length);

        if (longest <= sentence_concat.length)
        {
            longest = sentence_concat.length;
        }
        longest = longest;
    }
    // console.log(longest);
    sentences = longest;
    return sentences;
}



// function result(sentences) {
//     let sentences_concat = ""

//     for (i = 0; i<sentences.length; i++){
//         sentences_concat = sentences_concat + sentences[i] + " ";
//     }

//     sentences_concat = sentences_concat.split(" ")
//     console.log(sentences_concat);
    
//     let longest = "";
//     for (i = 0; i < sentences_concat.length; i++){
//         current = sentences_concat[i]
//         longest = current.length > longest.length ? current : longest;
//     }
//     sentences = longest.length;
//     return sentences;
// }

// console.log(result(sentences));

console.log(result(sentences));