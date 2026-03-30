import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { MessageService } from './message.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('message')
@Controller('message')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class MessageController {
  constructor(private messageService: MessageService) { }

  @Post('message/send')
  @ApiOperation({ summary: 'Send a message from the current user to the specified receiver' })
  send(
    @Query('receiver_id') receiver_id: string,
    @Query('content') content: string,
    @Req() req: any,
  ) {
    return this.messageService.send(req.user.user_id, receiver_id, content)
  }

  @Get('message/received/:sender_id')
  @ApiOperation({ summary: 'Get all messages sent from a specified sender to the current user' })
  findAll(
    @Param('sender_id') sender_id: string,
    @Req() req: any,
  ) {
    return this.messageService.findAll(sender_id, req.user.user_id)
  }
  
  @Get('message/conversation/:user_id')
  @ApiOperation({ summary: 'Get all messages sent and received between the current user and specified user' })
  findAllConversations(
    @Param('user_id') user_id: string,
    @Req() req: any,
  ) {
    return this.messageService.findAllConversations(req.user.user_id, user_id)
  }
  
  @Get('message/conversation/:user_id/last')
  @ApiOperation({ summary: 'Get the last message sent or received between the current user and specified user' })
  findLastMessageOfConversation(
    @Param('user_id') user_id: string,
    @Req() req: any,
  ) {
    return this.messageService.findLastMessageOfConversation(req.user.user_id, user_id)
  }

}
