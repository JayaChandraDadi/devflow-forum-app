// src/types/express.d.ts
import { User } from '../../users/user.entity';

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}

export {}; // ← critical so it's treated as a module
