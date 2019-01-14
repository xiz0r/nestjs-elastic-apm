import { Injectable, NestInterceptor, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";
import { ApmService } from "./apm.service";

@Injectable()
export class ApmInterceptor implements NestInterceptor {
  constructor(private readonly apmService: ApmService) {}

  intercept(
    context: ExecutionContext,
    call$: Observable<any>
  ): Observable<any> {
    const [IncomingMessage, ...res] = context.getArgs();

    this.apmService.setTransactionName(
      `${IncomingMessage.method} ${IncomingMessage.url}`
    );

    return call$;
  }
}
