import prompts from 'prompts';

import HandleAnswersService from './services/HandleAnswersService';

const roverQuestions = [
  {
    type: 'text',
    name: 'roversLandingPosition',
    message: "Set the rover's landing position"
  },
  {
    type: 'text',
    name: 'roversDirections',
    message: 'Set the rover directions (LRM)'
  },
  {
    type: 'text',
    name: 'addAnotherRover',
    message: 'Want to add another rover? (Y/N)'
  },
];

const plateauSizeQuestion = {
  type: 'text', 
  name: 'plateauSize',
  message: 'Set the upper-right coordinates of the plateau'
};

(async()=> {
  const plateauSizeAnswer = await prompts(plateauSizeQuestion);

  const handleAnswersService = new HandleAnswersService();

  handleAnswersService.handlePlateauAnswer(plateauSizeAnswer);
  
  var addNewRover = true;
  
  while(addNewRover == true) {
    const roverAnswer = await prompts(roverQuestions);
    handleAnswersService.handleRoverAnswer(roverAnswer);
    addNewRover = roverAnswer.addAnotherRover.toUpperCase() == ('Y')
  }
})();