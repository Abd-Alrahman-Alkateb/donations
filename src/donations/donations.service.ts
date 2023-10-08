import { Injectable } from '@nestjs/common';
import { CreateDonationInput } from './dto/create-donation.input';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DonationsService {
  constructor(private prisma:PrismaService){}

  create(createDonationInput: CreateDonationInput) {
    const donation = this.prisma.donation.create({
      data: { ...createDonationInput },
    })
    return donation;
  }

  findAll() {
    return this.prisma.donation.findMany();
  }

  findOne(id: number) {
    const donation = this.prisma.donation.findUnique({
      where:{
        id:id,
      }
    })
    return donation;
  }
}
