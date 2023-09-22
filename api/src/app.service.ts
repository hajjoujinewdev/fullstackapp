import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  t=["NestJs", "says","Helloooo","World!"];
  getHello(): string[] {
    //return 'NestJs says: Hello World!';
    return this.t;
  }
}
