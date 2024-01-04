import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './user.entity';
import { Role } from './role.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { RolesService } from './roles.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Role])],
  providers: [UsersService, RolesService],
  controllers: [UsersController],
  exports: [UsersService, RolesService],
})
export class UsersModule {}
