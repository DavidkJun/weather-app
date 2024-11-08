import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getName(): string {
    return 'what is your Name!';
  }
}
