import Plateau from "../modules/plateau";
import Rover from "../modules/rover";
import MoveRoverUseCase from "../useCases/moveRoverUseCase";

export default class HandleAnswersService {

  private plateau: Plateau;
  
  handlePlateauAnswer(plateauAnswer: any) {
    const plateauCoordinates = plateauAnswer.plateauSize.split(',');
    
    const plateauTopRightCoordinates = {
      x: parseInt(plateauCoordinates[0]),
      y: parseInt(plateauCoordinates[1]),
    }
    
    this.plateau = new Plateau();
    this.plateau.setPlateauTopRightCoordinates(plateauTopRightCoordinates);
  }

  handleRoverAnswer(roverAnswer: any) {
    const roverDetails = roverAnswer.roversLandingPosition.trim().split(/\s+/);
    const rover = new Rover(roverDetails[2], parseInt(roverDetails[0]), parseInt(roverDetails[1]));

    const moveRoverUseCase = new MoveRoverUseCase(this.plateau, rover);
    moveRoverUseCase.execute(roverAnswer.roversDirections);

    console.log('');
    console.log(`Landing position: ${rover.landingPosition.x} ${rover.landingPosition.y} ${rover.landingPosition.facing}`);
    console.log(`Instruction: ${roverAnswer.roversDirections}`)
    console.log(`Final position: ${rover.getCurrentPosition()}`);
    console.log('');
  }
}