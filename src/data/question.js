import question3graph from '../assets/images/question3graph.png';
import question1solution from '../assets/images/question1solution.png';
import question2solution from '../assets/images/question2solution.png';
import question3solution from '../assets/images/question3solution.png';

const sampleQuestions = [
   {
      "choicebtext": "9/7",
      "correctanswerchoice": "A",
      "section": "Math",
      "categoriesgeometry": "NOT GEOMETRY",
      "questiontype": "Multiple choice",
      "categoriesalgebra": "Algebraic Manipulation",
      "difficulty": 2,
      // "equations": "a/3b = 3/7",
      "choiceatext": "7/9",
      "choicectext": "3/21",
      "choicedtext": "7/3",
      "id": 4,
      "imagesolutionlink": question1solution,
      // "imagesolutionlink": "https://drive.google.com/open?id=1mHBiSbBi__TgvxH11Ejv6q_pYHYPOwHH",
      "questiontext": `Given the equation below, what is $b/a$?
      $$\\frac{a}{3b} = \\frac{3}{7}$$ `
   },
   {
      "choicebtext": "1",
      "correctanswerchoice": "C",
      "section": "Math",
      "categoriesgeometry": "NOT GEOMETRY",
      "questiontype": "Multiple choice",
      "categoriesalgebra": "Solving for a Variable, Two-Step Equations",
      "difficulty": 1,
      "choiceatext": "-4",
      "choicectext": "2/3",
      "choicedtext": "-2/3",
      "id": 5,
      "imagesolutionlink": question2solution,
      // "imagesolutionlink": "https://drive.google.com/open?id=1Gb7I-8b6HTq_DHjy6JVTXuGAFa6MWFo-",
      "questiontext": `Based on the equation below, find x:
      $$x + 5 = -2x + 7$$ `
   },
   {
      "choicebtext": "(0,3)",
      "correctanswerchoice": "B",
      "imagelink": question3graph,
      // "imagelink": "https://drive.google.com/open?id=1YhJMeWlw7luQz4igIy8OWFwLEoXQwfyz",
      "section": "Math",
      "categoriesgeometry": "NOT GEOMETRY",
      "questiontype": "Multiple choice",
      "categoriesalgebra": "Intercepts, Linear Equations, Understanding Equations",
      "difficulty": 1,
      "choiceatext": "(3,0)",
      "choicectext": "(-3,0)",
      "choicedtext": "(-1.5,0)",
      "id": 6,
      "imagesolutionlink": question3solution,
      // "imagesolutionlink": "https://drive.google.com/open?id=1nmW2U4RNHRvlGfKxCTa-_0jtAZiBBBww",
      "questiontext": `What is the y-intercept of the following graph?`
   }
]

export default sampleQuestions;