import { Injectable } from '@nestjs/common';

@Injectable()
export class RewardService {
    private rewards = [
        {
            seq : 1,
            eventseq : 1,
            reward : 'point 100'
        },
        {
            seq : 2,
            eventseq : 2,
            reward : 'point 1500'

        },
        {
            seq : 3,
            eventseq : 3,
            reward : 'point 1000'
        }

    ];
    rewardAllList() {
        return this.rewards;
    }

    rewardSeqList(seq : number) {
        const idx = this.getRewardId(seq);
        return this.rewards[idx];
    }

    rewardCreate(data){
        const newReward = {seq: this.getNextSeq(), eventseq: 1, ...data}
        this.rewards.push(newReward);
        return newReward;
    }

    rewardUpdate(seq:number, data){
        const idx = this.getRewardId(seq);

        //seq가 있으면
        if(idx > -1){
            this.rewards[idx] = {
                ...this.rewards[idx], ...data,
            };
            return this.rewards[idx];
        }

        return null;
    }

    getRewardId(seq : number){
        return this.rewards.findIndex((reward) => reward.seq === seq)
    }

    getNextSeq(){
        return this.rewards.sort((a,b) => (b.seq-a.seq))[0].seq+1;
    }
}
