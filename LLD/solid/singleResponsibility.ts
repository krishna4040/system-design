// violation
class Marker {
  public name: string
  public color: string
  public year: number
  public price: number

  constructor(name: string, color: string, year: number, price: number) {
    this.name = name
    this.color = color
    this.year = year
    this.price = price
  }
}
class Invoice {
  private marker: Marker
  private quantity: number

  constructor(marker: Marker, quantity: number) {
    this.marker = marker
    this.quantity = quantity
  }

  // calculation logic
  public calculateTotal(): number {
    return this.marker.price * this.quantity
  }

  // printing logic
  public printInvoice(): void {
    // print invoice
  }

  // saving logic
  public saveToDb() {
    // save to db
  }
}

// Resolution
class _Invoice {
  private marker: Marker
  private quantity: number

  constructor(marker: Marker, quantity: number) {
    this.marker = marker
    this.quantity = quantity
  }

  // calculation logic
  public calculateTotal(): number {
    return this.marker.price * this.quantity
  }
}

class InvoiceDao {
  private invoice: _Invoice

  constructor(invoice: _Invoice) {
    this.invoice = invoice
  }

  public saveToDb() { }

  public saveToFile() { }
}

class InvoicePrinter {
  private invoice: _Invoice

  constructor(invoice: _Invoice) {
    this.invoice = invoice
  }

  public printInvoice(): void { }
}