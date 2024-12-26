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
  public marker: Marker
  public quantity: number

  constructor(marker: Marker, quantity: number) {
    this.marker = marker
    this.quantity = quantity
  }

  public calculateTotal(): number {
    return this.marker.price
  }
}

class InvoiceDao {
  private invoice: Invoice

  constructor(invoice: Invoice) {
    this.invoice = invoice
  }

  public saveToDb() { }

  public saveToFile() { }
}

class InvoicePrinter {
  private invoice: Invoice

  constructor(invoice: Invoice) {
    this.invoice = invoice
  }

  public printInvoice(): void { }
}

// Resolution
interface _InvoiceDao {
  saveToDb?: () => void
  saveToFile?: () => void
}

class DbInvoiceDao implements _InvoiceDao {
  public saveToDb(): void { }
}

class FileInvoiceDao implements _InvoiceDao {
  public saveToFile(): void { }
}

export { }