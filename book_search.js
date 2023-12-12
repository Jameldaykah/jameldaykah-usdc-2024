
function findSearchTermInBooks(searchTerm, allScannedBooks) {
    const results = [];

    //for loops to iterate through each scanned book
    for (const book of allScannedBooks) {
        const { ISBN, Content} = book; 

        for (const {Page, Line, Text} of Content) {

            if(Text.includes (searchTerm)){
                results.push({
                    ISBN,
                    Page,
                    Line,
                });
            }
        }
    }

     return { // returns object from search term and array result
        searchTerm: searchTerm,
        Results: results, 
     };
}  

const allScannedBooks = [ // scanned books for testing 
    {
      Title: "The Way of the Superior Man",
      ISBN: "9781459611443",
      Content: [
        { Page: 60, Line: 24, Text: "Austerity means to eliminate the comforts and cushions in your life that you have learned to snuggle into and lose wakefulness." },
        { Page: 89, Line: 6, Text: "A fearful man who knows he is fearful is far more trustable than a fearful man who isnt aware of his fear." },
      ],
    },
        {
      Title: "Meditations",
      ISBN: "9783988287533",
      Content: [
        { Page: 52, Line: 12, Text: "Waste no more time arguing about what a good man should be. Be one." },
        { Page: 30, Line: 15, Text: "It is not death that a man should fear, but he should fear never beginning to live." },
      ],
    },

    {
      Title: "The Richest Man in Babylon ",
      ISBN: "9780451205360",
      Content: [
        { Page: 10, Line: 7, Text: "I found the road to wealth when I decided that a part of all I earned was mine to keep." },
        { Page: 105, Line: 6, Text: "Consult with wise men. Secure their advice of those experienced in the profitable handling of gold." },
      ],
    },
    
  ];
  
  // Test 1: Test 1 for a positve test result 
  console.log(findSearchTermInBooks("fearful", allScannedBooks));
  
  // Test 2: Test 2 for a negative test
  console.log(findSearchTermInBooks("Consult", allScannedBooks));
  
  // Test 3: Test 3 for Case-sensitive test
  console.log(findSearchTermInBooks("Found", allScannedBooks));
