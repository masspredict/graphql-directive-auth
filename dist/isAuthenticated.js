"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tools_1 = require("graphql-tools");
const graphql_1 = require("graphql");
exports.default = (authenticate) => class isAuthenticated extends graphql_tools_1.SchemaDirectiveVisitor {
    static getDirectiveDeclaration(directiveName = 'isAuthenticated') {
        return new graphql_1.GraphQLDirective({
            name: directiveName,
            locations: [graphql_1.DirectiveLocation.FIELD_DEFINITION],
        });
    }
    visitFieldDefinition(field) {
        const { resolve = graphql_1.defaultFieldResolver } = field;
        field.resolve = async (root, args, context, info) => {
            const auth = await authenticate(context);
            return resolve.call(this, root, args, { ...context, auth }, info);
        };
    }
};
