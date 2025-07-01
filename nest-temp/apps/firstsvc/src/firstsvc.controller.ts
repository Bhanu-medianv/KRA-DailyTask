import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { FirstsvcService } from './firstsvc.service';
// import { Role } from './DTO/role.enum';
import { UserDto } from './DTO/user.dto';
import { Role } from '@app/libs/common/role.enum';
import {  Roles, RolesGuard } from '@app/libs';


@Controller()
export class FirstsvcController {
  constructor(private readonly firstsvcService: FirstsvcService) {}
  
  @Post()
  create(@Body() user:UserDto){
    return this.firstsvcService.create(user)
  }

  
  @UseGuards(RolesGuard)
  @Roles(Role.Admin)
  @Get()
  getHello(): string {
    return this.firstsvcService.getHello();
  }
}
