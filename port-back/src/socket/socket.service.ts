import { Injectable } from '@nestjs/common';

@Injectable()
export class WebSocketService {
  // Lógica para manejar los mensajes entrantes
  handleIncomingMessage(message: string): string {
    console.log('Processing message in service:', message);
    // Aquí puedes hacer cualquier procesamiento extra que necesites
    return `${message}`;
  }
}
