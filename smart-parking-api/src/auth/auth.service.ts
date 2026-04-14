import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async register(data: any) {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = this.userRepo.create({
      ...data,
      password: hashedPassword,
    });

    return this.userRepo.save(user);
  }
  async login(data: any) {
  const user = await this.userRepo.findOne({
    where: { email: data.email },
  });

  if (!user) return { message: 'User not found' };

  const isMatch = await bcrypt.compare(data.password, user.password);

  if (!isMatch) return { message: 'Wrong password' };

  const token = this.jwtService.sign({
    id: user.id,
    email: user.email,
  });

  return { access_token: token };
}
}
