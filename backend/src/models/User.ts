import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class User {
    // essa notação no id é pra dizer que ele é único
    @Field(_type => ID)
    id: string

    @Field()
    name: string
}