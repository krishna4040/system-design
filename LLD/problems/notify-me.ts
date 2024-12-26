interface IItem {
  name: string
  users: User[]
  stock: number
  add: (user: User) => void
  remove: (user: User) => void
  notify: () => void
  setStock: (stock: number) => void
}

interface IUser {
  name: string
  update: (item: IItem) => void
  subscribe: (item: IItem) => void
}

class Item implements IItem {
  users: User[] = []
  stock: number = 0
  name: string;

  constructor(name: string) {
    this.name = name
  }

  add(user: User): void {
    if (this.stock === 0) {
      this.users.push(user)
    } else {
      user.update(this)
    }
  }

  remove(obs: User): void {
    this.users = this.users.filter((o) => o !== obs)
  }

  notify(): void {
    this.users.forEach((obs) => obs.update(this))
  }

  setStock(stock: any): void {
    this.stock = stock
    this.notify()
  }
}

class User implements IUser {
  name: string

  constructor(name: string) {
    this.name = name
  }

  update(item: Item): void {
    console.log(`${this.name}: ${item.name} is available, current stock: ${item.stock}`);
  }

  subscribe(item: Item) {
    item.add(this)
  }
}

const iphone = new Item("iPhone")

const krishna = new User("Krishna")
krishna.subscribe(iphone)

iphone.setStock(10)

export { }