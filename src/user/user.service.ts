import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { access } from 'fs';
import { jwt } from 

@Injectable()
export class UserService {
    private users = [
        {
            username : 'abc',
            password : 'abc123'
        },
        {
            username : 'efg',
            password : 'efg123'
        },

    ];

    async login(data: ){
        const match = await compare(password, this.users.password);
        if(!match)
            throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED);

        const payload = {
            name: this.users[0].username
        };

        const accessToken = jwt.sign(payload, 'key');

        return accessToken;

    }

    async getUsers() {
        return ;
    }
}

