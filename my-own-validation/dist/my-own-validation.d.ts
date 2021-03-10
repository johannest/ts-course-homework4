export declare type Validator<T> = (input: any) => T;
export declare function string(input: any): string;
export declare function number(input: any): number;
export declare function boolean(input: any): boolean;
export declare function element<T>(elemValidator: Validator<T>): (input: any) => T;
export declare function union<T>(elemValidator: Validator<T>): (input: any) => T;
export declare function array<T>(elemValidator: Validator<T>): (input: any) => T[];
declare type ObjectIntersection<A, B> = {
    [key in (keyof A | keyof B)]: key extends keyof A ? A[key] : key extends keyof B ? B[key] : never;
};
declare type Intersection<A, B> = A extends object ? B extends object ? ObjectIntersection<A, B> : A & B : A & B;
export declare function intersection<A, B>(a: Validator<A>, b: Validator<B>): Validator<Intersection<A, B>>;
export declare function intersection<A, B, C>(a: Validator<A>, b: Validator<B>, c: Validator<C>): Validator<Intersection<A, Intersection<B, C>>>;
declare type ObjectSpec<T> = {
    [key in keyof T]: Validator<T[key]>;
};
export declare function object<T>(spec: ObjectSpec<T>): Validator<T>;
export {};
