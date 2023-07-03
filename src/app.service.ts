import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHelloWorld(): string {
    return 'Hello World!!!!';
  }
  getHello(): string {
    return 'Hello!!!!';
  }

  getWorld(): string {
    return 'World!!!!';
  }
}
