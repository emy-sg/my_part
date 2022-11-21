import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PlayerService {
    constructor(private prisma: PrismaService) {}

    async findPlayer(data: any) {

        const player = await this.prisma.player.findUnique({
            where: { nickname: data.nickname }
        });

        if (!player)
            return null;
        return player;
    }

    // async createFriendship(data: any, friendname: string) {

    //     const Sender = await this.findPlayer(data);
    //     const Receiver = await this.prisma.player.findUnique({
    //         where: { nickname: friendname}
    //     });

    //     const friends = await this.prisma.friendship.create({
    //         data: {
    //           title: 'Types of relations',
    //           tags: {
    //             create: [
    //               { tag: { create: { name: 'dev' } } },
    //               { tag: { create: { name: 'prisma' } } },
    //             ],
    //           },
    //         },
    //       })
    // }
}

