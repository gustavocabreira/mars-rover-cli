import Plateau from "../../src/modules/plateau";
import Rover from "../../src/modules/rover";
import MoveRoverUseCase from "../../src/useCases/moveRoverUseCase";

describe('MoveRoverUseCase', ()=> {
  it('should be able to move the rover and the last position should be 1 3 N', () => {

    // Arrange
    const plateau = new Plateau();
    plateau.setPlateauTopRightCoordinates({
      x: 10,
      y: 10,
    });
    const rover = new Rover('N', 1, 2);
    const moveRoverUseCase = new MoveRoverUseCase(plateau, rover);

    // Act
    moveRoverUseCase.execute('LMLMLMLMM');

    // Assert
    expect(rover.getCurrentPosition()).toBe('1 3 N');
  })

  it('should be able to move the rover and the last position should be 2 3 S', () => {
    // Arrange
    const plateau = new Plateau();
    plateau.setPlateauTopRightCoordinates({
      x: 10,
      y: 10,
    });
    const rover = new Rover('E', 3, 3);
    const moveRoverUseCase = new MoveRoverUseCase(plateau, rover);

    // Act
    moveRoverUseCase.execute('MRRMMRMRRM');

    // Assert
    expect(rover.getCurrentPosition()).toBe('2 3 S');
  });

  it('should throw an exception if the rover position is outside of the plateau borders', () => {
    // Arrange
    const plateau = new Plateau();
    plateau.setPlateauTopRightCoordinates({
      x: 1,
      y: 1,
    });
    const rover = new Rover('E', 3, 3);
    const moveRoverUseCase = new MoveRoverUseCase(plateau, rover);

    // Act & Assert
    expect(() => moveRoverUseCase.execute('M')).toThrow('The rover will be outside of the plateau borders')
  })

  it('should throw an exception when providing an invalid direction', () => {
    // Arrange
    const plateau = new Plateau();
    plateau.setPlateauTopRightCoordinates({
      x: 1,
      y: 1,
    });
    const rover = new Rover('E', 3, 3);
    const moveRoverUseCase = new MoveRoverUseCase(plateau, rover);

    // Act & Assert
    expect(() => moveRoverUseCase.execute('G')).toThrow('Invalid direction provided')
  })
})