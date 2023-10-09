import { Injectable } from '@nestjs/common';
import { CreateDonationInput } from './dto/create-donation.input';
import { PrismaService } from '../prisma/prisma.service';
import { OrderByParams } from 'src/graphql';

@Injectable()
export class DonationsService {
  constructor(private prisma:PrismaService){}

  create(createDonationInput: CreateDonationInput) {
    const donation = this.prisma.donation.create({
      data: { ...createDonationInput },
    })
    return donation;
  }

  findAll(orderBy?: OrderByParams) {
    const {field = 'createdAt' , direction = 'desc'} = orderBy || {};
    return this.prisma.donation.findMany({
      orderBy: {[field] : direction},
    });
  }

  findOne(id: number) {
    const donation = this.prisma.donation.findUnique({
      where:{
        id:id,
      }
    })
    return donation;
  }

  async getTotal() {
    const response = await this.prisma.donation.aggregate({
      _sum: {
        count:true,
      },
    });
    return response._sum.count;
  }
}
