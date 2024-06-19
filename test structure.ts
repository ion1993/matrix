// Односвязанный список - структура данных состоящая из узлов, каждый узел содержит нагрузку (данные) и ссылку на следующий узел. 
// Данная структура позволяет быстро добавлять элементы в начало и конец списка O(1), но поиск происходит медленно O(n).

class OneNode {
  data: any
  nextStep: OneNode | null
  constructor(data: any) {
    this.data = data;
    this.nextStep = null;
  }
}

class ChangeNode {
  head: OneNode | null
  tail: OneNode | null
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(data: string | number) {
    const newNode = new OneNode(data);
    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextStep = newNode;
      this.tail = newNode;
    }
  }

  update(data: string | number, dataUpdate: string | number) {
    if (!this.head) {
      return false;
    }

    if (this.head.data === data) {
      this.head.data = dataUpdate;
      return true;
    }

    let current: OneNode | null = this.head
    while (current) {
      if (current.data === data) {
        current.data = dataUpdate;
        return true;
      } else {
        current = current?.nextStep;
      }
    }

    if(!current){
      return false
    }
  }

  remove(data) {
    if (!this.head) {
      return false;
    }

    if (this.head.data === data) {
      this.head = this.head.nextStep;
      return true;
    }

    let current: OneNode | null = this.head;
    while (current) {
      if (current.nextStep!.data === data) {
        current.nextStep = current.nextStep!.nextStep;
        return true;
      }
      current = current.nextStep;
    }

    if(!current){
      return false
    }
  }

  print() {
    console.log(this.head)
  }

  printValue() {
    if (!this.head) {
      return null;
    }

    let current: OneNode | null = this.head
    while (current) {
      console.log(current.data);
      current = current.nextStep;
    }
  }
}


// Двусвязный список - структура данных в каждом узле которой находится нагрузка (данные) и ссылки на предыдущий и следующий узлы. 
// поиск может проходить с любой стороны списка O(n). данные проще изменять и удалять O(n), добавлять в начало и конец O(1).
class OneDoublyNode {
  data: any
  nextStep: OneDoublyNode | null
  prevStep: OneDoublyNode | null
  constructor(data: any) {
    this.data = data;
    this.nextStep = null;
    this.prevStep = null;
  }
}

class ChangeDoublyNode {
  head: OneDoublyNode | null
  tail: OneDoublyNode | null
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(data: string | number) {
    const newNode = new OneDoublyNode(data);
    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextStep = newNode;
      newNode.prevStep = this.tail;
      this.tail = newNode;
    }
  }

  remove(data) {
    if (!this.head) {
      return false;
    }

    if (this.head.data === data) {
      this.head = this.head.nextStep;
      return true;
    }

    let current: OneDoublyNode | null = this.head
    while (current) {
      if (current.data === data) {
        current.prevStep!.nextStep = current.nextStep;
        current.nextStep!.prevStep = current.prevStep;
        return true;
      } else {
        current = current?.nextStep;
      }
    }

    if(!current){
      return false
    }
  }

  update(data: string | number, dataUpdate: string | number) {
    if (!this.head) {
      return false;
    }

    if (this.head.data === data) {
      this.head.data = dataUpdate;
      return true;
    }
    let current: OneDoublyNode | null = this.head
    while (current) {
      if (current.data === data) {
        current.data = dataUpdate;
        return true;
      } else {
        current = current?.nextStep;
      }
    }

    if (!current) {
      return false;
    }
  }

  print() {
    console.log(this.head)
  }

  printValue() {
    if (!this.head) {
      return null;
    }

    let current: OneDoublyNode | null = this.head
    while (current) {
      console.log(current.data);
      current = current.nextStep;
    }
  }
}





//Кольцевой список - структура данных в каждом узле которой находится нагрузка (данные) и ссылки на предыдущий и следующий узлы, при этом последний узел ссылается на первый. 

class CircularOneNode {
  data: any
  nextStep: CircularOneNode | null
  prevStep: CircularOneNode | null
  constructor(data: any) {
    this.data = data;
    this.nextStep = null;
    this.prevStep = null;
  }
}

class CircularChangeNode {
  head: CircularOneNode | null
  tail: CircularOneNode | null
  count: number
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }
  add(data: string | number) {
    const newNode = new CircularOneNode(data);
    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextStep = newNode;
      newNode.prevStep = this.tail;
      this.tail = newNode;
    }
    this.count++;
  }

  update(data: string | number, dataUpdate: string | number) {
    if (!this.head) {
      return false;
    }

    if (this.head.data === data) {
      this.head.data = dataUpdate;
      return true;
    }

    let current = this.head
    for (let i = 0; i < this.count - 1; i++) {
      if (current.data === data) {
        current.data = dataUpdate;
        return true;
      } else {
        current = current?.nextStep;
        if (i === this.count - 1) {
          return false;
        }
      }
    }
  }

  remove(data) {
    if (!this.head) {
      return false;
    }

    if (this.head.data === data) {
      this.head.nextStep!.prevStep = this.head.prevStep;
      this.head.prevStep!.nextStep = this.head.nextStep;
      return true;
    }

    let current = this.head
    for (let i = 0; i < this.count - 1; i++) {
      if (current.data === data) {
        current.prevStep!.nextStep = current.nextStep;
        current.nextStep!.prevStep = current.prevStep;
        return true;
      } else {
        current = current?.nextStep;
        if (i === this.count - 1) {
          return false;
        }
      }
    }
  }

  print() {
    console.log(this.head)
  }

  printValue() {
    if (!this.head) {
      return null;
    }

    let current = this.head
    for (let i = 0; i < this.count; i++) {
      console.log(current.data);
      current = current?.nextStep;
    }
  }
}




//LIFO - Структура данных которая реализует принцип Last In First Out (последний вошел - первый вышел), Один из примеров это Стек. 

class OneNodeLIFO {
  data: any
  nextStep: OneDoublyNode | null
  constructor(data: any) {
    this.data = data;
    this.nextStep = null;
  }
}

class ChangeNodeLIFO {
  first: OneNodeLIFO | null
  constructor() {
    this.first = null;
  }

  add(data: string | number) {
    const newNode = new OneNodeLIFO(data);
    if (!this.first) {
      this.first = newNode;
    } else {
      newNode.nextStep = this.first;
      this.first = newNode;
    }
  }

  returnElement() {
    if (!this.first) {
      return null;
    }

    let current = this.first
    this.first = current?.nextStep;
    console.log(current.data);
    return current.data;
  }

  print() {
    console.log(this.first)
  }

  clear() {
    this.first = null;
  }
}




//FIFO - структура данных которая реализует принцип First In First Out (первый вошел - первый вышел). Один из примеров это Очередь.

class OneNodeFIFO {
  data: any
  nextStep: OneDoublyNode | null
  constructor(data: any) {
    this.data = data;
    this.nextStep = null;
  }
}

class ChangeNodeFIFO {
  first: OneNodeFIFO | null
  last: OneNodeFIFO | null
  constructor() {
    this.first = null;
    this.last = null;
  }

  add(data: string | number) {
    const newNode = new OneNodeFIFO(data);
    if (!this.first || !this.last) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.nextStep = newNode;
      this.last = newNode;
    }
  }

  returnElement() {
    if (!this.first) {
      return null;
    }

    let current = this.first
    this.first = current?.nextStep;
    console.log(current.data);
    return current.data;
  }

  print() {
    console.log(this.first)
  }

  clear() {
    this.first = null;
  }
}




//HashTable (Хеш-таблица) - структура данных котораясостоит из массива элементов, где каждый элемент представляет собой пару ключ значение, и хеш функции которая преобразует ключ в индекс массива.

type dataHashTable = {key: string | number; value: string | number}

class OneNodeHashTable {
  data: dataHashTable;
  nextStep: OneNodeHashTable | null
  constructor(data: any) {
    this.data = data;
    this.nextStep = null;
  }
}

class ChangeNodeHashTable {
  head: OneNodeHashTable | null
  tail: OneNodeHashTable | null
  count: number
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  add(data: dataHashTable) {
    const newNode = new OneNodeHashTable(data);
    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextStep = newNode;
      this.tail = newNode;
    }
    this.count++;
  }

  update(key, dataUpdate: string | number) {
    if (!this.head) {
      return false;
    }

    if (this.head.data.key === key) {
      this.head.data.value = dataUpdate;
      return true;
    }

    let current: OneNodeHashTable | null = this.head
    while (current) {
      if (current.data.key === key) {
        current.data.value = dataUpdate;
        return true;
      } else {
        current = current.nextStep;
      }
    }

    if(!current){
      return false
    }
  }

  remove(key) {
    if (!this.head) {
      return false;
    }

    if (this.head.data.key === key) {
      this.head = this.head.nextStep;
      return true;
    }

    let current: OneNodeHashTable | null = this.head;
    while (current) {
      if (current.nextStep?.data.key === key) {
        current.nextStep = current.nextStep!.nextStep;
        return true;
      }
      current = current.nextStep;
    }

    if(!current){
      return false
    }
  }
}

class HashTable {
  private size: number
  private backets: ChangeNodeHashTable[]
  countElements = 0

  constructor(size) {
    this.size = size;
    this.backets = new Array(size);
  }

  initialBucket() {
    for (let i = 0; i < this.size; i++) {
      this.backets[i] = new ChangeNodeHashTable();
    }
  }

  add(key: string | number, value: string | number) {
    const index = this.getIndex(key);
    this.backets[index].add({ key, value });
    this.stressHashTable();
    this.countElements++;
  }

  remove(key) {
    const index = this.getIndex(key);
    this.backets[index].remove(key);
  }

  update(key, dataUpdate) {
    const index = this.getIndex(key);
    this.backets[index].update(key, dataUpdate);
  }

  private getHash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      console.log(key.charCodeAt(i));
      hash = (hash << 5) - hash + key.charCodeAt(i);
    }
    console.log(hash);
    return hash;
  }

  private stressHashTable() {
    let stress = 0;
    for (let i = 0; i < this.size; i++) {
      if (this.backets[i].count > 30) stress++;
    }
    if (100 / this.size * stress > 70) {
      this.reHash();
    }
    
  }

  private reHash() {
    this.size = this.size * 2;
    const backetsTemp = this.backets;
    this.backets = new Array(this.size);
    this.initialBucket();

    for (let i = 0; i < backetsTemp.length; i++) {
      let current = backetsTemp[i].head;
      while (current) {
        this.add(current.data.key, current.data.value);
        current = current.nextStep;
      }
    }
  }

  private getIndex(key) {
    const index = this.getHash(key);
    return index % this.size;
  }
}

//Сортировка слиянием - принцип которой заключается в разделении массива на две половины сортировки этих половин слиянием и склейки всех отсортированных частей. Сложность O(n log n)
const merge =(left: number[], right: number[]) => {
  const result: number[] = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift() as number);
    } else {
      result.push(right.shift() as number);
    }
  }

  return [...result, ...left, ...right];
}

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const middlePoint = Math.floor(arr.length / 2);
  const left = arr.slice(0, middlePoint);
  const right = arr.slice(middlePoint);

  return merge(mergeSort(left), mergeSort(right))
};

//Сортировка пасьянсом - проверяются соседние элементы, если один больше текущего, то меняются местами.
const solitaireSort = (arr) => {
  let sortedArr = [...arr];
  const stack = [];

  while (sortedArr.length > 0) {
    let highestValue = -Infinity;
    let highestIndex = -1;

    for (let i = 0; i < sortedArr.length; i++) {
      if (sortedArr[i] > highestValue) {
        highestValue = sortedArr[i];
        highestIndex = i;
      }
    }

    stack.push(sortedArr.splice(highestIndex, 1)[0] as never);
    sortedArr = sortedArr.filter((_, i) => i !== highestIndex);
  }

  return stack;
}

//сортировка пузырьком - сравниваются два соседних элемента, если первый больше второго, то меняются местами, если нет то переходит к следующей интерации.
function bubbleSort(array) {
  const length = array.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
}
