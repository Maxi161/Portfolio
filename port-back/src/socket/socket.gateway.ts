import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { WebSocketService } from './socket.service';

@WebSocketGateway({ cors: true })
export class WebSocketGatewayController {
  @WebSocketServer()
  server: Server;

  constructor(private readonly websocketService: WebSocketService) {}

  @SubscribeMessage('messageToServer')
  handleMessage(@MessageBody() message: string): void {
    const response = this.websocketService.handleIncomingMessage(message);
    this.server.emit('messageFromServer', response);
  }

  @SubscribeMessage('mensajeMural')
  mensajeMuralHandler(@MessageBody() message: string): void {
    const response = this.websocketService.handleIncomingMessage(message);
    this.server.emit('newMessage', response);
  }

  handleConnection(client: Socket) {
    console.log('Cliente conectado:', client.id);
  }

  handleDisconnect(client: Socket) {
    console.log('Cliente desconectado:', client.id);
  }
}
