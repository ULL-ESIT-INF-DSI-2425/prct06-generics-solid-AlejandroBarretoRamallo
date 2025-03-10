interface Printable {
  print(): void
}

interface Scannable {
  scan(): void
}

class Printer implements Printable {
  print(): void {
    console.log('Printing...')
  }
}

class Scanner implements Scannable {
  scan(): void {
    console.log('Scanning...')
  }
}

class PrinterScanner implements Printable, Scannable {
  print(): void {
    console.log('Printing...')
  }

  scan(): void {
    console.log('Scanning...')
  }
}

// Client code
const printer = new Printer();
// Printing
printer.print();

const scanner = new Scanner();
// Scanning
scanner.scan();

const printerScanner = new PrinterScanner();
// Printing
printerScanner.print();
// Scanning
printerScanner.scan();