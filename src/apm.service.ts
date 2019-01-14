import { Injectable } from '@nestjs/common';
import * as apm from 'elastic-apm-node/start'

@Injectable()
export class ApmService {
  apm: any;

  constructor() {
    if (apm.isStarted()) {
      this.apm = apm;
      console.log('APM start')
    }
  }

  captureError(data: any) {
		this.apm.captureError(data);
	}

	startTransaction(name, type): any {
		return this.apm.startTransaction(name, type);
	}

	setTransactionName(name) {
		return this.apm.setTransactionName(name);	
	}

	startSpan(name) {
		return this.apm.startSpan(name);
	}
}
