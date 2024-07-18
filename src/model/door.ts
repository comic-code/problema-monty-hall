export default class DoorModel {
  #number: number
  #haveGift: boolean
  #isSelected: boolean
  #isOpened: boolean

  constructor(number: number, haveGift = false, isSelected = false, isOpened = false) {
    this.#number = number;
    this.#haveGift = haveGift;
    this.#isSelected = isSelected;
    this.#isOpened = isOpened;
  }

  get number() { return this.#number; }
  get haveGift() { return this.#haveGift; }
  get isSelected() { return this.#isSelected; }
  get isOpened() { return this.#isOpened; }

  deselect() {
    const isSelected = false;
    return new DoorModel(this.number, this.haveGift, isSelected, this.isOpened);
  }

  toggleSelected() {
    const isSelected = !this.#isSelected;
    return new DoorModel(this.number, this.haveGift, isSelected, this.isOpened);
  }

  open() {
    const opened = true;
    return new DoorModel(this.number, this.haveGift, this.isSelected, opened);
  }
};