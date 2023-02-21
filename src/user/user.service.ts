import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { UserDTO } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService ){}
  async create(data: UserDTO ){
    const userExists = await this.prisma.user.findFirst({
      where: {
        email: data.email,
      }
    })
      if(userExists){
        throw new Error('Usuário já existe');
      }
    const user = await  this.prisma.user.create({
        data
      });
      return user;
  }
  async findAll(){
    return this.prisma.user.findMany()
  }
  async update(id: string, data: UserDTO){
    const userExists = await this.prisma.user.findUnique({
      where:{
        id,
      }
    })
      if(!userExists){
        throw new Error('Usuário não existe!')
      }
      return await this.prisma.user.update({
        data,
        where:{
          id
        }
      })
  }
  async delete(id: string){
    const userExists = await this.prisma.user.findUnique({
      where:{
        id,
      }
    })
      if(!userExists){
        throw new Error('Usuário não existe!')
      }
    return await this.prisma.user.delete({
      where:{
        id,
      }
    })
     
  }
}
