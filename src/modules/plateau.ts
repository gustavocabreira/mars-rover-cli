export default class Plateau {
  bottomLeft: any = {
    x: 0,
    y: 0
  };

  topRight: any = {
    x: 0,
    y: 0,
  };

  setPlateauTopRightCoordinates(coordinates: object) {
    this.topRight = coordinates;
  }
}
