// Violation
interface RestaurantEmployee {
  washDishes: () => void
  serveCustomer: () => void
  cookFood: () => void
}

class Waiter implements RestaurantEmployee {
  washDishes(): void { throw new Error("not my job") }
  cookFood(): void { throw new Error("not my job") }
  serveCustomer(): void { }
}

class Chef implements RestaurantEmployee {
  washDishes(): void { throw new Error("not my job") }
  serveCustomer(): void { throw new Error("not my job") }
  cookFood(): void { }
}

// Resolution
interface WaiterInterface {
  serveCustomer: () => void
}

interface ChefInterface {
  cookFood: () => void
}

class _Waiter implements WaiterInterface {
  serveCustomer(): void { }
}

class _Chef implements ChefInterface {
  cookFood(): void { }
}