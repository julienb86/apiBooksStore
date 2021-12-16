import { Controller, Get, Param } from '@nestjs/common';
import { User } from 'src/entity/User.entity';
import { UserService } from '../Services/UserService';

@Controller('users')
export class UserController {
    constructor(private readonly UserService: UserService) { }

    @Get()
    getUsers(): Promise<User[]> {
        return this.UserService.findAll();
    }

    @Get(':id')
    getUser(@Param('id') id: string): Promise<User> {
        return this.UserService.findOne(id);
    }
}
