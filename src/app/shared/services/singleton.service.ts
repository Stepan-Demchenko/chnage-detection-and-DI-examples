import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingletonService {
  private instanceId: number;

  constructor() {
    // Generate a unique ID for this service instance
    this.instanceId = Math.floor(Math.random() * 1000);
    console.log(`Singleton instance created with ID: ${this.instanceId}`);
  }


  log(message: string): string {
    return `[SingletonService ID: ${this.instanceId}] ${message}`;
  }
}
