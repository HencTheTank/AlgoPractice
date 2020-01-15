class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const hashedKey = this.hash(key);
    if (this.data[hashedKey] === undefined) {
      this.data[hashedKey] = [[key, value]];
    } else this.data[hashedKey].push([key, value]);
  }

  get(key) {
    const hashedKey = this.hash(key);
    if (this.data[hashedKey].length) {
      const keyFound = this.data[hashedKey].filter(elem => elem[0] === key);
      if (keyFound.length > 0) {
        return keyFound[0][1];
      }
    } else return undefined;
  }

  keys() {
    const keysArr = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        const currEntry = this.data[i];
        for (let j = 0; j < currEntry.length; j++) {
          keysArr.push(currEntry[j][0]);
        }
      }
    }
    return keysArr;
  }
}

const myHashTable = new HashTable(20);
myHashTable.set("grapes", 10000);
myHashTable.set("apples", 9);
myHashTable.set("orange", 1);
myHashTable.get("apples");
myHashTable.keys();
