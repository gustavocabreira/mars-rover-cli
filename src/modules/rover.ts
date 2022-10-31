export default class Rover {
  facing: string = '';

  landingPosition = {
    x: 0,
    y: 0,
    facing: '',
  };
  
  currentPosition = {
    x: 0,
    y: 0,
  };

  coordinates: any[] = [
    {
      point: 'N',
      degree: 0
    },
    {
      point: 'E',
      degree: 90
    },
    {
      point: 'S',
      degree: 180
    },
    {
      point: 'W',
      degree: 270
    },
  ]

  degreeFacing: number = 0;

  constructor(facing: string, xLandingPosition: number, yLandingPosition: number) {
    this.facing = facing;

    this.degreeFacing = this.coordinates.find(el => el.point == facing).degree;

    this.landingPosition = {
      x: xLandingPosition,
      y: yLandingPosition,
      facing: facing,
    };

    this.currentPosition = {
      x: xLandingPosition,
      y: yLandingPosition,
    };
  }

  addNorthCoordinate() {
    this.currentPosition.y += 1;
    this.facing = 'N';
  }
  
  addEastCoordinate() {
    this.currentPosition.x += 1;
    this.facing = 'E';
  }

  addWestCoordinate() {
    this.currentPosition.x -= 1;
    this.facing = 'W';
  }

  addSouthCoordinate() {
    this.currentPosition.y -= 1;
    this.facing = 'S';
  }

  keepMovingForward() {
    switch(this.facing) {
      case 'N':
          this.addNorthCoordinate();
        break;
      case 'S':
          this.addSouthCoordinate();
        break;
      case 'E':
        this.addEastCoordinate();
        break;
      case 'W':
        this.addWestCoordinate();
        break;
    }
  }

  changeDirection(direction: any) {
    if(direction == 'L') {
      if(this.degreeFacing == 0) {
        this.degreeFacing = 270;
      } else {
        this.degreeFacing -= 90;
      }

    } else if (direction == 'R') {
      if(this.degreeFacing == 270) {
        this.degreeFacing = 0;
      } else {
        this.degreeFacing += 90;
      }
    }

    this.facing = this.coordinates.find(el => el.degree == this.degreeFacing).point;
  }

  getCurrentPosition() {
    return [
      this.currentPosition.x,
      this.currentPosition.y,
      this.facing
    ].join(' ')
  }
}
