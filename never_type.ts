//never type is a special type that represents values that never occur. It is used to indicate that a function never returns or that an expression never produces a value.


type Shape = 'circle' | 'square';

function getArea(shape: Shape): number {
  switch (shape) {
    case 'circle':
      return Math.PI * 2; // Example calculation
    case 'square':
      return 4; // Example calculation
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck; // This line will never be reached if all cases are handled
  }
}

getArea('circle');

function throwError(message: string): never {
  throw new Error(message);
}

throwError("An error occurred");
