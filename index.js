const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


function titleCased() {
  const tutorials = ['what does the this keyword mean?', 'What is the Constructor OO pattern?', 'implementing Blockchain Web API', 'The Test Driven Development Workflow', 'What is NaN and how Can we Check for it', 'What is the difference between stopPropagation and preventDefault?', 'Immutable State and Pure Functions', 'what is the difference between == and ===?', 'what is the difference between event capturing and bubbling?', 'what is JSONP?'];
  
  const titleCasedTutorials = tutorials.map(function(tutorial) {
    let words = tutorial.split(' ');
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
  });

  return titleCasedTutorials;
}

console.log(titleCased()); // Outputs: ["What Does The This Keyword Mean?", "What Is The Constructor OO Pattern?", "Implementing Blockchain Web API", "The Test Driven Development Workflow", "What Is NaN And How Can We Check For It", "What Is The Difference Between StopPropagation And PreventDefault?", "Immutable State And Pure Functions", "What Is The Difference Between == And ===?", "What Is The Difference Between Event Capturing And Bubbling?", "What Is JSONP?"]
