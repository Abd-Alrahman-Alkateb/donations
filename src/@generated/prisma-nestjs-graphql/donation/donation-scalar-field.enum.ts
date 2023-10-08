import { registerEnumType } from '@nestjs/graphql';

export enum DonationScalarFieldEnum {
    id = "id",
    count = "count",
    createdAt = "createdAt",
    displayName = "displayName",
    email = "email",
    mobile = "mobile",
    team = "team",
    mesaage = "mesaage"
}


registerEnumType(DonationScalarFieldEnum, { name: 'DonationScalarFieldEnum', description: undefined })
