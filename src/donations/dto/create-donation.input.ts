import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateDonationInput {
  @Field(() => Int)
  count: number;

  @Field()
  displayName: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  mobile?: string;

  @Field({ nullable: true })
  team?: string;

  @Field({ nullable: true })
  mesaage?: string;
}