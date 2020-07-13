import { SchemaDirectiveVisitor } from 'graphql-tools';
import { GraphQLDirective } from 'graphql';
import { authFunc, checkRoleFunc } from './index';
declare const _default: (authenticate: authFunc, checkRoleFunc?: checkRoleFunc | undefined) => {
    new (config: {
        name: string;
        args: {
            [name: string]: any;
        };
        visitedType: import("graphql-tools").VisitableSchemaType;
        schema: import("graphql").GraphQLSchema;
        context: {
            [key: string]: any;
        };
    }): {
        visitFieldDefinition(field: any): void;
        name: string;
        args: {
            [name: string]: any;
        };
        visitedType: import("graphql-tools").VisitableSchemaType;
        context: {
            [key: string]: any;
        };
        schema: import("graphql").GraphQLSchema;
        visitSchema(_schema: import("graphql").GraphQLSchema): void;
        visitScalar(_scalar: import("graphql").GraphQLScalarType): void | import("graphql").GraphQLScalarType | null;
        visitObject(_object: import("graphql").GraphQLObjectType<any, any>): void | import("graphql").GraphQLObjectType<any, any> | null;
        visitArgumentDefinition(_argument: import("graphql").GraphQLArgument, _details: {
            field: import("graphql").GraphQLField<any, any, {
                [key: string]: any;
            }>;
            objectType: import("graphql").GraphQLInterfaceType | import("graphql").GraphQLObjectType<any, any>;
        }): void | import("graphql").GraphQLArgument | null;
        visitInterface(_iface: import("graphql").GraphQLInterfaceType): void | import("graphql").GraphQLInterfaceType | null;
        visitUnion(_union: import("graphql").GraphQLUnionType): void | import("graphql").GraphQLUnionType | null;
        visitEnum(_type: import("graphql").GraphQLEnumType): void | import("graphql").GraphQLEnumType | null;
        visitEnumValue(_value: import("graphql").GraphQLEnumValue, _details: {
            enumType: import("graphql").GraphQLEnumType;
        }): void | import("graphql").GraphQLEnumValue | null;
        visitInputObject(_object: import("graphql").GraphQLInputObjectType): void | import("graphql").GraphQLInputObjectType | null;
        visitInputFieldDefinition(_field: import("graphql").GraphQLInputField, _details: {
            objectType: import("graphql").GraphQLInputObjectType;
        }): void | import("graphql").GraphQLInputField | null;
    };
    getDirectiveDeclaration(directiveName?: string): GraphQLDirective;
    visitSchemaDirectives(schema: import("graphql").GraphQLSchema, directiveVisitors: Record<string, typeof SchemaDirectiveVisitor>, context?: {
        [key: string]: any;
    } | undefined): Record<string, SchemaDirectiveVisitor<{
        [name: string]: any;
    }, {
        [key: string]: any;
    }>[]>;
    getDeclaredDirectives(schema: import("graphql").GraphQLSchema, directiveVisitors: Record<string, typeof SchemaDirectiveVisitor>): Record<string, GraphQLDirective>;
    implementsVisitorMethod(methodName: string): boolean;
};
export default _default;
