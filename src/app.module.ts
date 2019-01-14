import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ApmService } from './apm.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ApmInterceptor } from './apm.interceptor';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    ApmService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ApmInterceptor,
    },
  ],
})
export class AppModule {}
