import randomWords from "random-words";

class Den {
  private denID: string = randomWords();
  constructor() {}

  getDenID(): string {
    return this.denID;
  }
}

export default Den;
