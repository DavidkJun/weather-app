import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getName(): string {
    return 'Hello Hello What Your Name!';
  }
}
