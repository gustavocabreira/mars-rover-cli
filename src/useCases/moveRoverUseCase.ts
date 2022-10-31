import Plateau from "../modules/plateau";
import Rover from "../modules/rover";

export default class MoveRoverUseCase {

  constructor(private plateau: Plateau, private rover: Rover) {}

  execute(directions: string) {
    const directionsArray = directions.split("")
    this.validateDirections(directionsArray);

    directionsArray.map((direction) => {
      if(direction === 'M') {
        this.rover.keepMovingForward();
        this.checkIfRoverIsOutsideThePlateau();
        return;
      }
      
      this.rover.changeDirection(direction);
    });
  }

  checkIfRoverIsOutsideThePlateau() {
    if(
      this.rover.currentPosition.y > this.plateau.topRight.y ||
      this.rover.currentPosition.y < 0 ||
      this.rover.currentPosition.x > this.plateau.topRight.x ||
      this.rover.currentPosition.x < 0
    ) {
      throw new Error('The rover will be outside of the plateau borders')
    }
  }

  validateDirections(providedDirections: Array<any>) {
    const validDirections = ['L', 'R', 'M']

    if(!providedDirections.every(el => validDirections.includes(el))) {
      throw new Error('Invalid direction provided')
    }
  }
}
