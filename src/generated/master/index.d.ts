
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model SuperAdmin
 * 
 */
export type SuperAdmin = $Result.DefaultSelection<Prisma.$SuperAdminPayload>
/**
 * Model Tenant
 * 
 */
export type Tenant = $Result.DefaultSelection<Prisma.$TenantPayload>
/**
 * Model Plan
 * 
 */
export type Plan = $Result.DefaultSelection<Prisma.$PlanPayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model BillingConfig
 * 
 */
export type BillingConfig = $Result.DefaultSelection<Prisma.$BillingConfigPayload>
/**
 * Model LicenseKey
 * 
 */
export type LicenseKey = $Result.DefaultSelection<Prisma.$LicenseKeyPayload>
/**
 * Model GlobalSettings
 * 
 */
export type GlobalSettings = $Result.DefaultSelection<Prisma.$GlobalSettingsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more SuperAdmins
 * const superAdmins = await prisma.superAdmin.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more SuperAdmins
   * const superAdmins = await prisma.superAdmin.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.superAdmin`: Exposes CRUD operations for the **SuperAdmin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SuperAdmins
    * const superAdmins = await prisma.superAdmin.findMany()
    * ```
    */
  get superAdmin(): Prisma.SuperAdminDelegate<ExtArgs>;

  /**
   * `prisma.tenant`: Exposes CRUD operations for the **Tenant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tenants
    * const tenants = await prisma.tenant.findMany()
    * ```
    */
  get tenant(): Prisma.TenantDelegate<ExtArgs>;

  /**
   * `prisma.plan`: Exposes CRUD operations for the **Plan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plans
    * const plans = await prisma.plan.findMany()
    * ```
    */
  get plan(): Prisma.PlanDelegate<ExtArgs>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs>;

  /**
   * `prisma.billingConfig`: Exposes CRUD operations for the **BillingConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BillingConfigs
    * const billingConfigs = await prisma.billingConfig.findMany()
    * ```
    */
  get billingConfig(): Prisma.BillingConfigDelegate<ExtArgs>;

  /**
   * `prisma.licenseKey`: Exposes CRUD operations for the **LicenseKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LicenseKeys
    * const licenseKeys = await prisma.licenseKey.findMany()
    * ```
    */
  get licenseKey(): Prisma.LicenseKeyDelegate<ExtArgs>;

  /**
   * `prisma.globalSettings`: Exposes CRUD operations for the **GlobalSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GlobalSettings
    * const globalSettings = await prisma.globalSettings.findMany()
    * ```
    */
  get globalSettings(): Prisma.GlobalSettingsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.21.1
   * Query Engine version: bf0e5e8a04cada8225617067eaa03d041e2bba36
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    SuperAdmin: 'SuperAdmin',
    Tenant: 'Tenant',
    Plan: 'Plan',
    Subscription: 'Subscription',
    Payment: 'Payment',
    BillingConfig: 'BillingConfig',
    LicenseKey: 'LicenseKey',
    GlobalSettings: 'GlobalSettings'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "superAdmin" | "tenant" | "plan" | "subscription" | "payment" | "billingConfig" | "licenseKey" | "globalSettings"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      SuperAdmin: {
        payload: Prisma.$SuperAdminPayload<ExtArgs>
        fields: Prisma.SuperAdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SuperAdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SuperAdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload>
          }
          findFirst: {
            args: Prisma.SuperAdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SuperAdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload>
          }
          findMany: {
            args: Prisma.SuperAdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload>[]
          }
          create: {
            args: Prisma.SuperAdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload>
          }
          createMany: {
            args: Prisma.SuperAdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SuperAdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload>[]
          }
          delete: {
            args: Prisma.SuperAdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload>
          }
          update: {
            args: Prisma.SuperAdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload>
          }
          deleteMany: {
            args: Prisma.SuperAdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SuperAdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SuperAdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload>
          }
          aggregate: {
            args: Prisma.SuperAdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSuperAdmin>
          }
          groupBy: {
            args: Prisma.SuperAdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<SuperAdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.SuperAdminCountArgs<ExtArgs>
            result: $Utils.Optional<SuperAdminCountAggregateOutputType> | number
          }
        }
      }
      Tenant: {
        payload: Prisma.$TenantPayload<ExtArgs>
        fields: Prisma.TenantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TenantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TenantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findFirst: {
            args: Prisma.TenantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TenantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findMany: {
            args: Prisma.TenantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          create: {
            args: Prisma.TenantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          createMany: {
            args: Prisma.TenantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TenantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          delete: {
            args: Prisma.TenantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          update: {
            args: Prisma.TenantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          deleteMany: {
            args: Prisma.TenantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TenantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TenantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          aggregate: {
            args: Prisma.TenantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenant>
          }
          groupBy: {
            args: Prisma.TenantGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenantGroupByOutputType>[]
          }
          count: {
            args: Prisma.TenantCountArgs<ExtArgs>
            result: $Utils.Optional<TenantCountAggregateOutputType> | number
          }
        }
      }
      Plan: {
        payload: Prisma.$PlanPayload<ExtArgs>
        fields: Prisma.PlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          findFirst: {
            args: Prisma.PlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          findMany: {
            args: Prisma.PlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          create: {
            args: Prisma.PlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          createMany: {
            args: Prisma.PlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          delete: {
            args: Prisma.PlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          update: {
            args: Prisma.PlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          deleteMany: {
            args: Prisma.PlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          aggregate: {
            args: Prisma.PlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlan>
          }
          groupBy: {
            args: Prisma.PlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlanCountArgs<ExtArgs>
            result: $Utils.Optional<PlanCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      BillingConfig: {
        payload: Prisma.$BillingConfigPayload<ExtArgs>
        fields: Prisma.BillingConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BillingConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BillingConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingConfigPayload>
          }
          findFirst: {
            args: Prisma.BillingConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BillingConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingConfigPayload>
          }
          findMany: {
            args: Prisma.BillingConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingConfigPayload>[]
          }
          create: {
            args: Prisma.BillingConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingConfigPayload>
          }
          createMany: {
            args: Prisma.BillingConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BillingConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingConfigPayload>[]
          }
          delete: {
            args: Prisma.BillingConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingConfigPayload>
          }
          update: {
            args: Prisma.BillingConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingConfigPayload>
          }
          deleteMany: {
            args: Prisma.BillingConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BillingConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BillingConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingConfigPayload>
          }
          aggregate: {
            args: Prisma.BillingConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBillingConfig>
          }
          groupBy: {
            args: Prisma.BillingConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<BillingConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.BillingConfigCountArgs<ExtArgs>
            result: $Utils.Optional<BillingConfigCountAggregateOutputType> | number
          }
        }
      }
      LicenseKey: {
        payload: Prisma.$LicenseKeyPayload<ExtArgs>
        fields: Prisma.LicenseKeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LicenseKeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseKeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LicenseKeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseKeyPayload>
          }
          findFirst: {
            args: Prisma.LicenseKeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseKeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LicenseKeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseKeyPayload>
          }
          findMany: {
            args: Prisma.LicenseKeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseKeyPayload>[]
          }
          create: {
            args: Prisma.LicenseKeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseKeyPayload>
          }
          createMany: {
            args: Prisma.LicenseKeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LicenseKeyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseKeyPayload>[]
          }
          delete: {
            args: Prisma.LicenseKeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseKeyPayload>
          }
          update: {
            args: Prisma.LicenseKeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseKeyPayload>
          }
          deleteMany: {
            args: Prisma.LicenseKeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LicenseKeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LicenseKeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseKeyPayload>
          }
          aggregate: {
            args: Prisma.LicenseKeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLicenseKey>
          }
          groupBy: {
            args: Prisma.LicenseKeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<LicenseKeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.LicenseKeyCountArgs<ExtArgs>
            result: $Utils.Optional<LicenseKeyCountAggregateOutputType> | number
          }
        }
      }
      GlobalSettings: {
        payload: Prisma.$GlobalSettingsPayload<ExtArgs>
        fields: Prisma.GlobalSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GlobalSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GlobalSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalSettingsPayload>
          }
          findFirst: {
            args: Prisma.GlobalSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GlobalSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalSettingsPayload>
          }
          findMany: {
            args: Prisma.GlobalSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalSettingsPayload>[]
          }
          create: {
            args: Prisma.GlobalSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalSettingsPayload>
          }
          createMany: {
            args: Prisma.GlobalSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GlobalSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalSettingsPayload>[]
          }
          delete: {
            args: Prisma.GlobalSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalSettingsPayload>
          }
          update: {
            args: Prisma.GlobalSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalSettingsPayload>
          }
          deleteMany: {
            args: Prisma.GlobalSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GlobalSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GlobalSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalSettingsPayload>
          }
          aggregate: {
            args: Prisma.GlobalSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGlobalSettings>
          }
          groupBy: {
            args: Prisma.GlobalSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<GlobalSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.GlobalSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<GlobalSettingsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PlanCountOutputType
   */

  export type PlanCountOutputType = {
    tenants: number
    subscriptions: number
  }

  export type PlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenants?: boolean | PlanCountOutputTypeCountTenantsArgs
    subscriptions?: boolean | PlanCountOutputTypeCountSubscriptionsArgs
  }

  // Custom InputTypes
  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanCountOutputType
     */
    select?: PlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeCountTenantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantWhereInput
  }

  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model SuperAdmin
   */

  export type AggregateSuperAdmin = {
    _count: SuperAdminCountAggregateOutputType | null
    _min: SuperAdminMinAggregateOutputType | null
    _max: SuperAdminMaxAggregateOutputType | null
  }

  export type SuperAdminMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    name: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SuperAdminMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    name: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SuperAdminCountAggregateOutputType = {
    id: number
    username: number
    password: number
    name: number
    email: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SuperAdminMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SuperAdminMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SuperAdminCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SuperAdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SuperAdmin to aggregate.
     */
    where?: SuperAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuperAdmins to fetch.
     */
    orderBy?: SuperAdminOrderByWithRelationInput | SuperAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SuperAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuperAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuperAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SuperAdmins
    **/
    _count?: true | SuperAdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SuperAdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SuperAdminMaxAggregateInputType
  }

  export type GetSuperAdminAggregateType<T extends SuperAdminAggregateArgs> = {
        [P in keyof T & keyof AggregateSuperAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSuperAdmin[P]>
      : GetScalarType<T[P], AggregateSuperAdmin[P]>
  }




  export type SuperAdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuperAdminWhereInput
    orderBy?: SuperAdminOrderByWithAggregationInput | SuperAdminOrderByWithAggregationInput[]
    by: SuperAdminScalarFieldEnum[] | SuperAdminScalarFieldEnum
    having?: SuperAdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SuperAdminCountAggregateInputType | true
    _min?: SuperAdminMinAggregateInputType
    _max?: SuperAdminMaxAggregateInputType
  }

  export type SuperAdminGroupByOutputType = {
    id: string
    username: string
    password: string
    name: string
    email: string
    createdAt: Date
    updatedAt: Date
    _count: SuperAdminCountAggregateOutputType | null
    _min: SuperAdminMinAggregateOutputType | null
    _max: SuperAdminMaxAggregateOutputType | null
  }

  type GetSuperAdminGroupByPayload<T extends SuperAdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SuperAdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SuperAdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SuperAdminGroupByOutputType[P]>
            : GetScalarType<T[P], SuperAdminGroupByOutputType[P]>
        }
      >
    >


  export type SuperAdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["superAdmin"]>

  export type SuperAdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["superAdmin"]>

  export type SuperAdminSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $SuperAdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SuperAdmin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
      name: string
      email: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["superAdmin"]>
    composites: {}
  }

  type SuperAdminGetPayload<S extends boolean | null | undefined | SuperAdminDefaultArgs> = $Result.GetResult<Prisma.$SuperAdminPayload, S>

  type SuperAdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SuperAdminFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SuperAdminCountAggregateInputType | true
    }

  export interface SuperAdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SuperAdmin'], meta: { name: 'SuperAdmin' } }
    /**
     * Find zero or one SuperAdmin that matches the filter.
     * @param {SuperAdminFindUniqueArgs} args - Arguments to find a SuperAdmin
     * @example
     * // Get one SuperAdmin
     * const superAdmin = await prisma.superAdmin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SuperAdminFindUniqueArgs>(args: SelectSubset<T, SuperAdminFindUniqueArgs<ExtArgs>>): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SuperAdmin that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SuperAdminFindUniqueOrThrowArgs} args - Arguments to find a SuperAdmin
     * @example
     * // Get one SuperAdmin
     * const superAdmin = await prisma.superAdmin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SuperAdminFindUniqueOrThrowArgs>(args: SelectSubset<T, SuperAdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SuperAdmin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminFindFirstArgs} args - Arguments to find a SuperAdmin
     * @example
     * // Get one SuperAdmin
     * const superAdmin = await prisma.superAdmin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SuperAdminFindFirstArgs>(args?: SelectSubset<T, SuperAdminFindFirstArgs<ExtArgs>>): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SuperAdmin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminFindFirstOrThrowArgs} args - Arguments to find a SuperAdmin
     * @example
     * // Get one SuperAdmin
     * const superAdmin = await prisma.superAdmin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SuperAdminFindFirstOrThrowArgs>(args?: SelectSubset<T, SuperAdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SuperAdmins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SuperAdmins
     * const superAdmins = await prisma.superAdmin.findMany()
     * 
     * // Get first 10 SuperAdmins
     * const superAdmins = await prisma.superAdmin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const superAdminWithIdOnly = await prisma.superAdmin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SuperAdminFindManyArgs>(args?: SelectSubset<T, SuperAdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SuperAdmin.
     * @param {SuperAdminCreateArgs} args - Arguments to create a SuperAdmin.
     * @example
     * // Create one SuperAdmin
     * const SuperAdmin = await prisma.superAdmin.create({
     *   data: {
     *     // ... data to create a SuperAdmin
     *   }
     * })
     * 
     */
    create<T extends SuperAdminCreateArgs>(args: SelectSubset<T, SuperAdminCreateArgs<ExtArgs>>): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SuperAdmins.
     * @param {SuperAdminCreateManyArgs} args - Arguments to create many SuperAdmins.
     * @example
     * // Create many SuperAdmins
     * const superAdmin = await prisma.superAdmin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SuperAdminCreateManyArgs>(args?: SelectSubset<T, SuperAdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SuperAdmins and returns the data saved in the database.
     * @param {SuperAdminCreateManyAndReturnArgs} args - Arguments to create many SuperAdmins.
     * @example
     * // Create many SuperAdmins
     * const superAdmin = await prisma.superAdmin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SuperAdmins and only return the `id`
     * const superAdminWithIdOnly = await prisma.superAdmin.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SuperAdminCreateManyAndReturnArgs>(args?: SelectSubset<T, SuperAdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SuperAdmin.
     * @param {SuperAdminDeleteArgs} args - Arguments to delete one SuperAdmin.
     * @example
     * // Delete one SuperAdmin
     * const SuperAdmin = await prisma.superAdmin.delete({
     *   where: {
     *     // ... filter to delete one SuperAdmin
     *   }
     * })
     * 
     */
    delete<T extends SuperAdminDeleteArgs>(args: SelectSubset<T, SuperAdminDeleteArgs<ExtArgs>>): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SuperAdmin.
     * @param {SuperAdminUpdateArgs} args - Arguments to update one SuperAdmin.
     * @example
     * // Update one SuperAdmin
     * const superAdmin = await prisma.superAdmin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SuperAdminUpdateArgs>(args: SelectSubset<T, SuperAdminUpdateArgs<ExtArgs>>): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SuperAdmins.
     * @param {SuperAdminDeleteManyArgs} args - Arguments to filter SuperAdmins to delete.
     * @example
     * // Delete a few SuperAdmins
     * const { count } = await prisma.superAdmin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SuperAdminDeleteManyArgs>(args?: SelectSubset<T, SuperAdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SuperAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SuperAdmins
     * const superAdmin = await prisma.superAdmin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SuperAdminUpdateManyArgs>(args: SelectSubset<T, SuperAdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SuperAdmin.
     * @param {SuperAdminUpsertArgs} args - Arguments to update or create a SuperAdmin.
     * @example
     * // Update or create a SuperAdmin
     * const superAdmin = await prisma.superAdmin.upsert({
     *   create: {
     *     // ... data to create a SuperAdmin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SuperAdmin we want to update
     *   }
     * })
     */
    upsert<T extends SuperAdminUpsertArgs>(args: SelectSubset<T, SuperAdminUpsertArgs<ExtArgs>>): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SuperAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminCountArgs} args - Arguments to filter SuperAdmins to count.
     * @example
     * // Count the number of SuperAdmins
     * const count = await prisma.superAdmin.count({
     *   where: {
     *     // ... the filter for the SuperAdmins we want to count
     *   }
     * })
    **/
    count<T extends SuperAdminCountArgs>(
      args?: Subset<T, SuperAdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SuperAdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SuperAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SuperAdminAggregateArgs>(args: Subset<T, SuperAdminAggregateArgs>): Prisma.PrismaPromise<GetSuperAdminAggregateType<T>>

    /**
     * Group by SuperAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SuperAdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SuperAdminGroupByArgs['orderBy'] }
        : { orderBy?: SuperAdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SuperAdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuperAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SuperAdmin model
   */
  readonly fields: SuperAdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SuperAdmin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SuperAdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SuperAdmin model
   */ 
  interface SuperAdminFieldRefs {
    readonly id: FieldRef<"SuperAdmin", 'String'>
    readonly username: FieldRef<"SuperAdmin", 'String'>
    readonly password: FieldRef<"SuperAdmin", 'String'>
    readonly name: FieldRef<"SuperAdmin", 'String'>
    readonly email: FieldRef<"SuperAdmin", 'String'>
    readonly createdAt: FieldRef<"SuperAdmin", 'DateTime'>
    readonly updatedAt: FieldRef<"SuperAdmin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SuperAdmin findUnique
   */
  export type SuperAdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Filter, which SuperAdmin to fetch.
     */
    where: SuperAdminWhereUniqueInput
  }

  /**
   * SuperAdmin findUniqueOrThrow
   */
  export type SuperAdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Filter, which SuperAdmin to fetch.
     */
    where: SuperAdminWhereUniqueInput
  }

  /**
   * SuperAdmin findFirst
   */
  export type SuperAdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Filter, which SuperAdmin to fetch.
     */
    where?: SuperAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuperAdmins to fetch.
     */
    orderBy?: SuperAdminOrderByWithRelationInput | SuperAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SuperAdmins.
     */
    cursor?: SuperAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuperAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuperAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SuperAdmins.
     */
    distinct?: SuperAdminScalarFieldEnum | SuperAdminScalarFieldEnum[]
  }

  /**
   * SuperAdmin findFirstOrThrow
   */
  export type SuperAdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Filter, which SuperAdmin to fetch.
     */
    where?: SuperAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuperAdmins to fetch.
     */
    orderBy?: SuperAdminOrderByWithRelationInput | SuperAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SuperAdmins.
     */
    cursor?: SuperAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuperAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuperAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SuperAdmins.
     */
    distinct?: SuperAdminScalarFieldEnum | SuperAdminScalarFieldEnum[]
  }

  /**
   * SuperAdmin findMany
   */
  export type SuperAdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Filter, which SuperAdmins to fetch.
     */
    where?: SuperAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuperAdmins to fetch.
     */
    orderBy?: SuperAdminOrderByWithRelationInput | SuperAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SuperAdmins.
     */
    cursor?: SuperAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuperAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuperAdmins.
     */
    skip?: number
    distinct?: SuperAdminScalarFieldEnum | SuperAdminScalarFieldEnum[]
  }

  /**
   * SuperAdmin create
   */
  export type SuperAdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * The data needed to create a SuperAdmin.
     */
    data: XOR<SuperAdminCreateInput, SuperAdminUncheckedCreateInput>
  }

  /**
   * SuperAdmin createMany
   */
  export type SuperAdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SuperAdmins.
     */
    data: SuperAdminCreateManyInput | SuperAdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SuperAdmin createManyAndReturn
   */
  export type SuperAdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SuperAdmins.
     */
    data: SuperAdminCreateManyInput | SuperAdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SuperAdmin update
   */
  export type SuperAdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * The data needed to update a SuperAdmin.
     */
    data: XOR<SuperAdminUpdateInput, SuperAdminUncheckedUpdateInput>
    /**
     * Choose, which SuperAdmin to update.
     */
    where: SuperAdminWhereUniqueInput
  }

  /**
   * SuperAdmin updateMany
   */
  export type SuperAdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SuperAdmins.
     */
    data: XOR<SuperAdminUpdateManyMutationInput, SuperAdminUncheckedUpdateManyInput>
    /**
     * Filter which SuperAdmins to update
     */
    where?: SuperAdminWhereInput
  }

  /**
   * SuperAdmin upsert
   */
  export type SuperAdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * The filter to search for the SuperAdmin to update in case it exists.
     */
    where: SuperAdminWhereUniqueInput
    /**
     * In case the SuperAdmin found by the `where` argument doesn't exist, create a new SuperAdmin with this data.
     */
    create: XOR<SuperAdminCreateInput, SuperAdminUncheckedCreateInput>
    /**
     * In case the SuperAdmin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SuperAdminUpdateInput, SuperAdminUncheckedUpdateInput>
  }

  /**
   * SuperAdmin delete
   */
  export type SuperAdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Filter which SuperAdmin to delete.
     */
    where: SuperAdminWhereUniqueInput
  }

  /**
   * SuperAdmin deleteMany
   */
  export type SuperAdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SuperAdmins to delete
     */
    where?: SuperAdminWhereInput
  }

  /**
   * SuperAdmin without action
   */
  export type SuperAdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
  }


  /**
   * Model Tenant
   */

  export type AggregateTenant = {
    _count: TenantCountAggregateOutputType | null
    _avg: TenantAvgAggregateOutputType | null
    _sum: TenantSumAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  export type TenantAvgAggregateOutputType = {
    s3RetentionDays: number | null
    smtpPort: number | null
  }

  export type TenantSumAggregateOutputType = {
    s3RetentionDays: number | null
    smtpPort: number | null
  }

  export type TenantMinAggregateOutputType = {
    id: string | null
    slug: string | null
    name: string | null
    customDomain: string | null
    status: string | null
    logo: string | null
    favicon: string | null
    primaryColor: string | null
    secondaryColor: string | null
    accentColor: string | null
    ownerName: string | null
    ownerEmail: string | null
    ownerPhone: string | null
    adminUsername: string | null
    adminPassword: string | null
    planId: string | null
    dbSchema: string | null
    s3Bucket: string | null
    s3Region: string | null
    s3AccessKey: string | null
    s3SecretKey: string | null
    s3RetentionDays: number | null
    smtpHost: string | null
    smtpPort: number | null
    smtpUser: string | null
    smtpPass: string | null
    smtpFrom: string | null
    useGlobalSmtp: boolean | null
    trialEndsAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    name: string | null
    customDomain: string | null
    status: string | null
    logo: string | null
    favicon: string | null
    primaryColor: string | null
    secondaryColor: string | null
    accentColor: string | null
    ownerName: string | null
    ownerEmail: string | null
    ownerPhone: string | null
    adminUsername: string | null
    adminPassword: string | null
    planId: string | null
    dbSchema: string | null
    s3Bucket: string | null
    s3Region: string | null
    s3AccessKey: string | null
    s3SecretKey: string | null
    s3RetentionDays: number | null
    smtpHost: string | null
    smtpPort: number | null
    smtpUser: string | null
    smtpPass: string | null
    smtpFrom: string | null
    useGlobalSmtp: boolean | null
    trialEndsAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantCountAggregateOutputType = {
    id: number
    slug: number
    name: number
    customDomain: number
    status: number
    logo: number
    favicon: number
    primaryColor: number
    secondaryColor: number
    accentColor: number
    ownerName: number
    ownerEmail: number
    ownerPhone: number
    adminUsername: number
    adminPassword: number
    planId: number
    dbSchema: number
    s3Bucket: number
    s3Region: number
    s3AccessKey: number
    s3SecretKey: number
    s3RetentionDays: number
    smtpHost: number
    smtpPort: number
    smtpUser: number
    smtpPass: number
    smtpFrom: number
    useGlobalSmtp: number
    trialEndsAt: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TenantAvgAggregateInputType = {
    s3RetentionDays?: true
    smtpPort?: true
  }

  export type TenantSumAggregateInputType = {
    s3RetentionDays?: true
    smtpPort?: true
  }

  export type TenantMinAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    customDomain?: true
    status?: true
    logo?: true
    favicon?: true
    primaryColor?: true
    secondaryColor?: true
    accentColor?: true
    ownerName?: true
    ownerEmail?: true
    ownerPhone?: true
    adminUsername?: true
    adminPassword?: true
    planId?: true
    dbSchema?: true
    s3Bucket?: true
    s3Region?: true
    s3AccessKey?: true
    s3SecretKey?: true
    s3RetentionDays?: true
    smtpHost?: true
    smtpPort?: true
    smtpUser?: true
    smtpPass?: true
    smtpFrom?: true
    useGlobalSmtp?: true
    trialEndsAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantMaxAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    customDomain?: true
    status?: true
    logo?: true
    favicon?: true
    primaryColor?: true
    secondaryColor?: true
    accentColor?: true
    ownerName?: true
    ownerEmail?: true
    ownerPhone?: true
    adminUsername?: true
    adminPassword?: true
    planId?: true
    dbSchema?: true
    s3Bucket?: true
    s3Region?: true
    s3AccessKey?: true
    s3SecretKey?: true
    s3RetentionDays?: true
    smtpHost?: true
    smtpPort?: true
    smtpUser?: true
    smtpPass?: true
    smtpFrom?: true
    useGlobalSmtp?: true
    trialEndsAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantCountAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    customDomain?: true
    status?: true
    logo?: true
    favicon?: true
    primaryColor?: true
    secondaryColor?: true
    accentColor?: true
    ownerName?: true
    ownerEmail?: true
    ownerPhone?: true
    adminUsername?: true
    adminPassword?: true
    planId?: true
    dbSchema?: true
    s3Bucket?: true
    s3Region?: true
    s3AccessKey?: true
    s3SecretKey?: true
    s3RetentionDays?: true
    smtpHost?: true
    smtpPort?: true
    smtpUser?: true
    smtpPass?: true
    smtpFrom?: true
    useGlobalSmtp?: true
    trialEndsAt?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TenantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenant to aggregate.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tenants
    **/
    _count?: true | TenantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TenantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TenantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenantMaxAggregateInputType
  }

  export type GetTenantAggregateType<T extends TenantAggregateArgs> = {
        [P in keyof T & keyof AggregateTenant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenant[P]>
      : GetScalarType<T[P], AggregateTenant[P]>
  }




  export type TenantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantWhereInput
    orderBy?: TenantOrderByWithAggregationInput | TenantOrderByWithAggregationInput[]
    by: TenantScalarFieldEnum[] | TenantScalarFieldEnum
    having?: TenantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenantCountAggregateInputType | true
    _avg?: TenantAvgAggregateInputType
    _sum?: TenantSumAggregateInputType
    _min?: TenantMinAggregateInputType
    _max?: TenantMaxAggregateInputType
  }

  export type TenantGroupByOutputType = {
    id: string
    slug: string
    name: string
    customDomain: string | null
    status: string
    logo: string
    favicon: string
    primaryColor: string
    secondaryColor: string
    accentColor: string
    ownerName: string
    ownerEmail: string
    ownerPhone: string
    adminUsername: string
    adminPassword: string
    planId: string | null
    dbSchema: string
    s3Bucket: string
    s3Region: string
    s3AccessKey: string
    s3SecretKey: string
    s3RetentionDays: number
    smtpHost: string
    smtpPort: number
    smtpUser: string
    smtpPass: string
    smtpFrom: string
    useGlobalSmtp: boolean
    trialEndsAt: Date | null
    metadata: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: TenantCountAggregateOutputType | null
    _avg: TenantAvgAggregateOutputType | null
    _sum: TenantSumAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  type GetTenantGroupByPayload<T extends TenantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenantGroupByOutputType[P]>
            : GetScalarType<T[P], TenantGroupByOutputType[P]>
        }
      >
    >


  export type TenantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    customDomain?: boolean
    status?: boolean
    logo?: boolean
    favicon?: boolean
    primaryColor?: boolean
    secondaryColor?: boolean
    accentColor?: boolean
    ownerName?: boolean
    ownerEmail?: boolean
    ownerPhone?: boolean
    adminUsername?: boolean
    adminPassword?: boolean
    planId?: boolean
    dbSchema?: boolean
    s3Bucket?: boolean
    s3Region?: boolean
    s3AccessKey?: boolean
    s3SecretKey?: boolean
    s3RetentionDays?: boolean
    smtpHost?: boolean
    smtpPort?: boolean
    smtpUser?: boolean
    smtpPass?: boolean
    smtpFrom?: boolean
    useGlobalSmtp?: boolean
    trialEndsAt?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean | Tenant$planArgs<ExtArgs>
    subscription?: boolean | Tenant$subscriptionArgs<ExtArgs>
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    customDomain?: boolean
    status?: boolean
    logo?: boolean
    favicon?: boolean
    primaryColor?: boolean
    secondaryColor?: boolean
    accentColor?: boolean
    ownerName?: boolean
    ownerEmail?: boolean
    ownerPhone?: boolean
    adminUsername?: boolean
    adminPassword?: boolean
    planId?: boolean
    dbSchema?: boolean
    s3Bucket?: boolean
    s3Region?: boolean
    s3AccessKey?: boolean
    s3SecretKey?: boolean
    s3RetentionDays?: boolean
    smtpHost?: boolean
    smtpPort?: boolean
    smtpUser?: boolean
    smtpPass?: boolean
    smtpFrom?: boolean
    useGlobalSmtp?: boolean
    trialEndsAt?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean | Tenant$planArgs<ExtArgs>
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectScalar = {
    id?: boolean
    slug?: boolean
    name?: boolean
    customDomain?: boolean
    status?: boolean
    logo?: boolean
    favicon?: boolean
    primaryColor?: boolean
    secondaryColor?: boolean
    accentColor?: boolean
    ownerName?: boolean
    ownerEmail?: boolean
    ownerPhone?: boolean
    adminUsername?: boolean
    adminPassword?: boolean
    planId?: boolean
    dbSchema?: boolean
    s3Bucket?: boolean
    s3Region?: boolean
    s3AccessKey?: boolean
    s3SecretKey?: boolean
    s3RetentionDays?: boolean
    smtpHost?: boolean
    smtpPort?: boolean
    smtpUser?: boolean
    smtpPass?: boolean
    smtpFrom?: boolean
    useGlobalSmtp?: boolean
    trialEndsAt?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TenantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | Tenant$planArgs<ExtArgs>
    subscription?: boolean | Tenant$subscriptionArgs<ExtArgs>
  }
  export type TenantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | Tenant$planArgs<ExtArgs>
  }

  export type $TenantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tenant"
    objects: {
      plan: Prisma.$PlanPayload<ExtArgs> | null
      subscription: Prisma.$SubscriptionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      name: string
      customDomain: string | null
      status: string
      logo: string
      favicon: string
      primaryColor: string
      secondaryColor: string
      accentColor: string
      ownerName: string
      ownerEmail: string
      ownerPhone: string
      adminUsername: string
      adminPassword: string
      planId: string | null
      dbSchema: string
      s3Bucket: string
      s3Region: string
      s3AccessKey: string
      s3SecretKey: string
      s3RetentionDays: number
      smtpHost: string
      smtpPort: number
      smtpUser: string
      smtpPass: string
      smtpFrom: string
      useGlobalSmtp: boolean
      trialEndsAt: Date | null
      metadata: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tenant"]>
    composites: {}
  }

  type TenantGetPayload<S extends boolean | null | undefined | TenantDefaultArgs> = $Result.GetResult<Prisma.$TenantPayload, S>

  type TenantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TenantFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TenantCountAggregateInputType | true
    }

  export interface TenantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tenant'], meta: { name: 'Tenant' } }
    /**
     * Find zero or one Tenant that matches the filter.
     * @param {TenantFindUniqueArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TenantFindUniqueArgs>(args: SelectSubset<T, TenantFindUniqueArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tenant that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TenantFindUniqueOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TenantFindUniqueOrThrowArgs>(args: SelectSubset<T, TenantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tenant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TenantFindFirstArgs>(args?: SelectSubset<T, TenantFindFirstArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tenant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TenantFindFirstOrThrowArgs>(args?: SelectSubset<T, TenantFindFirstOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tenants
     * const tenants = await prisma.tenant.findMany()
     * 
     * // Get first 10 Tenants
     * const tenants = await prisma.tenant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tenantWithIdOnly = await prisma.tenant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TenantFindManyArgs>(args?: SelectSubset<T, TenantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tenant.
     * @param {TenantCreateArgs} args - Arguments to create a Tenant.
     * @example
     * // Create one Tenant
     * const Tenant = await prisma.tenant.create({
     *   data: {
     *     // ... data to create a Tenant
     *   }
     * })
     * 
     */
    create<T extends TenantCreateArgs>(args: SelectSubset<T, TenantCreateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tenants.
     * @param {TenantCreateManyArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TenantCreateManyArgs>(args?: SelectSubset<T, TenantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tenants and returns the data saved in the database.
     * @param {TenantCreateManyAndReturnArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TenantCreateManyAndReturnArgs>(args?: SelectSubset<T, TenantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Tenant.
     * @param {TenantDeleteArgs} args - Arguments to delete one Tenant.
     * @example
     * // Delete one Tenant
     * const Tenant = await prisma.tenant.delete({
     *   where: {
     *     // ... filter to delete one Tenant
     *   }
     * })
     * 
     */
    delete<T extends TenantDeleteArgs>(args: SelectSubset<T, TenantDeleteArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tenant.
     * @param {TenantUpdateArgs} args - Arguments to update one Tenant.
     * @example
     * // Update one Tenant
     * const tenant = await prisma.tenant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TenantUpdateArgs>(args: SelectSubset<T, TenantUpdateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tenants.
     * @param {TenantDeleteManyArgs} args - Arguments to filter Tenants to delete.
     * @example
     * // Delete a few Tenants
     * const { count } = await prisma.tenant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TenantDeleteManyArgs>(args?: SelectSubset<T, TenantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TenantUpdateManyArgs>(args: SelectSubset<T, TenantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tenant.
     * @param {TenantUpsertArgs} args - Arguments to update or create a Tenant.
     * @example
     * // Update or create a Tenant
     * const tenant = await prisma.tenant.upsert({
     *   create: {
     *     // ... data to create a Tenant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tenant we want to update
     *   }
     * })
     */
    upsert<T extends TenantUpsertArgs>(args: SelectSubset<T, TenantUpsertArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantCountArgs} args - Arguments to filter Tenants to count.
     * @example
     * // Count the number of Tenants
     * const count = await prisma.tenant.count({
     *   where: {
     *     // ... the filter for the Tenants we want to count
     *   }
     * })
    **/
    count<T extends TenantCountArgs>(
      args?: Subset<T, TenantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TenantAggregateArgs>(args: Subset<T, TenantAggregateArgs>): Prisma.PrismaPromise<GetTenantAggregateType<T>>

    /**
     * Group by Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TenantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenantGroupByArgs['orderBy'] }
        : { orderBy?: TenantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TenantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tenant model
   */
  readonly fields: TenantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tenant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TenantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plan<T extends Tenant$planArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$planArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    subscription<T extends Tenant$subscriptionArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$subscriptionArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tenant model
   */ 
  interface TenantFieldRefs {
    readonly id: FieldRef<"Tenant", 'String'>
    readonly slug: FieldRef<"Tenant", 'String'>
    readonly name: FieldRef<"Tenant", 'String'>
    readonly customDomain: FieldRef<"Tenant", 'String'>
    readonly status: FieldRef<"Tenant", 'String'>
    readonly logo: FieldRef<"Tenant", 'String'>
    readonly favicon: FieldRef<"Tenant", 'String'>
    readonly primaryColor: FieldRef<"Tenant", 'String'>
    readonly secondaryColor: FieldRef<"Tenant", 'String'>
    readonly accentColor: FieldRef<"Tenant", 'String'>
    readonly ownerName: FieldRef<"Tenant", 'String'>
    readonly ownerEmail: FieldRef<"Tenant", 'String'>
    readonly ownerPhone: FieldRef<"Tenant", 'String'>
    readonly adminUsername: FieldRef<"Tenant", 'String'>
    readonly adminPassword: FieldRef<"Tenant", 'String'>
    readonly planId: FieldRef<"Tenant", 'String'>
    readonly dbSchema: FieldRef<"Tenant", 'String'>
    readonly s3Bucket: FieldRef<"Tenant", 'String'>
    readonly s3Region: FieldRef<"Tenant", 'String'>
    readonly s3AccessKey: FieldRef<"Tenant", 'String'>
    readonly s3SecretKey: FieldRef<"Tenant", 'String'>
    readonly s3RetentionDays: FieldRef<"Tenant", 'Int'>
    readonly smtpHost: FieldRef<"Tenant", 'String'>
    readonly smtpPort: FieldRef<"Tenant", 'Int'>
    readonly smtpUser: FieldRef<"Tenant", 'String'>
    readonly smtpPass: FieldRef<"Tenant", 'String'>
    readonly smtpFrom: FieldRef<"Tenant", 'String'>
    readonly useGlobalSmtp: FieldRef<"Tenant", 'Boolean'>
    readonly trialEndsAt: FieldRef<"Tenant", 'DateTime'>
    readonly metadata: FieldRef<"Tenant", 'Json'>
    readonly createdAt: FieldRef<"Tenant", 'DateTime'>
    readonly updatedAt: FieldRef<"Tenant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tenant findUnique
   */
  export type TenantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findUniqueOrThrow
   */
  export type TenantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findFirst
   */
  export type TenantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findFirstOrThrow
   */
  export type TenantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findMany
   */
  export type TenantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenants to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant create
   */
  export type TenantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to create a Tenant.
     */
    data: XOR<TenantCreateInput, TenantUncheckedCreateInput>
  }

  /**
   * Tenant createMany
   */
  export type TenantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant createManyAndReturn
   */
  export type TenantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tenant update
   */
  export type TenantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to update a Tenant.
     */
    data: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
    /**
     * Choose, which Tenant to update.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant updateMany
   */
  export type TenantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
  }

  /**
   * Tenant upsert
   */
  export type TenantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The filter to search for the Tenant to update in case it exists.
     */
    where: TenantWhereUniqueInput
    /**
     * In case the Tenant found by the `where` argument doesn't exist, create a new Tenant with this data.
     */
    create: XOR<TenantCreateInput, TenantUncheckedCreateInput>
    /**
     * In case the Tenant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
  }

  /**
   * Tenant delete
   */
  export type TenantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter which Tenant to delete.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant deleteMany
   */
  export type TenantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenants to delete
     */
    where?: TenantWhereInput
  }

  /**
   * Tenant.plan
   */
  export type Tenant$planArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    where?: PlanWhereInput
  }

  /**
   * Tenant.subscription
   */
  export type Tenant$subscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
  }

  /**
   * Tenant without action
   */
  export type TenantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
  }


  /**
   * Model Plan
   */

  export type AggregatePlan = {
    _count: PlanCountAggregateOutputType | null
    _avg: PlanAvgAggregateOutputType | null
    _sum: PlanSumAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  export type PlanAvgAggregateOutputType = {
    priceMonthly: number | null
    priceYearly: number | null
    maxUsers: number | null
    maxChannels: number | null
    maxContacts: number | null
    maxMessagesMonth: number | null
    maxCampaigns: number | null
    maxFlows: number | null
    maxAiAgents: number | null
    sortOrder: number | null
  }

  export type PlanSumAggregateOutputType = {
    priceMonthly: number | null
    priceYearly: number | null
    maxUsers: number | null
    maxChannels: number | null
    maxContacts: number | null
    maxMessagesMonth: number | null
    maxCampaigns: number | null
    maxFlows: number | null
    maxAiAgents: number | null
    sortOrder: number | null
  }

  export type PlanMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    priceMonthly: number | null
    priceYearly: number | null
    currency: string | null
    maxUsers: number | null
    maxChannels: number | null
    maxContacts: number | null
    maxMessagesMonth: number | null
    maxCampaigns: number | null
    maxFlows: number | null
    maxAiAgents: number | null
    hasWhatsappQr: boolean | null
    hasWhatsappApi: boolean | null
    hasInstagram: boolean | null
    hasMessenger: boolean | null
    hasTelegram: boolean | null
    hasEmail: boolean | null
    hasPhone: boolean | null
    hasChatbot: boolean | null
    hasAiAgents: boolean | null
    hasCampaigns: boolean | null
    hasApi: boolean | null
    hasWebhooks: boolean | null
    hasWhiteLabel: boolean | null
    isActive: boolean | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlanMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    priceMonthly: number | null
    priceYearly: number | null
    currency: string | null
    maxUsers: number | null
    maxChannels: number | null
    maxContacts: number | null
    maxMessagesMonth: number | null
    maxCampaigns: number | null
    maxFlows: number | null
    maxAiAgents: number | null
    hasWhatsappQr: boolean | null
    hasWhatsappApi: boolean | null
    hasInstagram: boolean | null
    hasMessenger: boolean | null
    hasTelegram: boolean | null
    hasEmail: boolean | null
    hasPhone: boolean | null
    hasChatbot: boolean | null
    hasAiAgents: boolean | null
    hasCampaigns: boolean | null
    hasApi: boolean | null
    hasWebhooks: boolean | null
    hasWhiteLabel: boolean | null
    isActive: boolean | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlanCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    priceMonthly: number
    priceYearly: number
    currency: number
    maxUsers: number
    maxChannels: number
    maxContacts: number
    maxMessagesMonth: number
    maxCampaigns: number
    maxFlows: number
    maxAiAgents: number
    hasWhatsappQr: number
    hasWhatsappApi: number
    hasInstagram: number
    hasMessenger: number
    hasTelegram: number
    hasEmail: number
    hasPhone: number
    hasChatbot: number
    hasAiAgents: number
    hasCampaigns: number
    hasApi: number
    hasWebhooks: number
    hasWhiteLabel: number
    isActive: number
    sortOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlanAvgAggregateInputType = {
    priceMonthly?: true
    priceYearly?: true
    maxUsers?: true
    maxChannels?: true
    maxContacts?: true
    maxMessagesMonth?: true
    maxCampaigns?: true
    maxFlows?: true
    maxAiAgents?: true
    sortOrder?: true
  }

  export type PlanSumAggregateInputType = {
    priceMonthly?: true
    priceYearly?: true
    maxUsers?: true
    maxChannels?: true
    maxContacts?: true
    maxMessagesMonth?: true
    maxCampaigns?: true
    maxFlows?: true
    maxAiAgents?: true
    sortOrder?: true
  }

  export type PlanMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    priceMonthly?: true
    priceYearly?: true
    currency?: true
    maxUsers?: true
    maxChannels?: true
    maxContacts?: true
    maxMessagesMonth?: true
    maxCampaigns?: true
    maxFlows?: true
    maxAiAgents?: true
    hasWhatsappQr?: true
    hasWhatsappApi?: true
    hasInstagram?: true
    hasMessenger?: true
    hasTelegram?: true
    hasEmail?: true
    hasPhone?: true
    hasChatbot?: true
    hasAiAgents?: true
    hasCampaigns?: true
    hasApi?: true
    hasWebhooks?: true
    hasWhiteLabel?: true
    isActive?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlanMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    priceMonthly?: true
    priceYearly?: true
    currency?: true
    maxUsers?: true
    maxChannels?: true
    maxContacts?: true
    maxMessagesMonth?: true
    maxCampaigns?: true
    maxFlows?: true
    maxAiAgents?: true
    hasWhatsappQr?: true
    hasWhatsappApi?: true
    hasInstagram?: true
    hasMessenger?: true
    hasTelegram?: true
    hasEmail?: true
    hasPhone?: true
    hasChatbot?: true
    hasAiAgents?: true
    hasCampaigns?: true
    hasApi?: true
    hasWebhooks?: true
    hasWhiteLabel?: true
    isActive?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlanCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    priceMonthly?: true
    priceYearly?: true
    currency?: true
    maxUsers?: true
    maxChannels?: true
    maxContacts?: true
    maxMessagesMonth?: true
    maxCampaigns?: true
    maxFlows?: true
    maxAiAgents?: true
    hasWhatsappQr?: true
    hasWhatsappApi?: true
    hasInstagram?: true
    hasMessenger?: true
    hasTelegram?: true
    hasEmail?: true
    hasPhone?: true
    hasChatbot?: true
    hasAiAgents?: true
    hasCampaigns?: true
    hasApi?: true
    hasWebhooks?: true
    hasWhiteLabel?: true
    isActive?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plan to aggregate.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Plans
    **/
    _count?: true | PlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanMaxAggregateInputType
  }

  export type GetPlanAggregateType<T extends PlanAggregateArgs> = {
        [P in keyof T & keyof AggregatePlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlan[P]>
      : GetScalarType<T[P], AggregatePlan[P]>
  }




  export type PlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanWhereInput
    orderBy?: PlanOrderByWithAggregationInput | PlanOrderByWithAggregationInput[]
    by: PlanScalarFieldEnum[] | PlanScalarFieldEnum
    having?: PlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanCountAggregateInputType | true
    _avg?: PlanAvgAggregateInputType
    _sum?: PlanSumAggregateInputType
    _min?: PlanMinAggregateInputType
    _max?: PlanMaxAggregateInputType
  }

  export type PlanGroupByOutputType = {
    id: string
    name: string
    slug: string
    description: string
    priceMonthly: number
    priceYearly: number
    currency: string
    maxUsers: number
    maxChannels: number
    maxContacts: number
    maxMessagesMonth: number
    maxCampaigns: number
    maxFlows: number
    maxAiAgents: number
    hasWhatsappQr: boolean
    hasWhatsappApi: boolean
    hasInstagram: boolean
    hasMessenger: boolean
    hasTelegram: boolean
    hasEmail: boolean
    hasPhone: boolean
    hasChatbot: boolean
    hasAiAgents: boolean
    hasCampaigns: boolean
    hasApi: boolean
    hasWebhooks: boolean
    hasWhiteLabel: boolean
    isActive: boolean
    sortOrder: number
    createdAt: Date
    updatedAt: Date
    _count: PlanCountAggregateOutputType | null
    _avg: PlanAvgAggregateOutputType | null
    _sum: PlanSumAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  type GetPlanGroupByPayload<T extends PlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanGroupByOutputType[P]>
            : GetScalarType<T[P], PlanGroupByOutputType[P]>
        }
      >
    >


  export type PlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    priceMonthly?: boolean
    priceYearly?: boolean
    currency?: boolean
    maxUsers?: boolean
    maxChannels?: boolean
    maxContacts?: boolean
    maxMessagesMonth?: boolean
    maxCampaigns?: boolean
    maxFlows?: boolean
    maxAiAgents?: boolean
    hasWhatsappQr?: boolean
    hasWhatsappApi?: boolean
    hasInstagram?: boolean
    hasMessenger?: boolean
    hasTelegram?: boolean
    hasEmail?: boolean
    hasPhone?: boolean
    hasChatbot?: boolean
    hasAiAgents?: boolean
    hasCampaigns?: boolean
    hasApi?: boolean
    hasWebhooks?: boolean
    hasWhiteLabel?: boolean
    isActive?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenants?: boolean | Plan$tenantsArgs<ExtArgs>
    subscriptions?: boolean | Plan$subscriptionsArgs<ExtArgs>
    _count?: boolean | PlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    priceMonthly?: boolean
    priceYearly?: boolean
    currency?: boolean
    maxUsers?: boolean
    maxChannels?: boolean
    maxContacts?: boolean
    maxMessagesMonth?: boolean
    maxCampaigns?: boolean
    maxFlows?: boolean
    maxAiAgents?: boolean
    hasWhatsappQr?: boolean
    hasWhatsappApi?: boolean
    hasInstagram?: boolean
    hasMessenger?: boolean
    hasTelegram?: boolean
    hasEmail?: boolean
    hasPhone?: boolean
    hasChatbot?: boolean
    hasAiAgents?: boolean
    hasCampaigns?: boolean
    hasApi?: boolean
    hasWebhooks?: boolean
    hasWhiteLabel?: boolean
    isActive?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    priceMonthly?: boolean
    priceYearly?: boolean
    currency?: boolean
    maxUsers?: boolean
    maxChannels?: boolean
    maxContacts?: boolean
    maxMessagesMonth?: boolean
    maxCampaigns?: boolean
    maxFlows?: boolean
    maxAiAgents?: boolean
    hasWhatsappQr?: boolean
    hasWhatsappApi?: boolean
    hasInstagram?: boolean
    hasMessenger?: boolean
    hasTelegram?: boolean
    hasEmail?: boolean
    hasPhone?: boolean
    hasChatbot?: boolean
    hasAiAgents?: boolean
    hasCampaigns?: boolean
    hasApi?: boolean
    hasWebhooks?: boolean
    hasWhiteLabel?: boolean
    isActive?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenants?: boolean | Plan$tenantsArgs<ExtArgs>
    subscriptions?: boolean | Plan$subscriptionsArgs<ExtArgs>
    _count?: boolean | PlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Plan"
    objects: {
      tenants: Prisma.$TenantPayload<ExtArgs>[]
      subscriptions: Prisma.$SubscriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      description: string
      priceMonthly: number
      priceYearly: number
      currency: string
      maxUsers: number
      maxChannels: number
      maxContacts: number
      maxMessagesMonth: number
      maxCampaigns: number
      maxFlows: number
      maxAiAgents: number
      hasWhatsappQr: boolean
      hasWhatsappApi: boolean
      hasInstagram: boolean
      hasMessenger: boolean
      hasTelegram: boolean
      hasEmail: boolean
      hasPhone: boolean
      hasChatbot: boolean
      hasAiAgents: boolean
      hasCampaigns: boolean
      hasApi: boolean
      hasWebhooks: boolean
      hasWhiteLabel: boolean
      isActive: boolean
      sortOrder: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["plan"]>
    composites: {}
  }

  type PlanGetPayload<S extends boolean | null | undefined | PlanDefaultArgs> = $Result.GetResult<Prisma.$PlanPayload, S>

  type PlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PlanFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PlanCountAggregateInputType | true
    }

  export interface PlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Plan'], meta: { name: 'Plan' } }
    /**
     * Find zero or one Plan that matches the filter.
     * @param {PlanFindUniqueArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlanFindUniqueArgs>(args: SelectSubset<T, PlanFindUniqueArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Plan that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PlanFindUniqueOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlanFindUniqueOrThrowArgs>(args: SelectSubset<T, PlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Plan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlanFindFirstArgs>(args?: SelectSubset<T, PlanFindFirstArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Plan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlanFindFirstOrThrowArgs>(args?: SelectSubset<T, PlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plans
     * const plans = await prisma.plan.findMany()
     * 
     * // Get first 10 Plans
     * const plans = await prisma.plan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const planWithIdOnly = await prisma.plan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlanFindManyArgs>(args?: SelectSubset<T, PlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Plan.
     * @param {PlanCreateArgs} args - Arguments to create a Plan.
     * @example
     * // Create one Plan
     * const Plan = await prisma.plan.create({
     *   data: {
     *     // ... data to create a Plan
     *   }
     * })
     * 
     */
    create<T extends PlanCreateArgs>(args: SelectSubset<T, PlanCreateArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Plans.
     * @param {PlanCreateManyArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plan = await prisma.plan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlanCreateManyArgs>(args?: SelectSubset<T, PlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Plans and returns the data saved in the database.
     * @param {PlanCreateManyAndReturnArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plan = await prisma.plan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Plans and only return the `id`
     * const planWithIdOnly = await prisma.plan.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlanCreateManyAndReturnArgs>(args?: SelectSubset<T, PlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Plan.
     * @param {PlanDeleteArgs} args - Arguments to delete one Plan.
     * @example
     * // Delete one Plan
     * const Plan = await prisma.plan.delete({
     *   where: {
     *     // ... filter to delete one Plan
     *   }
     * })
     * 
     */
    delete<T extends PlanDeleteArgs>(args: SelectSubset<T, PlanDeleteArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Plan.
     * @param {PlanUpdateArgs} args - Arguments to update one Plan.
     * @example
     * // Update one Plan
     * const plan = await prisma.plan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlanUpdateArgs>(args: SelectSubset<T, PlanUpdateArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Plans.
     * @param {PlanDeleteManyArgs} args - Arguments to filter Plans to delete.
     * @example
     * // Delete a few Plans
     * const { count } = await prisma.plan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlanDeleteManyArgs>(args?: SelectSubset<T, PlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plans
     * const plan = await prisma.plan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlanUpdateManyArgs>(args: SelectSubset<T, PlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Plan.
     * @param {PlanUpsertArgs} args - Arguments to update or create a Plan.
     * @example
     * // Update or create a Plan
     * const plan = await prisma.plan.upsert({
     *   create: {
     *     // ... data to create a Plan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plan we want to update
     *   }
     * })
     */
    upsert<T extends PlanUpsertArgs>(args: SelectSubset<T, PlanUpsertArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanCountArgs} args - Arguments to filter Plans to count.
     * @example
     * // Count the number of Plans
     * const count = await prisma.plan.count({
     *   where: {
     *     // ... the filter for the Plans we want to count
     *   }
     * })
    **/
    count<T extends PlanCountArgs>(
      args?: Subset<T, PlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlanAggregateArgs>(args: Subset<T, PlanAggregateArgs>): Prisma.PrismaPromise<GetPlanAggregateType<T>>

    /**
     * Group by Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanGroupByArgs['orderBy'] }
        : { orderBy?: PlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Plan model
   */
  readonly fields: PlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenants<T extends Plan$tenantsArgs<ExtArgs> = {}>(args?: Subset<T, Plan$tenantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findMany"> | Null>
    subscriptions<T extends Plan$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, Plan$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Plan model
   */ 
  interface PlanFieldRefs {
    readonly id: FieldRef<"Plan", 'String'>
    readonly name: FieldRef<"Plan", 'String'>
    readonly slug: FieldRef<"Plan", 'String'>
    readonly description: FieldRef<"Plan", 'String'>
    readonly priceMonthly: FieldRef<"Plan", 'Float'>
    readonly priceYearly: FieldRef<"Plan", 'Float'>
    readonly currency: FieldRef<"Plan", 'String'>
    readonly maxUsers: FieldRef<"Plan", 'Int'>
    readonly maxChannels: FieldRef<"Plan", 'Int'>
    readonly maxContacts: FieldRef<"Plan", 'Int'>
    readonly maxMessagesMonth: FieldRef<"Plan", 'Int'>
    readonly maxCampaigns: FieldRef<"Plan", 'Int'>
    readonly maxFlows: FieldRef<"Plan", 'Int'>
    readonly maxAiAgents: FieldRef<"Plan", 'Int'>
    readonly hasWhatsappQr: FieldRef<"Plan", 'Boolean'>
    readonly hasWhatsappApi: FieldRef<"Plan", 'Boolean'>
    readonly hasInstagram: FieldRef<"Plan", 'Boolean'>
    readonly hasMessenger: FieldRef<"Plan", 'Boolean'>
    readonly hasTelegram: FieldRef<"Plan", 'Boolean'>
    readonly hasEmail: FieldRef<"Plan", 'Boolean'>
    readonly hasPhone: FieldRef<"Plan", 'Boolean'>
    readonly hasChatbot: FieldRef<"Plan", 'Boolean'>
    readonly hasAiAgents: FieldRef<"Plan", 'Boolean'>
    readonly hasCampaigns: FieldRef<"Plan", 'Boolean'>
    readonly hasApi: FieldRef<"Plan", 'Boolean'>
    readonly hasWebhooks: FieldRef<"Plan", 'Boolean'>
    readonly hasWhiteLabel: FieldRef<"Plan", 'Boolean'>
    readonly isActive: FieldRef<"Plan", 'Boolean'>
    readonly sortOrder: FieldRef<"Plan", 'Int'>
    readonly createdAt: FieldRef<"Plan", 'DateTime'>
    readonly updatedAt: FieldRef<"Plan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Plan findUnique
   */
  export type PlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan findUniqueOrThrow
   */
  export type PlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan findFirst
   */
  export type PlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan findFirstOrThrow
   */
  export type PlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan findMany
   */
  export type PlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plans to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan create
   */
  export type PlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The data needed to create a Plan.
     */
    data: XOR<PlanCreateInput, PlanUncheckedCreateInput>
  }

  /**
   * Plan createMany
   */
  export type PlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Plans.
     */
    data: PlanCreateManyInput | PlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plan createManyAndReturn
   */
  export type PlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Plans.
     */
    data: PlanCreateManyInput | PlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plan update
   */
  export type PlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The data needed to update a Plan.
     */
    data: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
    /**
     * Choose, which Plan to update.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan updateMany
   */
  export type PlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Plans.
     */
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyInput>
    /**
     * Filter which Plans to update
     */
    where?: PlanWhereInput
  }

  /**
   * Plan upsert
   */
  export type PlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The filter to search for the Plan to update in case it exists.
     */
    where: PlanWhereUniqueInput
    /**
     * In case the Plan found by the `where` argument doesn't exist, create a new Plan with this data.
     */
    create: XOR<PlanCreateInput, PlanUncheckedCreateInput>
    /**
     * In case the Plan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
  }

  /**
   * Plan delete
   */
  export type PlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter which Plan to delete.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan deleteMany
   */
  export type PlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plans to delete
     */
    where?: PlanWhereInput
  }

  /**
   * Plan.tenants
   */
  export type Plan$tenantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    where?: TenantWhereInput
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    cursor?: TenantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Plan.subscriptions
   */
  export type Plan$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Plan without action
   */
  export type PlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    planId: string | null
    status: string | null
    billingCycle: string | null
    gatewayProvider: string | null
    gatewayCustomerId: string | null
    gatewaySubscriptionId: string | null
    currentPeriodStart: Date | null
    currentPeriodEnd: Date | null
    cancelledAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    planId: string | null
    status: string | null
    billingCycle: string | null
    gatewayProvider: string | null
    gatewayCustomerId: string | null
    gatewaySubscriptionId: string | null
    currentPeriodStart: Date | null
    currentPeriodEnd: Date | null
    cancelledAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    tenantId: number
    planId: number
    status: number
    billingCycle: number
    gatewayProvider: number
    gatewayCustomerId: number
    gatewaySubscriptionId: number
    currentPeriodStart: number
    currentPeriodEnd: number
    cancelledAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubscriptionMinAggregateInputType = {
    id?: true
    tenantId?: true
    planId?: true
    status?: true
    billingCycle?: true
    gatewayProvider?: true
    gatewayCustomerId?: true
    gatewaySubscriptionId?: true
    currentPeriodStart?: true
    currentPeriodEnd?: true
    cancelledAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    tenantId?: true
    planId?: true
    status?: true
    billingCycle?: true
    gatewayProvider?: true
    gatewayCustomerId?: true
    gatewaySubscriptionId?: true
    currentPeriodStart?: true
    currentPeriodEnd?: true
    cancelledAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    tenantId?: true
    planId?: true
    status?: true
    billingCycle?: true
    gatewayProvider?: true
    gatewayCustomerId?: true
    gatewaySubscriptionId?: true
    currentPeriodStart?: true
    currentPeriodEnd?: true
    cancelledAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: string
    tenantId: string
    planId: string
    status: string
    billingCycle: string
    gatewayProvider: string
    gatewayCustomerId: string
    gatewaySubscriptionId: string
    currentPeriodStart: Date
    currentPeriodEnd: Date
    cancelledAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    planId?: boolean
    status?: boolean
    billingCycle?: boolean
    gatewayProvider?: boolean
    gatewayCustomerId?: boolean
    gatewaySubscriptionId?: boolean
    currentPeriodStart?: boolean
    currentPeriodEnd?: boolean
    cancelledAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    planId?: boolean
    status?: boolean
    billingCycle?: boolean
    gatewayProvider?: boolean
    gatewayCustomerId?: boolean
    gatewaySubscriptionId?: boolean
    currentPeriodStart?: boolean
    currentPeriodEnd?: boolean
    cancelledAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectScalar = {
    id?: boolean
    tenantId?: boolean
    planId?: boolean
    status?: boolean
    billingCycle?: boolean
    gatewayProvider?: boolean
    gatewayCustomerId?: boolean
    gatewaySubscriptionId?: boolean
    currentPeriodStart?: boolean
    currentPeriodEnd?: boolean
    cancelledAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      plan: Prisma.$PlanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      planId: string
      status: string
      billingCycle: string
      gatewayProvider: string
      gatewayCustomerId: string
      gatewaySubscriptionId: string
      currentPeriodStart: Date
      currentPeriodEnd: Date
      cancelledAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    plan<T extends PlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlanDefaultArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subscription model
   */ 
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'String'>
    readonly tenantId: FieldRef<"Subscription", 'String'>
    readonly planId: FieldRef<"Subscription", 'String'>
    readonly status: FieldRef<"Subscription", 'String'>
    readonly billingCycle: FieldRef<"Subscription", 'String'>
    readonly gatewayProvider: FieldRef<"Subscription", 'String'>
    readonly gatewayCustomerId: FieldRef<"Subscription", 'String'>
    readonly gatewaySubscriptionId: FieldRef<"Subscription", 'String'>
    readonly currentPeriodStart: FieldRef<"Subscription", 'DateTime'>
    readonly currentPeriodEnd: FieldRef<"Subscription", 'DateTime'>
    readonly cancelledAt: FieldRef<"Subscription", 'DateTime'>
    readonly createdAt: FieldRef<"Subscription", 'DateTime'>
    readonly updatedAt: FieldRef<"Subscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription createManyAndReturn
   */
  export type SubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    amount: number | null
    currency: string | null
    status: string | null
    gatewayId: string | null
    gatewayProvider: string | null
    description: string | null
    paidAt: Date | null
    createdAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    amount: number | null
    currency: string | null
    status: string | null
    gatewayId: string | null
    gatewayProvider: string | null
    description: string | null
    paidAt: Date | null
    createdAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    tenantId: number
    amount: number
    currency: number
    status: number
    gatewayId: number
    gatewayProvider: number
    description: number
    paidAt: number
    createdAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    tenantId?: true
    amount?: true
    currency?: true
    status?: true
    gatewayId?: true
    gatewayProvider?: true
    description?: true
    paidAt?: true
    createdAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    tenantId?: true
    amount?: true
    currency?: true
    status?: true
    gatewayId?: true
    gatewayProvider?: true
    description?: true
    paidAt?: true
    createdAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    tenantId?: true
    amount?: true
    currency?: true
    status?: true
    gatewayId?: true
    gatewayProvider?: true
    description?: true
    paidAt?: true
    createdAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    tenantId: string
    amount: number
    currency: string
    status: string
    gatewayId: string
    gatewayProvider: string
    description: string
    paidAt: Date | null
    createdAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    gatewayId?: boolean
    gatewayProvider?: boolean
    description?: boolean
    paidAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    gatewayId?: boolean
    gatewayProvider?: boolean
    description?: boolean
    paidAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    tenantId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    gatewayId?: boolean
    gatewayProvider?: boolean
    description?: boolean
    paidAt?: boolean
    createdAt?: boolean
  }


  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      amount: number
      currency: string
      status: string
      gatewayId: string
      gatewayProvider: string
      description: string
      paidAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */ 
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly tenantId: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Float'>
    readonly currency: FieldRef<"Payment", 'String'>
    readonly status: FieldRef<"Payment", 'String'>
    readonly gatewayId: FieldRef<"Payment", 'String'>
    readonly gatewayProvider: FieldRef<"Payment", 'String'>
    readonly description: FieldRef<"Payment", 'String'>
    readonly paidAt: FieldRef<"Payment", 'DateTime'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
  }


  /**
   * Model BillingConfig
   */

  export type AggregateBillingConfig = {
    _count: BillingConfigCountAggregateOutputType | null
    _avg: BillingConfigAvgAggregateOutputType | null
    _sum: BillingConfigSumAggregateOutputType | null
    _min: BillingConfigMinAggregateOutputType | null
    _max: BillingConfigMaxAggregateOutputType | null
  }

  export type BillingConfigAvgAggregateOutputType = {
    monthlyPrice: number | null
    warningDays: number | null
    blockAfterDays: number | null
  }

  export type BillingConfigSumAggregateOutputType = {
    monthlyPrice: number | null
    warningDays: number | null
    blockAfterDays: number | null
  }

  export type BillingConfigMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    monthlyPrice: number | null
    warningDays: number | null
    blockAfterDays: number | null
    warningMessage: string | null
    blockMessage: string | null
    paymentLink: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BillingConfigMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    monthlyPrice: number | null
    warningDays: number | null
    blockAfterDays: number | null
    warningMessage: string | null
    blockMessage: string | null
    paymentLink: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BillingConfigCountAggregateOutputType = {
    id: number
    tenantId: number
    monthlyPrice: number
    warningDays: number
    blockAfterDays: number
    warningMessage: number
    blockMessage: number
    paymentLink: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BillingConfigAvgAggregateInputType = {
    monthlyPrice?: true
    warningDays?: true
    blockAfterDays?: true
  }

  export type BillingConfigSumAggregateInputType = {
    monthlyPrice?: true
    warningDays?: true
    blockAfterDays?: true
  }

  export type BillingConfigMinAggregateInputType = {
    id?: true
    tenantId?: true
    monthlyPrice?: true
    warningDays?: true
    blockAfterDays?: true
    warningMessage?: true
    blockMessage?: true
    paymentLink?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BillingConfigMaxAggregateInputType = {
    id?: true
    tenantId?: true
    monthlyPrice?: true
    warningDays?: true
    blockAfterDays?: true
    warningMessage?: true
    blockMessage?: true
    paymentLink?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BillingConfigCountAggregateInputType = {
    id?: true
    tenantId?: true
    monthlyPrice?: true
    warningDays?: true
    blockAfterDays?: true
    warningMessage?: true
    blockMessage?: true
    paymentLink?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BillingConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BillingConfig to aggregate.
     */
    where?: BillingConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillingConfigs to fetch.
     */
    orderBy?: BillingConfigOrderByWithRelationInput | BillingConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BillingConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillingConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillingConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BillingConfigs
    **/
    _count?: true | BillingConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BillingConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BillingConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BillingConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BillingConfigMaxAggregateInputType
  }

  export type GetBillingConfigAggregateType<T extends BillingConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateBillingConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBillingConfig[P]>
      : GetScalarType<T[P], AggregateBillingConfig[P]>
  }




  export type BillingConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillingConfigWhereInput
    orderBy?: BillingConfigOrderByWithAggregationInput | BillingConfigOrderByWithAggregationInput[]
    by: BillingConfigScalarFieldEnum[] | BillingConfigScalarFieldEnum
    having?: BillingConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BillingConfigCountAggregateInputType | true
    _avg?: BillingConfigAvgAggregateInputType
    _sum?: BillingConfigSumAggregateInputType
    _min?: BillingConfigMinAggregateInputType
    _max?: BillingConfigMaxAggregateInputType
  }

  export type BillingConfigGroupByOutputType = {
    id: string
    tenantId: string
    monthlyPrice: number
    warningDays: number
    blockAfterDays: number
    warningMessage: string
    blockMessage: string
    paymentLink: string
    createdAt: Date
    updatedAt: Date
    _count: BillingConfigCountAggregateOutputType | null
    _avg: BillingConfigAvgAggregateOutputType | null
    _sum: BillingConfigSumAggregateOutputType | null
    _min: BillingConfigMinAggregateOutputType | null
    _max: BillingConfigMaxAggregateOutputType | null
  }

  type GetBillingConfigGroupByPayload<T extends BillingConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BillingConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BillingConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BillingConfigGroupByOutputType[P]>
            : GetScalarType<T[P], BillingConfigGroupByOutputType[P]>
        }
      >
    >


  export type BillingConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    monthlyPrice?: boolean
    warningDays?: boolean
    blockAfterDays?: boolean
    warningMessage?: boolean
    blockMessage?: boolean
    paymentLink?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["billingConfig"]>

  export type BillingConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    monthlyPrice?: boolean
    warningDays?: boolean
    blockAfterDays?: boolean
    warningMessage?: boolean
    blockMessage?: boolean
    paymentLink?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["billingConfig"]>

  export type BillingConfigSelectScalar = {
    id?: boolean
    tenantId?: boolean
    monthlyPrice?: boolean
    warningDays?: boolean
    blockAfterDays?: boolean
    warningMessage?: boolean
    blockMessage?: boolean
    paymentLink?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $BillingConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BillingConfig"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      monthlyPrice: number
      warningDays: number
      blockAfterDays: number
      warningMessage: string
      blockMessage: string
      paymentLink: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["billingConfig"]>
    composites: {}
  }

  type BillingConfigGetPayload<S extends boolean | null | undefined | BillingConfigDefaultArgs> = $Result.GetResult<Prisma.$BillingConfigPayload, S>

  type BillingConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BillingConfigFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BillingConfigCountAggregateInputType | true
    }

  export interface BillingConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BillingConfig'], meta: { name: 'BillingConfig' } }
    /**
     * Find zero or one BillingConfig that matches the filter.
     * @param {BillingConfigFindUniqueArgs} args - Arguments to find a BillingConfig
     * @example
     * // Get one BillingConfig
     * const billingConfig = await prisma.billingConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BillingConfigFindUniqueArgs>(args: SelectSubset<T, BillingConfigFindUniqueArgs<ExtArgs>>): Prisma__BillingConfigClient<$Result.GetResult<Prisma.$BillingConfigPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one BillingConfig that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BillingConfigFindUniqueOrThrowArgs} args - Arguments to find a BillingConfig
     * @example
     * // Get one BillingConfig
     * const billingConfig = await prisma.billingConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BillingConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, BillingConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BillingConfigClient<$Result.GetResult<Prisma.$BillingConfigPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first BillingConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingConfigFindFirstArgs} args - Arguments to find a BillingConfig
     * @example
     * // Get one BillingConfig
     * const billingConfig = await prisma.billingConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BillingConfigFindFirstArgs>(args?: SelectSubset<T, BillingConfigFindFirstArgs<ExtArgs>>): Prisma__BillingConfigClient<$Result.GetResult<Prisma.$BillingConfigPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first BillingConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingConfigFindFirstOrThrowArgs} args - Arguments to find a BillingConfig
     * @example
     * // Get one BillingConfig
     * const billingConfig = await prisma.billingConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BillingConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, BillingConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__BillingConfigClient<$Result.GetResult<Prisma.$BillingConfigPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more BillingConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BillingConfigs
     * const billingConfigs = await prisma.billingConfig.findMany()
     * 
     * // Get first 10 BillingConfigs
     * const billingConfigs = await prisma.billingConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const billingConfigWithIdOnly = await prisma.billingConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BillingConfigFindManyArgs>(args?: SelectSubset<T, BillingConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillingConfigPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a BillingConfig.
     * @param {BillingConfigCreateArgs} args - Arguments to create a BillingConfig.
     * @example
     * // Create one BillingConfig
     * const BillingConfig = await prisma.billingConfig.create({
     *   data: {
     *     // ... data to create a BillingConfig
     *   }
     * })
     * 
     */
    create<T extends BillingConfigCreateArgs>(args: SelectSubset<T, BillingConfigCreateArgs<ExtArgs>>): Prisma__BillingConfigClient<$Result.GetResult<Prisma.$BillingConfigPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many BillingConfigs.
     * @param {BillingConfigCreateManyArgs} args - Arguments to create many BillingConfigs.
     * @example
     * // Create many BillingConfigs
     * const billingConfig = await prisma.billingConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BillingConfigCreateManyArgs>(args?: SelectSubset<T, BillingConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BillingConfigs and returns the data saved in the database.
     * @param {BillingConfigCreateManyAndReturnArgs} args - Arguments to create many BillingConfigs.
     * @example
     * // Create many BillingConfigs
     * const billingConfig = await prisma.billingConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BillingConfigs and only return the `id`
     * const billingConfigWithIdOnly = await prisma.billingConfig.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BillingConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, BillingConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillingConfigPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a BillingConfig.
     * @param {BillingConfigDeleteArgs} args - Arguments to delete one BillingConfig.
     * @example
     * // Delete one BillingConfig
     * const BillingConfig = await prisma.billingConfig.delete({
     *   where: {
     *     // ... filter to delete one BillingConfig
     *   }
     * })
     * 
     */
    delete<T extends BillingConfigDeleteArgs>(args: SelectSubset<T, BillingConfigDeleteArgs<ExtArgs>>): Prisma__BillingConfigClient<$Result.GetResult<Prisma.$BillingConfigPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one BillingConfig.
     * @param {BillingConfigUpdateArgs} args - Arguments to update one BillingConfig.
     * @example
     * // Update one BillingConfig
     * const billingConfig = await prisma.billingConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BillingConfigUpdateArgs>(args: SelectSubset<T, BillingConfigUpdateArgs<ExtArgs>>): Prisma__BillingConfigClient<$Result.GetResult<Prisma.$BillingConfigPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more BillingConfigs.
     * @param {BillingConfigDeleteManyArgs} args - Arguments to filter BillingConfigs to delete.
     * @example
     * // Delete a few BillingConfigs
     * const { count } = await prisma.billingConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BillingConfigDeleteManyArgs>(args?: SelectSubset<T, BillingConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BillingConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BillingConfigs
     * const billingConfig = await prisma.billingConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BillingConfigUpdateManyArgs>(args: SelectSubset<T, BillingConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BillingConfig.
     * @param {BillingConfigUpsertArgs} args - Arguments to update or create a BillingConfig.
     * @example
     * // Update or create a BillingConfig
     * const billingConfig = await prisma.billingConfig.upsert({
     *   create: {
     *     // ... data to create a BillingConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BillingConfig we want to update
     *   }
     * })
     */
    upsert<T extends BillingConfigUpsertArgs>(args: SelectSubset<T, BillingConfigUpsertArgs<ExtArgs>>): Prisma__BillingConfigClient<$Result.GetResult<Prisma.$BillingConfigPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of BillingConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingConfigCountArgs} args - Arguments to filter BillingConfigs to count.
     * @example
     * // Count the number of BillingConfigs
     * const count = await prisma.billingConfig.count({
     *   where: {
     *     // ... the filter for the BillingConfigs we want to count
     *   }
     * })
    **/
    count<T extends BillingConfigCountArgs>(
      args?: Subset<T, BillingConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BillingConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BillingConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BillingConfigAggregateArgs>(args: Subset<T, BillingConfigAggregateArgs>): Prisma.PrismaPromise<GetBillingConfigAggregateType<T>>

    /**
     * Group by BillingConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BillingConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BillingConfigGroupByArgs['orderBy'] }
        : { orderBy?: BillingConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BillingConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBillingConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BillingConfig model
   */
  readonly fields: BillingConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BillingConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BillingConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BillingConfig model
   */ 
  interface BillingConfigFieldRefs {
    readonly id: FieldRef<"BillingConfig", 'String'>
    readonly tenantId: FieldRef<"BillingConfig", 'String'>
    readonly monthlyPrice: FieldRef<"BillingConfig", 'Float'>
    readonly warningDays: FieldRef<"BillingConfig", 'Int'>
    readonly blockAfterDays: FieldRef<"BillingConfig", 'Int'>
    readonly warningMessage: FieldRef<"BillingConfig", 'String'>
    readonly blockMessage: FieldRef<"BillingConfig", 'String'>
    readonly paymentLink: FieldRef<"BillingConfig", 'String'>
    readonly createdAt: FieldRef<"BillingConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"BillingConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BillingConfig findUnique
   */
  export type BillingConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingConfig
     */
    select?: BillingConfigSelect<ExtArgs> | null
    /**
     * Filter, which BillingConfig to fetch.
     */
    where: BillingConfigWhereUniqueInput
  }

  /**
   * BillingConfig findUniqueOrThrow
   */
  export type BillingConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingConfig
     */
    select?: BillingConfigSelect<ExtArgs> | null
    /**
     * Filter, which BillingConfig to fetch.
     */
    where: BillingConfigWhereUniqueInput
  }

  /**
   * BillingConfig findFirst
   */
  export type BillingConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingConfig
     */
    select?: BillingConfigSelect<ExtArgs> | null
    /**
     * Filter, which BillingConfig to fetch.
     */
    where?: BillingConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillingConfigs to fetch.
     */
    orderBy?: BillingConfigOrderByWithRelationInput | BillingConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BillingConfigs.
     */
    cursor?: BillingConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillingConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillingConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BillingConfigs.
     */
    distinct?: BillingConfigScalarFieldEnum | BillingConfigScalarFieldEnum[]
  }

  /**
   * BillingConfig findFirstOrThrow
   */
  export type BillingConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingConfig
     */
    select?: BillingConfigSelect<ExtArgs> | null
    /**
     * Filter, which BillingConfig to fetch.
     */
    where?: BillingConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillingConfigs to fetch.
     */
    orderBy?: BillingConfigOrderByWithRelationInput | BillingConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BillingConfigs.
     */
    cursor?: BillingConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillingConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillingConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BillingConfigs.
     */
    distinct?: BillingConfigScalarFieldEnum | BillingConfigScalarFieldEnum[]
  }

  /**
   * BillingConfig findMany
   */
  export type BillingConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingConfig
     */
    select?: BillingConfigSelect<ExtArgs> | null
    /**
     * Filter, which BillingConfigs to fetch.
     */
    where?: BillingConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillingConfigs to fetch.
     */
    orderBy?: BillingConfigOrderByWithRelationInput | BillingConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BillingConfigs.
     */
    cursor?: BillingConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillingConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillingConfigs.
     */
    skip?: number
    distinct?: BillingConfigScalarFieldEnum | BillingConfigScalarFieldEnum[]
  }

  /**
   * BillingConfig create
   */
  export type BillingConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingConfig
     */
    select?: BillingConfigSelect<ExtArgs> | null
    /**
     * The data needed to create a BillingConfig.
     */
    data: XOR<BillingConfigCreateInput, BillingConfigUncheckedCreateInput>
  }

  /**
   * BillingConfig createMany
   */
  export type BillingConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BillingConfigs.
     */
    data: BillingConfigCreateManyInput | BillingConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BillingConfig createManyAndReturn
   */
  export type BillingConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingConfig
     */
    select?: BillingConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many BillingConfigs.
     */
    data: BillingConfigCreateManyInput | BillingConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BillingConfig update
   */
  export type BillingConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingConfig
     */
    select?: BillingConfigSelect<ExtArgs> | null
    /**
     * The data needed to update a BillingConfig.
     */
    data: XOR<BillingConfigUpdateInput, BillingConfigUncheckedUpdateInput>
    /**
     * Choose, which BillingConfig to update.
     */
    where: BillingConfigWhereUniqueInput
  }

  /**
   * BillingConfig updateMany
   */
  export type BillingConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BillingConfigs.
     */
    data: XOR<BillingConfigUpdateManyMutationInput, BillingConfigUncheckedUpdateManyInput>
    /**
     * Filter which BillingConfigs to update
     */
    where?: BillingConfigWhereInput
  }

  /**
   * BillingConfig upsert
   */
  export type BillingConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingConfig
     */
    select?: BillingConfigSelect<ExtArgs> | null
    /**
     * The filter to search for the BillingConfig to update in case it exists.
     */
    where: BillingConfigWhereUniqueInput
    /**
     * In case the BillingConfig found by the `where` argument doesn't exist, create a new BillingConfig with this data.
     */
    create: XOR<BillingConfigCreateInput, BillingConfigUncheckedCreateInput>
    /**
     * In case the BillingConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BillingConfigUpdateInput, BillingConfigUncheckedUpdateInput>
  }

  /**
   * BillingConfig delete
   */
  export type BillingConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingConfig
     */
    select?: BillingConfigSelect<ExtArgs> | null
    /**
     * Filter which BillingConfig to delete.
     */
    where: BillingConfigWhereUniqueInput
  }

  /**
   * BillingConfig deleteMany
   */
  export type BillingConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BillingConfigs to delete
     */
    where?: BillingConfigWhereInput
  }

  /**
   * BillingConfig without action
   */
  export type BillingConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingConfig
     */
    select?: BillingConfigSelect<ExtArgs> | null
  }


  /**
   * Model LicenseKey
   */

  export type AggregateLicenseKey = {
    _count: LicenseKeyCountAggregateOutputType | null
    _avg: LicenseKeyAvgAggregateOutputType | null
    _sum: LicenseKeySumAggregateOutputType | null
    _min: LicenseKeyMinAggregateOutputType | null
    _max: LicenseKeyMaxAggregateOutputType | null
  }

  export type LicenseKeyAvgAggregateOutputType = {
    maxInstalls: number | null
    usedInstalls: number | null
  }

  export type LicenseKeySumAggregateOutputType = {
    maxInstalls: number | null
    usedInstalls: number | null
  }

  export type LicenseKeyMinAggregateOutputType = {
    id: string | null
    key: string | null
    name: string | null
    maxInstalls: number | null
    usedInstalls: number | null
    isActive: boolean | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LicenseKeyMaxAggregateOutputType = {
    id: string | null
    key: string | null
    name: string | null
    maxInstalls: number | null
    usedInstalls: number | null
    isActive: boolean | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LicenseKeyCountAggregateOutputType = {
    id: number
    key: number
    name: number
    maxInstalls: number
    usedInstalls: number
    isActive: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LicenseKeyAvgAggregateInputType = {
    maxInstalls?: true
    usedInstalls?: true
  }

  export type LicenseKeySumAggregateInputType = {
    maxInstalls?: true
    usedInstalls?: true
  }

  export type LicenseKeyMinAggregateInputType = {
    id?: true
    key?: true
    name?: true
    maxInstalls?: true
    usedInstalls?: true
    isActive?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LicenseKeyMaxAggregateInputType = {
    id?: true
    key?: true
    name?: true
    maxInstalls?: true
    usedInstalls?: true
    isActive?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LicenseKeyCountAggregateInputType = {
    id?: true
    key?: true
    name?: true
    maxInstalls?: true
    usedInstalls?: true
    isActive?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LicenseKeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LicenseKey to aggregate.
     */
    where?: LicenseKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LicenseKeys to fetch.
     */
    orderBy?: LicenseKeyOrderByWithRelationInput | LicenseKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LicenseKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LicenseKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LicenseKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LicenseKeys
    **/
    _count?: true | LicenseKeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LicenseKeyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LicenseKeySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LicenseKeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LicenseKeyMaxAggregateInputType
  }

  export type GetLicenseKeyAggregateType<T extends LicenseKeyAggregateArgs> = {
        [P in keyof T & keyof AggregateLicenseKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLicenseKey[P]>
      : GetScalarType<T[P], AggregateLicenseKey[P]>
  }




  export type LicenseKeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LicenseKeyWhereInput
    orderBy?: LicenseKeyOrderByWithAggregationInput | LicenseKeyOrderByWithAggregationInput[]
    by: LicenseKeyScalarFieldEnum[] | LicenseKeyScalarFieldEnum
    having?: LicenseKeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LicenseKeyCountAggregateInputType | true
    _avg?: LicenseKeyAvgAggregateInputType
    _sum?: LicenseKeySumAggregateInputType
    _min?: LicenseKeyMinAggregateInputType
    _max?: LicenseKeyMaxAggregateInputType
  }

  export type LicenseKeyGroupByOutputType = {
    id: string
    key: string
    name: string
    maxInstalls: number
    usedInstalls: number
    isActive: boolean
    expiresAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: LicenseKeyCountAggregateOutputType | null
    _avg: LicenseKeyAvgAggregateOutputType | null
    _sum: LicenseKeySumAggregateOutputType | null
    _min: LicenseKeyMinAggregateOutputType | null
    _max: LicenseKeyMaxAggregateOutputType | null
  }

  type GetLicenseKeyGroupByPayload<T extends LicenseKeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LicenseKeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LicenseKeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LicenseKeyGroupByOutputType[P]>
            : GetScalarType<T[P], LicenseKeyGroupByOutputType[P]>
        }
      >
    >


  export type LicenseKeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    name?: boolean
    maxInstalls?: boolean
    usedInstalls?: boolean
    isActive?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["licenseKey"]>

  export type LicenseKeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    name?: boolean
    maxInstalls?: boolean
    usedInstalls?: boolean
    isActive?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["licenseKey"]>

  export type LicenseKeySelectScalar = {
    id?: boolean
    key?: boolean
    name?: boolean
    maxInstalls?: boolean
    usedInstalls?: boolean
    isActive?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $LicenseKeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LicenseKey"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      name: string
      maxInstalls: number
      usedInstalls: number
      isActive: boolean
      expiresAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["licenseKey"]>
    composites: {}
  }

  type LicenseKeyGetPayload<S extends boolean | null | undefined | LicenseKeyDefaultArgs> = $Result.GetResult<Prisma.$LicenseKeyPayload, S>

  type LicenseKeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LicenseKeyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LicenseKeyCountAggregateInputType | true
    }

  export interface LicenseKeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LicenseKey'], meta: { name: 'LicenseKey' } }
    /**
     * Find zero or one LicenseKey that matches the filter.
     * @param {LicenseKeyFindUniqueArgs} args - Arguments to find a LicenseKey
     * @example
     * // Get one LicenseKey
     * const licenseKey = await prisma.licenseKey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LicenseKeyFindUniqueArgs>(args: SelectSubset<T, LicenseKeyFindUniqueArgs<ExtArgs>>): Prisma__LicenseKeyClient<$Result.GetResult<Prisma.$LicenseKeyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LicenseKey that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LicenseKeyFindUniqueOrThrowArgs} args - Arguments to find a LicenseKey
     * @example
     * // Get one LicenseKey
     * const licenseKey = await prisma.licenseKey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LicenseKeyFindUniqueOrThrowArgs>(args: SelectSubset<T, LicenseKeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LicenseKeyClient<$Result.GetResult<Prisma.$LicenseKeyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LicenseKey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseKeyFindFirstArgs} args - Arguments to find a LicenseKey
     * @example
     * // Get one LicenseKey
     * const licenseKey = await prisma.licenseKey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LicenseKeyFindFirstArgs>(args?: SelectSubset<T, LicenseKeyFindFirstArgs<ExtArgs>>): Prisma__LicenseKeyClient<$Result.GetResult<Prisma.$LicenseKeyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LicenseKey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseKeyFindFirstOrThrowArgs} args - Arguments to find a LicenseKey
     * @example
     * // Get one LicenseKey
     * const licenseKey = await prisma.licenseKey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LicenseKeyFindFirstOrThrowArgs>(args?: SelectSubset<T, LicenseKeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__LicenseKeyClient<$Result.GetResult<Prisma.$LicenseKeyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LicenseKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseKeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LicenseKeys
     * const licenseKeys = await prisma.licenseKey.findMany()
     * 
     * // Get first 10 LicenseKeys
     * const licenseKeys = await prisma.licenseKey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const licenseKeyWithIdOnly = await prisma.licenseKey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LicenseKeyFindManyArgs>(args?: SelectSubset<T, LicenseKeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicenseKeyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LicenseKey.
     * @param {LicenseKeyCreateArgs} args - Arguments to create a LicenseKey.
     * @example
     * // Create one LicenseKey
     * const LicenseKey = await prisma.licenseKey.create({
     *   data: {
     *     // ... data to create a LicenseKey
     *   }
     * })
     * 
     */
    create<T extends LicenseKeyCreateArgs>(args: SelectSubset<T, LicenseKeyCreateArgs<ExtArgs>>): Prisma__LicenseKeyClient<$Result.GetResult<Prisma.$LicenseKeyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LicenseKeys.
     * @param {LicenseKeyCreateManyArgs} args - Arguments to create many LicenseKeys.
     * @example
     * // Create many LicenseKeys
     * const licenseKey = await prisma.licenseKey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LicenseKeyCreateManyArgs>(args?: SelectSubset<T, LicenseKeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LicenseKeys and returns the data saved in the database.
     * @param {LicenseKeyCreateManyAndReturnArgs} args - Arguments to create many LicenseKeys.
     * @example
     * // Create many LicenseKeys
     * const licenseKey = await prisma.licenseKey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LicenseKeys and only return the `id`
     * const licenseKeyWithIdOnly = await prisma.licenseKey.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LicenseKeyCreateManyAndReturnArgs>(args?: SelectSubset<T, LicenseKeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicenseKeyPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a LicenseKey.
     * @param {LicenseKeyDeleteArgs} args - Arguments to delete one LicenseKey.
     * @example
     * // Delete one LicenseKey
     * const LicenseKey = await prisma.licenseKey.delete({
     *   where: {
     *     // ... filter to delete one LicenseKey
     *   }
     * })
     * 
     */
    delete<T extends LicenseKeyDeleteArgs>(args: SelectSubset<T, LicenseKeyDeleteArgs<ExtArgs>>): Prisma__LicenseKeyClient<$Result.GetResult<Prisma.$LicenseKeyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LicenseKey.
     * @param {LicenseKeyUpdateArgs} args - Arguments to update one LicenseKey.
     * @example
     * // Update one LicenseKey
     * const licenseKey = await prisma.licenseKey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LicenseKeyUpdateArgs>(args: SelectSubset<T, LicenseKeyUpdateArgs<ExtArgs>>): Prisma__LicenseKeyClient<$Result.GetResult<Prisma.$LicenseKeyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LicenseKeys.
     * @param {LicenseKeyDeleteManyArgs} args - Arguments to filter LicenseKeys to delete.
     * @example
     * // Delete a few LicenseKeys
     * const { count } = await prisma.licenseKey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LicenseKeyDeleteManyArgs>(args?: SelectSubset<T, LicenseKeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LicenseKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseKeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LicenseKeys
     * const licenseKey = await prisma.licenseKey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LicenseKeyUpdateManyArgs>(args: SelectSubset<T, LicenseKeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LicenseKey.
     * @param {LicenseKeyUpsertArgs} args - Arguments to update or create a LicenseKey.
     * @example
     * // Update or create a LicenseKey
     * const licenseKey = await prisma.licenseKey.upsert({
     *   create: {
     *     // ... data to create a LicenseKey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LicenseKey we want to update
     *   }
     * })
     */
    upsert<T extends LicenseKeyUpsertArgs>(args: SelectSubset<T, LicenseKeyUpsertArgs<ExtArgs>>): Prisma__LicenseKeyClient<$Result.GetResult<Prisma.$LicenseKeyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of LicenseKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseKeyCountArgs} args - Arguments to filter LicenseKeys to count.
     * @example
     * // Count the number of LicenseKeys
     * const count = await prisma.licenseKey.count({
     *   where: {
     *     // ... the filter for the LicenseKeys we want to count
     *   }
     * })
    **/
    count<T extends LicenseKeyCountArgs>(
      args?: Subset<T, LicenseKeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LicenseKeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LicenseKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseKeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LicenseKeyAggregateArgs>(args: Subset<T, LicenseKeyAggregateArgs>): Prisma.PrismaPromise<GetLicenseKeyAggregateType<T>>

    /**
     * Group by LicenseKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseKeyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LicenseKeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LicenseKeyGroupByArgs['orderBy'] }
        : { orderBy?: LicenseKeyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LicenseKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLicenseKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LicenseKey model
   */
  readonly fields: LicenseKeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LicenseKey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LicenseKeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LicenseKey model
   */ 
  interface LicenseKeyFieldRefs {
    readonly id: FieldRef<"LicenseKey", 'String'>
    readonly key: FieldRef<"LicenseKey", 'String'>
    readonly name: FieldRef<"LicenseKey", 'String'>
    readonly maxInstalls: FieldRef<"LicenseKey", 'Int'>
    readonly usedInstalls: FieldRef<"LicenseKey", 'Int'>
    readonly isActive: FieldRef<"LicenseKey", 'Boolean'>
    readonly expiresAt: FieldRef<"LicenseKey", 'DateTime'>
    readonly createdAt: FieldRef<"LicenseKey", 'DateTime'>
    readonly updatedAt: FieldRef<"LicenseKey", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LicenseKey findUnique
   */
  export type LicenseKeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseKey
     */
    select?: LicenseKeySelect<ExtArgs> | null
    /**
     * Filter, which LicenseKey to fetch.
     */
    where: LicenseKeyWhereUniqueInput
  }

  /**
   * LicenseKey findUniqueOrThrow
   */
  export type LicenseKeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseKey
     */
    select?: LicenseKeySelect<ExtArgs> | null
    /**
     * Filter, which LicenseKey to fetch.
     */
    where: LicenseKeyWhereUniqueInput
  }

  /**
   * LicenseKey findFirst
   */
  export type LicenseKeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseKey
     */
    select?: LicenseKeySelect<ExtArgs> | null
    /**
     * Filter, which LicenseKey to fetch.
     */
    where?: LicenseKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LicenseKeys to fetch.
     */
    orderBy?: LicenseKeyOrderByWithRelationInput | LicenseKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LicenseKeys.
     */
    cursor?: LicenseKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LicenseKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LicenseKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LicenseKeys.
     */
    distinct?: LicenseKeyScalarFieldEnum | LicenseKeyScalarFieldEnum[]
  }

  /**
   * LicenseKey findFirstOrThrow
   */
  export type LicenseKeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseKey
     */
    select?: LicenseKeySelect<ExtArgs> | null
    /**
     * Filter, which LicenseKey to fetch.
     */
    where?: LicenseKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LicenseKeys to fetch.
     */
    orderBy?: LicenseKeyOrderByWithRelationInput | LicenseKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LicenseKeys.
     */
    cursor?: LicenseKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LicenseKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LicenseKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LicenseKeys.
     */
    distinct?: LicenseKeyScalarFieldEnum | LicenseKeyScalarFieldEnum[]
  }

  /**
   * LicenseKey findMany
   */
  export type LicenseKeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseKey
     */
    select?: LicenseKeySelect<ExtArgs> | null
    /**
     * Filter, which LicenseKeys to fetch.
     */
    where?: LicenseKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LicenseKeys to fetch.
     */
    orderBy?: LicenseKeyOrderByWithRelationInput | LicenseKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LicenseKeys.
     */
    cursor?: LicenseKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LicenseKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LicenseKeys.
     */
    skip?: number
    distinct?: LicenseKeyScalarFieldEnum | LicenseKeyScalarFieldEnum[]
  }

  /**
   * LicenseKey create
   */
  export type LicenseKeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseKey
     */
    select?: LicenseKeySelect<ExtArgs> | null
    /**
     * The data needed to create a LicenseKey.
     */
    data: XOR<LicenseKeyCreateInput, LicenseKeyUncheckedCreateInput>
  }

  /**
   * LicenseKey createMany
   */
  export type LicenseKeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LicenseKeys.
     */
    data: LicenseKeyCreateManyInput | LicenseKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LicenseKey createManyAndReturn
   */
  export type LicenseKeyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseKey
     */
    select?: LicenseKeySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many LicenseKeys.
     */
    data: LicenseKeyCreateManyInput | LicenseKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LicenseKey update
   */
  export type LicenseKeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseKey
     */
    select?: LicenseKeySelect<ExtArgs> | null
    /**
     * The data needed to update a LicenseKey.
     */
    data: XOR<LicenseKeyUpdateInput, LicenseKeyUncheckedUpdateInput>
    /**
     * Choose, which LicenseKey to update.
     */
    where: LicenseKeyWhereUniqueInput
  }

  /**
   * LicenseKey updateMany
   */
  export type LicenseKeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LicenseKeys.
     */
    data: XOR<LicenseKeyUpdateManyMutationInput, LicenseKeyUncheckedUpdateManyInput>
    /**
     * Filter which LicenseKeys to update
     */
    where?: LicenseKeyWhereInput
  }

  /**
   * LicenseKey upsert
   */
  export type LicenseKeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseKey
     */
    select?: LicenseKeySelect<ExtArgs> | null
    /**
     * The filter to search for the LicenseKey to update in case it exists.
     */
    where: LicenseKeyWhereUniqueInput
    /**
     * In case the LicenseKey found by the `where` argument doesn't exist, create a new LicenseKey with this data.
     */
    create: XOR<LicenseKeyCreateInput, LicenseKeyUncheckedCreateInput>
    /**
     * In case the LicenseKey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LicenseKeyUpdateInput, LicenseKeyUncheckedUpdateInput>
  }

  /**
   * LicenseKey delete
   */
  export type LicenseKeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseKey
     */
    select?: LicenseKeySelect<ExtArgs> | null
    /**
     * Filter which LicenseKey to delete.
     */
    where: LicenseKeyWhereUniqueInput
  }

  /**
   * LicenseKey deleteMany
   */
  export type LicenseKeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LicenseKeys to delete
     */
    where?: LicenseKeyWhereInput
  }

  /**
   * LicenseKey without action
   */
  export type LicenseKeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseKey
     */
    select?: LicenseKeySelect<ExtArgs> | null
  }


  /**
   * Model GlobalSettings
   */

  export type AggregateGlobalSettings = {
    _count: GlobalSettingsCountAggregateOutputType | null
    _avg: GlobalSettingsAvgAggregateOutputType | null
    _sum: GlobalSettingsSumAggregateOutputType | null
    _min: GlobalSettingsMinAggregateOutputType | null
    _max: GlobalSettingsMaxAggregateOutputType | null
  }

  export type GlobalSettingsAvgAggregateOutputType = {
    smtpPort: number | null
  }

  export type GlobalSettingsSumAggregateOutputType = {
    smtpPort: number | null
  }

  export type GlobalSettingsMinAggregateOutputType = {
    id: string | null
    platformName: string | null
    platformLogo: string | null
    platformDomain: string | null
    smtpHost: string | null
    smtpPort: number | null
    smtpUser: string | null
    smtpPass: string | null
    smtpFrom: string | null
    billingGateway: string | null
    billingApiKey: string | null
    billingWebhookSecret: string | null
    maintenanceMode: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GlobalSettingsMaxAggregateOutputType = {
    id: string | null
    platformName: string | null
    platformLogo: string | null
    platformDomain: string | null
    smtpHost: string | null
    smtpPort: number | null
    smtpUser: string | null
    smtpPass: string | null
    smtpFrom: string | null
    billingGateway: string | null
    billingApiKey: string | null
    billingWebhookSecret: string | null
    maintenanceMode: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GlobalSettingsCountAggregateOutputType = {
    id: number
    platformName: number
    platformLogo: number
    platformDomain: number
    smtpHost: number
    smtpPort: number
    smtpUser: number
    smtpPass: number
    smtpFrom: number
    billingGateway: number
    billingApiKey: number
    billingWebhookSecret: number
    maintenanceMode: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GlobalSettingsAvgAggregateInputType = {
    smtpPort?: true
  }

  export type GlobalSettingsSumAggregateInputType = {
    smtpPort?: true
  }

  export type GlobalSettingsMinAggregateInputType = {
    id?: true
    platformName?: true
    platformLogo?: true
    platformDomain?: true
    smtpHost?: true
    smtpPort?: true
    smtpUser?: true
    smtpPass?: true
    smtpFrom?: true
    billingGateway?: true
    billingApiKey?: true
    billingWebhookSecret?: true
    maintenanceMode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GlobalSettingsMaxAggregateInputType = {
    id?: true
    platformName?: true
    platformLogo?: true
    platformDomain?: true
    smtpHost?: true
    smtpPort?: true
    smtpUser?: true
    smtpPass?: true
    smtpFrom?: true
    billingGateway?: true
    billingApiKey?: true
    billingWebhookSecret?: true
    maintenanceMode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GlobalSettingsCountAggregateInputType = {
    id?: true
    platformName?: true
    platformLogo?: true
    platformDomain?: true
    smtpHost?: true
    smtpPort?: true
    smtpUser?: true
    smtpPass?: true
    smtpFrom?: true
    billingGateway?: true
    billingApiKey?: true
    billingWebhookSecret?: true
    maintenanceMode?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GlobalSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GlobalSettings to aggregate.
     */
    where?: GlobalSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalSettings to fetch.
     */
    orderBy?: GlobalSettingsOrderByWithRelationInput | GlobalSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GlobalSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GlobalSettings
    **/
    _count?: true | GlobalSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GlobalSettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GlobalSettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GlobalSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GlobalSettingsMaxAggregateInputType
  }

  export type GetGlobalSettingsAggregateType<T extends GlobalSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateGlobalSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGlobalSettings[P]>
      : GetScalarType<T[P], AggregateGlobalSettings[P]>
  }




  export type GlobalSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GlobalSettingsWhereInput
    orderBy?: GlobalSettingsOrderByWithAggregationInput | GlobalSettingsOrderByWithAggregationInput[]
    by: GlobalSettingsScalarFieldEnum[] | GlobalSettingsScalarFieldEnum
    having?: GlobalSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GlobalSettingsCountAggregateInputType | true
    _avg?: GlobalSettingsAvgAggregateInputType
    _sum?: GlobalSettingsSumAggregateInputType
    _min?: GlobalSettingsMinAggregateInputType
    _max?: GlobalSettingsMaxAggregateInputType
  }

  export type GlobalSettingsGroupByOutputType = {
    id: string
    platformName: string
    platformLogo: string
    platformDomain: string
    smtpHost: string
    smtpPort: number
    smtpUser: string
    smtpPass: string
    smtpFrom: string
    billingGateway: string
    billingApiKey: string
    billingWebhookSecret: string
    maintenanceMode: boolean
    createdAt: Date
    updatedAt: Date
    _count: GlobalSettingsCountAggregateOutputType | null
    _avg: GlobalSettingsAvgAggregateOutputType | null
    _sum: GlobalSettingsSumAggregateOutputType | null
    _min: GlobalSettingsMinAggregateOutputType | null
    _max: GlobalSettingsMaxAggregateOutputType | null
  }

  type GetGlobalSettingsGroupByPayload<T extends GlobalSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GlobalSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GlobalSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GlobalSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], GlobalSettingsGroupByOutputType[P]>
        }
      >
    >


  export type GlobalSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platformName?: boolean
    platformLogo?: boolean
    platformDomain?: boolean
    smtpHost?: boolean
    smtpPort?: boolean
    smtpUser?: boolean
    smtpPass?: boolean
    smtpFrom?: boolean
    billingGateway?: boolean
    billingApiKey?: boolean
    billingWebhookSecret?: boolean
    maintenanceMode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["globalSettings"]>

  export type GlobalSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platformName?: boolean
    platformLogo?: boolean
    platformDomain?: boolean
    smtpHost?: boolean
    smtpPort?: boolean
    smtpUser?: boolean
    smtpPass?: boolean
    smtpFrom?: boolean
    billingGateway?: boolean
    billingApiKey?: boolean
    billingWebhookSecret?: boolean
    maintenanceMode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["globalSettings"]>

  export type GlobalSettingsSelectScalar = {
    id?: boolean
    platformName?: boolean
    platformLogo?: boolean
    platformDomain?: boolean
    smtpHost?: boolean
    smtpPort?: boolean
    smtpUser?: boolean
    smtpPass?: boolean
    smtpFrom?: boolean
    billingGateway?: boolean
    billingApiKey?: boolean
    billingWebhookSecret?: boolean
    maintenanceMode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $GlobalSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GlobalSettings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      platformName: string
      platformLogo: string
      platformDomain: string
      smtpHost: string
      smtpPort: number
      smtpUser: string
      smtpPass: string
      smtpFrom: string
      billingGateway: string
      billingApiKey: string
      billingWebhookSecret: string
      maintenanceMode: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["globalSettings"]>
    composites: {}
  }

  type GlobalSettingsGetPayload<S extends boolean | null | undefined | GlobalSettingsDefaultArgs> = $Result.GetResult<Prisma.$GlobalSettingsPayload, S>

  type GlobalSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GlobalSettingsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GlobalSettingsCountAggregateInputType | true
    }

  export interface GlobalSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GlobalSettings'], meta: { name: 'GlobalSettings' } }
    /**
     * Find zero or one GlobalSettings that matches the filter.
     * @param {GlobalSettingsFindUniqueArgs} args - Arguments to find a GlobalSettings
     * @example
     * // Get one GlobalSettings
     * const globalSettings = await prisma.globalSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GlobalSettingsFindUniqueArgs>(args: SelectSubset<T, GlobalSettingsFindUniqueArgs<ExtArgs>>): Prisma__GlobalSettingsClient<$Result.GetResult<Prisma.$GlobalSettingsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one GlobalSettings that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GlobalSettingsFindUniqueOrThrowArgs} args - Arguments to find a GlobalSettings
     * @example
     * // Get one GlobalSettings
     * const globalSettings = await prisma.globalSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GlobalSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, GlobalSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GlobalSettingsClient<$Result.GetResult<Prisma.$GlobalSettingsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first GlobalSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalSettingsFindFirstArgs} args - Arguments to find a GlobalSettings
     * @example
     * // Get one GlobalSettings
     * const globalSettings = await prisma.globalSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GlobalSettingsFindFirstArgs>(args?: SelectSubset<T, GlobalSettingsFindFirstArgs<ExtArgs>>): Prisma__GlobalSettingsClient<$Result.GetResult<Prisma.$GlobalSettingsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first GlobalSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalSettingsFindFirstOrThrowArgs} args - Arguments to find a GlobalSettings
     * @example
     * // Get one GlobalSettings
     * const globalSettings = await prisma.globalSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GlobalSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, GlobalSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__GlobalSettingsClient<$Result.GetResult<Prisma.$GlobalSettingsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more GlobalSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GlobalSettings
     * const globalSettings = await prisma.globalSettings.findMany()
     * 
     * // Get first 10 GlobalSettings
     * const globalSettings = await prisma.globalSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const globalSettingsWithIdOnly = await prisma.globalSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GlobalSettingsFindManyArgs>(args?: SelectSubset<T, GlobalSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlobalSettingsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a GlobalSettings.
     * @param {GlobalSettingsCreateArgs} args - Arguments to create a GlobalSettings.
     * @example
     * // Create one GlobalSettings
     * const GlobalSettings = await prisma.globalSettings.create({
     *   data: {
     *     // ... data to create a GlobalSettings
     *   }
     * })
     * 
     */
    create<T extends GlobalSettingsCreateArgs>(args: SelectSubset<T, GlobalSettingsCreateArgs<ExtArgs>>): Prisma__GlobalSettingsClient<$Result.GetResult<Prisma.$GlobalSettingsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many GlobalSettings.
     * @param {GlobalSettingsCreateManyArgs} args - Arguments to create many GlobalSettings.
     * @example
     * // Create many GlobalSettings
     * const globalSettings = await prisma.globalSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GlobalSettingsCreateManyArgs>(args?: SelectSubset<T, GlobalSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GlobalSettings and returns the data saved in the database.
     * @param {GlobalSettingsCreateManyAndReturnArgs} args - Arguments to create many GlobalSettings.
     * @example
     * // Create many GlobalSettings
     * const globalSettings = await prisma.globalSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GlobalSettings and only return the `id`
     * const globalSettingsWithIdOnly = await prisma.globalSettings.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GlobalSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, GlobalSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlobalSettingsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a GlobalSettings.
     * @param {GlobalSettingsDeleteArgs} args - Arguments to delete one GlobalSettings.
     * @example
     * // Delete one GlobalSettings
     * const GlobalSettings = await prisma.globalSettings.delete({
     *   where: {
     *     // ... filter to delete one GlobalSettings
     *   }
     * })
     * 
     */
    delete<T extends GlobalSettingsDeleteArgs>(args: SelectSubset<T, GlobalSettingsDeleteArgs<ExtArgs>>): Prisma__GlobalSettingsClient<$Result.GetResult<Prisma.$GlobalSettingsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one GlobalSettings.
     * @param {GlobalSettingsUpdateArgs} args - Arguments to update one GlobalSettings.
     * @example
     * // Update one GlobalSettings
     * const globalSettings = await prisma.globalSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GlobalSettingsUpdateArgs>(args: SelectSubset<T, GlobalSettingsUpdateArgs<ExtArgs>>): Prisma__GlobalSettingsClient<$Result.GetResult<Prisma.$GlobalSettingsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more GlobalSettings.
     * @param {GlobalSettingsDeleteManyArgs} args - Arguments to filter GlobalSettings to delete.
     * @example
     * // Delete a few GlobalSettings
     * const { count } = await prisma.globalSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GlobalSettingsDeleteManyArgs>(args?: SelectSubset<T, GlobalSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GlobalSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GlobalSettings
     * const globalSettings = await prisma.globalSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GlobalSettingsUpdateManyArgs>(args: SelectSubset<T, GlobalSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GlobalSettings.
     * @param {GlobalSettingsUpsertArgs} args - Arguments to update or create a GlobalSettings.
     * @example
     * // Update or create a GlobalSettings
     * const globalSettings = await prisma.globalSettings.upsert({
     *   create: {
     *     // ... data to create a GlobalSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GlobalSettings we want to update
     *   }
     * })
     */
    upsert<T extends GlobalSettingsUpsertArgs>(args: SelectSubset<T, GlobalSettingsUpsertArgs<ExtArgs>>): Prisma__GlobalSettingsClient<$Result.GetResult<Prisma.$GlobalSettingsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of GlobalSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalSettingsCountArgs} args - Arguments to filter GlobalSettings to count.
     * @example
     * // Count the number of GlobalSettings
     * const count = await prisma.globalSettings.count({
     *   where: {
     *     // ... the filter for the GlobalSettings we want to count
     *   }
     * })
    **/
    count<T extends GlobalSettingsCountArgs>(
      args?: Subset<T, GlobalSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GlobalSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GlobalSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GlobalSettingsAggregateArgs>(args: Subset<T, GlobalSettingsAggregateArgs>): Prisma.PrismaPromise<GetGlobalSettingsAggregateType<T>>

    /**
     * Group by GlobalSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalSettingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GlobalSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GlobalSettingsGroupByArgs['orderBy'] }
        : { orderBy?: GlobalSettingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GlobalSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGlobalSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GlobalSettings model
   */
  readonly fields: GlobalSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GlobalSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GlobalSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GlobalSettings model
   */ 
  interface GlobalSettingsFieldRefs {
    readonly id: FieldRef<"GlobalSettings", 'String'>
    readonly platformName: FieldRef<"GlobalSettings", 'String'>
    readonly platformLogo: FieldRef<"GlobalSettings", 'String'>
    readonly platformDomain: FieldRef<"GlobalSettings", 'String'>
    readonly smtpHost: FieldRef<"GlobalSettings", 'String'>
    readonly smtpPort: FieldRef<"GlobalSettings", 'Int'>
    readonly smtpUser: FieldRef<"GlobalSettings", 'String'>
    readonly smtpPass: FieldRef<"GlobalSettings", 'String'>
    readonly smtpFrom: FieldRef<"GlobalSettings", 'String'>
    readonly billingGateway: FieldRef<"GlobalSettings", 'String'>
    readonly billingApiKey: FieldRef<"GlobalSettings", 'String'>
    readonly billingWebhookSecret: FieldRef<"GlobalSettings", 'String'>
    readonly maintenanceMode: FieldRef<"GlobalSettings", 'Boolean'>
    readonly createdAt: FieldRef<"GlobalSettings", 'DateTime'>
    readonly updatedAt: FieldRef<"GlobalSettings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GlobalSettings findUnique
   */
  export type GlobalSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSettings
     */
    select?: GlobalSettingsSelect<ExtArgs> | null
    /**
     * Filter, which GlobalSettings to fetch.
     */
    where: GlobalSettingsWhereUniqueInput
  }

  /**
   * GlobalSettings findUniqueOrThrow
   */
  export type GlobalSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSettings
     */
    select?: GlobalSettingsSelect<ExtArgs> | null
    /**
     * Filter, which GlobalSettings to fetch.
     */
    where: GlobalSettingsWhereUniqueInput
  }

  /**
   * GlobalSettings findFirst
   */
  export type GlobalSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSettings
     */
    select?: GlobalSettingsSelect<ExtArgs> | null
    /**
     * Filter, which GlobalSettings to fetch.
     */
    where?: GlobalSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalSettings to fetch.
     */
    orderBy?: GlobalSettingsOrderByWithRelationInput | GlobalSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GlobalSettings.
     */
    cursor?: GlobalSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlobalSettings.
     */
    distinct?: GlobalSettingsScalarFieldEnum | GlobalSettingsScalarFieldEnum[]
  }

  /**
   * GlobalSettings findFirstOrThrow
   */
  export type GlobalSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSettings
     */
    select?: GlobalSettingsSelect<ExtArgs> | null
    /**
     * Filter, which GlobalSettings to fetch.
     */
    where?: GlobalSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalSettings to fetch.
     */
    orderBy?: GlobalSettingsOrderByWithRelationInput | GlobalSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GlobalSettings.
     */
    cursor?: GlobalSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlobalSettings.
     */
    distinct?: GlobalSettingsScalarFieldEnum | GlobalSettingsScalarFieldEnum[]
  }

  /**
   * GlobalSettings findMany
   */
  export type GlobalSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSettings
     */
    select?: GlobalSettingsSelect<ExtArgs> | null
    /**
     * Filter, which GlobalSettings to fetch.
     */
    where?: GlobalSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalSettings to fetch.
     */
    orderBy?: GlobalSettingsOrderByWithRelationInput | GlobalSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GlobalSettings.
     */
    cursor?: GlobalSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalSettings.
     */
    skip?: number
    distinct?: GlobalSettingsScalarFieldEnum | GlobalSettingsScalarFieldEnum[]
  }

  /**
   * GlobalSettings create
   */
  export type GlobalSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSettings
     */
    select?: GlobalSettingsSelect<ExtArgs> | null
    /**
     * The data needed to create a GlobalSettings.
     */
    data: XOR<GlobalSettingsCreateInput, GlobalSettingsUncheckedCreateInput>
  }

  /**
   * GlobalSettings createMany
   */
  export type GlobalSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GlobalSettings.
     */
    data: GlobalSettingsCreateManyInput | GlobalSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GlobalSettings createManyAndReturn
   */
  export type GlobalSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSettings
     */
    select?: GlobalSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many GlobalSettings.
     */
    data: GlobalSettingsCreateManyInput | GlobalSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GlobalSettings update
   */
  export type GlobalSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSettings
     */
    select?: GlobalSettingsSelect<ExtArgs> | null
    /**
     * The data needed to update a GlobalSettings.
     */
    data: XOR<GlobalSettingsUpdateInput, GlobalSettingsUncheckedUpdateInput>
    /**
     * Choose, which GlobalSettings to update.
     */
    where: GlobalSettingsWhereUniqueInput
  }

  /**
   * GlobalSettings updateMany
   */
  export type GlobalSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GlobalSettings.
     */
    data: XOR<GlobalSettingsUpdateManyMutationInput, GlobalSettingsUncheckedUpdateManyInput>
    /**
     * Filter which GlobalSettings to update
     */
    where?: GlobalSettingsWhereInput
  }

  /**
   * GlobalSettings upsert
   */
  export type GlobalSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSettings
     */
    select?: GlobalSettingsSelect<ExtArgs> | null
    /**
     * The filter to search for the GlobalSettings to update in case it exists.
     */
    where: GlobalSettingsWhereUniqueInput
    /**
     * In case the GlobalSettings found by the `where` argument doesn't exist, create a new GlobalSettings with this data.
     */
    create: XOR<GlobalSettingsCreateInput, GlobalSettingsUncheckedCreateInput>
    /**
     * In case the GlobalSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GlobalSettingsUpdateInput, GlobalSettingsUncheckedUpdateInput>
  }

  /**
   * GlobalSettings delete
   */
  export type GlobalSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSettings
     */
    select?: GlobalSettingsSelect<ExtArgs> | null
    /**
     * Filter which GlobalSettings to delete.
     */
    where: GlobalSettingsWhereUniqueInput
  }

  /**
   * GlobalSettings deleteMany
   */
  export type GlobalSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GlobalSettings to delete
     */
    where?: GlobalSettingsWhereInput
  }

  /**
   * GlobalSettings without action
   */
  export type GlobalSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSettings
     */
    select?: GlobalSettingsSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SuperAdminScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    name: 'name',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SuperAdminScalarFieldEnum = (typeof SuperAdminScalarFieldEnum)[keyof typeof SuperAdminScalarFieldEnum]


  export const TenantScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    name: 'name',
    customDomain: 'customDomain',
    status: 'status',
    logo: 'logo',
    favicon: 'favicon',
    primaryColor: 'primaryColor',
    secondaryColor: 'secondaryColor',
    accentColor: 'accentColor',
    ownerName: 'ownerName',
    ownerEmail: 'ownerEmail',
    ownerPhone: 'ownerPhone',
    adminUsername: 'adminUsername',
    adminPassword: 'adminPassword',
    planId: 'planId',
    dbSchema: 'dbSchema',
    s3Bucket: 's3Bucket',
    s3Region: 's3Region',
    s3AccessKey: 's3AccessKey',
    s3SecretKey: 's3SecretKey',
    s3RetentionDays: 's3RetentionDays',
    smtpHost: 'smtpHost',
    smtpPort: 'smtpPort',
    smtpUser: 'smtpUser',
    smtpPass: 'smtpPass',
    smtpFrom: 'smtpFrom',
    useGlobalSmtp: 'useGlobalSmtp',
    trialEndsAt: 'trialEndsAt',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TenantScalarFieldEnum = (typeof TenantScalarFieldEnum)[keyof typeof TenantScalarFieldEnum]


  export const PlanScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    priceMonthly: 'priceMonthly',
    priceYearly: 'priceYearly',
    currency: 'currency',
    maxUsers: 'maxUsers',
    maxChannels: 'maxChannels',
    maxContacts: 'maxContacts',
    maxMessagesMonth: 'maxMessagesMonth',
    maxCampaigns: 'maxCampaigns',
    maxFlows: 'maxFlows',
    maxAiAgents: 'maxAiAgents',
    hasWhatsappQr: 'hasWhatsappQr',
    hasWhatsappApi: 'hasWhatsappApi',
    hasInstagram: 'hasInstagram',
    hasMessenger: 'hasMessenger',
    hasTelegram: 'hasTelegram',
    hasEmail: 'hasEmail',
    hasPhone: 'hasPhone',
    hasChatbot: 'hasChatbot',
    hasAiAgents: 'hasAiAgents',
    hasCampaigns: 'hasCampaigns',
    hasApi: 'hasApi',
    hasWebhooks: 'hasWebhooks',
    hasWhiteLabel: 'hasWhiteLabel',
    isActive: 'isActive',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlanScalarFieldEnum = (typeof PlanScalarFieldEnum)[keyof typeof PlanScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    planId: 'planId',
    status: 'status',
    billingCycle: 'billingCycle',
    gatewayProvider: 'gatewayProvider',
    gatewayCustomerId: 'gatewayCustomerId',
    gatewaySubscriptionId: 'gatewaySubscriptionId',
    currentPeriodStart: 'currentPeriodStart',
    currentPeriodEnd: 'currentPeriodEnd',
    cancelledAt: 'cancelledAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    amount: 'amount',
    currency: 'currency',
    status: 'status',
    gatewayId: 'gatewayId',
    gatewayProvider: 'gatewayProvider',
    description: 'description',
    paidAt: 'paidAt',
    createdAt: 'createdAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const BillingConfigScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    monthlyPrice: 'monthlyPrice',
    warningDays: 'warningDays',
    blockAfterDays: 'blockAfterDays',
    warningMessage: 'warningMessage',
    blockMessage: 'blockMessage',
    paymentLink: 'paymentLink',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BillingConfigScalarFieldEnum = (typeof BillingConfigScalarFieldEnum)[keyof typeof BillingConfigScalarFieldEnum]


  export const LicenseKeyScalarFieldEnum: {
    id: 'id',
    key: 'key',
    name: 'name',
    maxInstalls: 'maxInstalls',
    usedInstalls: 'usedInstalls',
    isActive: 'isActive',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LicenseKeyScalarFieldEnum = (typeof LicenseKeyScalarFieldEnum)[keyof typeof LicenseKeyScalarFieldEnum]


  export const GlobalSettingsScalarFieldEnum: {
    id: 'id',
    platformName: 'platformName',
    platformLogo: 'platformLogo',
    platformDomain: 'platformDomain',
    smtpHost: 'smtpHost',
    smtpPort: 'smtpPort',
    smtpUser: 'smtpUser',
    smtpPass: 'smtpPass',
    smtpFrom: 'smtpFrom',
    billingGateway: 'billingGateway',
    billingApiKey: 'billingApiKey',
    billingWebhookSecret: 'billingWebhookSecret',
    maintenanceMode: 'maintenanceMode',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GlobalSettingsScalarFieldEnum = (typeof GlobalSettingsScalarFieldEnum)[keyof typeof GlobalSettingsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type SuperAdminWhereInput = {
    AND?: SuperAdminWhereInput | SuperAdminWhereInput[]
    OR?: SuperAdminWhereInput[]
    NOT?: SuperAdminWhereInput | SuperAdminWhereInput[]
    id?: StringFilter<"SuperAdmin"> | string
    username?: StringFilter<"SuperAdmin"> | string
    password?: StringFilter<"SuperAdmin"> | string
    name?: StringFilter<"SuperAdmin"> | string
    email?: StringFilter<"SuperAdmin"> | string
    createdAt?: DateTimeFilter<"SuperAdmin"> | Date | string
    updatedAt?: DateTimeFilter<"SuperAdmin"> | Date | string
  }

  export type SuperAdminOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SuperAdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: SuperAdminWhereInput | SuperAdminWhereInput[]
    OR?: SuperAdminWhereInput[]
    NOT?: SuperAdminWhereInput | SuperAdminWhereInput[]
    password?: StringFilter<"SuperAdmin"> | string
    name?: StringFilter<"SuperAdmin"> | string
    email?: StringFilter<"SuperAdmin"> | string
    createdAt?: DateTimeFilter<"SuperAdmin"> | Date | string
    updatedAt?: DateTimeFilter<"SuperAdmin"> | Date | string
  }, "id" | "username">

  export type SuperAdminOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SuperAdminCountOrderByAggregateInput
    _max?: SuperAdminMaxOrderByAggregateInput
    _min?: SuperAdminMinOrderByAggregateInput
  }

  export type SuperAdminScalarWhereWithAggregatesInput = {
    AND?: SuperAdminScalarWhereWithAggregatesInput | SuperAdminScalarWhereWithAggregatesInput[]
    OR?: SuperAdminScalarWhereWithAggregatesInput[]
    NOT?: SuperAdminScalarWhereWithAggregatesInput | SuperAdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SuperAdmin"> | string
    username?: StringWithAggregatesFilter<"SuperAdmin"> | string
    password?: StringWithAggregatesFilter<"SuperAdmin"> | string
    name?: StringWithAggregatesFilter<"SuperAdmin"> | string
    email?: StringWithAggregatesFilter<"SuperAdmin"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SuperAdmin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SuperAdmin"> | Date | string
  }

  export type TenantWhereInput = {
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    id?: StringFilter<"Tenant"> | string
    slug?: StringFilter<"Tenant"> | string
    name?: StringFilter<"Tenant"> | string
    customDomain?: StringNullableFilter<"Tenant"> | string | null
    status?: StringFilter<"Tenant"> | string
    logo?: StringFilter<"Tenant"> | string
    favicon?: StringFilter<"Tenant"> | string
    primaryColor?: StringFilter<"Tenant"> | string
    secondaryColor?: StringFilter<"Tenant"> | string
    accentColor?: StringFilter<"Tenant"> | string
    ownerName?: StringFilter<"Tenant"> | string
    ownerEmail?: StringFilter<"Tenant"> | string
    ownerPhone?: StringFilter<"Tenant"> | string
    adminUsername?: StringFilter<"Tenant"> | string
    adminPassword?: StringFilter<"Tenant"> | string
    planId?: StringNullableFilter<"Tenant"> | string | null
    dbSchema?: StringFilter<"Tenant"> | string
    s3Bucket?: StringFilter<"Tenant"> | string
    s3Region?: StringFilter<"Tenant"> | string
    s3AccessKey?: StringFilter<"Tenant"> | string
    s3SecretKey?: StringFilter<"Tenant"> | string
    s3RetentionDays?: IntFilter<"Tenant"> | number
    smtpHost?: StringFilter<"Tenant"> | string
    smtpPort?: IntFilter<"Tenant"> | number
    smtpUser?: StringFilter<"Tenant"> | string
    smtpPass?: StringFilter<"Tenant"> | string
    smtpFrom?: StringFilter<"Tenant"> | string
    useGlobalSmtp?: BoolFilter<"Tenant"> | boolean
    trialEndsAt?: DateTimeNullableFilter<"Tenant"> | Date | string | null
    metadata?: JsonFilter<"Tenant">
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    plan?: XOR<PlanNullableRelationFilter, PlanWhereInput> | null
    subscription?: XOR<SubscriptionNullableRelationFilter, SubscriptionWhereInput> | null
  }

  export type TenantOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    customDomain?: SortOrderInput | SortOrder
    status?: SortOrder
    logo?: SortOrder
    favicon?: SortOrder
    primaryColor?: SortOrder
    secondaryColor?: SortOrder
    accentColor?: SortOrder
    ownerName?: SortOrder
    ownerEmail?: SortOrder
    ownerPhone?: SortOrder
    adminUsername?: SortOrder
    adminPassword?: SortOrder
    planId?: SortOrderInput | SortOrder
    dbSchema?: SortOrder
    s3Bucket?: SortOrder
    s3Region?: SortOrder
    s3AccessKey?: SortOrder
    s3SecretKey?: SortOrder
    s3RetentionDays?: SortOrder
    smtpHost?: SortOrder
    smtpPort?: SortOrder
    smtpUser?: SortOrder
    smtpPass?: SortOrder
    smtpFrom?: SortOrder
    useGlobalSmtp?: SortOrder
    trialEndsAt?: SortOrderInput | SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    plan?: PlanOrderByWithRelationInput
    subscription?: SubscriptionOrderByWithRelationInput
  }

  export type TenantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    customDomain?: string
    dbSchema?: string
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    name?: StringFilter<"Tenant"> | string
    status?: StringFilter<"Tenant"> | string
    logo?: StringFilter<"Tenant"> | string
    favicon?: StringFilter<"Tenant"> | string
    primaryColor?: StringFilter<"Tenant"> | string
    secondaryColor?: StringFilter<"Tenant"> | string
    accentColor?: StringFilter<"Tenant"> | string
    ownerName?: StringFilter<"Tenant"> | string
    ownerEmail?: StringFilter<"Tenant"> | string
    ownerPhone?: StringFilter<"Tenant"> | string
    adminUsername?: StringFilter<"Tenant"> | string
    adminPassword?: StringFilter<"Tenant"> | string
    planId?: StringNullableFilter<"Tenant"> | string | null
    s3Bucket?: StringFilter<"Tenant"> | string
    s3Region?: StringFilter<"Tenant"> | string
    s3AccessKey?: StringFilter<"Tenant"> | string
    s3SecretKey?: StringFilter<"Tenant"> | string
    s3RetentionDays?: IntFilter<"Tenant"> | number
    smtpHost?: StringFilter<"Tenant"> | string
    smtpPort?: IntFilter<"Tenant"> | number
    smtpUser?: StringFilter<"Tenant"> | string
    smtpPass?: StringFilter<"Tenant"> | string
    smtpFrom?: StringFilter<"Tenant"> | string
    useGlobalSmtp?: BoolFilter<"Tenant"> | boolean
    trialEndsAt?: DateTimeNullableFilter<"Tenant"> | Date | string | null
    metadata?: JsonFilter<"Tenant">
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    plan?: XOR<PlanNullableRelationFilter, PlanWhereInput> | null
    subscription?: XOR<SubscriptionNullableRelationFilter, SubscriptionWhereInput> | null
  }, "id" | "slug" | "customDomain" | "dbSchema">

  export type TenantOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    customDomain?: SortOrderInput | SortOrder
    status?: SortOrder
    logo?: SortOrder
    favicon?: SortOrder
    primaryColor?: SortOrder
    secondaryColor?: SortOrder
    accentColor?: SortOrder
    ownerName?: SortOrder
    ownerEmail?: SortOrder
    ownerPhone?: SortOrder
    adminUsername?: SortOrder
    adminPassword?: SortOrder
    planId?: SortOrderInput | SortOrder
    dbSchema?: SortOrder
    s3Bucket?: SortOrder
    s3Region?: SortOrder
    s3AccessKey?: SortOrder
    s3SecretKey?: SortOrder
    s3RetentionDays?: SortOrder
    smtpHost?: SortOrder
    smtpPort?: SortOrder
    smtpUser?: SortOrder
    smtpPass?: SortOrder
    smtpFrom?: SortOrder
    useGlobalSmtp?: SortOrder
    trialEndsAt?: SortOrderInput | SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TenantCountOrderByAggregateInput
    _avg?: TenantAvgOrderByAggregateInput
    _max?: TenantMaxOrderByAggregateInput
    _min?: TenantMinOrderByAggregateInput
    _sum?: TenantSumOrderByAggregateInput
  }

  export type TenantScalarWhereWithAggregatesInput = {
    AND?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    OR?: TenantScalarWhereWithAggregatesInput[]
    NOT?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tenant"> | string
    slug?: StringWithAggregatesFilter<"Tenant"> | string
    name?: StringWithAggregatesFilter<"Tenant"> | string
    customDomain?: StringNullableWithAggregatesFilter<"Tenant"> | string | null
    status?: StringWithAggregatesFilter<"Tenant"> | string
    logo?: StringWithAggregatesFilter<"Tenant"> | string
    favicon?: StringWithAggregatesFilter<"Tenant"> | string
    primaryColor?: StringWithAggregatesFilter<"Tenant"> | string
    secondaryColor?: StringWithAggregatesFilter<"Tenant"> | string
    accentColor?: StringWithAggregatesFilter<"Tenant"> | string
    ownerName?: StringWithAggregatesFilter<"Tenant"> | string
    ownerEmail?: StringWithAggregatesFilter<"Tenant"> | string
    ownerPhone?: StringWithAggregatesFilter<"Tenant"> | string
    adminUsername?: StringWithAggregatesFilter<"Tenant"> | string
    adminPassword?: StringWithAggregatesFilter<"Tenant"> | string
    planId?: StringNullableWithAggregatesFilter<"Tenant"> | string | null
    dbSchema?: StringWithAggregatesFilter<"Tenant"> | string
    s3Bucket?: StringWithAggregatesFilter<"Tenant"> | string
    s3Region?: StringWithAggregatesFilter<"Tenant"> | string
    s3AccessKey?: StringWithAggregatesFilter<"Tenant"> | string
    s3SecretKey?: StringWithAggregatesFilter<"Tenant"> | string
    s3RetentionDays?: IntWithAggregatesFilter<"Tenant"> | number
    smtpHost?: StringWithAggregatesFilter<"Tenant"> | string
    smtpPort?: IntWithAggregatesFilter<"Tenant"> | number
    smtpUser?: StringWithAggregatesFilter<"Tenant"> | string
    smtpPass?: StringWithAggregatesFilter<"Tenant"> | string
    smtpFrom?: StringWithAggregatesFilter<"Tenant"> | string
    useGlobalSmtp?: BoolWithAggregatesFilter<"Tenant"> | boolean
    trialEndsAt?: DateTimeNullableWithAggregatesFilter<"Tenant"> | Date | string | null
    metadata?: JsonWithAggregatesFilter<"Tenant">
    createdAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
  }

  export type PlanWhereInput = {
    AND?: PlanWhereInput | PlanWhereInput[]
    OR?: PlanWhereInput[]
    NOT?: PlanWhereInput | PlanWhereInput[]
    id?: StringFilter<"Plan"> | string
    name?: StringFilter<"Plan"> | string
    slug?: StringFilter<"Plan"> | string
    description?: StringFilter<"Plan"> | string
    priceMonthly?: FloatFilter<"Plan"> | number
    priceYearly?: FloatFilter<"Plan"> | number
    currency?: StringFilter<"Plan"> | string
    maxUsers?: IntFilter<"Plan"> | number
    maxChannels?: IntFilter<"Plan"> | number
    maxContacts?: IntFilter<"Plan"> | number
    maxMessagesMonth?: IntFilter<"Plan"> | number
    maxCampaigns?: IntFilter<"Plan"> | number
    maxFlows?: IntFilter<"Plan"> | number
    maxAiAgents?: IntFilter<"Plan"> | number
    hasWhatsappQr?: BoolFilter<"Plan"> | boolean
    hasWhatsappApi?: BoolFilter<"Plan"> | boolean
    hasInstagram?: BoolFilter<"Plan"> | boolean
    hasMessenger?: BoolFilter<"Plan"> | boolean
    hasTelegram?: BoolFilter<"Plan"> | boolean
    hasEmail?: BoolFilter<"Plan"> | boolean
    hasPhone?: BoolFilter<"Plan"> | boolean
    hasChatbot?: BoolFilter<"Plan"> | boolean
    hasAiAgents?: BoolFilter<"Plan"> | boolean
    hasCampaigns?: BoolFilter<"Plan"> | boolean
    hasApi?: BoolFilter<"Plan"> | boolean
    hasWebhooks?: BoolFilter<"Plan"> | boolean
    hasWhiteLabel?: BoolFilter<"Plan"> | boolean
    isActive?: BoolFilter<"Plan"> | boolean
    sortOrder?: IntFilter<"Plan"> | number
    createdAt?: DateTimeFilter<"Plan"> | Date | string
    updatedAt?: DateTimeFilter<"Plan"> | Date | string
    tenants?: TenantListRelationFilter
    subscriptions?: SubscriptionListRelationFilter
  }

  export type PlanOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    priceMonthly?: SortOrder
    priceYearly?: SortOrder
    currency?: SortOrder
    maxUsers?: SortOrder
    maxChannels?: SortOrder
    maxContacts?: SortOrder
    maxMessagesMonth?: SortOrder
    maxCampaigns?: SortOrder
    maxFlows?: SortOrder
    maxAiAgents?: SortOrder
    hasWhatsappQr?: SortOrder
    hasWhatsappApi?: SortOrder
    hasInstagram?: SortOrder
    hasMessenger?: SortOrder
    hasTelegram?: SortOrder
    hasEmail?: SortOrder
    hasPhone?: SortOrder
    hasChatbot?: SortOrder
    hasAiAgents?: SortOrder
    hasCampaigns?: SortOrder
    hasApi?: SortOrder
    hasWebhooks?: SortOrder
    hasWhiteLabel?: SortOrder
    isActive?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenants?: TenantOrderByRelationAggregateInput
    subscriptions?: SubscriptionOrderByRelationAggregateInput
  }

  export type PlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: PlanWhereInput | PlanWhereInput[]
    OR?: PlanWhereInput[]
    NOT?: PlanWhereInput | PlanWhereInput[]
    name?: StringFilter<"Plan"> | string
    description?: StringFilter<"Plan"> | string
    priceMonthly?: FloatFilter<"Plan"> | number
    priceYearly?: FloatFilter<"Plan"> | number
    currency?: StringFilter<"Plan"> | string
    maxUsers?: IntFilter<"Plan"> | number
    maxChannels?: IntFilter<"Plan"> | number
    maxContacts?: IntFilter<"Plan"> | number
    maxMessagesMonth?: IntFilter<"Plan"> | number
    maxCampaigns?: IntFilter<"Plan"> | number
    maxFlows?: IntFilter<"Plan"> | number
    maxAiAgents?: IntFilter<"Plan"> | number
    hasWhatsappQr?: BoolFilter<"Plan"> | boolean
    hasWhatsappApi?: BoolFilter<"Plan"> | boolean
    hasInstagram?: BoolFilter<"Plan"> | boolean
    hasMessenger?: BoolFilter<"Plan"> | boolean
    hasTelegram?: BoolFilter<"Plan"> | boolean
    hasEmail?: BoolFilter<"Plan"> | boolean
    hasPhone?: BoolFilter<"Plan"> | boolean
    hasChatbot?: BoolFilter<"Plan"> | boolean
    hasAiAgents?: BoolFilter<"Plan"> | boolean
    hasCampaigns?: BoolFilter<"Plan"> | boolean
    hasApi?: BoolFilter<"Plan"> | boolean
    hasWebhooks?: BoolFilter<"Plan"> | boolean
    hasWhiteLabel?: BoolFilter<"Plan"> | boolean
    isActive?: BoolFilter<"Plan"> | boolean
    sortOrder?: IntFilter<"Plan"> | number
    createdAt?: DateTimeFilter<"Plan"> | Date | string
    updatedAt?: DateTimeFilter<"Plan"> | Date | string
    tenants?: TenantListRelationFilter
    subscriptions?: SubscriptionListRelationFilter
  }, "id" | "slug">

  export type PlanOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    priceMonthly?: SortOrder
    priceYearly?: SortOrder
    currency?: SortOrder
    maxUsers?: SortOrder
    maxChannels?: SortOrder
    maxContacts?: SortOrder
    maxMessagesMonth?: SortOrder
    maxCampaigns?: SortOrder
    maxFlows?: SortOrder
    maxAiAgents?: SortOrder
    hasWhatsappQr?: SortOrder
    hasWhatsappApi?: SortOrder
    hasInstagram?: SortOrder
    hasMessenger?: SortOrder
    hasTelegram?: SortOrder
    hasEmail?: SortOrder
    hasPhone?: SortOrder
    hasChatbot?: SortOrder
    hasAiAgents?: SortOrder
    hasCampaigns?: SortOrder
    hasApi?: SortOrder
    hasWebhooks?: SortOrder
    hasWhiteLabel?: SortOrder
    isActive?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlanCountOrderByAggregateInput
    _avg?: PlanAvgOrderByAggregateInput
    _max?: PlanMaxOrderByAggregateInput
    _min?: PlanMinOrderByAggregateInput
    _sum?: PlanSumOrderByAggregateInput
  }

  export type PlanScalarWhereWithAggregatesInput = {
    AND?: PlanScalarWhereWithAggregatesInput | PlanScalarWhereWithAggregatesInput[]
    OR?: PlanScalarWhereWithAggregatesInput[]
    NOT?: PlanScalarWhereWithAggregatesInput | PlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Plan"> | string
    name?: StringWithAggregatesFilter<"Plan"> | string
    slug?: StringWithAggregatesFilter<"Plan"> | string
    description?: StringWithAggregatesFilter<"Plan"> | string
    priceMonthly?: FloatWithAggregatesFilter<"Plan"> | number
    priceYearly?: FloatWithAggregatesFilter<"Plan"> | number
    currency?: StringWithAggregatesFilter<"Plan"> | string
    maxUsers?: IntWithAggregatesFilter<"Plan"> | number
    maxChannels?: IntWithAggregatesFilter<"Plan"> | number
    maxContacts?: IntWithAggregatesFilter<"Plan"> | number
    maxMessagesMonth?: IntWithAggregatesFilter<"Plan"> | number
    maxCampaigns?: IntWithAggregatesFilter<"Plan"> | number
    maxFlows?: IntWithAggregatesFilter<"Plan"> | number
    maxAiAgents?: IntWithAggregatesFilter<"Plan"> | number
    hasWhatsappQr?: BoolWithAggregatesFilter<"Plan"> | boolean
    hasWhatsappApi?: BoolWithAggregatesFilter<"Plan"> | boolean
    hasInstagram?: BoolWithAggregatesFilter<"Plan"> | boolean
    hasMessenger?: BoolWithAggregatesFilter<"Plan"> | boolean
    hasTelegram?: BoolWithAggregatesFilter<"Plan"> | boolean
    hasEmail?: BoolWithAggregatesFilter<"Plan"> | boolean
    hasPhone?: BoolWithAggregatesFilter<"Plan"> | boolean
    hasChatbot?: BoolWithAggregatesFilter<"Plan"> | boolean
    hasAiAgents?: BoolWithAggregatesFilter<"Plan"> | boolean
    hasCampaigns?: BoolWithAggregatesFilter<"Plan"> | boolean
    hasApi?: BoolWithAggregatesFilter<"Plan"> | boolean
    hasWebhooks?: BoolWithAggregatesFilter<"Plan"> | boolean
    hasWhiteLabel?: BoolWithAggregatesFilter<"Plan"> | boolean
    isActive?: BoolWithAggregatesFilter<"Plan"> | boolean
    sortOrder?: IntWithAggregatesFilter<"Plan"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Plan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Plan"> | Date | string
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: StringFilter<"Subscription"> | string
    tenantId?: StringFilter<"Subscription"> | string
    planId?: StringFilter<"Subscription"> | string
    status?: StringFilter<"Subscription"> | string
    billingCycle?: StringFilter<"Subscription"> | string
    gatewayProvider?: StringFilter<"Subscription"> | string
    gatewayCustomerId?: StringFilter<"Subscription"> | string
    gatewaySubscriptionId?: StringFilter<"Subscription"> | string
    currentPeriodStart?: DateTimeFilter<"Subscription"> | Date | string
    currentPeriodEnd?: DateTimeFilter<"Subscription"> | Date | string
    cancelledAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
    plan?: XOR<PlanRelationFilter, PlanWhereInput>
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    planId?: SortOrder
    status?: SortOrder
    billingCycle?: SortOrder
    gatewayProvider?: SortOrder
    gatewayCustomerId?: SortOrder
    gatewaySubscriptionId?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    cancelledAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    plan?: PlanOrderByWithRelationInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tenantId?: string
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    planId?: StringFilter<"Subscription"> | string
    status?: StringFilter<"Subscription"> | string
    billingCycle?: StringFilter<"Subscription"> | string
    gatewayProvider?: StringFilter<"Subscription"> | string
    gatewayCustomerId?: StringFilter<"Subscription"> | string
    gatewaySubscriptionId?: StringFilter<"Subscription"> | string
    currentPeriodStart?: DateTimeFilter<"Subscription"> | Date | string
    currentPeriodEnd?: DateTimeFilter<"Subscription"> | Date | string
    cancelledAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
    plan?: XOR<PlanRelationFilter, PlanWhereInput>
  }, "id" | "tenantId">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    planId?: SortOrder
    status?: SortOrder
    billingCycle?: SortOrder
    gatewayProvider?: SortOrder
    gatewayCustomerId?: SortOrder
    gatewaySubscriptionId?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    cancelledAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subscription"> | string
    tenantId?: StringWithAggregatesFilter<"Subscription"> | string
    planId?: StringWithAggregatesFilter<"Subscription"> | string
    status?: StringWithAggregatesFilter<"Subscription"> | string
    billingCycle?: StringWithAggregatesFilter<"Subscription"> | string
    gatewayProvider?: StringWithAggregatesFilter<"Subscription"> | string
    gatewayCustomerId?: StringWithAggregatesFilter<"Subscription"> | string
    gatewaySubscriptionId?: StringWithAggregatesFilter<"Subscription"> | string
    currentPeriodStart?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    currentPeriodEnd?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    cancelledAt?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    tenantId?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    currency?: StringFilter<"Payment"> | string
    status?: StringFilter<"Payment"> | string
    gatewayId?: StringFilter<"Payment"> | string
    gatewayProvider?: StringFilter<"Payment"> | string
    description?: StringFilter<"Payment"> | string
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    gatewayId?: SortOrder
    gatewayProvider?: SortOrder
    description?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    tenantId?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    currency?: StringFilter<"Payment"> | string
    status?: StringFilter<"Payment"> | string
    gatewayId?: StringFilter<"Payment"> | string
    gatewayProvider?: StringFilter<"Payment"> | string
    description?: StringFilter<"Payment"> | string
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    gatewayId?: SortOrder
    gatewayProvider?: SortOrder
    description?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    tenantId?: StringWithAggregatesFilter<"Payment"> | string
    amount?: FloatWithAggregatesFilter<"Payment"> | number
    currency?: StringWithAggregatesFilter<"Payment"> | string
    status?: StringWithAggregatesFilter<"Payment"> | string
    gatewayId?: StringWithAggregatesFilter<"Payment"> | string
    gatewayProvider?: StringWithAggregatesFilter<"Payment"> | string
    description?: StringWithAggregatesFilter<"Payment"> | string
    paidAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type BillingConfigWhereInput = {
    AND?: BillingConfigWhereInput | BillingConfigWhereInput[]
    OR?: BillingConfigWhereInput[]
    NOT?: BillingConfigWhereInput | BillingConfigWhereInput[]
    id?: StringFilter<"BillingConfig"> | string
    tenantId?: StringFilter<"BillingConfig"> | string
    monthlyPrice?: FloatFilter<"BillingConfig"> | number
    warningDays?: IntFilter<"BillingConfig"> | number
    blockAfterDays?: IntFilter<"BillingConfig"> | number
    warningMessage?: StringFilter<"BillingConfig"> | string
    blockMessage?: StringFilter<"BillingConfig"> | string
    paymentLink?: StringFilter<"BillingConfig"> | string
    createdAt?: DateTimeFilter<"BillingConfig"> | Date | string
    updatedAt?: DateTimeFilter<"BillingConfig"> | Date | string
  }

  export type BillingConfigOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    monthlyPrice?: SortOrder
    warningDays?: SortOrder
    blockAfterDays?: SortOrder
    warningMessage?: SortOrder
    blockMessage?: SortOrder
    paymentLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BillingConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tenantId?: string
    AND?: BillingConfigWhereInput | BillingConfigWhereInput[]
    OR?: BillingConfigWhereInput[]
    NOT?: BillingConfigWhereInput | BillingConfigWhereInput[]
    monthlyPrice?: FloatFilter<"BillingConfig"> | number
    warningDays?: IntFilter<"BillingConfig"> | number
    blockAfterDays?: IntFilter<"BillingConfig"> | number
    warningMessage?: StringFilter<"BillingConfig"> | string
    blockMessage?: StringFilter<"BillingConfig"> | string
    paymentLink?: StringFilter<"BillingConfig"> | string
    createdAt?: DateTimeFilter<"BillingConfig"> | Date | string
    updatedAt?: DateTimeFilter<"BillingConfig"> | Date | string
  }, "id" | "tenantId">

  export type BillingConfigOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    monthlyPrice?: SortOrder
    warningDays?: SortOrder
    blockAfterDays?: SortOrder
    warningMessage?: SortOrder
    blockMessage?: SortOrder
    paymentLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BillingConfigCountOrderByAggregateInput
    _avg?: BillingConfigAvgOrderByAggregateInput
    _max?: BillingConfigMaxOrderByAggregateInput
    _min?: BillingConfigMinOrderByAggregateInput
    _sum?: BillingConfigSumOrderByAggregateInput
  }

  export type BillingConfigScalarWhereWithAggregatesInput = {
    AND?: BillingConfigScalarWhereWithAggregatesInput | BillingConfigScalarWhereWithAggregatesInput[]
    OR?: BillingConfigScalarWhereWithAggregatesInput[]
    NOT?: BillingConfigScalarWhereWithAggregatesInput | BillingConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BillingConfig"> | string
    tenantId?: StringWithAggregatesFilter<"BillingConfig"> | string
    monthlyPrice?: FloatWithAggregatesFilter<"BillingConfig"> | number
    warningDays?: IntWithAggregatesFilter<"BillingConfig"> | number
    blockAfterDays?: IntWithAggregatesFilter<"BillingConfig"> | number
    warningMessage?: StringWithAggregatesFilter<"BillingConfig"> | string
    blockMessage?: StringWithAggregatesFilter<"BillingConfig"> | string
    paymentLink?: StringWithAggregatesFilter<"BillingConfig"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BillingConfig"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BillingConfig"> | Date | string
  }

  export type LicenseKeyWhereInput = {
    AND?: LicenseKeyWhereInput | LicenseKeyWhereInput[]
    OR?: LicenseKeyWhereInput[]
    NOT?: LicenseKeyWhereInput | LicenseKeyWhereInput[]
    id?: StringFilter<"LicenseKey"> | string
    key?: StringFilter<"LicenseKey"> | string
    name?: StringFilter<"LicenseKey"> | string
    maxInstalls?: IntFilter<"LicenseKey"> | number
    usedInstalls?: IntFilter<"LicenseKey"> | number
    isActive?: BoolFilter<"LicenseKey"> | boolean
    expiresAt?: DateTimeNullableFilter<"LicenseKey"> | Date | string | null
    createdAt?: DateTimeFilter<"LicenseKey"> | Date | string
    updatedAt?: DateTimeFilter<"LicenseKey"> | Date | string
  }

  export type LicenseKeyOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    maxInstalls?: SortOrder
    usedInstalls?: SortOrder
    isActive?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LicenseKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: LicenseKeyWhereInput | LicenseKeyWhereInput[]
    OR?: LicenseKeyWhereInput[]
    NOT?: LicenseKeyWhereInput | LicenseKeyWhereInput[]
    name?: StringFilter<"LicenseKey"> | string
    maxInstalls?: IntFilter<"LicenseKey"> | number
    usedInstalls?: IntFilter<"LicenseKey"> | number
    isActive?: BoolFilter<"LicenseKey"> | boolean
    expiresAt?: DateTimeNullableFilter<"LicenseKey"> | Date | string | null
    createdAt?: DateTimeFilter<"LicenseKey"> | Date | string
    updatedAt?: DateTimeFilter<"LicenseKey"> | Date | string
  }, "id" | "key">

  export type LicenseKeyOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    maxInstalls?: SortOrder
    usedInstalls?: SortOrder
    isActive?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LicenseKeyCountOrderByAggregateInput
    _avg?: LicenseKeyAvgOrderByAggregateInput
    _max?: LicenseKeyMaxOrderByAggregateInput
    _min?: LicenseKeyMinOrderByAggregateInput
    _sum?: LicenseKeySumOrderByAggregateInput
  }

  export type LicenseKeyScalarWhereWithAggregatesInput = {
    AND?: LicenseKeyScalarWhereWithAggregatesInput | LicenseKeyScalarWhereWithAggregatesInput[]
    OR?: LicenseKeyScalarWhereWithAggregatesInput[]
    NOT?: LicenseKeyScalarWhereWithAggregatesInput | LicenseKeyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LicenseKey"> | string
    key?: StringWithAggregatesFilter<"LicenseKey"> | string
    name?: StringWithAggregatesFilter<"LicenseKey"> | string
    maxInstalls?: IntWithAggregatesFilter<"LicenseKey"> | number
    usedInstalls?: IntWithAggregatesFilter<"LicenseKey"> | number
    isActive?: BoolWithAggregatesFilter<"LicenseKey"> | boolean
    expiresAt?: DateTimeNullableWithAggregatesFilter<"LicenseKey"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"LicenseKey"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LicenseKey"> | Date | string
  }

  export type GlobalSettingsWhereInput = {
    AND?: GlobalSettingsWhereInput | GlobalSettingsWhereInput[]
    OR?: GlobalSettingsWhereInput[]
    NOT?: GlobalSettingsWhereInput | GlobalSettingsWhereInput[]
    id?: StringFilter<"GlobalSettings"> | string
    platformName?: StringFilter<"GlobalSettings"> | string
    platformLogo?: StringFilter<"GlobalSettings"> | string
    platformDomain?: StringFilter<"GlobalSettings"> | string
    smtpHost?: StringFilter<"GlobalSettings"> | string
    smtpPort?: IntFilter<"GlobalSettings"> | number
    smtpUser?: StringFilter<"GlobalSettings"> | string
    smtpPass?: StringFilter<"GlobalSettings"> | string
    smtpFrom?: StringFilter<"GlobalSettings"> | string
    billingGateway?: StringFilter<"GlobalSettings"> | string
    billingApiKey?: StringFilter<"GlobalSettings"> | string
    billingWebhookSecret?: StringFilter<"GlobalSettings"> | string
    maintenanceMode?: BoolFilter<"GlobalSettings"> | boolean
    createdAt?: DateTimeFilter<"GlobalSettings"> | Date | string
    updatedAt?: DateTimeFilter<"GlobalSettings"> | Date | string
  }

  export type GlobalSettingsOrderByWithRelationInput = {
    id?: SortOrder
    platformName?: SortOrder
    platformLogo?: SortOrder
    platformDomain?: SortOrder
    smtpHost?: SortOrder
    smtpPort?: SortOrder
    smtpUser?: SortOrder
    smtpPass?: SortOrder
    smtpFrom?: SortOrder
    billingGateway?: SortOrder
    billingApiKey?: SortOrder
    billingWebhookSecret?: SortOrder
    maintenanceMode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GlobalSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GlobalSettingsWhereInput | GlobalSettingsWhereInput[]
    OR?: GlobalSettingsWhereInput[]
    NOT?: GlobalSettingsWhereInput | GlobalSettingsWhereInput[]
    platformName?: StringFilter<"GlobalSettings"> | string
    platformLogo?: StringFilter<"GlobalSettings"> | string
    platformDomain?: StringFilter<"GlobalSettings"> | string
    smtpHost?: StringFilter<"GlobalSettings"> | string
    smtpPort?: IntFilter<"GlobalSettings"> | number
    smtpUser?: StringFilter<"GlobalSettings"> | string
    smtpPass?: StringFilter<"GlobalSettings"> | string
    smtpFrom?: StringFilter<"GlobalSettings"> | string
    billingGateway?: StringFilter<"GlobalSettings"> | string
    billingApiKey?: StringFilter<"GlobalSettings"> | string
    billingWebhookSecret?: StringFilter<"GlobalSettings"> | string
    maintenanceMode?: BoolFilter<"GlobalSettings"> | boolean
    createdAt?: DateTimeFilter<"GlobalSettings"> | Date | string
    updatedAt?: DateTimeFilter<"GlobalSettings"> | Date | string
  }, "id">

  export type GlobalSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    platformName?: SortOrder
    platformLogo?: SortOrder
    platformDomain?: SortOrder
    smtpHost?: SortOrder
    smtpPort?: SortOrder
    smtpUser?: SortOrder
    smtpPass?: SortOrder
    smtpFrom?: SortOrder
    billingGateway?: SortOrder
    billingApiKey?: SortOrder
    billingWebhookSecret?: SortOrder
    maintenanceMode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GlobalSettingsCountOrderByAggregateInput
    _avg?: GlobalSettingsAvgOrderByAggregateInput
    _max?: GlobalSettingsMaxOrderByAggregateInput
    _min?: GlobalSettingsMinOrderByAggregateInput
    _sum?: GlobalSettingsSumOrderByAggregateInput
  }

  export type GlobalSettingsScalarWhereWithAggregatesInput = {
    AND?: GlobalSettingsScalarWhereWithAggregatesInput | GlobalSettingsScalarWhereWithAggregatesInput[]
    OR?: GlobalSettingsScalarWhereWithAggregatesInput[]
    NOT?: GlobalSettingsScalarWhereWithAggregatesInput | GlobalSettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GlobalSettings"> | string
    platformName?: StringWithAggregatesFilter<"GlobalSettings"> | string
    platformLogo?: StringWithAggregatesFilter<"GlobalSettings"> | string
    platformDomain?: StringWithAggregatesFilter<"GlobalSettings"> | string
    smtpHost?: StringWithAggregatesFilter<"GlobalSettings"> | string
    smtpPort?: IntWithAggregatesFilter<"GlobalSettings"> | number
    smtpUser?: StringWithAggregatesFilter<"GlobalSettings"> | string
    smtpPass?: StringWithAggregatesFilter<"GlobalSettings"> | string
    smtpFrom?: StringWithAggregatesFilter<"GlobalSettings"> | string
    billingGateway?: StringWithAggregatesFilter<"GlobalSettings"> | string
    billingApiKey?: StringWithAggregatesFilter<"GlobalSettings"> | string
    billingWebhookSecret?: StringWithAggregatesFilter<"GlobalSettings"> | string
    maintenanceMode?: BoolWithAggregatesFilter<"GlobalSettings"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"GlobalSettings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GlobalSettings"> | Date | string
  }

  export type SuperAdminCreateInput = {
    id?: string
    username: string
    password: string
    name?: string
    email?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SuperAdminUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    name?: string
    email?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SuperAdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuperAdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuperAdminCreateManyInput = {
    id?: string
    username: string
    password: string
    name?: string
    email?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SuperAdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuperAdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantCreateInput = {
    id?: string
    slug: string
    name: string
    customDomain?: string | null
    status?: string
    logo?: string
    favicon?: string
    primaryColor?: string
    secondaryColor?: string
    accentColor?: string
    ownerName?: string
    ownerEmail?: string
    ownerPhone?: string
    adminUsername?: string
    adminPassword?: string
    dbSchema: string
    s3Bucket?: string
    s3Region?: string
    s3AccessKey?: string
    s3SecretKey?: string
    s3RetentionDays?: number
    smtpHost?: string
    smtpPort?: number
    smtpUser?: string
    smtpPass?: string
    smtpFrom?: string
    useGlobalSmtp?: boolean
    trialEndsAt?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: PlanCreateNestedOneWithoutTenantsInput
    subscription?: SubscriptionCreateNestedOneWithoutTenantInput
  }

  export type TenantUncheckedCreateInput = {
    id?: string
    slug: string
    name: string
    customDomain?: string | null
    status?: string
    logo?: string
    favicon?: string
    primaryColor?: string
    secondaryColor?: string
    accentColor?: string
    ownerName?: string
    ownerEmail?: string
    ownerPhone?: string
    adminUsername?: string
    adminPassword?: string
    planId?: string | null
    dbSchema: string
    s3Bucket?: string
    s3Region?: string
    s3AccessKey?: string
    s3SecretKey?: string
    s3RetentionDays?: number
    smtpHost?: string
    smtpPort?: number
    smtpUser?: string
    smtpPass?: string
    smtpFrom?: string
    useGlobalSmtp?: boolean
    trialEndsAt?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutTenantInput
  }

  export type TenantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    customDomain?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    favicon?: StringFieldUpdateOperationsInput | string
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    accentColor?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerEmail?: StringFieldUpdateOperationsInput | string
    ownerPhone?: StringFieldUpdateOperationsInput | string
    adminUsername?: StringFieldUpdateOperationsInput | string
    adminPassword?: StringFieldUpdateOperationsInput | string
    dbSchema?: StringFieldUpdateOperationsInput | string
    s3Bucket?: StringFieldUpdateOperationsInput | string
    s3Region?: StringFieldUpdateOperationsInput | string
    s3AccessKey?: StringFieldUpdateOperationsInput | string
    s3SecretKey?: StringFieldUpdateOperationsInput | string
    s3RetentionDays?: IntFieldUpdateOperationsInput | number
    smtpHost?: StringFieldUpdateOperationsInput | string
    smtpPort?: IntFieldUpdateOperationsInput | number
    smtpUser?: StringFieldUpdateOperationsInput | string
    smtpPass?: StringFieldUpdateOperationsInput | string
    smtpFrom?: StringFieldUpdateOperationsInput | string
    useGlobalSmtp?: BoolFieldUpdateOperationsInput | boolean
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: PlanUpdateOneWithoutTenantsNestedInput
    subscription?: SubscriptionUpdateOneWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    customDomain?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    favicon?: StringFieldUpdateOperationsInput | string
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    accentColor?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerEmail?: StringFieldUpdateOperationsInput | string
    ownerPhone?: StringFieldUpdateOperationsInput | string
    adminUsername?: StringFieldUpdateOperationsInput | string
    adminPassword?: StringFieldUpdateOperationsInput | string
    planId?: NullableStringFieldUpdateOperationsInput | string | null
    dbSchema?: StringFieldUpdateOperationsInput | string
    s3Bucket?: StringFieldUpdateOperationsInput | string
    s3Region?: StringFieldUpdateOperationsInput | string
    s3AccessKey?: StringFieldUpdateOperationsInput | string
    s3SecretKey?: StringFieldUpdateOperationsInput | string
    s3RetentionDays?: IntFieldUpdateOperationsInput | number
    smtpHost?: StringFieldUpdateOperationsInput | string
    smtpPort?: IntFieldUpdateOperationsInput | number
    smtpUser?: StringFieldUpdateOperationsInput | string
    smtpPass?: StringFieldUpdateOperationsInput | string
    smtpFrom?: StringFieldUpdateOperationsInput | string
    useGlobalSmtp?: BoolFieldUpdateOperationsInput | boolean
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUncheckedUpdateOneWithoutTenantNestedInput
  }

  export type TenantCreateManyInput = {
    id?: string
    slug: string
    name: string
    customDomain?: string | null
    status?: string
    logo?: string
    favicon?: string
    primaryColor?: string
    secondaryColor?: string
    accentColor?: string
    ownerName?: string
    ownerEmail?: string
    ownerPhone?: string
    adminUsername?: string
    adminPassword?: string
    planId?: string | null
    dbSchema: string
    s3Bucket?: string
    s3Region?: string
    s3AccessKey?: string
    s3SecretKey?: string
    s3RetentionDays?: number
    smtpHost?: string
    smtpPort?: number
    smtpUser?: string
    smtpPass?: string
    smtpFrom?: string
    useGlobalSmtp?: boolean
    trialEndsAt?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    customDomain?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    favicon?: StringFieldUpdateOperationsInput | string
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    accentColor?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerEmail?: StringFieldUpdateOperationsInput | string
    ownerPhone?: StringFieldUpdateOperationsInput | string
    adminUsername?: StringFieldUpdateOperationsInput | string
    adminPassword?: StringFieldUpdateOperationsInput | string
    dbSchema?: StringFieldUpdateOperationsInput | string
    s3Bucket?: StringFieldUpdateOperationsInput | string
    s3Region?: StringFieldUpdateOperationsInput | string
    s3AccessKey?: StringFieldUpdateOperationsInput | string
    s3SecretKey?: StringFieldUpdateOperationsInput | string
    s3RetentionDays?: IntFieldUpdateOperationsInput | number
    smtpHost?: StringFieldUpdateOperationsInput | string
    smtpPort?: IntFieldUpdateOperationsInput | number
    smtpUser?: StringFieldUpdateOperationsInput | string
    smtpPass?: StringFieldUpdateOperationsInput | string
    smtpFrom?: StringFieldUpdateOperationsInput | string
    useGlobalSmtp?: BoolFieldUpdateOperationsInput | boolean
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    customDomain?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    favicon?: StringFieldUpdateOperationsInput | string
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    accentColor?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerEmail?: StringFieldUpdateOperationsInput | string
    ownerPhone?: StringFieldUpdateOperationsInput | string
    adminUsername?: StringFieldUpdateOperationsInput | string
    adminPassword?: StringFieldUpdateOperationsInput | string
    planId?: NullableStringFieldUpdateOperationsInput | string | null
    dbSchema?: StringFieldUpdateOperationsInput | string
    s3Bucket?: StringFieldUpdateOperationsInput | string
    s3Region?: StringFieldUpdateOperationsInput | string
    s3AccessKey?: StringFieldUpdateOperationsInput | string
    s3SecretKey?: StringFieldUpdateOperationsInput | string
    s3RetentionDays?: IntFieldUpdateOperationsInput | number
    smtpHost?: StringFieldUpdateOperationsInput | string
    smtpPort?: IntFieldUpdateOperationsInput | number
    smtpUser?: StringFieldUpdateOperationsInput | string
    smtpPass?: StringFieldUpdateOperationsInput | string
    smtpFrom?: StringFieldUpdateOperationsInput | string
    useGlobalSmtp?: BoolFieldUpdateOperationsInput | boolean
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string
    priceMonthly?: number
    priceYearly?: number
    currency?: string
    maxUsers?: number
    maxChannels?: number
    maxContacts?: number
    maxMessagesMonth?: number
    maxCampaigns?: number
    maxFlows?: number
    maxAiAgents?: number
    hasWhatsappQr?: boolean
    hasWhatsappApi?: boolean
    hasInstagram?: boolean
    hasMessenger?: boolean
    hasTelegram?: boolean
    hasEmail?: boolean
    hasPhone?: boolean
    hasChatbot?: boolean
    hasAiAgents?: boolean
    hasCampaigns?: boolean
    hasApi?: boolean
    hasWebhooks?: boolean
    hasWhiteLabel?: boolean
    isActive?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tenants?: TenantCreateNestedManyWithoutPlanInput
    subscriptions?: SubscriptionCreateNestedManyWithoutPlanInput
  }

  export type PlanUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string
    priceMonthly?: number
    priceYearly?: number
    currency?: string
    maxUsers?: number
    maxChannels?: number
    maxContacts?: number
    maxMessagesMonth?: number
    maxCampaigns?: number
    maxFlows?: number
    maxAiAgents?: number
    hasWhatsappQr?: boolean
    hasWhatsappApi?: boolean
    hasInstagram?: boolean
    hasMessenger?: boolean
    hasTelegram?: boolean
    hasEmail?: boolean
    hasPhone?: boolean
    hasChatbot?: boolean
    hasAiAgents?: boolean
    hasCampaigns?: boolean
    hasApi?: boolean
    hasWebhooks?: boolean
    hasWhiteLabel?: boolean
    isActive?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tenants?: TenantUncheckedCreateNestedManyWithoutPlanInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priceMonthly?: FloatFieldUpdateOperationsInput | number
    priceYearly?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    maxUsers?: IntFieldUpdateOperationsInput | number
    maxChannels?: IntFieldUpdateOperationsInput | number
    maxContacts?: IntFieldUpdateOperationsInput | number
    maxMessagesMonth?: IntFieldUpdateOperationsInput | number
    maxCampaigns?: IntFieldUpdateOperationsInput | number
    maxFlows?: IntFieldUpdateOperationsInput | number
    maxAiAgents?: IntFieldUpdateOperationsInput | number
    hasWhatsappQr?: BoolFieldUpdateOperationsInput | boolean
    hasWhatsappApi?: BoolFieldUpdateOperationsInput | boolean
    hasInstagram?: BoolFieldUpdateOperationsInput | boolean
    hasMessenger?: BoolFieldUpdateOperationsInput | boolean
    hasTelegram?: BoolFieldUpdateOperationsInput | boolean
    hasEmail?: BoolFieldUpdateOperationsInput | boolean
    hasPhone?: BoolFieldUpdateOperationsInput | boolean
    hasChatbot?: BoolFieldUpdateOperationsInput | boolean
    hasAiAgents?: BoolFieldUpdateOperationsInput | boolean
    hasCampaigns?: BoolFieldUpdateOperationsInput | boolean
    hasApi?: BoolFieldUpdateOperationsInput | boolean
    hasWebhooks?: BoolFieldUpdateOperationsInput | boolean
    hasWhiteLabel?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenants?: TenantUpdateManyWithoutPlanNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priceMonthly?: FloatFieldUpdateOperationsInput | number
    priceYearly?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    maxUsers?: IntFieldUpdateOperationsInput | number
    maxChannels?: IntFieldUpdateOperationsInput | number
    maxContacts?: IntFieldUpdateOperationsInput | number
    maxMessagesMonth?: IntFieldUpdateOperationsInput | number
    maxCampaigns?: IntFieldUpdateOperationsInput | number
    maxFlows?: IntFieldUpdateOperationsInput | number
    maxAiAgents?: IntFieldUpdateOperationsInput | number
    hasWhatsappQr?: BoolFieldUpdateOperationsInput | boolean
    hasWhatsappApi?: BoolFieldUpdateOperationsInput | boolean
    hasInstagram?: BoolFieldUpdateOperationsInput | boolean
    hasMessenger?: BoolFieldUpdateOperationsInput | boolean
    hasTelegram?: BoolFieldUpdateOperationsInput | boolean
    hasEmail?: BoolFieldUpdateOperationsInput | boolean
    hasPhone?: BoolFieldUpdateOperationsInput | boolean
    hasChatbot?: BoolFieldUpdateOperationsInput | boolean
    hasAiAgents?: BoolFieldUpdateOperationsInput | boolean
    hasCampaigns?: BoolFieldUpdateOperationsInput | boolean
    hasApi?: BoolFieldUpdateOperationsInput | boolean
    hasWebhooks?: BoolFieldUpdateOperationsInput | boolean
    hasWhiteLabel?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenants?: TenantUncheckedUpdateManyWithoutPlanNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type PlanCreateManyInput = {
    id?: string
    name: string
    slug: string
    description?: string
    priceMonthly?: number
    priceYearly?: number
    currency?: string
    maxUsers?: number
    maxChannels?: number
    maxContacts?: number
    maxMessagesMonth?: number
    maxCampaigns?: number
    maxFlows?: number
    maxAiAgents?: number
    hasWhatsappQr?: boolean
    hasWhatsappApi?: boolean
    hasInstagram?: boolean
    hasMessenger?: boolean
    hasTelegram?: boolean
    hasEmail?: boolean
    hasPhone?: boolean
    hasChatbot?: boolean
    hasAiAgents?: boolean
    hasCampaigns?: boolean
    hasApi?: boolean
    hasWebhooks?: boolean
    hasWhiteLabel?: boolean
    isActive?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priceMonthly?: FloatFieldUpdateOperationsInput | number
    priceYearly?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    maxUsers?: IntFieldUpdateOperationsInput | number
    maxChannels?: IntFieldUpdateOperationsInput | number
    maxContacts?: IntFieldUpdateOperationsInput | number
    maxMessagesMonth?: IntFieldUpdateOperationsInput | number
    maxCampaigns?: IntFieldUpdateOperationsInput | number
    maxFlows?: IntFieldUpdateOperationsInput | number
    maxAiAgents?: IntFieldUpdateOperationsInput | number
    hasWhatsappQr?: BoolFieldUpdateOperationsInput | boolean
    hasWhatsappApi?: BoolFieldUpdateOperationsInput | boolean
    hasInstagram?: BoolFieldUpdateOperationsInput | boolean
    hasMessenger?: BoolFieldUpdateOperationsInput | boolean
    hasTelegram?: BoolFieldUpdateOperationsInput | boolean
    hasEmail?: BoolFieldUpdateOperationsInput | boolean
    hasPhone?: BoolFieldUpdateOperationsInput | boolean
    hasChatbot?: BoolFieldUpdateOperationsInput | boolean
    hasAiAgents?: BoolFieldUpdateOperationsInput | boolean
    hasCampaigns?: BoolFieldUpdateOperationsInput | boolean
    hasApi?: BoolFieldUpdateOperationsInput | boolean
    hasWebhooks?: BoolFieldUpdateOperationsInput | boolean
    hasWhiteLabel?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priceMonthly?: FloatFieldUpdateOperationsInput | number
    priceYearly?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    maxUsers?: IntFieldUpdateOperationsInput | number
    maxChannels?: IntFieldUpdateOperationsInput | number
    maxContacts?: IntFieldUpdateOperationsInput | number
    maxMessagesMonth?: IntFieldUpdateOperationsInput | number
    maxCampaigns?: IntFieldUpdateOperationsInput | number
    maxFlows?: IntFieldUpdateOperationsInput | number
    maxAiAgents?: IntFieldUpdateOperationsInput | number
    hasWhatsappQr?: BoolFieldUpdateOperationsInput | boolean
    hasWhatsappApi?: BoolFieldUpdateOperationsInput | boolean
    hasInstagram?: BoolFieldUpdateOperationsInput | boolean
    hasMessenger?: BoolFieldUpdateOperationsInput | boolean
    hasTelegram?: BoolFieldUpdateOperationsInput | boolean
    hasEmail?: BoolFieldUpdateOperationsInput | boolean
    hasPhone?: BoolFieldUpdateOperationsInput | boolean
    hasChatbot?: BoolFieldUpdateOperationsInput | boolean
    hasAiAgents?: BoolFieldUpdateOperationsInput | boolean
    hasCampaigns?: BoolFieldUpdateOperationsInput | boolean
    hasApi?: BoolFieldUpdateOperationsInput | boolean
    hasWebhooks?: BoolFieldUpdateOperationsInput | boolean
    hasWhiteLabel?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateInput = {
    id?: string
    status?: string
    billingCycle?: string
    gatewayProvider?: string
    gatewayCustomerId?: string
    gatewaySubscriptionId?: string
    currentPeriodStart?: Date | string
    currentPeriodEnd?: Date | string
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutSubscriptionInput
    plan: PlanCreateNestedOneWithoutSubscriptionsInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: string
    tenantId: string
    planId: string
    status?: string
    billingCycle?: string
    gatewayProvider?: string
    gatewayCustomerId?: string
    gatewaySubscriptionId?: string
    currentPeriodStart?: Date | string
    currentPeriodEnd?: Date | string
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    billingCycle?: StringFieldUpdateOperationsInput | string
    gatewayProvider?: StringFieldUpdateOperationsInput | string
    gatewayCustomerId?: StringFieldUpdateOperationsInput | string
    gatewaySubscriptionId?: StringFieldUpdateOperationsInput | string
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutSubscriptionNestedInput
    plan?: PlanUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    billingCycle?: StringFieldUpdateOperationsInput | string
    gatewayProvider?: StringFieldUpdateOperationsInput | string
    gatewayCustomerId?: StringFieldUpdateOperationsInput | string
    gatewaySubscriptionId?: StringFieldUpdateOperationsInput | string
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateManyInput = {
    id?: string
    tenantId: string
    planId: string
    status?: string
    billingCycle?: string
    gatewayProvider?: string
    gatewayCustomerId?: string
    gatewaySubscriptionId?: string
    currentPeriodStart?: Date | string
    currentPeriodEnd?: Date | string
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    billingCycle?: StringFieldUpdateOperationsInput | string
    gatewayProvider?: StringFieldUpdateOperationsInput | string
    gatewayCustomerId?: StringFieldUpdateOperationsInput | string
    gatewaySubscriptionId?: StringFieldUpdateOperationsInput | string
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    billingCycle?: StringFieldUpdateOperationsInput | string
    gatewayProvider?: StringFieldUpdateOperationsInput | string
    gatewayCustomerId?: StringFieldUpdateOperationsInput | string
    gatewaySubscriptionId?: StringFieldUpdateOperationsInput | string
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    tenantId: string
    amount: number
    currency?: string
    status?: string
    gatewayId?: string
    gatewayProvider?: string
    description?: string
    paidAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    tenantId: string
    amount: number
    currency?: string
    status?: string
    gatewayId?: string
    gatewayProvider?: string
    description?: string
    paidAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    gatewayId?: StringFieldUpdateOperationsInput | string
    gatewayProvider?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    gatewayId?: StringFieldUpdateOperationsInput | string
    gatewayProvider?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    tenantId: string
    amount: number
    currency?: string
    status?: string
    gatewayId?: string
    gatewayProvider?: string
    description?: string
    paidAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    gatewayId?: StringFieldUpdateOperationsInput | string
    gatewayProvider?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    gatewayId?: StringFieldUpdateOperationsInput | string
    gatewayProvider?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillingConfigCreateInput = {
    id?: string
    tenantId: string
    monthlyPrice?: number
    warningDays?: number
    blockAfterDays?: number
    warningMessage?: string
    blockMessage?: string
    paymentLink?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BillingConfigUncheckedCreateInput = {
    id?: string
    tenantId: string
    monthlyPrice?: number
    warningDays?: number
    blockAfterDays?: number
    warningMessage?: string
    blockMessage?: string
    paymentLink?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BillingConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    monthlyPrice?: FloatFieldUpdateOperationsInput | number
    warningDays?: IntFieldUpdateOperationsInput | number
    blockAfterDays?: IntFieldUpdateOperationsInput | number
    warningMessage?: StringFieldUpdateOperationsInput | string
    blockMessage?: StringFieldUpdateOperationsInput | string
    paymentLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillingConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    monthlyPrice?: FloatFieldUpdateOperationsInput | number
    warningDays?: IntFieldUpdateOperationsInput | number
    blockAfterDays?: IntFieldUpdateOperationsInput | number
    warningMessage?: StringFieldUpdateOperationsInput | string
    blockMessage?: StringFieldUpdateOperationsInput | string
    paymentLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillingConfigCreateManyInput = {
    id?: string
    tenantId: string
    monthlyPrice?: number
    warningDays?: number
    blockAfterDays?: number
    warningMessage?: string
    blockMessage?: string
    paymentLink?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BillingConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    monthlyPrice?: FloatFieldUpdateOperationsInput | number
    warningDays?: IntFieldUpdateOperationsInput | number
    blockAfterDays?: IntFieldUpdateOperationsInput | number
    warningMessage?: StringFieldUpdateOperationsInput | string
    blockMessage?: StringFieldUpdateOperationsInput | string
    paymentLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillingConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    monthlyPrice?: FloatFieldUpdateOperationsInput | number
    warningDays?: IntFieldUpdateOperationsInput | number
    blockAfterDays?: IntFieldUpdateOperationsInput | number
    warningMessage?: StringFieldUpdateOperationsInput | string
    blockMessage?: StringFieldUpdateOperationsInput | string
    paymentLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseKeyCreateInput = {
    id?: string
    key: string
    name?: string
    maxInstalls?: number
    usedInstalls?: number
    isActive?: boolean
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LicenseKeyUncheckedCreateInput = {
    id?: string
    key: string
    name?: string
    maxInstalls?: number
    usedInstalls?: number
    isActive?: boolean
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LicenseKeyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    maxInstalls?: IntFieldUpdateOperationsInput | number
    usedInstalls?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseKeyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    maxInstalls?: IntFieldUpdateOperationsInput | number
    usedInstalls?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseKeyCreateManyInput = {
    id?: string
    key: string
    name?: string
    maxInstalls?: number
    usedInstalls?: number
    isActive?: boolean
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LicenseKeyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    maxInstalls?: IntFieldUpdateOperationsInput | number
    usedInstalls?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseKeyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    maxInstalls?: IntFieldUpdateOperationsInput | number
    usedInstalls?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlobalSettingsCreateInput = {
    id?: string
    platformName?: string
    platformLogo?: string
    platformDomain?: string
    smtpHost?: string
    smtpPort?: number
    smtpUser?: string
    smtpPass?: string
    smtpFrom?: string
    billingGateway?: string
    billingApiKey?: string
    billingWebhookSecret?: string
    maintenanceMode?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GlobalSettingsUncheckedCreateInput = {
    id?: string
    platformName?: string
    platformLogo?: string
    platformDomain?: string
    smtpHost?: string
    smtpPort?: number
    smtpUser?: string
    smtpPass?: string
    smtpFrom?: string
    billingGateway?: string
    billingApiKey?: string
    billingWebhookSecret?: string
    maintenanceMode?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GlobalSettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    platformName?: StringFieldUpdateOperationsInput | string
    platformLogo?: StringFieldUpdateOperationsInput | string
    platformDomain?: StringFieldUpdateOperationsInput | string
    smtpHost?: StringFieldUpdateOperationsInput | string
    smtpPort?: IntFieldUpdateOperationsInput | number
    smtpUser?: StringFieldUpdateOperationsInput | string
    smtpPass?: StringFieldUpdateOperationsInput | string
    smtpFrom?: StringFieldUpdateOperationsInput | string
    billingGateway?: StringFieldUpdateOperationsInput | string
    billingApiKey?: StringFieldUpdateOperationsInput | string
    billingWebhookSecret?: StringFieldUpdateOperationsInput | string
    maintenanceMode?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlobalSettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    platformName?: StringFieldUpdateOperationsInput | string
    platformLogo?: StringFieldUpdateOperationsInput | string
    platformDomain?: StringFieldUpdateOperationsInput | string
    smtpHost?: StringFieldUpdateOperationsInput | string
    smtpPort?: IntFieldUpdateOperationsInput | number
    smtpUser?: StringFieldUpdateOperationsInput | string
    smtpPass?: StringFieldUpdateOperationsInput | string
    smtpFrom?: StringFieldUpdateOperationsInput | string
    billingGateway?: StringFieldUpdateOperationsInput | string
    billingApiKey?: StringFieldUpdateOperationsInput | string
    billingWebhookSecret?: StringFieldUpdateOperationsInput | string
    maintenanceMode?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlobalSettingsCreateManyInput = {
    id?: string
    platformName?: string
    platformLogo?: string
    platformDomain?: string
    smtpHost?: string
    smtpPort?: number
    smtpUser?: string
    smtpPass?: string
    smtpFrom?: string
    billingGateway?: string
    billingApiKey?: string
    billingWebhookSecret?: string
    maintenanceMode?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GlobalSettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    platformName?: StringFieldUpdateOperationsInput | string
    platformLogo?: StringFieldUpdateOperationsInput | string
    platformDomain?: StringFieldUpdateOperationsInput | string
    smtpHost?: StringFieldUpdateOperationsInput | string
    smtpPort?: IntFieldUpdateOperationsInput | number
    smtpUser?: StringFieldUpdateOperationsInput | string
    smtpPass?: StringFieldUpdateOperationsInput | string
    smtpFrom?: StringFieldUpdateOperationsInput | string
    billingGateway?: StringFieldUpdateOperationsInput | string
    billingApiKey?: StringFieldUpdateOperationsInput | string
    billingWebhookSecret?: StringFieldUpdateOperationsInput | string
    maintenanceMode?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlobalSettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    platformName?: StringFieldUpdateOperationsInput | string
    platformLogo?: StringFieldUpdateOperationsInput | string
    platformDomain?: StringFieldUpdateOperationsInput | string
    smtpHost?: StringFieldUpdateOperationsInput | string
    smtpPort?: IntFieldUpdateOperationsInput | number
    smtpUser?: StringFieldUpdateOperationsInput | string
    smtpPass?: StringFieldUpdateOperationsInput | string
    smtpFrom?: StringFieldUpdateOperationsInput | string
    billingGateway?: StringFieldUpdateOperationsInput | string
    billingApiKey?: StringFieldUpdateOperationsInput | string
    billingWebhookSecret?: StringFieldUpdateOperationsInput | string
    maintenanceMode?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SuperAdminCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SuperAdminMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SuperAdminMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type PlanNullableRelationFilter = {
    is?: PlanWhereInput | null
    isNot?: PlanWhereInput | null
  }

  export type SubscriptionNullableRelationFilter = {
    is?: SubscriptionWhereInput | null
    isNot?: SubscriptionWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TenantCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    customDomain?: SortOrder
    status?: SortOrder
    logo?: SortOrder
    favicon?: SortOrder
    primaryColor?: SortOrder
    secondaryColor?: SortOrder
    accentColor?: SortOrder
    ownerName?: SortOrder
    ownerEmail?: SortOrder
    ownerPhone?: SortOrder
    adminUsername?: SortOrder
    adminPassword?: SortOrder
    planId?: SortOrder
    dbSchema?: SortOrder
    s3Bucket?: SortOrder
    s3Region?: SortOrder
    s3AccessKey?: SortOrder
    s3SecretKey?: SortOrder
    s3RetentionDays?: SortOrder
    smtpHost?: SortOrder
    smtpPort?: SortOrder
    smtpUser?: SortOrder
    smtpPass?: SortOrder
    smtpFrom?: SortOrder
    useGlobalSmtp?: SortOrder
    trialEndsAt?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantAvgOrderByAggregateInput = {
    s3RetentionDays?: SortOrder
    smtpPort?: SortOrder
  }

  export type TenantMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    customDomain?: SortOrder
    status?: SortOrder
    logo?: SortOrder
    favicon?: SortOrder
    primaryColor?: SortOrder
    secondaryColor?: SortOrder
    accentColor?: SortOrder
    ownerName?: SortOrder
    ownerEmail?: SortOrder
    ownerPhone?: SortOrder
    adminUsername?: SortOrder
    adminPassword?: SortOrder
    planId?: SortOrder
    dbSchema?: SortOrder
    s3Bucket?: SortOrder
    s3Region?: SortOrder
    s3AccessKey?: SortOrder
    s3SecretKey?: SortOrder
    s3RetentionDays?: SortOrder
    smtpHost?: SortOrder
    smtpPort?: SortOrder
    smtpUser?: SortOrder
    smtpPass?: SortOrder
    smtpFrom?: SortOrder
    useGlobalSmtp?: SortOrder
    trialEndsAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    customDomain?: SortOrder
    status?: SortOrder
    logo?: SortOrder
    favicon?: SortOrder
    primaryColor?: SortOrder
    secondaryColor?: SortOrder
    accentColor?: SortOrder
    ownerName?: SortOrder
    ownerEmail?: SortOrder
    ownerPhone?: SortOrder
    adminUsername?: SortOrder
    adminPassword?: SortOrder
    planId?: SortOrder
    dbSchema?: SortOrder
    s3Bucket?: SortOrder
    s3Region?: SortOrder
    s3AccessKey?: SortOrder
    s3SecretKey?: SortOrder
    s3RetentionDays?: SortOrder
    smtpHost?: SortOrder
    smtpPort?: SortOrder
    smtpUser?: SortOrder
    smtpPass?: SortOrder
    smtpFrom?: SortOrder
    useGlobalSmtp?: SortOrder
    trialEndsAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantSumOrderByAggregateInput = {
    s3RetentionDays?: SortOrder
    smtpPort?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type TenantListRelationFilter = {
    every?: TenantWhereInput
    some?: TenantWhereInput
    none?: TenantWhereInput
  }

  export type SubscriptionListRelationFilter = {
    every?: SubscriptionWhereInput
    some?: SubscriptionWhereInput
    none?: SubscriptionWhereInput
  }

  export type TenantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlanCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    priceMonthly?: SortOrder
    priceYearly?: SortOrder
    currency?: SortOrder
    maxUsers?: SortOrder
    maxChannels?: SortOrder
    maxContacts?: SortOrder
    maxMessagesMonth?: SortOrder
    maxCampaigns?: SortOrder
    maxFlows?: SortOrder
    maxAiAgents?: SortOrder
    hasWhatsappQr?: SortOrder
    hasWhatsappApi?: SortOrder
    hasInstagram?: SortOrder
    hasMessenger?: SortOrder
    hasTelegram?: SortOrder
    hasEmail?: SortOrder
    hasPhone?: SortOrder
    hasChatbot?: SortOrder
    hasAiAgents?: SortOrder
    hasCampaigns?: SortOrder
    hasApi?: SortOrder
    hasWebhooks?: SortOrder
    hasWhiteLabel?: SortOrder
    isActive?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanAvgOrderByAggregateInput = {
    priceMonthly?: SortOrder
    priceYearly?: SortOrder
    maxUsers?: SortOrder
    maxChannels?: SortOrder
    maxContacts?: SortOrder
    maxMessagesMonth?: SortOrder
    maxCampaigns?: SortOrder
    maxFlows?: SortOrder
    maxAiAgents?: SortOrder
    sortOrder?: SortOrder
  }

  export type PlanMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    priceMonthly?: SortOrder
    priceYearly?: SortOrder
    currency?: SortOrder
    maxUsers?: SortOrder
    maxChannels?: SortOrder
    maxContacts?: SortOrder
    maxMessagesMonth?: SortOrder
    maxCampaigns?: SortOrder
    maxFlows?: SortOrder
    maxAiAgents?: SortOrder
    hasWhatsappQr?: SortOrder
    hasWhatsappApi?: SortOrder
    hasInstagram?: SortOrder
    hasMessenger?: SortOrder
    hasTelegram?: SortOrder
    hasEmail?: SortOrder
    hasPhone?: SortOrder
    hasChatbot?: SortOrder
    hasAiAgents?: SortOrder
    hasCampaigns?: SortOrder
    hasApi?: SortOrder
    hasWebhooks?: SortOrder
    hasWhiteLabel?: SortOrder
    isActive?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    priceMonthly?: SortOrder
    priceYearly?: SortOrder
    currency?: SortOrder
    maxUsers?: SortOrder
    maxChannels?: SortOrder
    maxContacts?: SortOrder
    maxMessagesMonth?: SortOrder
    maxCampaigns?: SortOrder
    maxFlows?: SortOrder
    maxAiAgents?: SortOrder
    hasWhatsappQr?: SortOrder
    hasWhatsappApi?: SortOrder
    hasInstagram?: SortOrder
    hasMessenger?: SortOrder
    hasTelegram?: SortOrder
    hasEmail?: SortOrder
    hasPhone?: SortOrder
    hasChatbot?: SortOrder
    hasAiAgents?: SortOrder
    hasCampaigns?: SortOrder
    hasApi?: SortOrder
    hasWebhooks?: SortOrder
    hasWhiteLabel?: SortOrder
    isActive?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanSumOrderByAggregateInput = {
    priceMonthly?: SortOrder
    priceYearly?: SortOrder
    maxUsers?: SortOrder
    maxChannels?: SortOrder
    maxContacts?: SortOrder
    maxMessagesMonth?: SortOrder
    maxCampaigns?: SortOrder
    maxFlows?: SortOrder
    maxAiAgents?: SortOrder
    sortOrder?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type TenantRelationFilter = {
    is?: TenantWhereInput
    isNot?: TenantWhereInput
  }

  export type PlanRelationFilter = {
    is?: PlanWhereInput
    isNot?: PlanWhereInput
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    planId?: SortOrder
    status?: SortOrder
    billingCycle?: SortOrder
    gatewayProvider?: SortOrder
    gatewayCustomerId?: SortOrder
    gatewaySubscriptionId?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    cancelledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    planId?: SortOrder
    status?: SortOrder
    billingCycle?: SortOrder
    gatewayProvider?: SortOrder
    gatewayCustomerId?: SortOrder
    gatewaySubscriptionId?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    cancelledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    planId?: SortOrder
    status?: SortOrder
    billingCycle?: SortOrder
    gatewayProvider?: SortOrder
    gatewayCustomerId?: SortOrder
    gatewaySubscriptionId?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    cancelledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    gatewayId?: SortOrder
    gatewayProvider?: SortOrder
    description?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    gatewayId?: SortOrder
    gatewayProvider?: SortOrder
    description?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    gatewayId?: SortOrder
    gatewayProvider?: SortOrder
    description?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type BillingConfigCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    monthlyPrice?: SortOrder
    warningDays?: SortOrder
    blockAfterDays?: SortOrder
    warningMessage?: SortOrder
    blockMessage?: SortOrder
    paymentLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BillingConfigAvgOrderByAggregateInput = {
    monthlyPrice?: SortOrder
    warningDays?: SortOrder
    blockAfterDays?: SortOrder
  }

  export type BillingConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    monthlyPrice?: SortOrder
    warningDays?: SortOrder
    blockAfterDays?: SortOrder
    warningMessage?: SortOrder
    blockMessage?: SortOrder
    paymentLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BillingConfigMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    monthlyPrice?: SortOrder
    warningDays?: SortOrder
    blockAfterDays?: SortOrder
    warningMessage?: SortOrder
    blockMessage?: SortOrder
    paymentLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BillingConfigSumOrderByAggregateInput = {
    monthlyPrice?: SortOrder
    warningDays?: SortOrder
    blockAfterDays?: SortOrder
  }

  export type LicenseKeyCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    maxInstalls?: SortOrder
    usedInstalls?: SortOrder
    isActive?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LicenseKeyAvgOrderByAggregateInput = {
    maxInstalls?: SortOrder
    usedInstalls?: SortOrder
  }

  export type LicenseKeyMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    maxInstalls?: SortOrder
    usedInstalls?: SortOrder
    isActive?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LicenseKeyMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    maxInstalls?: SortOrder
    usedInstalls?: SortOrder
    isActive?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LicenseKeySumOrderByAggregateInput = {
    maxInstalls?: SortOrder
    usedInstalls?: SortOrder
  }

  export type GlobalSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    platformName?: SortOrder
    platformLogo?: SortOrder
    platformDomain?: SortOrder
    smtpHost?: SortOrder
    smtpPort?: SortOrder
    smtpUser?: SortOrder
    smtpPass?: SortOrder
    smtpFrom?: SortOrder
    billingGateway?: SortOrder
    billingApiKey?: SortOrder
    billingWebhookSecret?: SortOrder
    maintenanceMode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GlobalSettingsAvgOrderByAggregateInput = {
    smtpPort?: SortOrder
  }

  export type GlobalSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    platformName?: SortOrder
    platformLogo?: SortOrder
    platformDomain?: SortOrder
    smtpHost?: SortOrder
    smtpPort?: SortOrder
    smtpUser?: SortOrder
    smtpPass?: SortOrder
    smtpFrom?: SortOrder
    billingGateway?: SortOrder
    billingApiKey?: SortOrder
    billingWebhookSecret?: SortOrder
    maintenanceMode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GlobalSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    platformName?: SortOrder
    platformLogo?: SortOrder
    platformDomain?: SortOrder
    smtpHost?: SortOrder
    smtpPort?: SortOrder
    smtpUser?: SortOrder
    smtpPass?: SortOrder
    smtpFrom?: SortOrder
    billingGateway?: SortOrder
    billingApiKey?: SortOrder
    billingWebhookSecret?: SortOrder
    maintenanceMode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GlobalSettingsSumOrderByAggregateInput = {
    smtpPort?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PlanCreateNestedOneWithoutTenantsInput = {
    create?: XOR<PlanCreateWithoutTenantsInput, PlanUncheckedCreateWithoutTenantsInput>
    connectOrCreate?: PlanCreateOrConnectWithoutTenantsInput
    connect?: PlanWhereUniqueInput
  }

  export type SubscriptionCreateNestedOneWithoutTenantInput = {
    create?: XOR<SubscriptionCreateWithoutTenantInput, SubscriptionUncheckedCreateWithoutTenantInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutTenantInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type SubscriptionUncheckedCreateNestedOneWithoutTenantInput = {
    create?: XOR<SubscriptionCreateWithoutTenantInput, SubscriptionUncheckedCreateWithoutTenantInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutTenantInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PlanUpdateOneWithoutTenantsNestedInput = {
    create?: XOR<PlanCreateWithoutTenantsInput, PlanUncheckedCreateWithoutTenantsInput>
    connectOrCreate?: PlanCreateOrConnectWithoutTenantsInput
    upsert?: PlanUpsertWithoutTenantsInput
    disconnect?: PlanWhereInput | boolean
    delete?: PlanWhereInput | boolean
    connect?: PlanWhereUniqueInput
    update?: XOR<XOR<PlanUpdateToOneWithWhereWithoutTenantsInput, PlanUpdateWithoutTenantsInput>, PlanUncheckedUpdateWithoutTenantsInput>
  }

  export type SubscriptionUpdateOneWithoutTenantNestedInput = {
    create?: XOR<SubscriptionCreateWithoutTenantInput, SubscriptionUncheckedCreateWithoutTenantInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutTenantInput
    upsert?: SubscriptionUpsertWithoutTenantInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutTenantInput, SubscriptionUpdateWithoutTenantInput>, SubscriptionUncheckedUpdateWithoutTenantInput>
  }

  export type SubscriptionUncheckedUpdateOneWithoutTenantNestedInput = {
    create?: XOR<SubscriptionCreateWithoutTenantInput, SubscriptionUncheckedCreateWithoutTenantInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutTenantInput
    upsert?: SubscriptionUpsertWithoutTenantInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutTenantInput, SubscriptionUpdateWithoutTenantInput>, SubscriptionUncheckedUpdateWithoutTenantInput>
  }

  export type TenantCreateNestedManyWithoutPlanInput = {
    create?: XOR<TenantCreateWithoutPlanInput, TenantUncheckedCreateWithoutPlanInput> | TenantCreateWithoutPlanInput[] | TenantUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: TenantCreateOrConnectWithoutPlanInput | TenantCreateOrConnectWithoutPlanInput[]
    createMany?: TenantCreateManyPlanInputEnvelope
    connect?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
  }

  export type SubscriptionCreateNestedManyWithoutPlanInput = {
    create?: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput> | SubscriptionCreateWithoutPlanInput[] | SubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPlanInput | SubscriptionCreateOrConnectWithoutPlanInput[]
    createMany?: SubscriptionCreateManyPlanInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type TenantUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<TenantCreateWithoutPlanInput, TenantUncheckedCreateWithoutPlanInput> | TenantCreateWithoutPlanInput[] | TenantUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: TenantCreateOrConnectWithoutPlanInput | TenantCreateOrConnectWithoutPlanInput[]
    createMany?: TenantCreateManyPlanInputEnvelope
    connect?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput> | SubscriptionCreateWithoutPlanInput[] | SubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPlanInput | SubscriptionCreateOrConnectWithoutPlanInput[]
    createMany?: SubscriptionCreateManyPlanInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TenantUpdateManyWithoutPlanNestedInput = {
    create?: XOR<TenantCreateWithoutPlanInput, TenantUncheckedCreateWithoutPlanInput> | TenantCreateWithoutPlanInput[] | TenantUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: TenantCreateOrConnectWithoutPlanInput | TenantCreateOrConnectWithoutPlanInput[]
    upsert?: TenantUpsertWithWhereUniqueWithoutPlanInput | TenantUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: TenantCreateManyPlanInputEnvelope
    set?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
    disconnect?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
    delete?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
    connect?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
    update?: TenantUpdateWithWhereUniqueWithoutPlanInput | TenantUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: TenantUpdateManyWithWhereWithoutPlanInput | TenantUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: TenantScalarWhereInput | TenantScalarWhereInput[]
  }

  export type SubscriptionUpdateManyWithoutPlanNestedInput = {
    create?: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput> | SubscriptionCreateWithoutPlanInput[] | SubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPlanInput | SubscriptionCreateOrConnectWithoutPlanInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutPlanInput | SubscriptionUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: SubscriptionCreateManyPlanInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutPlanInput | SubscriptionUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutPlanInput | SubscriptionUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type TenantUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<TenantCreateWithoutPlanInput, TenantUncheckedCreateWithoutPlanInput> | TenantCreateWithoutPlanInput[] | TenantUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: TenantCreateOrConnectWithoutPlanInput | TenantCreateOrConnectWithoutPlanInput[]
    upsert?: TenantUpsertWithWhereUniqueWithoutPlanInput | TenantUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: TenantCreateManyPlanInputEnvelope
    set?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
    disconnect?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
    delete?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
    connect?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
    update?: TenantUpdateWithWhereUniqueWithoutPlanInput | TenantUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: TenantUpdateManyWithWhereWithoutPlanInput | TenantUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: TenantScalarWhereInput | TenantScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput> | SubscriptionCreateWithoutPlanInput[] | SubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPlanInput | SubscriptionCreateOrConnectWithoutPlanInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutPlanInput | SubscriptionUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: SubscriptionCreateManyPlanInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutPlanInput | SubscriptionUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutPlanInput | SubscriptionUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<TenantCreateWithoutSubscriptionInput, TenantUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: TenantCreateOrConnectWithoutSubscriptionInput
    connect?: TenantWhereUniqueInput
  }

  export type PlanCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<PlanCreateWithoutSubscriptionsInput, PlanUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: PlanCreateOrConnectWithoutSubscriptionsInput
    connect?: PlanWhereUniqueInput
  }

  export type TenantUpdateOneRequiredWithoutSubscriptionNestedInput = {
    create?: XOR<TenantCreateWithoutSubscriptionInput, TenantUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: TenantCreateOrConnectWithoutSubscriptionInput
    upsert?: TenantUpsertWithoutSubscriptionInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutSubscriptionInput, TenantUpdateWithoutSubscriptionInput>, TenantUncheckedUpdateWithoutSubscriptionInput>
  }

  export type PlanUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: XOR<PlanCreateWithoutSubscriptionsInput, PlanUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: PlanCreateOrConnectWithoutSubscriptionsInput
    upsert?: PlanUpsertWithoutSubscriptionsInput
    connect?: PlanWhereUniqueInput
    update?: XOR<XOR<PlanUpdateToOneWithWhereWithoutSubscriptionsInput, PlanUpdateWithoutSubscriptionsInput>, PlanUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type PlanCreateWithoutTenantsInput = {
    id?: string
    name: string
    slug: string
    description?: string
    priceMonthly?: number
    priceYearly?: number
    currency?: string
    maxUsers?: number
    maxChannels?: number
    maxContacts?: number
    maxMessagesMonth?: number
    maxCampaigns?: number
    maxFlows?: number
    maxAiAgents?: number
    hasWhatsappQr?: boolean
    hasWhatsappApi?: boolean
    hasInstagram?: boolean
    hasMessenger?: boolean
    hasTelegram?: boolean
    hasEmail?: boolean
    hasPhone?: boolean
    hasChatbot?: boolean
    hasAiAgents?: boolean
    hasCampaigns?: boolean
    hasApi?: boolean
    hasWebhooks?: boolean
    hasWhiteLabel?: boolean
    isActive?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionCreateNestedManyWithoutPlanInput
  }

  export type PlanUncheckedCreateWithoutTenantsInput = {
    id?: string
    name: string
    slug: string
    description?: string
    priceMonthly?: number
    priceYearly?: number
    currency?: string
    maxUsers?: number
    maxChannels?: number
    maxContacts?: number
    maxMessagesMonth?: number
    maxCampaigns?: number
    maxFlows?: number
    maxAiAgents?: number
    hasWhatsappQr?: boolean
    hasWhatsappApi?: boolean
    hasInstagram?: boolean
    hasMessenger?: boolean
    hasTelegram?: boolean
    hasEmail?: boolean
    hasPhone?: boolean
    hasChatbot?: boolean
    hasAiAgents?: boolean
    hasCampaigns?: boolean
    hasApi?: boolean
    hasWebhooks?: boolean
    hasWhiteLabel?: boolean
    isActive?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanCreateOrConnectWithoutTenantsInput = {
    where: PlanWhereUniqueInput
    create: XOR<PlanCreateWithoutTenantsInput, PlanUncheckedCreateWithoutTenantsInput>
  }

  export type SubscriptionCreateWithoutTenantInput = {
    id?: string
    status?: string
    billingCycle?: string
    gatewayProvider?: string
    gatewayCustomerId?: string
    gatewaySubscriptionId?: string
    currentPeriodStart?: Date | string
    currentPeriodEnd?: Date | string
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    plan: PlanCreateNestedOneWithoutSubscriptionsInput
  }

  export type SubscriptionUncheckedCreateWithoutTenantInput = {
    id?: string
    planId: string
    status?: string
    billingCycle?: string
    gatewayProvider?: string
    gatewayCustomerId?: string
    gatewaySubscriptionId?: string
    currentPeriodStart?: Date | string
    currentPeriodEnd?: Date | string
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionCreateOrConnectWithoutTenantInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutTenantInput, SubscriptionUncheckedCreateWithoutTenantInput>
  }

  export type PlanUpsertWithoutTenantsInput = {
    update: XOR<PlanUpdateWithoutTenantsInput, PlanUncheckedUpdateWithoutTenantsInput>
    create: XOR<PlanCreateWithoutTenantsInput, PlanUncheckedCreateWithoutTenantsInput>
    where?: PlanWhereInput
  }

  export type PlanUpdateToOneWithWhereWithoutTenantsInput = {
    where?: PlanWhereInput
    data: XOR<PlanUpdateWithoutTenantsInput, PlanUncheckedUpdateWithoutTenantsInput>
  }

  export type PlanUpdateWithoutTenantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priceMonthly?: FloatFieldUpdateOperationsInput | number
    priceYearly?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    maxUsers?: IntFieldUpdateOperationsInput | number
    maxChannels?: IntFieldUpdateOperationsInput | number
    maxContacts?: IntFieldUpdateOperationsInput | number
    maxMessagesMonth?: IntFieldUpdateOperationsInput | number
    maxCampaigns?: IntFieldUpdateOperationsInput | number
    maxFlows?: IntFieldUpdateOperationsInput | number
    maxAiAgents?: IntFieldUpdateOperationsInput | number
    hasWhatsappQr?: BoolFieldUpdateOperationsInput | boolean
    hasWhatsappApi?: BoolFieldUpdateOperationsInput | boolean
    hasInstagram?: BoolFieldUpdateOperationsInput | boolean
    hasMessenger?: BoolFieldUpdateOperationsInput | boolean
    hasTelegram?: BoolFieldUpdateOperationsInput | boolean
    hasEmail?: BoolFieldUpdateOperationsInput | boolean
    hasPhone?: BoolFieldUpdateOperationsInput | boolean
    hasChatbot?: BoolFieldUpdateOperationsInput | boolean
    hasAiAgents?: BoolFieldUpdateOperationsInput | boolean
    hasCampaigns?: BoolFieldUpdateOperationsInput | boolean
    hasApi?: BoolFieldUpdateOperationsInput | boolean
    hasWebhooks?: BoolFieldUpdateOperationsInput | boolean
    hasWhiteLabel?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateWithoutTenantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priceMonthly?: FloatFieldUpdateOperationsInput | number
    priceYearly?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    maxUsers?: IntFieldUpdateOperationsInput | number
    maxChannels?: IntFieldUpdateOperationsInput | number
    maxContacts?: IntFieldUpdateOperationsInput | number
    maxMessagesMonth?: IntFieldUpdateOperationsInput | number
    maxCampaigns?: IntFieldUpdateOperationsInput | number
    maxFlows?: IntFieldUpdateOperationsInput | number
    maxAiAgents?: IntFieldUpdateOperationsInput | number
    hasWhatsappQr?: BoolFieldUpdateOperationsInput | boolean
    hasWhatsappApi?: BoolFieldUpdateOperationsInput | boolean
    hasInstagram?: BoolFieldUpdateOperationsInput | boolean
    hasMessenger?: BoolFieldUpdateOperationsInput | boolean
    hasTelegram?: BoolFieldUpdateOperationsInput | boolean
    hasEmail?: BoolFieldUpdateOperationsInput | boolean
    hasPhone?: BoolFieldUpdateOperationsInput | boolean
    hasChatbot?: BoolFieldUpdateOperationsInput | boolean
    hasAiAgents?: BoolFieldUpdateOperationsInput | boolean
    hasCampaigns?: BoolFieldUpdateOperationsInput | boolean
    hasApi?: BoolFieldUpdateOperationsInput | boolean
    hasWebhooks?: BoolFieldUpdateOperationsInput | boolean
    hasWhiteLabel?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type SubscriptionUpsertWithoutTenantInput = {
    update: XOR<SubscriptionUpdateWithoutTenantInput, SubscriptionUncheckedUpdateWithoutTenantInput>
    create: XOR<SubscriptionCreateWithoutTenantInput, SubscriptionUncheckedCreateWithoutTenantInput>
    where?: SubscriptionWhereInput
  }

  export type SubscriptionUpdateToOneWithWhereWithoutTenantInput = {
    where?: SubscriptionWhereInput
    data: XOR<SubscriptionUpdateWithoutTenantInput, SubscriptionUncheckedUpdateWithoutTenantInput>
  }

  export type SubscriptionUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    billingCycle?: StringFieldUpdateOperationsInput | string
    gatewayProvider?: StringFieldUpdateOperationsInput | string
    gatewayCustomerId?: StringFieldUpdateOperationsInput | string
    gatewaySubscriptionId?: StringFieldUpdateOperationsInput | string
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: PlanUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    billingCycle?: StringFieldUpdateOperationsInput | string
    gatewayProvider?: StringFieldUpdateOperationsInput | string
    gatewayCustomerId?: StringFieldUpdateOperationsInput | string
    gatewaySubscriptionId?: StringFieldUpdateOperationsInput | string
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantCreateWithoutPlanInput = {
    id?: string
    slug: string
    name: string
    customDomain?: string | null
    status?: string
    logo?: string
    favicon?: string
    primaryColor?: string
    secondaryColor?: string
    accentColor?: string
    ownerName?: string
    ownerEmail?: string
    ownerPhone?: string
    adminUsername?: string
    adminPassword?: string
    dbSchema: string
    s3Bucket?: string
    s3Region?: string
    s3AccessKey?: string
    s3SecretKey?: string
    s3RetentionDays?: number
    smtpHost?: string
    smtpPort?: number
    smtpUser?: string
    smtpPass?: string
    smtpFrom?: string
    useGlobalSmtp?: boolean
    trialEndsAt?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription?: SubscriptionCreateNestedOneWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutPlanInput = {
    id?: string
    slug: string
    name: string
    customDomain?: string | null
    status?: string
    logo?: string
    favicon?: string
    primaryColor?: string
    secondaryColor?: string
    accentColor?: string
    ownerName?: string
    ownerEmail?: string
    ownerPhone?: string
    adminUsername?: string
    adminPassword?: string
    dbSchema: string
    s3Bucket?: string
    s3Region?: string
    s3AccessKey?: string
    s3SecretKey?: string
    s3RetentionDays?: number
    smtpHost?: string
    smtpPort?: number
    smtpUser?: string
    smtpPass?: string
    smtpFrom?: string
    useGlobalSmtp?: boolean
    trialEndsAt?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutPlanInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutPlanInput, TenantUncheckedCreateWithoutPlanInput>
  }

  export type TenantCreateManyPlanInputEnvelope = {
    data: TenantCreateManyPlanInput | TenantCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionCreateWithoutPlanInput = {
    id?: string
    status?: string
    billingCycle?: string
    gatewayProvider?: string
    gatewayCustomerId?: string
    gatewaySubscriptionId?: string
    currentPeriodStart?: Date | string
    currentPeriodEnd?: Date | string
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateWithoutPlanInput = {
    id?: string
    tenantId: string
    status?: string
    billingCycle?: string
    gatewayProvider?: string
    gatewayCustomerId?: string
    gatewaySubscriptionId?: string
    currentPeriodStart?: Date | string
    currentPeriodEnd?: Date | string
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionCreateOrConnectWithoutPlanInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput>
  }

  export type SubscriptionCreateManyPlanInputEnvelope = {
    data: SubscriptionCreateManyPlanInput | SubscriptionCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type TenantUpsertWithWhereUniqueWithoutPlanInput = {
    where: TenantWhereUniqueInput
    update: XOR<TenantUpdateWithoutPlanInput, TenantUncheckedUpdateWithoutPlanInput>
    create: XOR<TenantCreateWithoutPlanInput, TenantUncheckedCreateWithoutPlanInput>
  }

  export type TenantUpdateWithWhereUniqueWithoutPlanInput = {
    where: TenantWhereUniqueInput
    data: XOR<TenantUpdateWithoutPlanInput, TenantUncheckedUpdateWithoutPlanInput>
  }

  export type TenantUpdateManyWithWhereWithoutPlanInput = {
    where: TenantScalarWhereInput
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyWithoutPlanInput>
  }

  export type TenantScalarWhereInput = {
    AND?: TenantScalarWhereInput | TenantScalarWhereInput[]
    OR?: TenantScalarWhereInput[]
    NOT?: TenantScalarWhereInput | TenantScalarWhereInput[]
    id?: StringFilter<"Tenant"> | string
    slug?: StringFilter<"Tenant"> | string
    name?: StringFilter<"Tenant"> | string
    customDomain?: StringNullableFilter<"Tenant"> | string | null
    status?: StringFilter<"Tenant"> | string
    logo?: StringFilter<"Tenant"> | string
    favicon?: StringFilter<"Tenant"> | string
    primaryColor?: StringFilter<"Tenant"> | string
    secondaryColor?: StringFilter<"Tenant"> | string
    accentColor?: StringFilter<"Tenant"> | string
    ownerName?: StringFilter<"Tenant"> | string
    ownerEmail?: StringFilter<"Tenant"> | string
    ownerPhone?: StringFilter<"Tenant"> | string
    adminUsername?: StringFilter<"Tenant"> | string
    adminPassword?: StringFilter<"Tenant"> | string
    planId?: StringNullableFilter<"Tenant"> | string | null
    dbSchema?: StringFilter<"Tenant"> | string
    s3Bucket?: StringFilter<"Tenant"> | string
    s3Region?: StringFilter<"Tenant"> | string
    s3AccessKey?: StringFilter<"Tenant"> | string
    s3SecretKey?: StringFilter<"Tenant"> | string
    s3RetentionDays?: IntFilter<"Tenant"> | number
    smtpHost?: StringFilter<"Tenant"> | string
    smtpPort?: IntFilter<"Tenant"> | number
    smtpUser?: StringFilter<"Tenant"> | string
    smtpPass?: StringFilter<"Tenant"> | string
    smtpFrom?: StringFilter<"Tenant"> | string
    useGlobalSmtp?: BoolFilter<"Tenant"> | boolean
    trialEndsAt?: DateTimeNullableFilter<"Tenant"> | Date | string | null
    metadata?: JsonFilter<"Tenant">
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutPlanInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutPlanInput, SubscriptionUncheckedUpdateWithoutPlanInput>
    create: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutPlanInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutPlanInput, SubscriptionUncheckedUpdateWithoutPlanInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutPlanInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutPlanInput>
  }

  export type SubscriptionScalarWhereInput = {
    AND?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    OR?: SubscriptionScalarWhereInput[]
    NOT?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    id?: StringFilter<"Subscription"> | string
    tenantId?: StringFilter<"Subscription"> | string
    planId?: StringFilter<"Subscription"> | string
    status?: StringFilter<"Subscription"> | string
    billingCycle?: StringFilter<"Subscription"> | string
    gatewayProvider?: StringFilter<"Subscription"> | string
    gatewayCustomerId?: StringFilter<"Subscription"> | string
    gatewaySubscriptionId?: StringFilter<"Subscription"> | string
    currentPeriodStart?: DateTimeFilter<"Subscription"> | Date | string
    currentPeriodEnd?: DateTimeFilter<"Subscription"> | Date | string
    cancelledAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
  }

  export type TenantCreateWithoutSubscriptionInput = {
    id?: string
    slug: string
    name: string
    customDomain?: string | null
    status?: string
    logo?: string
    favicon?: string
    primaryColor?: string
    secondaryColor?: string
    accentColor?: string
    ownerName?: string
    ownerEmail?: string
    ownerPhone?: string
    adminUsername?: string
    adminPassword?: string
    dbSchema: string
    s3Bucket?: string
    s3Region?: string
    s3AccessKey?: string
    s3SecretKey?: string
    s3RetentionDays?: number
    smtpHost?: string
    smtpPort?: number
    smtpUser?: string
    smtpPass?: string
    smtpFrom?: string
    useGlobalSmtp?: boolean
    trialEndsAt?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: PlanCreateNestedOneWithoutTenantsInput
  }

  export type TenantUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    slug: string
    name: string
    customDomain?: string | null
    status?: string
    logo?: string
    favicon?: string
    primaryColor?: string
    secondaryColor?: string
    accentColor?: string
    ownerName?: string
    ownerEmail?: string
    ownerPhone?: string
    adminUsername?: string
    adminPassword?: string
    planId?: string | null
    dbSchema: string
    s3Bucket?: string
    s3Region?: string
    s3AccessKey?: string
    s3SecretKey?: string
    s3RetentionDays?: number
    smtpHost?: string
    smtpPort?: number
    smtpUser?: string
    smtpPass?: string
    smtpFrom?: string
    useGlobalSmtp?: boolean
    trialEndsAt?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantCreateOrConnectWithoutSubscriptionInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutSubscriptionInput, TenantUncheckedCreateWithoutSubscriptionInput>
  }

  export type PlanCreateWithoutSubscriptionsInput = {
    id?: string
    name: string
    slug: string
    description?: string
    priceMonthly?: number
    priceYearly?: number
    currency?: string
    maxUsers?: number
    maxChannels?: number
    maxContacts?: number
    maxMessagesMonth?: number
    maxCampaigns?: number
    maxFlows?: number
    maxAiAgents?: number
    hasWhatsappQr?: boolean
    hasWhatsappApi?: boolean
    hasInstagram?: boolean
    hasMessenger?: boolean
    hasTelegram?: boolean
    hasEmail?: boolean
    hasPhone?: boolean
    hasChatbot?: boolean
    hasAiAgents?: boolean
    hasCampaigns?: boolean
    hasApi?: boolean
    hasWebhooks?: boolean
    hasWhiteLabel?: boolean
    isActive?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tenants?: TenantCreateNestedManyWithoutPlanInput
  }

  export type PlanUncheckedCreateWithoutSubscriptionsInput = {
    id?: string
    name: string
    slug: string
    description?: string
    priceMonthly?: number
    priceYearly?: number
    currency?: string
    maxUsers?: number
    maxChannels?: number
    maxContacts?: number
    maxMessagesMonth?: number
    maxCampaigns?: number
    maxFlows?: number
    maxAiAgents?: number
    hasWhatsappQr?: boolean
    hasWhatsappApi?: boolean
    hasInstagram?: boolean
    hasMessenger?: boolean
    hasTelegram?: boolean
    hasEmail?: boolean
    hasPhone?: boolean
    hasChatbot?: boolean
    hasAiAgents?: boolean
    hasCampaigns?: boolean
    hasApi?: boolean
    hasWebhooks?: boolean
    hasWhiteLabel?: boolean
    isActive?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tenants?: TenantUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanCreateOrConnectWithoutSubscriptionsInput = {
    where: PlanWhereUniqueInput
    create: XOR<PlanCreateWithoutSubscriptionsInput, PlanUncheckedCreateWithoutSubscriptionsInput>
  }

  export type TenantUpsertWithoutSubscriptionInput = {
    update: XOR<TenantUpdateWithoutSubscriptionInput, TenantUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<TenantCreateWithoutSubscriptionInput, TenantUncheckedCreateWithoutSubscriptionInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutSubscriptionInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutSubscriptionInput, TenantUncheckedUpdateWithoutSubscriptionInput>
  }

  export type TenantUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    customDomain?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    favicon?: StringFieldUpdateOperationsInput | string
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    accentColor?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerEmail?: StringFieldUpdateOperationsInput | string
    ownerPhone?: StringFieldUpdateOperationsInput | string
    adminUsername?: StringFieldUpdateOperationsInput | string
    adminPassword?: StringFieldUpdateOperationsInput | string
    dbSchema?: StringFieldUpdateOperationsInput | string
    s3Bucket?: StringFieldUpdateOperationsInput | string
    s3Region?: StringFieldUpdateOperationsInput | string
    s3AccessKey?: StringFieldUpdateOperationsInput | string
    s3SecretKey?: StringFieldUpdateOperationsInput | string
    s3RetentionDays?: IntFieldUpdateOperationsInput | number
    smtpHost?: StringFieldUpdateOperationsInput | string
    smtpPort?: IntFieldUpdateOperationsInput | number
    smtpUser?: StringFieldUpdateOperationsInput | string
    smtpPass?: StringFieldUpdateOperationsInput | string
    smtpFrom?: StringFieldUpdateOperationsInput | string
    useGlobalSmtp?: BoolFieldUpdateOperationsInput | boolean
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: PlanUpdateOneWithoutTenantsNestedInput
  }

  export type TenantUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    customDomain?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    favicon?: StringFieldUpdateOperationsInput | string
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    accentColor?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerEmail?: StringFieldUpdateOperationsInput | string
    ownerPhone?: StringFieldUpdateOperationsInput | string
    adminUsername?: StringFieldUpdateOperationsInput | string
    adminPassword?: StringFieldUpdateOperationsInput | string
    planId?: NullableStringFieldUpdateOperationsInput | string | null
    dbSchema?: StringFieldUpdateOperationsInput | string
    s3Bucket?: StringFieldUpdateOperationsInput | string
    s3Region?: StringFieldUpdateOperationsInput | string
    s3AccessKey?: StringFieldUpdateOperationsInput | string
    s3SecretKey?: StringFieldUpdateOperationsInput | string
    s3RetentionDays?: IntFieldUpdateOperationsInput | number
    smtpHost?: StringFieldUpdateOperationsInput | string
    smtpPort?: IntFieldUpdateOperationsInput | number
    smtpUser?: StringFieldUpdateOperationsInput | string
    smtpPass?: StringFieldUpdateOperationsInput | string
    smtpFrom?: StringFieldUpdateOperationsInput | string
    useGlobalSmtp?: BoolFieldUpdateOperationsInput | boolean
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanUpsertWithoutSubscriptionsInput = {
    update: XOR<PlanUpdateWithoutSubscriptionsInput, PlanUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<PlanCreateWithoutSubscriptionsInput, PlanUncheckedCreateWithoutSubscriptionsInput>
    where?: PlanWhereInput
  }

  export type PlanUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: PlanWhereInput
    data: XOR<PlanUpdateWithoutSubscriptionsInput, PlanUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type PlanUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priceMonthly?: FloatFieldUpdateOperationsInput | number
    priceYearly?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    maxUsers?: IntFieldUpdateOperationsInput | number
    maxChannels?: IntFieldUpdateOperationsInput | number
    maxContacts?: IntFieldUpdateOperationsInput | number
    maxMessagesMonth?: IntFieldUpdateOperationsInput | number
    maxCampaigns?: IntFieldUpdateOperationsInput | number
    maxFlows?: IntFieldUpdateOperationsInput | number
    maxAiAgents?: IntFieldUpdateOperationsInput | number
    hasWhatsappQr?: BoolFieldUpdateOperationsInput | boolean
    hasWhatsappApi?: BoolFieldUpdateOperationsInput | boolean
    hasInstagram?: BoolFieldUpdateOperationsInput | boolean
    hasMessenger?: BoolFieldUpdateOperationsInput | boolean
    hasTelegram?: BoolFieldUpdateOperationsInput | boolean
    hasEmail?: BoolFieldUpdateOperationsInput | boolean
    hasPhone?: BoolFieldUpdateOperationsInput | boolean
    hasChatbot?: BoolFieldUpdateOperationsInput | boolean
    hasAiAgents?: BoolFieldUpdateOperationsInput | boolean
    hasCampaigns?: BoolFieldUpdateOperationsInput | boolean
    hasApi?: BoolFieldUpdateOperationsInput | boolean
    hasWebhooks?: BoolFieldUpdateOperationsInput | boolean
    hasWhiteLabel?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenants?: TenantUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priceMonthly?: FloatFieldUpdateOperationsInput | number
    priceYearly?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    maxUsers?: IntFieldUpdateOperationsInput | number
    maxChannels?: IntFieldUpdateOperationsInput | number
    maxContacts?: IntFieldUpdateOperationsInput | number
    maxMessagesMonth?: IntFieldUpdateOperationsInput | number
    maxCampaigns?: IntFieldUpdateOperationsInput | number
    maxFlows?: IntFieldUpdateOperationsInput | number
    maxAiAgents?: IntFieldUpdateOperationsInput | number
    hasWhatsappQr?: BoolFieldUpdateOperationsInput | boolean
    hasWhatsappApi?: BoolFieldUpdateOperationsInput | boolean
    hasInstagram?: BoolFieldUpdateOperationsInput | boolean
    hasMessenger?: BoolFieldUpdateOperationsInput | boolean
    hasTelegram?: BoolFieldUpdateOperationsInput | boolean
    hasEmail?: BoolFieldUpdateOperationsInput | boolean
    hasPhone?: BoolFieldUpdateOperationsInput | boolean
    hasChatbot?: BoolFieldUpdateOperationsInput | boolean
    hasAiAgents?: BoolFieldUpdateOperationsInput | boolean
    hasCampaigns?: BoolFieldUpdateOperationsInput | boolean
    hasApi?: BoolFieldUpdateOperationsInput | boolean
    hasWebhooks?: BoolFieldUpdateOperationsInput | boolean
    hasWhiteLabel?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenants?: TenantUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type TenantCreateManyPlanInput = {
    id?: string
    slug: string
    name: string
    customDomain?: string | null
    status?: string
    logo?: string
    favicon?: string
    primaryColor?: string
    secondaryColor?: string
    accentColor?: string
    ownerName?: string
    ownerEmail?: string
    ownerPhone?: string
    adminUsername?: string
    adminPassword?: string
    dbSchema: string
    s3Bucket?: string
    s3Region?: string
    s3AccessKey?: string
    s3SecretKey?: string
    s3RetentionDays?: number
    smtpHost?: string
    smtpPort?: number
    smtpUser?: string
    smtpPass?: string
    smtpFrom?: string
    useGlobalSmtp?: boolean
    trialEndsAt?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionCreateManyPlanInput = {
    id?: string
    tenantId: string
    status?: string
    billingCycle?: string
    gatewayProvider?: string
    gatewayCustomerId?: string
    gatewaySubscriptionId?: string
    currentPeriodStart?: Date | string
    currentPeriodEnd?: Date | string
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    customDomain?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    favicon?: StringFieldUpdateOperationsInput | string
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    accentColor?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerEmail?: StringFieldUpdateOperationsInput | string
    ownerPhone?: StringFieldUpdateOperationsInput | string
    adminUsername?: StringFieldUpdateOperationsInput | string
    adminPassword?: StringFieldUpdateOperationsInput | string
    dbSchema?: StringFieldUpdateOperationsInput | string
    s3Bucket?: StringFieldUpdateOperationsInput | string
    s3Region?: StringFieldUpdateOperationsInput | string
    s3AccessKey?: StringFieldUpdateOperationsInput | string
    s3SecretKey?: StringFieldUpdateOperationsInput | string
    s3RetentionDays?: IntFieldUpdateOperationsInput | number
    smtpHost?: StringFieldUpdateOperationsInput | string
    smtpPort?: IntFieldUpdateOperationsInput | number
    smtpUser?: StringFieldUpdateOperationsInput | string
    smtpPass?: StringFieldUpdateOperationsInput | string
    smtpFrom?: StringFieldUpdateOperationsInput | string
    useGlobalSmtp?: BoolFieldUpdateOperationsInput | boolean
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUpdateOneWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    customDomain?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    favicon?: StringFieldUpdateOperationsInput | string
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    accentColor?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerEmail?: StringFieldUpdateOperationsInput | string
    ownerPhone?: StringFieldUpdateOperationsInput | string
    adminUsername?: StringFieldUpdateOperationsInput | string
    adminPassword?: StringFieldUpdateOperationsInput | string
    dbSchema?: StringFieldUpdateOperationsInput | string
    s3Bucket?: StringFieldUpdateOperationsInput | string
    s3Region?: StringFieldUpdateOperationsInput | string
    s3AccessKey?: StringFieldUpdateOperationsInput | string
    s3SecretKey?: StringFieldUpdateOperationsInput | string
    s3RetentionDays?: IntFieldUpdateOperationsInput | number
    smtpHost?: StringFieldUpdateOperationsInput | string
    smtpPort?: IntFieldUpdateOperationsInput | number
    smtpUser?: StringFieldUpdateOperationsInput | string
    smtpPass?: StringFieldUpdateOperationsInput | string
    smtpFrom?: StringFieldUpdateOperationsInput | string
    useGlobalSmtp?: BoolFieldUpdateOperationsInput | boolean
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUncheckedUpdateOneWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateManyWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    customDomain?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    favicon?: StringFieldUpdateOperationsInput | string
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    accentColor?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerEmail?: StringFieldUpdateOperationsInput | string
    ownerPhone?: StringFieldUpdateOperationsInput | string
    adminUsername?: StringFieldUpdateOperationsInput | string
    adminPassword?: StringFieldUpdateOperationsInput | string
    dbSchema?: StringFieldUpdateOperationsInput | string
    s3Bucket?: StringFieldUpdateOperationsInput | string
    s3Region?: StringFieldUpdateOperationsInput | string
    s3AccessKey?: StringFieldUpdateOperationsInput | string
    s3SecretKey?: StringFieldUpdateOperationsInput | string
    s3RetentionDays?: IntFieldUpdateOperationsInput | number
    smtpHost?: StringFieldUpdateOperationsInput | string
    smtpPort?: IntFieldUpdateOperationsInput | number
    smtpUser?: StringFieldUpdateOperationsInput | string
    smtpPass?: StringFieldUpdateOperationsInput | string
    smtpFrom?: StringFieldUpdateOperationsInput | string
    useGlobalSmtp?: BoolFieldUpdateOperationsInput | boolean
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    billingCycle?: StringFieldUpdateOperationsInput | string
    gatewayProvider?: StringFieldUpdateOperationsInput | string
    gatewayCustomerId?: StringFieldUpdateOperationsInput | string
    gatewaySubscriptionId?: StringFieldUpdateOperationsInput | string
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    billingCycle?: StringFieldUpdateOperationsInput | string
    gatewayProvider?: StringFieldUpdateOperationsInput | string
    gatewayCustomerId?: StringFieldUpdateOperationsInput | string
    gatewaySubscriptionId?: StringFieldUpdateOperationsInput | string
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    billingCycle?: StringFieldUpdateOperationsInput | string
    gatewayProvider?: StringFieldUpdateOperationsInput | string
    gatewayCustomerId?: StringFieldUpdateOperationsInput | string
    gatewaySubscriptionId?: StringFieldUpdateOperationsInput | string
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use PlanCountOutputTypeDefaultArgs instead
     */
    export type PlanCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlanCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SuperAdminDefaultArgs instead
     */
    export type SuperAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SuperAdminDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TenantDefaultArgs instead
     */
    export type TenantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TenantDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlanDefaultArgs instead
     */
    export type PlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlanDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubscriptionDefaultArgs instead
     */
    export type SubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubscriptionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaymentDefaultArgs instead
     */
    export type PaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BillingConfigDefaultArgs instead
     */
    export type BillingConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BillingConfigDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LicenseKeyDefaultArgs instead
     */
    export type LicenseKeyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LicenseKeyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GlobalSettingsDefaultArgs instead
     */
    export type GlobalSettingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GlobalSettingsDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}