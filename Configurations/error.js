export class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
    this.status = 400; // Bad Request
  }
}

export class PayloadError extends Error {
  constructor(message) {
    super(message);
    this.name = "PayloadError";
    this.status = 400; // Bad Request
  }
}

export class UnauthorizedError extends Error {
  constructor(message) {
    super(message);
    this.name = "UnauthorizedError";
    this.status = 401; // Unauthorized
  }
}

export class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = "NotFoundError";
    this.status = 404; // Not Found
  }
}

//ts

// export class ValidationError extends Error {
//     status: number;

//     constructor(message: string) {
//       super(message);
//       this.name = 'ValidationError';
//       this.status = 400; // Bad Request
//     }
//   }

//   export class PayloadError extends Error {
//     status: number;

//     constructor(message: string) {
//       super(message);
//       this.name = 'PayloadError';
//       this.status = 400; // Bad Request
//     }
//   }

//   export class UnauthorizedError extends Error {
//     status: number;

//     constructor(message: string) {
//       super(message);
//       this.name = 'UnauthorizedError';
//       this.status = 401; // Unauthorized
//     }
//   }

//   export class NotFoundError extends Error {
//     status: number;

//     constructor(message: string) {
//       super(message);
//       this.name = 'NotFoundError';
//       this.status = 404; // Not Found
//     }
//   }
