interface IObservable {
  observers: IObserver[]
  data: any
  add: (obs: IObserver) => void
  remove: (obs: IObserver) => void
  notify: () => void
  setData: (data: any) => void
  getData: () => any
}

interface IObserver {
  observable: IObservable
  update: () => void
}

class Observable implements IObservable {
  observers: IObserver[] = []
  data: any

  public add(obs: IObserver): void {
    this.observers.push(obs)
  }

  remove(obs: IObserver): void {
    this.observers = this.observers.filter((o) => o !== obs)
  }

  notify(): void {
    this.observers.forEach((obs) => obs.update())
  }

  setData(data: any): void {
    this.data = data
    this.notify()
  }

  getData() {
    return this.data
  }
}

class Observer implements IObserver {
  observable: IObservable;

  public update(): void {
    console.log(this.observable.getData());
  }
}

// Example
// Weather station
const weatherStation = new Observable()
const tvDisplay = new Observer()
const mobileDisplay = new Observer()

weatherStation.add(tvDisplay)
weatherStation.add(mobileDisplay)

weatherStation.setData('sunny')

// notify me feature => Amazon

export { }