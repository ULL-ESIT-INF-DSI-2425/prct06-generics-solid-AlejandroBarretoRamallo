interface AbleFly {
  fly(): void
}

class Bird {
  
}

class Sparrow extends Bird implements AbleFly{
  fly(): void {
    console.log('flying...')
  }
}

class Penguin extends Bird {}