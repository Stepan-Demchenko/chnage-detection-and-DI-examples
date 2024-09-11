import { Injectable } from '@angular/core';

@Injectable()
export class IndependentService {
  private instanceId: number;

  constructor() {
    // Generate a unique ID for this service instance
    this.instanceId = Math.floor(Math.random() * 1000);
    console.log(`IndependentService instance created with ID: ${this.instanceId}`);
  }

  log(message: string): string {
   return `[IndependentService ID: ${this.instanceId}] ${message}`;
  }

}
