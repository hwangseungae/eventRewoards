import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { EventService } from './event.service';

@Controller('event')
export class EventController {
    constructor(
        private readonly eventService: EventService
    ){}

    // 이벤트 목록
    @Get()
    eventAllList() {
        // return 'eventAllList';
        return this.eventService.eventAllList();
    }

    // 이벤트 1개 (seq) 목록
    @Get(':seq')
    eventList(
        @Param('seq') seq: number
    ) {
        // return `event seq :${seq}`;
        return this.eventService.eventList(Number(seq));
    }

    // 이벤트 생성 
    @Post()
    eventCreate(
        @Body() data
    ){
        // return 'eventCreate';
        return this.eventService.eventCreate(data);
    }
}
