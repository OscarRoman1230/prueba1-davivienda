import { Controller, Post, Body } from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateRequestDto } from './dto/create-request.dto';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post('process')
  async processRequest(@Body() createRequestDto: CreateRequestDto) {
    return this.clientService.processRequest(createRequestDto);
  }
}
