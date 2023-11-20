const questionModel = [
  {
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    prompt: 'Choose an option',
    answerChoices: [
      {
        letter: 'a',
        text: 'dummy answer a'
      },
      {
        letter: 'b',
        text: 'dummy answer b'
      },
      {
        letter: 'c',
        text: 'dummy answer c'
      },
      {
        letter: 'd',
        text: 'dummy answer d'
      },
      {
        letter: 'e',
        text: 'dummy answer e'
      }
    ]
  },
  {
    content: 'Tenetur saepe, delectus fugit quas atque esse tempore quasi facilis consectetur aspernatur provident ut, expedita autem doloribus, molestias illo. Sequi mollitia autem voluptate placeat reiciendis vero fugit ratione assumenda inventore?',
    prompt: 'Choose an option',
    answerChoices: [
      {
        letter: 'a',
        text: 'dummy answer a'
      },
      {
        letter: 'b',
        text: 'dummy answer b'
      },
      {
        letter: 'c',
        text: 'dummy answer c'
      },
      {
        letter: 'd',
        text: 'dummy answer d'
      },
      {
        letter: 'e',
        text: 'dummy answer e'
      }
    ]
  },
  {
    content: 'Officia nemo esse quisquam hic libero accusantium quo impedit sint iusto eligendi nam ipsum tenetur, rerum est possimus maxime id eveniet commodi sunt. Quo voluptatibus obcaecati corporis labore deserunt nisi?',
    prompt: 'Choose an option',
    answerChoices: [
      {
        letter: 'a',
        text: 'dummy answer a'
      },
      {
        letter: 'b',
        text: 'dummy answer b'
      },
      {
        letter: 'c',
        text: 'dummy answer c'
      },
      {
        letter: 'd',
        text: 'dummy answer d'
      },
      {
        letter: 'e',
        text: 'dummy answer e'
      }
    ]
  }
]

function getQuestions() {
  var xhr = new XMLHttpRequest();
  var method = "GET";
  var url = "https://tndngrl4h1.execute-api.us-east-1.amazonaws.com/api/get/question";

  // Set async to true, might need to change later
  xhr.open(method, url, true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState == XMLHttpRequest.DONE) {
      if (xhr.status == 200) {
        var responseData = JSON.parse(xhr.responseText);
        console.log("Response:", responseData);
      } else {
        console.error("Error:", xhr.status, xhr.statusText);
      }
    }
  };

  xhr.send();
}

export {questionModel, getQuestions}
