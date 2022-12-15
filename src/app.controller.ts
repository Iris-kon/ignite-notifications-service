import { Controller, Get } from '@nestjs/common'
import { Post } from '@nestjs/common/decorators'
import { randomUUID } from 'crypto'
import { PrismaService } from './prisma.service'

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notification.findMany()
  }

  @Post()
  create() {
    return this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content: 'new solicitation',
        category: 'social',
        recipientId: randomUUID(),
      },
    })
  }
}
