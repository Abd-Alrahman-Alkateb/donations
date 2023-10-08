import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {  GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import {ApolloServerPluginLandingPageLocalDefault} from 'apollo-server-core';
import { DonationsModule } from './donations/donations.module';
import { DateTimeScalar } from './date.scalar';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      playground:false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      typePaths: ['./**/*.graphql'],
      resolvers: {
        DateTime: new DateTimeScalar() // Add the DateTimeScalar to resolvers
      },
    }),
    DonationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
