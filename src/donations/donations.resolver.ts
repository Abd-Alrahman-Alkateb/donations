import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { DonationsService } from './donations.service';
import { CreateDonationInput } from './dto/create-donation.input';
import { Donation } from './entities/donation.entity';
import { OrderByParams } from 'src/graphql';

@Resolver(Donation)
export class DonationsResolver {
  constructor(private readonly donationsService: DonationsService) {}

  @Mutation(() => Donation)
  createDonation(@Args('createDonationInput') createDonationInput: CreateDonationInput) {
    return this.donationsService.create(createDonationInput);
  }

  @Query('donations')
  findAll(
    @Args('orderBy')
    orderBy?:OrderByParams,
  ) {
    return this.donationsService.findAll(orderBy);
  }

  @Query('donation')
  findOne(@Args('id') id: number) {
    return this.donationsService.findOne(id);
  }

}
