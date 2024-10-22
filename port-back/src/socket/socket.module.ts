import { Module } from '@nestjs/common';
import { WebSocketGatewayController } from './socket.gateway';
import { WebSocketService } from './socket.service';

@Module({
  providers: [WebSocketGatewayController, WebSocketService],
})
export class WebSocketModule {}
