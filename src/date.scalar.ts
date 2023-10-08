import { Scalar } from '@nestjs/graphql';
import { GraphQLScalarType, Kind } from 'graphql';

@Scalar('DateTime', () => DateTimeScalar) // Specify the scalar class as a factory function
export class DateTimeScalar extends GraphQLScalarType {
  constructor() {
    super({
      name: 'DateTime',
      description: 'DateTime custom scalar type',
      parseValue(value: string) {
        return new Date(value); // Convert incoming string to Date
      },
      serialize(value: Date) {
        return value.toISOString(); // Convert outgoing Date to string
      },
      parseLiteral(ast) {
        if (ast.kind === Kind.STRING) {
          return new Date(ast.value); // Convert AST string to Date
        }
        return null;
      },
    });
  }
}