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
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.get("grapes");
myHashTable.set("apples", 9);
myHashTable.get("apples");
