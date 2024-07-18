import DoorModel from "@/model/door";

export function createDoors(amount: number, doorWithGift: number): DoorModel[] {
  return Array.from({ length: amount, }, (_, index) => {
    const number = index + 1;
    const haveGift = number === doorWithGift;

    return new DoorModel(number, haveGift);
  })
}

export function refreshDoors(doors: DoorModel[], modifiedDoor: DoorModel): DoorModel[] {
  return doors.map(door => {
    const isModifiedDoor = door.number === modifiedDoor.number;
    if(isModifiedDoor) {
      return modifiedDoor;
    } else {
      return door.isOpened ? door : door.deselect();
    }
  }) 
}