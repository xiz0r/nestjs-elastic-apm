import { Controller, Get } from '@nestjs/common';
import { ApmService } from './apm.service';

@Controller()
export class AppController {
  constructor(private readonly apmService: ApmService) {}

  @Get()
  getHello(): string {
    return 'hello';
  }

  @Get('delay')
  getdelay(): Promise<string> {
    // this.apmService.setTransactionName('/delay')
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('OK');
      }, 1000);
    });
  }
}
