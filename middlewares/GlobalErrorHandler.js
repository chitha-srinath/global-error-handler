export class GlobalErrorHandler {
  static handleErrors(err, req, res, next) {
    console.error(err.stack);

    const statusCode = err?.status || 500;
    const message = err?.message || "Internal Server Error";

    res.status(statusCode).json({
      success: false,
      message,
    });
  }
}

//ts

// import { Request, Response, NextFunction } from 'express';

// export class GlobalErrorHandler {
//   static handleErrors(err: Error & { status?: number }, req: Request, res: Response, next: NextFunction) {
//     console.error(err.stack);

//     const statusCode = err.status || 500;
//     const message = err.message || 'Internal Server Error';

//     res.status(statusCode).json({
//       success: false,
//       message,
//     });
//   }
// }
