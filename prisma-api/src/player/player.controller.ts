import { Controller, Get, Req, Request, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { PlayerService } from './player.service';
import { AuthGuard } from '@nestjs/passport';
import { userInfo } from 'os';

@Controller('player')
@UseGuards(AuthGuard('jwt'))
export class PlayerController {
    constructor(private readonly playerService: PlayerService) {}
    @Get('myprofile')
	async login(@Req() request, @Res() response) {
        console.log("MY PROFILE");
        const user =  await this.playerService.findPlayer(request.user);

        response.status(200).send(user);

		return user;
    }
}
