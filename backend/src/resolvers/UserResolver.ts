import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User } from './../models/User';
import crypto from 'crypto';

// query: buscar dados no backend
// mutation: criar, alterar ou deletar
@Resolver()
export class UserResolver {
    private data: User[] = [];

    @Query(() => [User])
    async users() {
        return this.data;
    }

    @Mutation(() => User)
    async createUser(
        @Arg('name') name: string
    ) {
        const user = {
            id: crypto.randomUUID(),
            name
        }

        this.data.push(user)

        return user;
    }
}