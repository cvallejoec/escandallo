import { Injectable, NotFoundException } from '@nestjs/common';
import { In, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Role } from './role.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private userRepo: Repository<Role>,
  ) {}

  async findOne(id: number) {
    const user = await this.userRepo.findOneBy({ id });
    if (!user) throw new NotFoundException(`Role not found.`);
    return user;
  }

  async findByRolesIds(rolesIds: number[]) {
    return await this.userRepo.findBy({
      id: In(rolesIds),
    });
  }
}
