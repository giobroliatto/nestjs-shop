import { UserRepository } from './user.repository';
import { Controller, Post, Get } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';

@Controller('/users')
export class UserController {

    constructor(private userRepository: UserRepository) { }

    @Post()
    async createUser(@Body() userData) {
        this.userRepository.save(userData);
        return userData;
    }

    @Get()
    async getAllUsers() {
        return this.userRepository.getAll();
    }
}