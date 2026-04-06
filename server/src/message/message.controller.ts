import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { MessageService } from './message.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { MessageQueryDto } from './message.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@ApiTags('message')
@Controller('message')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class MessageController {
  constructor(private messageService: MessageService) {}

  @Post('send')
  @ApiOperation({
    summary: 'Send a message from the current user to the specified receiver',
  })
  send(
    @Body() data: any,
    @Req() req: any,
    @Query('receiver_id') receiver_id: string,
    @Query('content') content: string,
  ) {
    return this.messageService.send(
      req.user.user_id,
      receiver_id ?? data.receiver_id,
      content ?? data.content,
      data.file_id ?? undefined,
    );
  }

  @Get('conversation/:user_id')
  @ApiOperation({
    summary:
      'Get all messages sent and received between the current user and specified user',
  })
  findAllForCurrent(@Query() query: MessageQueryDto, @Req() req: any) {
    return this.messageService.findAll({
      ...query,
      user1_id: req.user.user_id,
    });
  }

  @Get('conversation/:user2_id/unpaginated')
  @ApiOperation({
    summary:
      'Get all messages sent and received between the current user and specified user',
  })
  findAllUnpaginated(@Param('user2_id') user2_id: string, @Req() req: any) {
    return this.messageService.findAllNoPagination(req.user.user_id, user2_id);
  }

  @Get('conversation/between/:user1_id/:user2_id')
  @ApiOperation({
    summary:
      'Get all messages sent and received between the current user and specified user',
  })
  findAll(
    @Query() query: PaginationDto,
    @Req() req: any,
    @Param('user1_id') user1_id: string,
    @Param('user2_id') user2_id: string,
  ) {
    return this.messageService.findAll({ ...query, user1_id, user2_id });
  }

  @Get('conversation/:user_id/last')
  @ApiOperation({
    summary:
      'Get the last message sent or received between the current user and specified user',
  })
  findLastMessageOfConversation(
    @Param('user_id') user_id: string,
    @Req() req: any,
  ) {
    return this.messageService.findLast(req.user.user_id, user_id);
  }
  @Get('conversations')
  @ApiOperation({
    summary:
      'Get all conversations for the current user with last message and unread count',
  })
  getConversations(@Req() req: any) {
    return this.messageService.getConversations(req.user.user_id);
  }

  @Patch(':id/read')
  @ApiOperation({
    summary:
      'Mark all messages in a conversation as read up to a given message ID',
  })
  markAsRead(@Param('id', ParseIntPipe) id: number, @Req() req: any) {
    return this.messageService.markAsRead(id, req.user.user_id);
  }
}
