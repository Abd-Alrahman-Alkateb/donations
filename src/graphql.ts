
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateDonationInput {
    count: number;
    displayName: string;
    email: string;
    mobile?: Nullable<string>;
    team?: Nullable<string>;
    mesaage?: Nullable<string>;
}

export class Donation {
    id: number;
    count: number;
    displayName: string;
    email: string;
    mobile?: Nullable<string>;
    team?: Nullable<string>;
    mesaage?: Nullable<string>;
}

export abstract class IQuery {
    abstract donations(): Nullable<Donation>[] | Promise<Nullable<Donation>[]>;

    abstract donation(id: number): Nullable<Donation> | Promise<Nullable<Donation>>;
}

export abstract class IMutation {
    abstract createDonation(createDonationInput: CreateDonationInput): Donation | Promise<Donation>;
}

type Nullable<T> = T | null;
