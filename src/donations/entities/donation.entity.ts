import { ObjectType, Field, Int } from '@nestjs/graphql';
@ObjectType()
export class Donation {
  @Field(() => Int)
  id: number;
  
  @Field(() => Int)
  count: number;

  @Field(() => String)
  displayName: String;

  @Field(() => String)
  email: String;

  @Field(() => String)
  mobile: String;

  @Field(() => String)
  team: String;

  @Field(() => String)
  teamesaagem: String;
}
