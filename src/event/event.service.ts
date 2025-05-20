import { Injectable } from '@nestjs/common';

@Injectable()
export class EventService {

    private events = [
        {
            seq : 1,
            condition : 'test1',
            status : 'Inactive',
            period : '7'
        },
        {
            seq : 2,
            condition : 'test2',
            status : 'Active',
            period : '3'
        },
        {
            seq : 3,
            condition : 'test3',
            status : 'Active',
            period : '5'
        }

    ];
    eventAllList() {
        // return 'eventAllList';
        return this.events;
    }

    eventList(seq : number) {
        const idx = this.events.findIndex((event) => event.seq === seq)
        return this.events[idx];
    }

    eventCreate(data){
        const newEvent = {seq: this.getNextSeq(), ...data}
        this.events.push(newEvent);
        return newEvent;
    }

    //다음 seq 구하기
    getNextSeq(){
        return this.events.sort((a,b) => (b.seq-a.seq))[0].seq+1;
    }
}
