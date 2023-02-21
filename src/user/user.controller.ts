import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() data: UserDTO) {
    return this.userService.create(data);
  }

   @Get()
     async findAll() {
     return this.userService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.userService.findOne(+id);
  // }

  @Patch(":id")
   async update(@Param("id") id: string, @Body() data: UserDTO) {
     return this.userService.update(id, data);
  }

  @Delete(":id")
   async delete(@Param("id") id: string) {
    return this.userService.delete(id);
  }
}
