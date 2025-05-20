import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { RewardService } from './reward.service';
import { EventService } from '../event/event.service';

@Controller('reward')
export class RewardController {
    constructor(
            private readonly rewardService: RewardService,
            private readonly eventService: EventService

        ){}
    
        // 보상 전체 목록
        @Get()
        eventAllList() {
            return this.rewardService.rewardAllList();
        }
    
        // 보상 seq에 따른 목록
        @Get(':seq')
        eventList(
            @Param('seq') seq: number
        ) {
            return this.rewardService.rewardSeqList(Number(seq));
        }
    
        //보상 생성
        @Post()
        eventCreate(
            @Body() data
        ){
            return this.rewardService.rewardCreate(data);
        }

        //보상 수정
        @Put(':seq')
        eventUpdate(
            @Param('seq') seq: number,
            @Body() data
        ){
            return this.rewardService.rewardUpdate(Number(seq), data);
        }
}
