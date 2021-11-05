import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  messages: string[] = [];

  constructor() { }

  add(message: string): void {
    const today: string = new Date(Date.now()).toISOString();

    this.messages.push(`[${today}]: ${message}`);
  }

  clear(): void {
    this.messages = [];
  }
}
