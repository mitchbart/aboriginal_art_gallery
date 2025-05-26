
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
 * Model Dimensions
 * 
 */
export type Dimensions = $Result.DefaultSelection<Prisma.$DimensionsPayload>
/**
 * Model Artist
 * 
 */
export type Artist = $Result.DefaultSelection<Prisma.$ArtistPayload>
/**
 * Model Artefact
 * 
 */
export type Artefact = $Result.DefaultSelection<Prisma.$ArtefactPayload>
/**
 * Model Exhibition
 * 
 */
export type Exhibition = $Result.DefaultSelection<Prisma.$ExhibitionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ArtStyleType: {
  DOT_PAINTING: 'DOT_PAINTING',
  BARK_PAINTING: 'BARK_PAINTING',
  ROCK_ART: 'ROCK_ART',
  WEAVING: 'WEAVING',
  CROSS_HATCHING: 'CROSS_HATCHING',
  OCHRE: 'OCHRE',
  SCULPTURE: 'SCULPTURE',
  X_RAY_ART: 'X_RAY_ART',
  CERAMICS: 'CERAMICS',
  CONTEMPORARY: 'CONTEMPORARY',
  TRADITIONAL: 'TRADITIONAL'
};

export type ArtStyleType = (typeof ArtStyleType)[keyof typeof ArtStyleType]


export const DimensionUnit: {
  CM: 'CM',
  INCHES: 'INCHES',
  MM: 'MM'
};

export type DimensionUnit = (typeof DimensionUnit)[keyof typeof DimensionUnit]


export const RoleType: {
  USER: 'USER',
  CURATOR: 'CURATOR',
  ADMIN: 'ADMIN'
};

export type RoleType = (typeof RoleType)[keyof typeof RoleType]

}

export type ArtStyleType = $Enums.ArtStyleType

export const ArtStyleType: typeof $Enums.ArtStyleType

export type DimensionUnit = $Enums.DimensionUnit

export const DimensionUnit: typeof $Enums.DimensionUnit

export type RoleType = $Enums.RoleType

export const RoleType: typeof $Enums.RoleType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Artists
 * const artists = await prisma.artist.findMany()
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
   * // Fetch zero or more Artists
   * const artists = await prisma.artist.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.artist`: Exposes CRUD operations for the **Artist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Artists
    * const artists = await prisma.artist.findMany()
    * ```
    */
  get artist(): Prisma.ArtistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.artefact`: Exposes CRUD operations for the **Artefact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Artefacts
    * const artefacts = await prisma.artefact.findMany()
    * ```
    */
  get artefact(): Prisma.ArtefactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exhibition`: Exposes CRUD operations for the **Exhibition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exhibitions
    * const exhibitions = await prisma.exhibition.findMany()
    * ```
    */
  get exhibition(): Prisma.ExhibitionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Artist: 'Artist',
    Artefact: 'Artefact',
    Exhibition: 'Exhibition',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "artist" | "artefact" | "exhibition" | "user"
      txIsolationLevel: never
    }
    model: {
      Artist: {
        payload: Prisma.$ArtistPayload<ExtArgs>
        fields: Prisma.ArtistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          findFirst: {
            args: Prisma.ArtistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          findMany: {
            args: Prisma.ArtistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>[]
          }
          create: {
            args: Prisma.ArtistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          createMany: {
            args: Prisma.ArtistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ArtistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          update: {
            args: Prisma.ArtistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          deleteMany: {
            args: Prisma.ArtistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArtistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ArtistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          aggregate: {
            args: Prisma.ArtistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArtist>
          }
          groupBy: {
            args: Prisma.ArtistGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArtistGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ArtistFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ArtistAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ArtistCountArgs<ExtArgs>
            result: $Utils.Optional<ArtistCountAggregateOutputType> | number
          }
        }
      }
      Artefact: {
        payload: Prisma.$ArtefactPayload<ExtArgs>
        fields: Prisma.ArtefactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtefactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtefactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtefactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtefactPayload>
          }
          findFirst: {
            args: Prisma.ArtefactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtefactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtefactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtefactPayload>
          }
          findMany: {
            args: Prisma.ArtefactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtefactPayload>[]
          }
          create: {
            args: Prisma.ArtefactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtefactPayload>
          }
          createMany: {
            args: Prisma.ArtefactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ArtefactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtefactPayload>
          }
          update: {
            args: Prisma.ArtefactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtefactPayload>
          }
          deleteMany: {
            args: Prisma.ArtefactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArtefactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ArtefactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtefactPayload>
          }
          aggregate: {
            args: Prisma.ArtefactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArtefact>
          }
          groupBy: {
            args: Prisma.ArtefactGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArtefactGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ArtefactFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ArtefactAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ArtefactCountArgs<ExtArgs>
            result: $Utils.Optional<ArtefactCountAggregateOutputType> | number
          }
        }
      }
      Exhibition: {
        payload: Prisma.$ExhibitionPayload<ExtArgs>
        fields: Prisma.ExhibitionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExhibitionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExhibitionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExhibitionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExhibitionPayload>
          }
          findFirst: {
            args: Prisma.ExhibitionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExhibitionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExhibitionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExhibitionPayload>
          }
          findMany: {
            args: Prisma.ExhibitionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExhibitionPayload>[]
          }
          create: {
            args: Prisma.ExhibitionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExhibitionPayload>
          }
          createMany: {
            args: Prisma.ExhibitionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ExhibitionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExhibitionPayload>
          }
          update: {
            args: Prisma.ExhibitionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExhibitionPayload>
          }
          deleteMany: {
            args: Prisma.ExhibitionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExhibitionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExhibitionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExhibitionPayload>
          }
          aggregate: {
            args: Prisma.ExhibitionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExhibition>
          }
          groupBy: {
            args: Prisma.ExhibitionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExhibitionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ExhibitionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ExhibitionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ExhibitionCountArgs<ExtArgs>
            result: $Utils.Optional<ExhibitionCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    artist?: ArtistOmit
    artefact?: ArtefactOmit
    exhibition?: ExhibitionOmit
    user?: UserOmit
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
    | 'updateManyAndReturn'
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
   * Count Type ArtistCountOutputType
   */

  export type ArtistCountOutputType = {
    artefacts: number
  }

  export type ArtistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artefacts?: boolean | ArtistCountOutputTypeCountArtefactsArgs
  }

  // Custom InputTypes
  /**
   * ArtistCountOutputType without action
   */
  export type ArtistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistCountOutputType
     */
    select?: ArtistCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArtistCountOutputType without action
   */
  export type ArtistCountOutputTypeCountArtefactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtefactWhereInput
  }


  /**
   * Count Type ArtefactCountOutputType
   */

  export type ArtefactCountOutputType = {
    exhibitions: number
  }

  export type ArtefactCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exhibitions?: boolean | ArtefactCountOutputTypeCountExhibitionsArgs
  }

  // Custom InputTypes
  /**
   * ArtefactCountOutputType without action
   */
  export type ArtefactCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtefactCountOutputType
     */
    select?: ArtefactCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArtefactCountOutputType without action
   */
  export type ArtefactCountOutputTypeCountExhibitionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExhibitionWhereInput
  }


  /**
   * Count Type ExhibitionCountOutputType
   */

  export type ExhibitionCountOutputType = {
    artefacts: number
  }

  export type ExhibitionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artefacts?: boolean | ExhibitionCountOutputTypeCountArtefactsArgs
  }

  // Custom InputTypes
  /**
   * ExhibitionCountOutputType without action
   */
  export type ExhibitionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExhibitionCountOutputType
     */
    select?: ExhibitionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExhibitionCountOutputType without action
   */
  export type ExhibitionCountOutputTypeCountArtefactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtefactWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Dimensions
   */





  export type DimensionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    height?: boolean
    width?: boolean
    depth?: boolean
    unit?: boolean
  }, ExtArgs["result"]["dimensions"]>



  export type DimensionsSelectScalar = {
    height?: boolean
    width?: boolean
    depth?: boolean
    unit?: boolean
  }

  export type DimensionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"height" | "width" | "depth" | "unit", ExtArgs["result"]["dimensions"]>

  export type $DimensionsPayload = {
    name: "Dimensions"
    objects: {}
    scalars: {
      height: number
      width: number
      depth: number | null
      unit: $Enums.DimensionUnit
    }
    composites: {}
  }

  type DimensionsGetPayload<S extends boolean | null | undefined | DimensionsDefaultArgs> = $Result.GetResult<Prisma.$DimensionsPayload, S>





  /**
   * Fields of the Dimensions model
   */
  interface DimensionsFieldRefs {
    readonly height: FieldRef<"Dimensions", 'Float'>
    readonly width: FieldRef<"Dimensions", 'Float'>
    readonly depth: FieldRef<"Dimensions", 'Float'>
    readonly unit: FieldRef<"Dimensions", 'DimensionUnit'>
  }
    

  // Custom InputTypes
  /**
   * Dimensions without action
   */
  export type DimensionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dimensions
     */
    select?: DimensionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dimensions
     */
    omit?: DimensionsOmit<ExtArgs> | null
  }


  /**
   * Model Artist
   */

  export type AggregateArtist = {
    _count: ArtistCountAggregateOutputType | null
    _avg: ArtistAvgAggregateOutputType | null
    _sum: ArtistSumAggregateOutputType | null
    _min: ArtistMinAggregateOutputType | null
    _max: ArtistMaxAggregateOutputType | null
  }

  export type ArtistAvgAggregateOutputType = {
    birthYear: number | null
    deathYear: number | null
  }

  export type ArtistSumAggregateOutputType = {
    birthYear: number | null
    deathYear: number | null
  }

  export type ArtistMinAggregateOutputType = {
    id: string | null
    name: string | null
    aboriginalName: string | null
    tribe: string | null
    region: string | null
    biography: string | null
    birthYear: number | null
    deathYear: number | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArtistMaxAggregateOutputType = {
    id: string | null
    name: string | null
    aboriginalName: string | null
    tribe: string | null
    region: string | null
    biography: string | null
    birthYear: number | null
    deathYear: number | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArtistCountAggregateOutputType = {
    id: number
    name: number
    aboriginalName: number
    tribe: number
    region: number
    biography: number
    birthYear: number
    deathYear: number
    artStyles: number
    imageUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ArtistAvgAggregateInputType = {
    birthYear?: true
    deathYear?: true
  }

  export type ArtistSumAggregateInputType = {
    birthYear?: true
    deathYear?: true
  }

  export type ArtistMinAggregateInputType = {
    id?: true
    name?: true
    aboriginalName?: true
    tribe?: true
    region?: true
    biography?: true
    birthYear?: true
    deathYear?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArtistMaxAggregateInputType = {
    id?: true
    name?: true
    aboriginalName?: true
    tribe?: true
    region?: true
    biography?: true
    birthYear?: true
    deathYear?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArtistCountAggregateInputType = {
    id?: true
    name?: true
    aboriginalName?: true
    tribe?: true
    region?: true
    biography?: true
    birthYear?: true
    deathYear?: true
    artStyles?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ArtistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artist to aggregate.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Artists
    **/
    _count?: true | ArtistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArtistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArtistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtistMaxAggregateInputType
  }

  export type GetArtistAggregateType<T extends ArtistAggregateArgs> = {
        [P in keyof T & keyof AggregateArtist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtist[P]>
      : GetScalarType<T[P], AggregateArtist[P]>
  }




  export type ArtistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistWhereInput
    orderBy?: ArtistOrderByWithAggregationInput | ArtistOrderByWithAggregationInput[]
    by: ArtistScalarFieldEnum[] | ArtistScalarFieldEnum
    having?: ArtistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtistCountAggregateInputType | true
    _avg?: ArtistAvgAggregateInputType
    _sum?: ArtistSumAggregateInputType
    _min?: ArtistMinAggregateInputType
    _max?: ArtistMaxAggregateInputType
  }

  export type ArtistGroupByOutputType = {
    id: string
    name: string
    aboriginalName: string | null
    tribe: string | null
    region: string | null
    biography: string
    birthYear: number | null
    deathYear: number | null
    artStyles: $Enums.ArtStyleType[]
    imageUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: ArtistCountAggregateOutputType | null
    _avg: ArtistAvgAggregateOutputType | null
    _sum: ArtistSumAggregateOutputType | null
    _min: ArtistMinAggregateOutputType | null
    _max: ArtistMaxAggregateOutputType | null
  }

  type GetArtistGroupByPayload<T extends ArtistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtistGroupByOutputType[P]>
            : GetScalarType<T[P], ArtistGroupByOutputType[P]>
        }
      >
    >


  export type ArtistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    aboriginalName?: boolean
    tribe?: boolean
    region?: boolean
    biography?: boolean
    birthYear?: boolean
    deathYear?: boolean
    artStyles?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    artefacts?: boolean | Artist$artefactsArgs<ExtArgs>
    _count?: boolean | ArtistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artist"]>



  export type ArtistSelectScalar = {
    id?: boolean
    name?: boolean
    aboriginalName?: boolean
    tribe?: boolean
    region?: boolean
    biography?: boolean
    birthYear?: boolean
    deathYear?: boolean
    artStyles?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ArtistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "aboriginalName" | "tribe" | "region" | "biography" | "birthYear" | "deathYear" | "artStyles" | "imageUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["artist"]>
  export type ArtistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artefacts?: boolean | Artist$artefactsArgs<ExtArgs>
    _count?: boolean | ArtistCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ArtistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Artist"
    objects: {
      artefacts: Prisma.$ArtefactPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      aboriginalName: string | null
      tribe: string | null
      region: string | null
      biography: string
      birthYear: number | null
      deathYear: number | null
      artStyles: $Enums.ArtStyleType[]
      imageUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["artist"]>
    composites: {}
  }

  type ArtistGetPayload<S extends boolean | null | undefined | ArtistDefaultArgs> = $Result.GetResult<Prisma.$ArtistPayload, S>

  type ArtistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArtistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArtistCountAggregateInputType | true
    }

  export interface ArtistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Artist'], meta: { name: 'Artist' } }
    /**
     * Find zero or one Artist that matches the filter.
     * @param {ArtistFindUniqueArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArtistFindUniqueArgs>(args: SelectSubset<T, ArtistFindUniqueArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Artist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArtistFindUniqueOrThrowArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArtistFindUniqueOrThrowArgs>(args: SelectSubset<T, ArtistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindFirstArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArtistFindFirstArgs>(args?: SelectSubset<T, ArtistFindFirstArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindFirstOrThrowArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArtistFindFirstOrThrowArgs>(args?: SelectSubset<T, ArtistFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Artists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Artists
     * const artists = await prisma.artist.findMany()
     * 
     * // Get first 10 Artists
     * const artists = await prisma.artist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const artistWithIdOnly = await prisma.artist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArtistFindManyArgs>(args?: SelectSubset<T, ArtistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Artist.
     * @param {ArtistCreateArgs} args - Arguments to create a Artist.
     * @example
     * // Create one Artist
     * const Artist = await prisma.artist.create({
     *   data: {
     *     // ... data to create a Artist
     *   }
     * })
     * 
     */
    create<T extends ArtistCreateArgs>(args: SelectSubset<T, ArtistCreateArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Artists.
     * @param {ArtistCreateManyArgs} args - Arguments to create many Artists.
     * @example
     * // Create many Artists
     * const artist = await prisma.artist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArtistCreateManyArgs>(args?: SelectSubset<T, ArtistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Artist.
     * @param {ArtistDeleteArgs} args - Arguments to delete one Artist.
     * @example
     * // Delete one Artist
     * const Artist = await prisma.artist.delete({
     *   where: {
     *     // ... filter to delete one Artist
     *   }
     * })
     * 
     */
    delete<T extends ArtistDeleteArgs>(args: SelectSubset<T, ArtistDeleteArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Artist.
     * @param {ArtistUpdateArgs} args - Arguments to update one Artist.
     * @example
     * // Update one Artist
     * const artist = await prisma.artist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArtistUpdateArgs>(args: SelectSubset<T, ArtistUpdateArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Artists.
     * @param {ArtistDeleteManyArgs} args - Arguments to filter Artists to delete.
     * @example
     * // Delete a few Artists
     * const { count } = await prisma.artist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArtistDeleteManyArgs>(args?: SelectSubset<T, ArtistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Artists
     * const artist = await prisma.artist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArtistUpdateManyArgs>(args: SelectSubset<T, ArtistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Artist.
     * @param {ArtistUpsertArgs} args - Arguments to update or create a Artist.
     * @example
     * // Update or create a Artist
     * const artist = await prisma.artist.upsert({
     *   create: {
     *     // ... data to create a Artist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Artist we want to update
     *   }
     * })
     */
    upsert<T extends ArtistUpsertArgs>(args: SelectSubset<T, ArtistUpsertArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Artists that matches the filter.
     * @param {ArtistFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const artist = await prisma.artist.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ArtistFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Artist.
     * @param {ArtistAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const artist = await prisma.artist.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ArtistAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistCountArgs} args - Arguments to filter Artists to count.
     * @example
     * // Count the number of Artists
     * const count = await prisma.artist.count({
     *   where: {
     *     // ... the filter for the Artists we want to count
     *   }
     * })
    **/
    count<T extends ArtistCountArgs>(
      args?: Subset<T, ArtistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Artist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArtistAggregateArgs>(args: Subset<T, ArtistAggregateArgs>): Prisma.PrismaPromise<GetArtistAggregateType<T>>

    /**
     * Group by Artist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistGroupByArgs} args - Group by arguments.
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
      T extends ArtistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtistGroupByArgs['orderBy'] }
        : { orderBy?: ArtistGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArtistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Artist model
   */
  readonly fields: ArtistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Artist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    artefacts<T extends Artist$artefactsArgs<ExtArgs> = {}>(args?: Subset<T, Artist$artefactsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtefactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Artist model
   */
  interface ArtistFieldRefs {
    readonly id: FieldRef<"Artist", 'String'>
    readonly name: FieldRef<"Artist", 'String'>
    readonly aboriginalName: FieldRef<"Artist", 'String'>
    readonly tribe: FieldRef<"Artist", 'String'>
    readonly region: FieldRef<"Artist", 'String'>
    readonly biography: FieldRef<"Artist", 'String'>
    readonly birthYear: FieldRef<"Artist", 'Int'>
    readonly deathYear: FieldRef<"Artist", 'Int'>
    readonly artStyles: FieldRef<"Artist", 'ArtStyleType[]'>
    readonly imageUrl: FieldRef<"Artist", 'String'>
    readonly createdAt: FieldRef<"Artist", 'DateTime'>
    readonly updatedAt: FieldRef<"Artist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Artist findUnique
   */
  export type ArtistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist findUniqueOrThrow
   */
  export type ArtistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist findFirst
   */
  export type ArtistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }

  /**
   * Artist findFirstOrThrow
   */
  export type ArtistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }

  /**
   * Artist findMany
   */
  export type ArtistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artists to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }

  /**
   * Artist create
   */
  export type ArtistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * The data needed to create a Artist.
     */
    data: XOR<ArtistCreateInput, ArtistUncheckedCreateInput>
  }

  /**
   * Artist createMany
   */
  export type ArtistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Artists.
     */
    data: ArtistCreateManyInput | ArtistCreateManyInput[]
  }

  /**
   * Artist update
   */
  export type ArtistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * The data needed to update a Artist.
     */
    data: XOR<ArtistUpdateInput, ArtistUncheckedUpdateInput>
    /**
     * Choose, which Artist to update.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist updateMany
   */
  export type ArtistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Artists.
     */
    data: XOR<ArtistUpdateManyMutationInput, ArtistUncheckedUpdateManyInput>
    /**
     * Filter which Artists to update
     */
    where?: ArtistWhereInput
    /**
     * Limit how many Artists to update.
     */
    limit?: number
  }

  /**
   * Artist upsert
   */
  export type ArtistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * The filter to search for the Artist to update in case it exists.
     */
    where: ArtistWhereUniqueInput
    /**
     * In case the Artist found by the `where` argument doesn't exist, create a new Artist with this data.
     */
    create: XOR<ArtistCreateInput, ArtistUncheckedCreateInput>
    /**
     * In case the Artist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtistUpdateInput, ArtistUncheckedUpdateInput>
  }

  /**
   * Artist delete
   */
  export type ArtistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter which Artist to delete.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist deleteMany
   */
  export type ArtistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artists to delete
     */
    where?: ArtistWhereInput
    /**
     * Limit how many Artists to delete.
     */
    limit?: number
  }

  /**
   * Artist findRaw
   */
  export type ArtistFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Artist aggregateRaw
   */
  export type ArtistAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Artist.artefacts
   */
  export type Artist$artefactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artefact
     */
    select?: ArtefactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artefact
     */
    omit?: ArtefactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtefactInclude<ExtArgs> | null
    where?: ArtefactWhereInput
    orderBy?: ArtefactOrderByWithRelationInput | ArtefactOrderByWithRelationInput[]
    cursor?: ArtefactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArtefactScalarFieldEnum | ArtefactScalarFieldEnum[]
  }

  /**
   * Artist without action
   */
  export type ArtistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
  }


  /**
   * Model Artefact
   */

  export type AggregateArtefact = {
    _count: ArtefactCountAggregateOutputType | null
    _avg: ArtefactAvgAggregateOutputType | null
    _sum: ArtefactSumAggregateOutputType | null
    _min: ArtefactMinAggregateOutputType | null
    _max: ArtefactMaxAggregateOutputType | null
  }

  export type ArtefactAvgAggregateOutputType = {
    creationYear: number | null
  }

  export type ArtefactSumAggregateOutputType = {
    creationYear: number | null
  }

  export type ArtefactMinAggregateOutputType = {
    id: string | null
    title: string | null
    artistId: string | null
    creationYear: number | null
    description: string | null
    artStyle: $Enums.ArtStyleType | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArtefactMaxAggregateOutputType = {
    id: string | null
    title: string | null
    artistId: string | null
    creationYear: number | null
    description: string | null
    artStyle: $Enums.ArtStyleType | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArtefactCountAggregateOutputType = {
    id: number
    title: number
    artistId: number
    creationYear: number
    description: number
    artStyle: number
    imageUrl: number
    createdAt: number
    updatedAt: number
    exhibitionIds: number
    _all: number
  }


  export type ArtefactAvgAggregateInputType = {
    creationYear?: true
  }

  export type ArtefactSumAggregateInputType = {
    creationYear?: true
  }

  export type ArtefactMinAggregateInputType = {
    id?: true
    title?: true
    artistId?: true
    creationYear?: true
    description?: true
    artStyle?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArtefactMaxAggregateInputType = {
    id?: true
    title?: true
    artistId?: true
    creationYear?: true
    description?: true
    artStyle?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArtefactCountAggregateInputType = {
    id?: true
    title?: true
    artistId?: true
    creationYear?: true
    description?: true
    artStyle?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    exhibitionIds?: true
    _all?: true
  }

  export type ArtefactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artefact to aggregate.
     */
    where?: ArtefactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artefacts to fetch.
     */
    orderBy?: ArtefactOrderByWithRelationInput | ArtefactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtefactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artefacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artefacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Artefacts
    **/
    _count?: true | ArtefactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArtefactAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArtefactSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtefactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtefactMaxAggregateInputType
  }

  export type GetArtefactAggregateType<T extends ArtefactAggregateArgs> = {
        [P in keyof T & keyof AggregateArtefact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtefact[P]>
      : GetScalarType<T[P], AggregateArtefact[P]>
  }




  export type ArtefactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtefactWhereInput
    orderBy?: ArtefactOrderByWithAggregationInput | ArtefactOrderByWithAggregationInput[]
    by: ArtefactScalarFieldEnum[] | ArtefactScalarFieldEnum
    having?: ArtefactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtefactCountAggregateInputType | true
    _avg?: ArtefactAvgAggregateInputType
    _sum?: ArtefactSumAggregateInputType
    _min?: ArtefactMinAggregateInputType
    _max?: ArtefactMaxAggregateInputType
  }

  export type ArtefactGroupByOutputType = {
    id: string
    title: string
    artistId: string | null
    creationYear: number | null
    description: string | null
    artStyle: $Enums.ArtStyleType
    imageUrl: string
    createdAt: Date
    updatedAt: Date
    exhibitionIds: string[]
    _count: ArtefactCountAggregateOutputType | null
    _avg: ArtefactAvgAggregateOutputType | null
    _sum: ArtefactSumAggregateOutputType | null
    _min: ArtefactMinAggregateOutputType | null
    _max: ArtefactMaxAggregateOutputType | null
  }

  type GetArtefactGroupByPayload<T extends ArtefactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtefactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtefactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtefactGroupByOutputType[P]>
            : GetScalarType<T[P], ArtefactGroupByOutputType[P]>
        }
      >
    >


  export type ArtefactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    artistId?: boolean
    creationYear?: boolean
    description?: boolean
    dimensions?: boolean | DimensionsDefaultArgs<ExtArgs>
    artStyle?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    exhibitionIds?: boolean
    artist?: boolean | Artefact$artistArgs<ExtArgs>
    exhibitions?: boolean | Artefact$exhibitionsArgs<ExtArgs>
    _count?: boolean | ArtefactCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artefact"]>



  export type ArtefactSelectScalar = {
    id?: boolean
    title?: boolean
    artistId?: boolean
    creationYear?: boolean
    description?: boolean
    artStyle?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    exhibitionIds?: boolean
  }

  export type ArtefactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "artistId" | "creationYear" | "description" | "dimensions" | "artStyle" | "imageUrl" | "createdAt" | "updatedAt" | "exhibitionIds", ExtArgs["result"]["artefact"]>
  export type ArtefactInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artist?: boolean | Artefact$artistArgs<ExtArgs>
    exhibitions?: boolean | Artefact$exhibitionsArgs<ExtArgs>
    _count?: boolean | ArtefactCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ArtefactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Artefact"
    objects: {
      artist: Prisma.$ArtistPayload<ExtArgs> | null
      exhibitions: Prisma.$ExhibitionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      artistId: string | null
      creationYear: number | null
      description: string | null
      artStyle: $Enums.ArtStyleType
      imageUrl: string
      createdAt: Date
      updatedAt: Date
      exhibitionIds: string[]
    }, ExtArgs["result"]["artefact"]>
    composites: {
      dimensions: Prisma.$DimensionsPayload | null
    }
  }

  type ArtefactGetPayload<S extends boolean | null | undefined | ArtefactDefaultArgs> = $Result.GetResult<Prisma.$ArtefactPayload, S>

  type ArtefactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArtefactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArtefactCountAggregateInputType | true
    }

  export interface ArtefactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Artefact'], meta: { name: 'Artefact' } }
    /**
     * Find zero or one Artefact that matches the filter.
     * @param {ArtefactFindUniqueArgs} args - Arguments to find a Artefact
     * @example
     * // Get one Artefact
     * const artefact = await prisma.artefact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArtefactFindUniqueArgs>(args: SelectSubset<T, ArtefactFindUniqueArgs<ExtArgs>>): Prisma__ArtefactClient<$Result.GetResult<Prisma.$ArtefactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Artefact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArtefactFindUniqueOrThrowArgs} args - Arguments to find a Artefact
     * @example
     * // Get one Artefact
     * const artefact = await prisma.artefact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArtefactFindUniqueOrThrowArgs>(args: SelectSubset<T, ArtefactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArtefactClient<$Result.GetResult<Prisma.$ArtefactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artefact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtefactFindFirstArgs} args - Arguments to find a Artefact
     * @example
     * // Get one Artefact
     * const artefact = await prisma.artefact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArtefactFindFirstArgs>(args?: SelectSubset<T, ArtefactFindFirstArgs<ExtArgs>>): Prisma__ArtefactClient<$Result.GetResult<Prisma.$ArtefactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artefact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtefactFindFirstOrThrowArgs} args - Arguments to find a Artefact
     * @example
     * // Get one Artefact
     * const artefact = await prisma.artefact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArtefactFindFirstOrThrowArgs>(args?: SelectSubset<T, ArtefactFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArtefactClient<$Result.GetResult<Prisma.$ArtefactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Artefacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtefactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Artefacts
     * const artefacts = await prisma.artefact.findMany()
     * 
     * // Get first 10 Artefacts
     * const artefacts = await prisma.artefact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const artefactWithIdOnly = await prisma.artefact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArtefactFindManyArgs>(args?: SelectSubset<T, ArtefactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtefactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Artefact.
     * @param {ArtefactCreateArgs} args - Arguments to create a Artefact.
     * @example
     * // Create one Artefact
     * const Artefact = await prisma.artefact.create({
     *   data: {
     *     // ... data to create a Artefact
     *   }
     * })
     * 
     */
    create<T extends ArtefactCreateArgs>(args: SelectSubset<T, ArtefactCreateArgs<ExtArgs>>): Prisma__ArtefactClient<$Result.GetResult<Prisma.$ArtefactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Artefacts.
     * @param {ArtefactCreateManyArgs} args - Arguments to create many Artefacts.
     * @example
     * // Create many Artefacts
     * const artefact = await prisma.artefact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArtefactCreateManyArgs>(args?: SelectSubset<T, ArtefactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Artefact.
     * @param {ArtefactDeleteArgs} args - Arguments to delete one Artefact.
     * @example
     * // Delete one Artefact
     * const Artefact = await prisma.artefact.delete({
     *   where: {
     *     // ... filter to delete one Artefact
     *   }
     * })
     * 
     */
    delete<T extends ArtefactDeleteArgs>(args: SelectSubset<T, ArtefactDeleteArgs<ExtArgs>>): Prisma__ArtefactClient<$Result.GetResult<Prisma.$ArtefactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Artefact.
     * @param {ArtefactUpdateArgs} args - Arguments to update one Artefact.
     * @example
     * // Update one Artefact
     * const artefact = await prisma.artefact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArtefactUpdateArgs>(args: SelectSubset<T, ArtefactUpdateArgs<ExtArgs>>): Prisma__ArtefactClient<$Result.GetResult<Prisma.$ArtefactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Artefacts.
     * @param {ArtefactDeleteManyArgs} args - Arguments to filter Artefacts to delete.
     * @example
     * // Delete a few Artefacts
     * const { count } = await prisma.artefact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArtefactDeleteManyArgs>(args?: SelectSubset<T, ArtefactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artefacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtefactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Artefacts
     * const artefact = await prisma.artefact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArtefactUpdateManyArgs>(args: SelectSubset<T, ArtefactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Artefact.
     * @param {ArtefactUpsertArgs} args - Arguments to update or create a Artefact.
     * @example
     * // Update or create a Artefact
     * const artefact = await prisma.artefact.upsert({
     *   create: {
     *     // ... data to create a Artefact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Artefact we want to update
     *   }
     * })
     */
    upsert<T extends ArtefactUpsertArgs>(args: SelectSubset<T, ArtefactUpsertArgs<ExtArgs>>): Prisma__ArtefactClient<$Result.GetResult<Prisma.$ArtefactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Artefacts that matches the filter.
     * @param {ArtefactFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const artefact = await prisma.artefact.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ArtefactFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Artefact.
     * @param {ArtefactAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const artefact = await prisma.artefact.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ArtefactAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Artefacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtefactCountArgs} args - Arguments to filter Artefacts to count.
     * @example
     * // Count the number of Artefacts
     * const count = await prisma.artefact.count({
     *   where: {
     *     // ... the filter for the Artefacts we want to count
     *   }
     * })
    **/
    count<T extends ArtefactCountArgs>(
      args?: Subset<T, ArtefactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtefactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Artefact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtefactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArtefactAggregateArgs>(args: Subset<T, ArtefactAggregateArgs>): Prisma.PrismaPromise<GetArtefactAggregateType<T>>

    /**
     * Group by Artefact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtefactGroupByArgs} args - Group by arguments.
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
      T extends ArtefactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtefactGroupByArgs['orderBy'] }
        : { orderBy?: ArtefactGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArtefactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtefactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Artefact model
   */
  readonly fields: ArtefactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Artefact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtefactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    artist<T extends Artefact$artistArgs<ExtArgs> = {}>(args?: Subset<T, Artefact$artistArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    exhibitions<T extends Artefact$exhibitionsArgs<ExtArgs> = {}>(args?: Subset<T, Artefact$exhibitionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExhibitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Artefact model
   */
  interface ArtefactFieldRefs {
    readonly id: FieldRef<"Artefact", 'String'>
    readonly title: FieldRef<"Artefact", 'String'>
    readonly artistId: FieldRef<"Artefact", 'String'>
    readonly creationYear: FieldRef<"Artefact", 'Int'>
    readonly description: FieldRef<"Artefact", 'String'>
    readonly artStyle: FieldRef<"Artefact", 'ArtStyleType'>
    readonly imageUrl: FieldRef<"Artefact", 'String'>
    readonly createdAt: FieldRef<"Artefact", 'DateTime'>
    readonly updatedAt: FieldRef<"Artefact", 'DateTime'>
    readonly exhibitionIds: FieldRef<"Artefact", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * Artefact findUnique
   */
  export type ArtefactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artefact
     */
    select?: ArtefactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artefact
     */
    omit?: ArtefactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtefactInclude<ExtArgs> | null
    /**
     * Filter, which Artefact to fetch.
     */
    where: ArtefactWhereUniqueInput
  }

  /**
   * Artefact findUniqueOrThrow
   */
  export type ArtefactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artefact
     */
    select?: ArtefactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artefact
     */
    omit?: ArtefactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtefactInclude<ExtArgs> | null
    /**
     * Filter, which Artefact to fetch.
     */
    where: ArtefactWhereUniqueInput
  }

  /**
   * Artefact findFirst
   */
  export type ArtefactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artefact
     */
    select?: ArtefactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artefact
     */
    omit?: ArtefactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtefactInclude<ExtArgs> | null
    /**
     * Filter, which Artefact to fetch.
     */
    where?: ArtefactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artefacts to fetch.
     */
    orderBy?: ArtefactOrderByWithRelationInput | ArtefactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artefacts.
     */
    cursor?: ArtefactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artefacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artefacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artefacts.
     */
    distinct?: ArtefactScalarFieldEnum | ArtefactScalarFieldEnum[]
  }

  /**
   * Artefact findFirstOrThrow
   */
  export type ArtefactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artefact
     */
    select?: ArtefactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artefact
     */
    omit?: ArtefactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtefactInclude<ExtArgs> | null
    /**
     * Filter, which Artefact to fetch.
     */
    where?: ArtefactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artefacts to fetch.
     */
    orderBy?: ArtefactOrderByWithRelationInput | ArtefactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artefacts.
     */
    cursor?: ArtefactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artefacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artefacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artefacts.
     */
    distinct?: ArtefactScalarFieldEnum | ArtefactScalarFieldEnum[]
  }

  /**
   * Artefact findMany
   */
  export type ArtefactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artefact
     */
    select?: ArtefactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artefact
     */
    omit?: ArtefactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtefactInclude<ExtArgs> | null
    /**
     * Filter, which Artefacts to fetch.
     */
    where?: ArtefactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artefacts to fetch.
     */
    orderBy?: ArtefactOrderByWithRelationInput | ArtefactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Artefacts.
     */
    cursor?: ArtefactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artefacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artefacts.
     */
    skip?: number
    distinct?: ArtefactScalarFieldEnum | ArtefactScalarFieldEnum[]
  }

  /**
   * Artefact create
   */
  export type ArtefactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artefact
     */
    select?: ArtefactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artefact
     */
    omit?: ArtefactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtefactInclude<ExtArgs> | null
    /**
     * The data needed to create a Artefact.
     */
    data: XOR<ArtefactCreateInput, ArtefactUncheckedCreateInput>
  }

  /**
   * Artefact createMany
   */
  export type ArtefactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Artefacts.
     */
    data: ArtefactCreateManyInput | ArtefactCreateManyInput[]
  }

  /**
   * Artefact update
   */
  export type ArtefactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artefact
     */
    select?: ArtefactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artefact
     */
    omit?: ArtefactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtefactInclude<ExtArgs> | null
    /**
     * The data needed to update a Artefact.
     */
    data: XOR<ArtefactUpdateInput, ArtefactUncheckedUpdateInput>
    /**
     * Choose, which Artefact to update.
     */
    where: ArtefactWhereUniqueInput
  }

  /**
   * Artefact updateMany
   */
  export type ArtefactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Artefacts.
     */
    data: XOR<ArtefactUpdateManyMutationInput, ArtefactUncheckedUpdateManyInput>
    /**
     * Filter which Artefacts to update
     */
    where?: ArtefactWhereInput
    /**
     * Limit how many Artefacts to update.
     */
    limit?: number
  }

  /**
   * Artefact upsert
   */
  export type ArtefactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artefact
     */
    select?: ArtefactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artefact
     */
    omit?: ArtefactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtefactInclude<ExtArgs> | null
    /**
     * The filter to search for the Artefact to update in case it exists.
     */
    where: ArtefactWhereUniqueInput
    /**
     * In case the Artefact found by the `where` argument doesn't exist, create a new Artefact with this data.
     */
    create: XOR<ArtefactCreateInput, ArtefactUncheckedCreateInput>
    /**
     * In case the Artefact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtefactUpdateInput, ArtefactUncheckedUpdateInput>
  }

  /**
   * Artefact delete
   */
  export type ArtefactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artefact
     */
    select?: ArtefactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artefact
     */
    omit?: ArtefactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtefactInclude<ExtArgs> | null
    /**
     * Filter which Artefact to delete.
     */
    where: ArtefactWhereUniqueInput
  }

  /**
   * Artefact deleteMany
   */
  export type ArtefactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artefacts to delete
     */
    where?: ArtefactWhereInput
    /**
     * Limit how many Artefacts to delete.
     */
    limit?: number
  }

  /**
   * Artefact findRaw
   */
  export type ArtefactFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Artefact aggregateRaw
   */
  export type ArtefactAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Artefact.artist
   */
  export type Artefact$artistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    where?: ArtistWhereInput
  }

  /**
   * Artefact.exhibitions
   */
  export type Artefact$exhibitionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exhibition
     */
    select?: ExhibitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exhibition
     */
    omit?: ExhibitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExhibitionInclude<ExtArgs> | null
    where?: ExhibitionWhereInput
    orderBy?: ExhibitionOrderByWithRelationInput | ExhibitionOrderByWithRelationInput[]
    cursor?: ExhibitionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExhibitionScalarFieldEnum | ExhibitionScalarFieldEnum[]
  }

  /**
   * Artefact without action
   */
  export type ArtefactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artefact
     */
    select?: ArtefactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artefact
     */
    omit?: ArtefactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtefactInclude<ExtArgs> | null
  }


  /**
   * Model Exhibition
   */

  export type AggregateExhibition = {
    _count: ExhibitionCountAggregateOutputType | null
    _avg: ExhibitionAvgAggregateOutputType | null
    _sum: ExhibitionSumAggregateOutputType | null
    _min: ExhibitionMinAggregateOutputType | null
    _max: ExhibitionMaxAggregateOutputType | null
  }

  export type ExhibitionAvgAggregateOutputType = {
    admissionFee: number | null
  }

  export type ExhibitionSumAggregateOutputType = {
    admissionFee: number | null
  }

  export type ExhibitionMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    theme: string | null
    startDate: Date | null
    endDate: Date | null
    location: string | null
    imageUrl: string | null
    admissionFee: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExhibitionMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    theme: string | null
    startDate: Date | null
    endDate: Date | null
    location: string | null
    imageUrl: string | null
    admissionFee: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExhibitionCountAggregateOutputType = {
    id: number
    title: number
    description: number
    theme: number
    startDate: number
    endDate: number
    location: number
    artefactIds: number
    imageUrl: number
    admissionFee: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ExhibitionAvgAggregateInputType = {
    admissionFee?: true
  }

  export type ExhibitionSumAggregateInputType = {
    admissionFee?: true
  }

  export type ExhibitionMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    theme?: true
    startDate?: true
    endDate?: true
    location?: true
    imageUrl?: true
    admissionFee?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExhibitionMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    theme?: true
    startDate?: true
    endDate?: true
    location?: true
    imageUrl?: true
    admissionFee?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExhibitionCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    theme?: true
    startDate?: true
    endDate?: true
    location?: true
    artefactIds?: true
    imageUrl?: true
    admissionFee?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ExhibitionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exhibition to aggregate.
     */
    where?: ExhibitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exhibitions to fetch.
     */
    orderBy?: ExhibitionOrderByWithRelationInput | ExhibitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExhibitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exhibitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exhibitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exhibitions
    **/
    _count?: true | ExhibitionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExhibitionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExhibitionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExhibitionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExhibitionMaxAggregateInputType
  }

  export type GetExhibitionAggregateType<T extends ExhibitionAggregateArgs> = {
        [P in keyof T & keyof AggregateExhibition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExhibition[P]>
      : GetScalarType<T[P], AggregateExhibition[P]>
  }




  export type ExhibitionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExhibitionWhereInput
    orderBy?: ExhibitionOrderByWithAggregationInput | ExhibitionOrderByWithAggregationInput[]
    by: ExhibitionScalarFieldEnum[] | ExhibitionScalarFieldEnum
    having?: ExhibitionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExhibitionCountAggregateInputType | true
    _avg?: ExhibitionAvgAggregateInputType
    _sum?: ExhibitionSumAggregateInputType
    _min?: ExhibitionMinAggregateInputType
    _max?: ExhibitionMaxAggregateInputType
  }

  export type ExhibitionGroupByOutputType = {
    id: string
    title: string
    description: string
    theme: string | null
    startDate: Date
    endDate: Date
    location: string
    artefactIds: string[]
    imageUrl: string | null
    admissionFee: number | null
    createdAt: Date
    updatedAt: Date
    _count: ExhibitionCountAggregateOutputType | null
    _avg: ExhibitionAvgAggregateOutputType | null
    _sum: ExhibitionSumAggregateOutputType | null
    _min: ExhibitionMinAggregateOutputType | null
    _max: ExhibitionMaxAggregateOutputType | null
  }

  type GetExhibitionGroupByPayload<T extends ExhibitionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExhibitionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExhibitionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExhibitionGroupByOutputType[P]>
            : GetScalarType<T[P], ExhibitionGroupByOutputType[P]>
        }
      >
    >


  export type ExhibitionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    theme?: boolean
    startDate?: boolean
    endDate?: boolean
    location?: boolean
    artefactIds?: boolean
    imageUrl?: boolean
    admissionFee?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    artefacts?: boolean | Exhibition$artefactsArgs<ExtArgs>
    _count?: boolean | ExhibitionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exhibition"]>



  export type ExhibitionSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    theme?: boolean
    startDate?: boolean
    endDate?: boolean
    location?: boolean
    artefactIds?: boolean
    imageUrl?: boolean
    admissionFee?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ExhibitionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "theme" | "startDate" | "endDate" | "location" | "artefactIds" | "imageUrl" | "admissionFee" | "createdAt" | "updatedAt", ExtArgs["result"]["exhibition"]>
  export type ExhibitionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artefacts?: boolean | Exhibition$artefactsArgs<ExtArgs>
    _count?: boolean | ExhibitionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ExhibitionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Exhibition"
    objects: {
      artefacts: Prisma.$ArtefactPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      theme: string | null
      startDate: Date
      endDate: Date
      location: string
      artefactIds: string[]
      imageUrl: string | null
      admissionFee: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["exhibition"]>
    composites: {}
  }

  type ExhibitionGetPayload<S extends boolean | null | undefined | ExhibitionDefaultArgs> = $Result.GetResult<Prisma.$ExhibitionPayload, S>

  type ExhibitionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExhibitionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExhibitionCountAggregateInputType | true
    }

  export interface ExhibitionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Exhibition'], meta: { name: 'Exhibition' } }
    /**
     * Find zero or one Exhibition that matches the filter.
     * @param {ExhibitionFindUniqueArgs} args - Arguments to find a Exhibition
     * @example
     * // Get one Exhibition
     * const exhibition = await prisma.exhibition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExhibitionFindUniqueArgs>(args: SelectSubset<T, ExhibitionFindUniqueArgs<ExtArgs>>): Prisma__ExhibitionClient<$Result.GetResult<Prisma.$ExhibitionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exhibition that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExhibitionFindUniqueOrThrowArgs} args - Arguments to find a Exhibition
     * @example
     * // Get one Exhibition
     * const exhibition = await prisma.exhibition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExhibitionFindUniqueOrThrowArgs>(args: SelectSubset<T, ExhibitionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExhibitionClient<$Result.GetResult<Prisma.$ExhibitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exhibition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExhibitionFindFirstArgs} args - Arguments to find a Exhibition
     * @example
     * // Get one Exhibition
     * const exhibition = await prisma.exhibition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExhibitionFindFirstArgs>(args?: SelectSubset<T, ExhibitionFindFirstArgs<ExtArgs>>): Prisma__ExhibitionClient<$Result.GetResult<Prisma.$ExhibitionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exhibition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExhibitionFindFirstOrThrowArgs} args - Arguments to find a Exhibition
     * @example
     * // Get one Exhibition
     * const exhibition = await prisma.exhibition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExhibitionFindFirstOrThrowArgs>(args?: SelectSubset<T, ExhibitionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExhibitionClient<$Result.GetResult<Prisma.$ExhibitionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exhibitions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExhibitionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exhibitions
     * const exhibitions = await prisma.exhibition.findMany()
     * 
     * // Get first 10 Exhibitions
     * const exhibitions = await prisma.exhibition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exhibitionWithIdOnly = await prisma.exhibition.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExhibitionFindManyArgs>(args?: SelectSubset<T, ExhibitionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExhibitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exhibition.
     * @param {ExhibitionCreateArgs} args - Arguments to create a Exhibition.
     * @example
     * // Create one Exhibition
     * const Exhibition = await prisma.exhibition.create({
     *   data: {
     *     // ... data to create a Exhibition
     *   }
     * })
     * 
     */
    create<T extends ExhibitionCreateArgs>(args: SelectSubset<T, ExhibitionCreateArgs<ExtArgs>>): Prisma__ExhibitionClient<$Result.GetResult<Prisma.$ExhibitionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exhibitions.
     * @param {ExhibitionCreateManyArgs} args - Arguments to create many Exhibitions.
     * @example
     * // Create many Exhibitions
     * const exhibition = await prisma.exhibition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExhibitionCreateManyArgs>(args?: SelectSubset<T, ExhibitionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Exhibition.
     * @param {ExhibitionDeleteArgs} args - Arguments to delete one Exhibition.
     * @example
     * // Delete one Exhibition
     * const Exhibition = await prisma.exhibition.delete({
     *   where: {
     *     // ... filter to delete one Exhibition
     *   }
     * })
     * 
     */
    delete<T extends ExhibitionDeleteArgs>(args: SelectSubset<T, ExhibitionDeleteArgs<ExtArgs>>): Prisma__ExhibitionClient<$Result.GetResult<Prisma.$ExhibitionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exhibition.
     * @param {ExhibitionUpdateArgs} args - Arguments to update one Exhibition.
     * @example
     * // Update one Exhibition
     * const exhibition = await prisma.exhibition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExhibitionUpdateArgs>(args: SelectSubset<T, ExhibitionUpdateArgs<ExtArgs>>): Prisma__ExhibitionClient<$Result.GetResult<Prisma.$ExhibitionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exhibitions.
     * @param {ExhibitionDeleteManyArgs} args - Arguments to filter Exhibitions to delete.
     * @example
     * // Delete a few Exhibitions
     * const { count } = await prisma.exhibition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExhibitionDeleteManyArgs>(args?: SelectSubset<T, ExhibitionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exhibitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExhibitionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exhibitions
     * const exhibition = await prisma.exhibition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExhibitionUpdateManyArgs>(args: SelectSubset<T, ExhibitionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Exhibition.
     * @param {ExhibitionUpsertArgs} args - Arguments to update or create a Exhibition.
     * @example
     * // Update or create a Exhibition
     * const exhibition = await prisma.exhibition.upsert({
     *   create: {
     *     // ... data to create a Exhibition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exhibition we want to update
     *   }
     * })
     */
    upsert<T extends ExhibitionUpsertArgs>(args: SelectSubset<T, ExhibitionUpsertArgs<ExtArgs>>): Prisma__ExhibitionClient<$Result.GetResult<Prisma.$ExhibitionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exhibitions that matches the filter.
     * @param {ExhibitionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const exhibition = await prisma.exhibition.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ExhibitionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Exhibition.
     * @param {ExhibitionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const exhibition = await prisma.exhibition.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ExhibitionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Exhibitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExhibitionCountArgs} args - Arguments to filter Exhibitions to count.
     * @example
     * // Count the number of Exhibitions
     * const count = await prisma.exhibition.count({
     *   where: {
     *     // ... the filter for the Exhibitions we want to count
     *   }
     * })
    **/
    count<T extends ExhibitionCountArgs>(
      args?: Subset<T, ExhibitionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExhibitionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exhibition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExhibitionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExhibitionAggregateArgs>(args: Subset<T, ExhibitionAggregateArgs>): Prisma.PrismaPromise<GetExhibitionAggregateType<T>>

    /**
     * Group by Exhibition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExhibitionGroupByArgs} args - Group by arguments.
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
      T extends ExhibitionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExhibitionGroupByArgs['orderBy'] }
        : { orderBy?: ExhibitionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExhibitionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExhibitionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Exhibition model
   */
  readonly fields: ExhibitionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Exhibition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExhibitionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    artefacts<T extends Exhibition$artefactsArgs<ExtArgs> = {}>(args?: Subset<T, Exhibition$artefactsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtefactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Exhibition model
   */
  interface ExhibitionFieldRefs {
    readonly id: FieldRef<"Exhibition", 'String'>
    readonly title: FieldRef<"Exhibition", 'String'>
    readonly description: FieldRef<"Exhibition", 'String'>
    readonly theme: FieldRef<"Exhibition", 'String'>
    readonly startDate: FieldRef<"Exhibition", 'DateTime'>
    readonly endDate: FieldRef<"Exhibition", 'DateTime'>
    readonly location: FieldRef<"Exhibition", 'String'>
    readonly artefactIds: FieldRef<"Exhibition", 'String[]'>
    readonly imageUrl: FieldRef<"Exhibition", 'String'>
    readonly admissionFee: FieldRef<"Exhibition", 'Float'>
    readonly createdAt: FieldRef<"Exhibition", 'DateTime'>
    readonly updatedAt: FieldRef<"Exhibition", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Exhibition findUnique
   */
  export type ExhibitionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exhibition
     */
    select?: ExhibitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exhibition
     */
    omit?: ExhibitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExhibitionInclude<ExtArgs> | null
    /**
     * Filter, which Exhibition to fetch.
     */
    where: ExhibitionWhereUniqueInput
  }

  /**
   * Exhibition findUniqueOrThrow
   */
  export type ExhibitionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exhibition
     */
    select?: ExhibitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exhibition
     */
    omit?: ExhibitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExhibitionInclude<ExtArgs> | null
    /**
     * Filter, which Exhibition to fetch.
     */
    where: ExhibitionWhereUniqueInput
  }

  /**
   * Exhibition findFirst
   */
  export type ExhibitionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exhibition
     */
    select?: ExhibitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exhibition
     */
    omit?: ExhibitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExhibitionInclude<ExtArgs> | null
    /**
     * Filter, which Exhibition to fetch.
     */
    where?: ExhibitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exhibitions to fetch.
     */
    orderBy?: ExhibitionOrderByWithRelationInput | ExhibitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exhibitions.
     */
    cursor?: ExhibitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exhibitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exhibitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exhibitions.
     */
    distinct?: ExhibitionScalarFieldEnum | ExhibitionScalarFieldEnum[]
  }

  /**
   * Exhibition findFirstOrThrow
   */
  export type ExhibitionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exhibition
     */
    select?: ExhibitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exhibition
     */
    omit?: ExhibitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExhibitionInclude<ExtArgs> | null
    /**
     * Filter, which Exhibition to fetch.
     */
    where?: ExhibitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exhibitions to fetch.
     */
    orderBy?: ExhibitionOrderByWithRelationInput | ExhibitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exhibitions.
     */
    cursor?: ExhibitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exhibitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exhibitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exhibitions.
     */
    distinct?: ExhibitionScalarFieldEnum | ExhibitionScalarFieldEnum[]
  }

  /**
   * Exhibition findMany
   */
  export type ExhibitionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exhibition
     */
    select?: ExhibitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exhibition
     */
    omit?: ExhibitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExhibitionInclude<ExtArgs> | null
    /**
     * Filter, which Exhibitions to fetch.
     */
    where?: ExhibitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exhibitions to fetch.
     */
    orderBy?: ExhibitionOrderByWithRelationInput | ExhibitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exhibitions.
     */
    cursor?: ExhibitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exhibitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exhibitions.
     */
    skip?: number
    distinct?: ExhibitionScalarFieldEnum | ExhibitionScalarFieldEnum[]
  }

  /**
   * Exhibition create
   */
  export type ExhibitionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exhibition
     */
    select?: ExhibitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exhibition
     */
    omit?: ExhibitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExhibitionInclude<ExtArgs> | null
    /**
     * The data needed to create a Exhibition.
     */
    data: XOR<ExhibitionCreateInput, ExhibitionUncheckedCreateInput>
  }

  /**
   * Exhibition createMany
   */
  export type ExhibitionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Exhibitions.
     */
    data: ExhibitionCreateManyInput | ExhibitionCreateManyInput[]
  }

  /**
   * Exhibition update
   */
  export type ExhibitionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exhibition
     */
    select?: ExhibitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exhibition
     */
    omit?: ExhibitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExhibitionInclude<ExtArgs> | null
    /**
     * The data needed to update a Exhibition.
     */
    data: XOR<ExhibitionUpdateInput, ExhibitionUncheckedUpdateInput>
    /**
     * Choose, which Exhibition to update.
     */
    where: ExhibitionWhereUniqueInput
  }

  /**
   * Exhibition updateMany
   */
  export type ExhibitionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Exhibitions.
     */
    data: XOR<ExhibitionUpdateManyMutationInput, ExhibitionUncheckedUpdateManyInput>
    /**
     * Filter which Exhibitions to update
     */
    where?: ExhibitionWhereInput
    /**
     * Limit how many Exhibitions to update.
     */
    limit?: number
  }

  /**
   * Exhibition upsert
   */
  export type ExhibitionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exhibition
     */
    select?: ExhibitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exhibition
     */
    omit?: ExhibitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExhibitionInclude<ExtArgs> | null
    /**
     * The filter to search for the Exhibition to update in case it exists.
     */
    where: ExhibitionWhereUniqueInput
    /**
     * In case the Exhibition found by the `where` argument doesn't exist, create a new Exhibition with this data.
     */
    create: XOR<ExhibitionCreateInput, ExhibitionUncheckedCreateInput>
    /**
     * In case the Exhibition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExhibitionUpdateInput, ExhibitionUncheckedUpdateInput>
  }

  /**
   * Exhibition delete
   */
  export type ExhibitionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exhibition
     */
    select?: ExhibitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exhibition
     */
    omit?: ExhibitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExhibitionInclude<ExtArgs> | null
    /**
     * Filter which Exhibition to delete.
     */
    where: ExhibitionWhereUniqueInput
  }

  /**
   * Exhibition deleteMany
   */
  export type ExhibitionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exhibitions to delete
     */
    where?: ExhibitionWhereInput
    /**
     * Limit how many Exhibitions to delete.
     */
    limit?: number
  }

  /**
   * Exhibition findRaw
   */
  export type ExhibitionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Exhibition aggregateRaw
   */
  export type ExhibitionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Exhibition.artefacts
   */
  export type Exhibition$artefactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artefact
     */
    select?: ArtefactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artefact
     */
    omit?: ArtefactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtefactInclude<ExtArgs> | null
    where?: ArtefactWhereInput
    orderBy?: ArtefactOrderByWithRelationInput | ArtefactOrderByWithRelationInput[]
    cursor?: ArtefactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArtefactScalarFieldEnum | ArtefactScalarFieldEnum[]
  }

  /**
   * Exhibition without action
   */
  export type ExhibitionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exhibition
     */
    select?: ExhibitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exhibition
     */
    omit?: ExhibitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExhibitionInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    firstName: string | null
    lastName: string | null
    hashedPassword: string | null
    role: $Enums.RoleType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    firstName: string | null
    lastName: string | null
    hashedPassword: string | null
    role: $Enums.RoleType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    firstName: number
    lastName: number
    hashedPassword: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    firstName?: true
    lastName?: true
    hashedPassword?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    firstName?: true
    lastName?: true
    hashedPassword?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    firstName?: true
    lastName?: true
    hashedPassword?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    username: string
    firstName: string | null
    lastName: string | null
    hashedPassword: string
    role: $Enums.RoleType
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    firstName?: boolean
    lastName?: boolean
    hashedPassword?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    firstName?: boolean
    lastName?: boolean
    hashedPassword?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "firstName" | "lastName" | "hashedPassword" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      username: string
      firstName: string | null
      lastName: string | null
      hashedPassword: string
      role: $Enums.RoleType
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly hashedPassword: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'RoleType'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const ArtistScalarFieldEnum: {
    id: 'id',
    name: 'name',
    aboriginalName: 'aboriginalName',
    tribe: 'tribe',
    region: 'region',
    biography: 'biography',
    birthYear: 'birthYear',
    deathYear: 'deathYear',
    artStyles: 'artStyles',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ArtistScalarFieldEnum = (typeof ArtistScalarFieldEnum)[keyof typeof ArtistScalarFieldEnum]


  export const ArtefactScalarFieldEnum: {
    id: 'id',
    title: 'title',
    artistId: 'artistId',
    creationYear: 'creationYear',
    description: 'description',
    artStyle: 'artStyle',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    exhibitionIds: 'exhibitionIds'
  };

  export type ArtefactScalarFieldEnum = (typeof ArtefactScalarFieldEnum)[keyof typeof ArtefactScalarFieldEnum]


  export const ExhibitionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    theme: 'theme',
    startDate: 'startDate',
    endDate: 'endDate',
    location: 'location',
    artefactIds: 'artefactIds',
    imageUrl: 'imageUrl',
    admissionFee: 'admissionFee',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ExhibitionScalarFieldEnum = (typeof ExhibitionScalarFieldEnum)[keyof typeof ExhibitionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    firstName: 'firstName',
    lastName: 'lastName',
    hashedPassword: 'hashedPassword',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ArtStyleType[]'
   */
  export type ListEnumArtStyleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ArtStyleType[]'>
    


  /**
   * Reference to a field of type 'ArtStyleType'
   */
  export type EnumArtStyleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ArtStyleType'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'RoleType'
   */
  export type EnumRoleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleType'>
    


  /**
   * Reference to a field of type 'RoleType[]'
   */
  export type ListEnumRoleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleType[]'>
    


  /**
   * Reference to a field of type 'DimensionUnit'
   */
  export type EnumDimensionUnitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DimensionUnit'>
    


  /**
   * Reference to a field of type 'DimensionUnit[]'
   */
  export type ListEnumDimensionUnitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DimensionUnit[]'>
    
  /**
   * Deep Input Types
   */


  export type ArtistWhereInput = {
    AND?: ArtistWhereInput | ArtistWhereInput[]
    OR?: ArtistWhereInput[]
    NOT?: ArtistWhereInput | ArtistWhereInput[]
    id?: StringFilter<"Artist"> | string
    name?: StringFilter<"Artist"> | string
    aboriginalName?: StringNullableFilter<"Artist"> | string | null
    tribe?: StringNullableFilter<"Artist"> | string | null
    region?: StringNullableFilter<"Artist"> | string | null
    biography?: StringFilter<"Artist"> | string
    birthYear?: IntNullableFilter<"Artist"> | number | null
    deathYear?: IntNullableFilter<"Artist"> | number | null
    artStyles?: EnumArtStyleTypeNullableListFilter<"Artist">
    imageUrl?: StringNullableFilter<"Artist"> | string | null
    createdAt?: DateTimeFilter<"Artist"> | Date | string
    updatedAt?: DateTimeFilter<"Artist"> | Date | string
    artefacts?: ArtefactListRelationFilter
  }

  export type ArtistOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    aboriginalName?: SortOrder
    tribe?: SortOrder
    region?: SortOrder
    biography?: SortOrder
    birthYear?: SortOrder
    deathYear?: SortOrder
    artStyles?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    artefacts?: ArtefactOrderByRelationAggregateInput
  }

  export type ArtistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ArtistWhereInput | ArtistWhereInput[]
    OR?: ArtistWhereInput[]
    NOT?: ArtistWhereInput | ArtistWhereInput[]
    name?: StringFilter<"Artist"> | string
    aboriginalName?: StringNullableFilter<"Artist"> | string | null
    tribe?: StringNullableFilter<"Artist"> | string | null
    region?: StringNullableFilter<"Artist"> | string | null
    biography?: StringFilter<"Artist"> | string
    birthYear?: IntNullableFilter<"Artist"> | number | null
    deathYear?: IntNullableFilter<"Artist"> | number | null
    artStyles?: EnumArtStyleTypeNullableListFilter<"Artist">
    imageUrl?: StringNullableFilter<"Artist"> | string | null
    createdAt?: DateTimeFilter<"Artist"> | Date | string
    updatedAt?: DateTimeFilter<"Artist"> | Date | string
    artefacts?: ArtefactListRelationFilter
  }, "id">

  export type ArtistOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    aboriginalName?: SortOrder
    tribe?: SortOrder
    region?: SortOrder
    biography?: SortOrder
    birthYear?: SortOrder
    deathYear?: SortOrder
    artStyles?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ArtistCountOrderByAggregateInput
    _avg?: ArtistAvgOrderByAggregateInput
    _max?: ArtistMaxOrderByAggregateInput
    _min?: ArtistMinOrderByAggregateInput
    _sum?: ArtistSumOrderByAggregateInput
  }

  export type ArtistScalarWhereWithAggregatesInput = {
    AND?: ArtistScalarWhereWithAggregatesInput | ArtistScalarWhereWithAggregatesInput[]
    OR?: ArtistScalarWhereWithAggregatesInput[]
    NOT?: ArtistScalarWhereWithAggregatesInput | ArtistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Artist"> | string
    name?: StringWithAggregatesFilter<"Artist"> | string
    aboriginalName?: StringNullableWithAggregatesFilter<"Artist"> | string | null
    tribe?: StringNullableWithAggregatesFilter<"Artist"> | string | null
    region?: StringNullableWithAggregatesFilter<"Artist"> | string | null
    biography?: StringWithAggregatesFilter<"Artist"> | string
    birthYear?: IntNullableWithAggregatesFilter<"Artist"> | number | null
    deathYear?: IntNullableWithAggregatesFilter<"Artist"> | number | null
    artStyles?: EnumArtStyleTypeNullableListFilter<"Artist">
    imageUrl?: StringNullableWithAggregatesFilter<"Artist"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Artist"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Artist"> | Date | string
  }

  export type ArtefactWhereInput = {
    AND?: ArtefactWhereInput | ArtefactWhereInput[]
    OR?: ArtefactWhereInput[]
    NOT?: ArtefactWhereInput | ArtefactWhereInput[]
    id?: StringFilter<"Artefact"> | string
    title?: StringFilter<"Artefact"> | string
    artistId?: StringNullableFilter<"Artefact"> | string | null
    creationYear?: IntNullableFilter<"Artefact"> | number | null
    description?: StringNullableFilter<"Artefact"> | string | null
    dimensions?: XOR<DimensionsNullableCompositeFilter, DimensionsObjectEqualityInput> | null
    artStyle?: EnumArtStyleTypeFilter<"Artefact"> | $Enums.ArtStyleType
    imageUrl?: StringFilter<"Artefact"> | string
    createdAt?: DateTimeFilter<"Artefact"> | Date | string
    updatedAt?: DateTimeFilter<"Artefact"> | Date | string
    exhibitionIds?: StringNullableListFilter<"Artefact">
    artist?: XOR<ArtistNullableScalarRelationFilter, ArtistWhereInput> | null
    exhibitions?: ExhibitionListRelationFilter
  }

  export type ArtefactOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    artistId?: SortOrder
    creationYear?: SortOrder
    description?: SortOrder
    dimensions?: DimensionsOrderByInput
    artStyle?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    exhibitionIds?: SortOrder
    artist?: ArtistOrderByWithRelationInput
    exhibitions?: ExhibitionOrderByRelationAggregateInput
  }

  export type ArtefactWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ArtefactWhereInput | ArtefactWhereInput[]
    OR?: ArtefactWhereInput[]
    NOT?: ArtefactWhereInput | ArtefactWhereInput[]
    title?: StringFilter<"Artefact"> | string
    artistId?: StringNullableFilter<"Artefact"> | string | null
    creationYear?: IntNullableFilter<"Artefact"> | number | null
    description?: StringNullableFilter<"Artefact"> | string | null
    dimensions?: XOR<DimensionsNullableCompositeFilter, DimensionsObjectEqualityInput> | null
    artStyle?: EnumArtStyleTypeFilter<"Artefact"> | $Enums.ArtStyleType
    imageUrl?: StringFilter<"Artefact"> | string
    createdAt?: DateTimeFilter<"Artefact"> | Date | string
    updatedAt?: DateTimeFilter<"Artefact"> | Date | string
    exhibitionIds?: StringNullableListFilter<"Artefact">
    artist?: XOR<ArtistNullableScalarRelationFilter, ArtistWhereInput> | null
    exhibitions?: ExhibitionListRelationFilter
  }, "id">

  export type ArtefactOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    artistId?: SortOrder
    creationYear?: SortOrder
    description?: SortOrder
    artStyle?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    exhibitionIds?: SortOrder
    _count?: ArtefactCountOrderByAggregateInput
    _avg?: ArtefactAvgOrderByAggregateInput
    _max?: ArtefactMaxOrderByAggregateInput
    _min?: ArtefactMinOrderByAggregateInput
    _sum?: ArtefactSumOrderByAggregateInput
  }

  export type ArtefactScalarWhereWithAggregatesInput = {
    AND?: ArtefactScalarWhereWithAggregatesInput | ArtefactScalarWhereWithAggregatesInput[]
    OR?: ArtefactScalarWhereWithAggregatesInput[]
    NOT?: ArtefactScalarWhereWithAggregatesInput | ArtefactScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Artefact"> | string
    title?: StringWithAggregatesFilter<"Artefact"> | string
    artistId?: StringNullableWithAggregatesFilter<"Artefact"> | string | null
    creationYear?: IntNullableWithAggregatesFilter<"Artefact"> | number | null
    description?: StringNullableWithAggregatesFilter<"Artefact"> | string | null
    artStyle?: EnumArtStyleTypeWithAggregatesFilter<"Artefact"> | $Enums.ArtStyleType
    imageUrl?: StringWithAggregatesFilter<"Artefact"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Artefact"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Artefact"> | Date | string
    exhibitionIds?: StringNullableListFilter<"Artefact">
  }

  export type ExhibitionWhereInput = {
    AND?: ExhibitionWhereInput | ExhibitionWhereInput[]
    OR?: ExhibitionWhereInput[]
    NOT?: ExhibitionWhereInput | ExhibitionWhereInput[]
    id?: StringFilter<"Exhibition"> | string
    title?: StringFilter<"Exhibition"> | string
    description?: StringFilter<"Exhibition"> | string
    theme?: StringNullableFilter<"Exhibition"> | string | null
    startDate?: DateTimeFilter<"Exhibition"> | Date | string
    endDate?: DateTimeFilter<"Exhibition"> | Date | string
    location?: StringFilter<"Exhibition"> | string
    artefactIds?: StringNullableListFilter<"Exhibition">
    imageUrl?: StringNullableFilter<"Exhibition"> | string | null
    admissionFee?: FloatNullableFilter<"Exhibition"> | number | null
    createdAt?: DateTimeFilter<"Exhibition"> | Date | string
    updatedAt?: DateTimeFilter<"Exhibition"> | Date | string
    artefacts?: ArtefactListRelationFilter
  }

  export type ExhibitionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    theme?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    location?: SortOrder
    artefactIds?: SortOrder
    imageUrl?: SortOrder
    admissionFee?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    artefacts?: ArtefactOrderByRelationAggregateInput
  }

  export type ExhibitionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExhibitionWhereInput | ExhibitionWhereInput[]
    OR?: ExhibitionWhereInput[]
    NOT?: ExhibitionWhereInput | ExhibitionWhereInput[]
    title?: StringFilter<"Exhibition"> | string
    description?: StringFilter<"Exhibition"> | string
    theme?: StringNullableFilter<"Exhibition"> | string | null
    startDate?: DateTimeFilter<"Exhibition"> | Date | string
    endDate?: DateTimeFilter<"Exhibition"> | Date | string
    location?: StringFilter<"Exhibition"> | string
    artefactIds?: StringNullableListFilter<"Exhibition">
    imageUrl?: StringNullableFilter<"Exhibition"> | string | null
    admissionFee?: FloatNullableFilter<"Exhibition"> | number | null
    createdAt?: DateTimeFilter<"Exhibition"> | Date | string
    updatedAt?: DateTimeFilter<"Exhibition"> | Date | string
    artefacts?: ArtefactListRelationFilter
  }, "id">

  export type ExhibitionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    theme?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    location?: SortOrder
    artefactIds?: SortOrder
    imageUrl?: SortOrder
    admissionFee?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ExhibitionCountOrderByAggregateInput
    _avg?: ExhibitionAvgOrderByAggregateInput
    _max?: ExhibitionMaxOrderByAggregateInput
    _min?: ExhibitionMinOrderByAggregateInput
    _sum?: ExhibitionSumOrderByAggregateInput
  }

  export type ExhibitionScalarWhereWithAggregatesInput = {
    AND?: ExhibitionScalarWhereWithAggregatesInput | ExhibitionScalarWhereWithAggregatesInput[]
    OR?: ExhibitionScalarWhereWithAggregatesInput[]
    NOT?: ExhibitionScalarWhereWithAggregatesInput | ExhibitionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Exhibition"> | string
    title?: StringWithAggregatesFilter<"Exhibition"> | string
    description?: StringWithAggregatesFilter<"Exhibition"> | string
    theme?: StringNullableWithAggregatesFilter<"Exhibition"> | string | null
    startDate?: DateTimeWithAggregatesFilter<"Exhibition"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Exhibition"> | Date | string
    location?: StringWithAggregatesFilter<"Exhibition"> | string
    artefactIds?: StringNullableListFilter<"Exhibition">
    imageUrl?: StringNullableWithAggregatesFilter<"Exhibition"> | string | null
    admissionFee?: FloatNullableWithAggregatesFilter<"Exhibition"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Exhibition"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Exhibition"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    hashedPassword?: StringFilter<"User"> | string
    role?: EnumRoleTypeFilter<"User"> | $Enums.RoleType
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    hashedPassword?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    hashedPassword?: StringFilter<"User"> | string
    role?: EnumRoleTypeFilter<"User"> | $Enums.RoleType
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    hashedPassword?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    hashedPassword?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleTypeWithAggregatesFilter<"User"> | $Enums.RoleType
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ArtistCreateInput = {
    id?: string
    name: string
    aboriginalName?: string | null
    tribe?: string | null
    region?: string | null
    biography: string
    birthYear?: number | null
    deathYear?: number | null
    artStyles?: ArtistCreateartStylesInput | $Enums.ArtStyleType[]
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    artefacts?: ArtefactCreateNestedManyWithoutArtistInput
  }

  export type ArtistUncheckedCreateInput = {
    id?: string
    name: string
    aboriginalName?: string | null
    tribe?: string | null
    region?: string | null
    biography: string
    birthYear?: number | null
    deathYear?: number | null
    artStyles?: ArtistCreateartStylesInput | $Enums.ArtStyleType[]
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    artefacts?: ArtefactUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    aboriginalName?: NullableStringFieldUpdateOperationsInput | string | null
    tribe?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: StringFieldUpdateOperationsInput | string
    birthYear?: NullableIntFieldUpdateOperationsInput | number | null
    deathYear?: NullableIntFieldUpdateOperationsInput | number | null
    artStyles?: ArtistUpdateartStylesInput | $Enums.ArtStyleType[]
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artefacts?: ArtefactUpdateManyWithoutArtistNestedInput
  }

  export type ArtistUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    aboriginalName?: NullableStringFieldUpdateOperationsInput | string | null
    tribe?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: StringFieldUpdateOperationsInput | string
    birthYear?: NullableIntFieldUpdateOperationsInput | number | null
    deathYear?: NullableIntFieldUpdateOperationsInput | number | null
    artStyles?: ArtistUpdateartStylesInput | $Enums.ArtStyleType[]
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artefacts?: ArtefactUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type ArtistCreateManyInput = {
    id?: string
    name: string
    aboriginalName?: string | null
    tribe?: string | null
    region?: string | null
    biography: string
    birthYear?: number | null
    deathYear?: number | null
    artStyles?: ArtistCreateartStylesInput | $Enums.ArtStyleType[]
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArtistUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    aboriginalName?: NullableStringFieldUpdateOperationsInput | string | null
    tribe?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: StringFieldUpdateOperationsInput | string
    birthYear?: NullableIntFieldUpdateOperationsInput | number | null
    deathYear?: NullableIntFieldUpdateOperationsInput | number | null
    artStyles?: ArtistUpdateartStylesInput | $Enums.ArtStyleType[]
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtistUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    aboriginalName?: NullableStringFieldUpdateOperationsInput | string | null
    tribe?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: StringFieldUpdateOperationsInput | string
    birthYear?: NullableIntFieldUpdateOperationsInput | number | null
    deathYear?: NullableIntFieldUpdateOperationsInput | number | null
    artStyles?: ArtistUpdateartStylesInput | $Enums.ArtStyleType[]
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtefactCreateInput = {
    id?: string
    title: string
    creationYear?: number | null
    description?: string | null
    dimensions?: XOR<DimensionsNullableCreateEnvelopeInput, DimensionsCreateInput> | null
    artStyle: $Enums.ArtStyleType
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    artist?: ArtistCreateNestedOneWithoutArtefactsInput
    exhibitions?: ExhibitionCreateNestedManyWithoutArtefactsInput
  }

  export type ArtefactUncheckedCreateInput = {
    id?: string
    title: string
    artistId?: string | null
    creationYear?: number | null
    description?: string | null
    dimensions?: XOR<DimensionsNullableCreateEnvelopeInput, DimensionsCreateInput> | null
    artStyle: $Enums.ArtStyleType
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    exhibitionIds?: ArtefactCreateexhibitionIdsInput | string[]
    exhibitions?: ExhibitionUncheckedCreateNestedManyWithoutArtefactsInput
  }

  export type ArtefactUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    creationYear?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dimensions?: XOR<DimensionsNullableUpdateEnvelopeInput, DimensionsCreateInput> | null
    artStyle?: EnumArtStyleTypeFieldUpdateOperationsInput | $Enums.ArtStyleType
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artist?: ArtistUpdateOneWithoutArtefactsNestedInput
    exhibitions?: ExhibitionUpdateManyWithoutArtefactsNestedInput
  }

  export type ArtefactUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    artistId?: NullableStringFieldUpdateOperationsInput | string | null
    creationYear?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dimensions?: XOR<DimensionsNullableUpdateEnvelopeInput, DimensionsCreateInput> | null
    artStyle?: EnumArtStyleTypeFieldUpdateOperationsInput | $Enums.ArtStyleType
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exhibitionIds?: ArtefactUpdateexhibitionIdsInput | string[]
    exhibitions?: ExhibitionUncheckedUpdateManyWithoutArtefactsNestedInput
  }

  export type ArtefactCreateManyInput = {
    id?: string
    title: string
    artistId?: string | null
    creationYear?: number | null
    description?: string | null
    dimensions?: XOR<DimensionsNullableCreateEnvelopeInput, DimensionsCreateInput> | null
    artStyle: $Enums.ArtStyleType
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    exhibitionIds?: ArtefactCreateexhibitionIdsInput | string[]
  }

  export type ArtefactUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    creationYear?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dimensions?: XOR<DimensionsNullableUpdateEnvelopeInput, DimensionsCreateInput> | null
    artStyle?: EnumArtStyleTypeFieldUpdateOperationsInput | $Enums.ArtStyleType
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtefactUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    artistId?: NullableStringFieldUpdateOperationsInput | string | null
    creationYear?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dimensions?: XOR<DimensionsNullableUpdateEnvelopeInput, DimensionsCreateInput> | null
    artStyle?: EnumArtStyleTypeFieldUpdateOperationsInput | $Enums.ArtStyleType
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exhibitionIds?: ArtefactUpdateexhibitionIdsInput | string[]
  }

  export type ExhibitionCreateInput = {
    id?: string
    title: string
    description: string
    theme?: string | null
    startDate: Date | string
    endDate: Date | string
    location: string
    imageUrl?: string | null
    admissionFee?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    artefacts?: ArtefactCreateNestedManyWithoutExhibitionsInput
  }

  export type ExhibitionUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    theme?: string | null
    startDate: Date | string
    endDate: Date | string
    location: string
    artefactIds?: ExhibitionCreateartefactIdsInput | string[]
    imageUrl?: string | null
    admissionFee?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    artefacts?: ArtefactUncheckedCreateNestedManyWithoutExhibitionsInput
  }

  export type ExhibitionUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    admissionFee?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artefacts?: ArtefactUpdateManyWithoutExhibitionsNestedInput
  }

  export type ExhibitionUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    artefactIds?: ExhibitionUpdateartefactIdsInput | string[]
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    admissionFee?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artefacts?: ArtefactUncheckedUpdateManyWithoutExhibitionsNestedInput
  }

  export type ExhibitionCreateManyInput = {
    id?: string
    title: string
    description: string
    theme?: string | null
    startDate: Date | string
    endDate: Date | string
    location: string
    artefactIds?: ExhibitionCreateartefactIdsInput | string[]
    imageUrl?: string | null
    admissionFee?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExhibitionUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    admissionFee?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExhibitionUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    artefactIds?: ExhibitionUpdateartefactIdsInput | string[]
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    admissionFee?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    username: string
    firstName?: string | null
    lastName?: string | null
    hashedPassword: string
    role?: $Enums.RoleType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    username: string
    firstName?: string | null
    lastName?: string | null
    hashedPassword: string
    role?: $Enums.RoleType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    username: string
    firstName?: string | null
    lastName?: string | null
    hashedPassword: string
    role?: $Enums.RoleType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
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
    isSet?: boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type EnumArtStyleTypeNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.ArtStyleType[] | ListEnumArtStyleTypeFieldRefInput<$PrismaModel> | null
    has?: $Enums.ArtStyleType | EnumArtStyleTypeFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.ArtStyleType[] | ListEnumArtStyleTypeFieldRefInput<$PrismaModel>
    hasSome?: $Enums.ArtStyleType[] | ListEnumArtStyleTypeFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type ArtefactListRelationFilter = {
    every?: ArtefactWhereInput
    some?: ArtefactWhereInput
    none?: ArtefactWhereInput
  }

  export type ArtefactOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArtistCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    aboriginalName?: SortOrder
    tribe?: SortOrder
    region?: SortOrder
    biography?: SortOrder
    birthYear?: SortOrder
    deathYear?: SortOrder
    artStyles?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArtistAvgOrderByAggregateInput = {
    birthYear?: SortOrder
    deathYear?: SortOrder
  }

  export type ArtistMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    aboriginalName?: SortOrder
    tribe?: SortOrder
    region?: SortOrder
    biography?: SortOrder
    birthYear?: SortOrder
    deathYear?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArtistMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    aboriginalName?: SortOrder
    tribe?: SortOrder
    region?: SortOrder
    biography?: SortOrder
    birthYear?: SortOrder
    deathYear?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArtistSumOrderByAggregateInput = {
    birthYear?: SortOrder
    deathYear?: SortOrder
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
    isSet?: boolean
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
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

  export type DimensionsNullableCompositeFilter = {
    equals?: DimensionsObjectEqualityInput | null
    is?: DimensionsWhereInput | null
    isNot?: DimensionsWhereInput | null
    isSet?: boolean
  }

  export type DimensionsObjectEqualityInput = {
    height: number
    width: number
    depth?: number | null
    unit: $Enums.DimensionUnit
  }

  export type EnumArtStyleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ArtStyleType | EnumArtStyleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ArtStyleType[] | ListEnumArtStyleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ArtStyleType[] | ListEnumArtStyleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumArtStyleTypeFilter<$PrismaModel> | $Enums.ArtStyleType
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ArtistNullableScalarRelationFilter = {
    is?: ArtistWhereInput | null
    isNot?: ArtistWhereInput | null
  }

  export type ExhibitionListRelationFilter = {
    every?: ExhibitionWhereInput
    some?: ExhibitionWhereInput
    none?: ExhibitionWhereInput
  }

  export type DimensionsOrderByInput = {
    height?: SortOrder
    width?: SortOrder
    depth?: SortOrder
    unit?: SortOrder
  }

  export type ExhibitionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArtefactCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    artistId?: SortOrder
    creationYear?: SortOrder
    description?: SortOrder
    artStyle?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    exhibitionIds?: SortOrder
  }

  export type ArtefactAvgOrderByAggregateInput = {
    creationYear?: SortOrder
  }

  export type ArtefactMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    artistId?: SortOrder
    creationYear?: SortOrder
    description?: SortOrder
    artStyle?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArtefactMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    artistId?: SortOrder
    creationYear?: SortOrder
    description?: SortOrder
    artStyle?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArtefactSumOrderByAggregateInput = {
    creationYear?: SortOrder
  }

  export type EnumArtStyleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ArtStyleType | EnumArtStyleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ArtStyleType[] | ListEnumArtStyleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ArtStyleType[] | ListEnumArtStyleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumArtStyleTypeWithAggregatesFilter<$PrismaModel> | $Enums.ArtStyleType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumArtStyleTypeFilter<$PrismaModel>
    _max?: NestedEnumArtStyleTypeFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type ExhibitionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    theme?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    location?: SortOrder
    artefactIds?: SortOrder
    imageUrl?: SortOrder
    admissionFee?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExhibitionAvgOrderByAggregateInput = {
    admissionFee?: SortOrder
  }

  export type ExhibitionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    theme?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    location?: SortOrder
    imageUrl?: SortOrder
    admissionFee?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExhibitionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    theme?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    location?: SortOrder
    imageUrl?: SortOrder
    admissionFee?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExhibitionSumOrderByAggregateInput = {
    admissionFee?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type EnumRoleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleType | EnumRoleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RoleType[] | ListEnumRoleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleType[] | ListEnumRoleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleTypeFilter<$PrismaModel> | $Enums.RoleType
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    hashedPassword?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    hashedPassword?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    hashedPassword?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRoleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleType | EnumRoleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RoleType[] | ListEnumRoleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleType[] | ListEnumRoleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleTypeWithAggregatesFilter<$PrismaModel> | $Enums.RoleType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleTypeFilter<$PrismaModel>
    _max?: NestedEnumRoleTypeFilter<$PrismaModel>
  }

  export type ArtistCreateartStylesInput = {
    set: $Enums.ArtStyleType[]
  }

  export type ArtefactCreateNestedManyWithoutArtistInput = {
    create?: XOR<ArtefactCreateWithoutArtistInput, ArtefactUncheckedCreateWithoutArtistInput> | ArtefactCreateWithoutArtistInput[] | ArtefactUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: ArtefactCreateOrConnectWithoutArtistInput | ArtefactCreateOrConnectWithoutArtistInput[]
    createMany?: ArtefactCreateManyArtistInputEnvelope
    connect?: ArtefactWhereUniqueInput | ArtefactWhereUniqueInput[]
  }

  export type ArtefactUncheckedCreateNestedManyWithoutArtistInput = {
    create?: XOR<ArtefactCreateWithoutArtistInput, ArtefactUncheckedCreateWithoutArtistInput> | ArtefactCreateWithoutArtistInput[] | ArtefactUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: ArtefactCreateOrConnectWithoutArtistInput | ArtefactCreateOrConnectWithoutArtistInput[]
    createMany?: ArtefactCreateManyArtistInputEnvelope
    connect?: ArtefactWhereUniqueInput | ArtefactWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type ArtistUpdateartStylesInput = {
    set?: $Enums.ArtStyleType[]
    push?: $Enums.ArtStyleType | $Enums.ArtStyleType[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ArtefactUpdateManyWithoutArtistNestedInput = {
    create?: XOR<ArtefactCreateWithoutArtistInput, ArtefactUncheckedCreateWithoutArtistInput> | ArtefactCreateWithoutArtistInput[] | ArtefactUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: ArtefactCreateOrConnectWithoutArtistInput | ArtefactCreateOrConnectWithoutArtistInput[]
    upsert?: ArtefactUpsertWithWhereUniqueWithoutArtistInput | ArtefactUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: ArtefactCreateManyArtistInputEnvelope
    set?: ArtefactWhereUniqueInput | ArtefactWhereUniqueInput[]
    disconnect?: ArtefactWhereUniqueInput | ArtefactWhereUniqueInput[]
    delete?: ArtefactWhereUniqueInput | ArtefactWhereUniqueInput[]
    connect?: ArtefactWhereUniqueInput | ArtefactWhereUniqueInput[]
    update?: ArtefactUpdateWithWhereUniqueWithoutArtistInput | ArtefactUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: ArtefactUpdateManyWithWhereWithoutArtistInput | ArtefactUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: ArtefactScalarWhereInput | ArtefactScalarWhereInput[]
  }

  export type ArtefactUncheckedUpdateManyWithoutArtistNestedInput = {
    create?: XOR<ArtefactCreateWithoutArtistInput, ArtefactUncheckedCreateWithoutArtistInput> | ArtefactCreateWithoutArtistInput[] | ArtefactUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: ArtefactCreateOrConnectWithoutArtistInput | ArtefactCreateOrConnectWithoutArtistInput[]
    upsert?: ArtefactUpsertWithWhereUniqueWithoutArtistInput | ArtefactUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: ArtefactCreateManyArtistInputEnvelope
    set?: ArtefactWhereUniqueInput | ArtefactWhereUniqueInput[]
    disconnect?: ArtefactWhereUniqueInput | ArtefactWhereUniqueInput[]
    delete?: ArtefactWhereUniqueInput | ArtefactWhereUniqueInput[]
    connect?: ArtefactWhereUniqueInput | ArtefactWhereUniqueInput[]
    update?: ArtefactUpdateWithWhereUniqueWithoutArtistInput | ArtefactUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: ArtefactUpdateManyWithWhereWithoutArtistInput | ArtefactUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: ArtefactScalarWhereInput | ArtefactScalarWhereInput[]
  }

  export type DimensionsNullableCreateEnvelopeInput = {
    set?: DimensionsCreateInput | null
  }

  export type DimensionsCreateInput = {
    height: number
    width: number
    depth?: number | null
    unit: $Enums.DimensionUnit
  }

  export type ArtistCreateNestedOneWithoutArtefactsInput = {
    create?: XOR<ArtistCreateWithoutArtefactsInput, ArtistUncheckedCreateWithoutArtefactsInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutArtefactsInput
    connect?: ArtistWhereUniqueInput
  }

  export type ExhibitionCreateNestedManyWithoutArtefactsInput = {
    create?: XOR<ExhibitionCreateWithoutArtefactsInput, ExhibitionUncheckedCreateWithoutArtefactsInput> | ExhibitionCreateWithoutArtefactsInput[] | ExhibitionUncheckedCreateWithoutArtefactsInput[]
    connectOrCreate?: ExhibitionCreateOrConnectWithoutArtefactsInput | ExhibitionCreateOrConnectWithoutArtefactsInput[]
    connect?: ExhibitionWhereUniqueInput | ExhibitionWhereUniqueInput[]
  }

  export type ArtefactCreateexhibitionIdsInput = {
    set: string[]
  }

  export type ExhibitionUncheckedCreateNestedManyWithoutArtefactsInput = {
    create?: XOR<ExhibitionCreateWithoutArtefactsInput, ExhibitionUncheckedCreateWithoutArtefactsInput> | ExhibitionCreateWithoutArtefactsInput[] | ExhibitionUncheckedCreateWithoutArtefactsInput[]
    connectOrCreate?: ExhibitionCreateOrConnectWithoutArtefactsInput | ExhibitionCreateOrConnectWithoutArtefactsInput[]
    connect?: ExhibitionWhereUniqueInput | ExhibitionWhereUniqueInput[]
  }

  export type DimensionsNullableUpdateEnvelopeInput = {
    set?: DimensionsCreateInput | null
    upsert?: DimensionsUpsertInput
    unset?: boolean
  }

  export type EnumArtStyleTypeFieldUpdateOperationsInput = {
    set?: $Enums.ArtStyleType
  }

  export type ArtistUpdateOneWithoutArtefactsNestedInput = {
    create?: XOR<ArtistCreateWithoutArtefactsInput, ArtistUncheckedCreateWithoutArtefactsInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutArtefactsInput
    upsert?: ArtistUpsertWithoutArtefactsInput
    disconnect?: boolean
    delete?: ArtistWhereInput | boolean
    connect?: ArtistWhereUniqueInput
    update?: XOR<XOR<ArtistUpdateToOneWithWhereWithoutArtefactsInput, ArtistUpdateWithoutArtefactsInput>, ArtistUncheckedUpdateWithoutArtefactsInput>
  }

  export type ExhibitionUpdateManyWithoutArtefactsNestedInput = {
    create?: XOR<ExhibitionCreateWithoutArtefactsInput, ExhibitionUncheckedCreateWithoutArtefactsInput> | ExhibitionCreateWithoutArtefactsInput[] | ExhibitionUncheckedCreateWithoutArtefactsInput[]
    connectOrCreate?: ExhibitionCreateOrConnectWithoutArtefactsInput | ExhibitionCreateOrConnectWithoutArtefactsInput[]
    upsert?: ExhibitionUpsertWithWhereUniqueWithoutArtefactsInput | ExhibitionUpsertWithWhereUniqueWithoutArtefactsInput[]
    set?: ExhibitionWhereUniqueInput | ExhibitionWhereUniqueInput[]
    disconnect?: ExhibitionWhereUniqueInput | ExhibitionWhereUniqueInput[]
    delete?: ExhibitionWhereUniqueInput | ExhibitionWhereUniqueInput[]
    connect?: ExhibitionWhereUniqueInput | ExhibitionWhereUniqueInput[]
    update?: ExhibitionUpdateWithWhereUniqueWithoutArtefactsInput | ExhibitionUpdateWithWhereUniqueWithoutArtefactsInput[]
    updateMany?: ExhibitionUpdateManyWithWhereWithoutArtefactsInput | ExhibitionUpdateManyWithWhereWithoutArtefactsInput[]
    deleteMany?: ExhibitionScalarWhereInput | ExhibitionScalarWhereInput[]
  }

  export type ArtefactUpdateexhibitionIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ExhibitionUncheckedUpdateManyWithoutArtefactsNestedInput = {
    create?: XOR<ExhibitionCreateWithoutArtefactsInput, ExhibitionUncheckedCreateWithoutArtefactsInput> | ExhibitionCreateWithoutArtefactsInput[] | ExhibitionUncheckedCreateWithoutArtefactsInput[]
    connectOrCreate?: ExhibitionCreateOrConnectWithoutArtefactsInput | ExhibitionCreateOrConnectWithoutArtefactsInput[]
    upsert?: ExhibitionUpsertWithWhereUniqueWithoutArtefactsInput | ExhibitionUpsertWithWhereUniqueWithoutArtefactsInput[]
    set?: ExhibitionWhereUniqueInput | ExhibitionWhereUniqueInput[]
    disconnect?: ExhibitionWhereUniqueInput | ExhibitionWhereUniqueInput[]
    delete?: ExhibitionWhereUniqueInput | ExhibitionWhereUniqueInput[]
    connect?: ExhibitionWhereUniqueInput | ExhibitionWhereUniqueInput[]
    update?: ExhibitionUpdateWithWhereUniqueWithoutArtefactsInput | ExhibitionUpdateWithWhereUniqueWithoutArtefactsInput[]
    updateMany?: ExhibitionUpdateManyWithWhereWithoutArtefactsInput | ExhibitionUpdateManyWithWhereWithoutArtefactsInput[]
    deleteMany?: ExhibitionScalarWhereInput | ExhibitionScalarWhereInput[]
  }

  export type ArtefactCreateNestedManyWithoutExhibitionsInput = {
    create?: XOR<ArtefactCreateWithoutExhibitionsInput, ArtefactUncheckedCreateWithoutExhibitionsInput> | ArtefactCreateWithoutExhibitionsInput[] | ArtefactUncheckedCreateWithoutExhibitionsInput[]
    connectOrCreate?: ArtefactCreateOrConnectWithoutExhibitionsInput | ArtefactCreateOrConnectWithoutExhibitionsInput[]
    connect?: ArtefactWhereUniqueInput | ArtefactWhereUniqueInput[]
  }

  export type ExhibitionCreateartefactIdsInput = {
    set: string[]
  }

  export type ArtefactUncheckedCreateNestedManyWithoutExhibitionsInput = {
    create?: XOR<ArtefactCreateWithoutExhibitionsInput, ArtefactUncheckedCreateWithoutExhibitionsInput> | ArtefactCreateWithoutExhibitionsInput[] | ArtefactUncheckedCreateWithoutExhibitionsInput[]
    connectOrCreate?: ArtefactCreateOrConnectWithoutExhibitionsInput | ArtefactCreateOrConnectWithoutExhibitionsInput[]
    connect?: ArtefactWhereUniqueInput | ArtefactWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type ArtefactUpdateManyWithoutExhibitionsNestedInput = {
    create?: XOR<ArtefactCreateWithoutExhibitionsInput, ArtefactUncheckedCreateWithoutExhibitionsInput> | ArtefactCreateWithoutExhibitionsInput[] | ArtefactUncheckedCreateWithoutExhibitionsInput[]
    connectOrCreate?: ArtefactCreateOrConnectWithoutExhibitionsInput | ArtefactCreateOrConnectWithoutExhibitionsInput[]
    upsert?: ArtefactUpsertWithWhereUniqueWithoutExhibitionsInput | ArtefactUpsertWithWhereUniqueWithoutExhibitionsInput[]
    set?: ArtefactWhereUniqueInput | ArtefactWhereUniqueInput[]
    disconnect?: ArtefactWhereUniqueInput | ArtefactWhereUniqueInput[]
    delete?: ArtefactWhereUniqueInput | ArtefactWhereUniqueInput[]
    connect?: ArtefactWhereUniqueInput | ArtefactWhereUniqueInput[]
    update?: ArtefactUpdateWithWhereUniqueWithoutExhibitionsInput | ArtefactUpdateWithWhereUniqueWithoutExhibitionsInput[]
    updateMany?: ArtefactUpdateManyWithWhereWithoutExhibitionsInput | ArtefactUpdateManyWithWhereWithoutExhibitionsInput[]
    deleteMany?: ArtefactScalarWhereInput | ArtefactScalarWhereInput[]
  }

  export type ExhibitionUpdateartefactIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ArtefactUncheckedUpdateManyWithoutExhibitionsNestedInput = {
    create?: XOR<ArtefactCreateWithoutExhibitionsInput, ArtefactUncheckedCreateWithoutExhibitionsInput> | ArtefactCreateWithoutExhibitionsInput[] | ArtefactUncheckedCreateWithoutExhibitionsInput[]
    connectOrCreate?: ArtefactCreateOrConnectWithoutExhibitionsInput | ArtefactCreateOrConnectWithoutExhibitionsInput[]
    upsert?: ArtefactUpsertWithWhereUniqueWithoutExhibitionsInput | ArtefactUpsertWithWhereUniqueWithoutExhibitionsInput[]
    set?: ArtefactWhereUniqueInput | ArtefactWhereUniqueInput[]
    disconnect?: ArtefactWhereUniqueInput | ArtefactWhereUniqueInput[]
    delete?: ArtefactWhereUniqueInput | ArtefactWhereUniqueInput[]
    connect?: ArtefactWhereUniqueInput | ArtefactWhereUniqueInput[]
    update?: ArtefactUpdateWithWhereUniqueWithoutExhibitionsInput | ArtefactUpdateWithWhereUniqueWithoutExhibitionsInput[]
    updateMany?: ArtefactUpdateManyWithWhereWithoutExhibitionsInput | ArtefactUpdateManyWithWhereWithoutExhibitionsInput[]
    deleteMany?: ArtefactScalarWhereInput | ArtefactScalarWhereInput[]
  }

  export type EnumRoleTypeFieldUpdateOperationsInput = {
    set?: $Enums.RoleType
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
    isSet?: boolean
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
    isSet?: boolean
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
    isSet?: boolean
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
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

  export type DimensionsWhereInput = {
    AND?: DimensionsWhereInput | DimensionsWhereInput[]
    OR?: DimensionsWhereInput[]
    NOT?: DimensionsWhereInput | DimensionsWhereInput[]
    height?: FloatFilter<"Dimensions"> | number
    width?: FloatFilter<"Dimensions"> | number
    depth?: FloatNullableFilter<"Dimensions"> | number | null
    unit?: EnumDimensionUnitFilter<"Dimensions"> | $Enums.DimensionUnit
  }

  export type NestedEnumArtStyleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ArtStyleType | EnumArtStyleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ArtStyleType[] | ListEnumArtStyleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ArtStyleType[] | ListEnumArtStyleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumArtStyleTypeFilter<$PrismaModel> | $Enums.ArtStyleType
  }

  export type NestedEnumArtStyleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ArtStyleType | EnumArtStyleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ArtStyleType[] | ListEnumArtStyleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ArtStyleType[] | ListEnumArtStyleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumArtStyleTypeWithAggregatesFilter<$PrismaModel> | $Enums.ArtStyleType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumArtStyleTypeFilter<$PrismaModel>
    _max?: NestedEnumArtStyleTypeFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedEnumRoleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleType | EnumRoleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RoleType[] | ListEnumRoleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleType[] | ListEnumRoleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleTypeFilter<$PrismaModel> | $Enums.RoleType
  }

  export type NestedEnumRoleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleType | EnumRoleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RoleType[] | ListEnumRoleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleType[] | ListEnumRoleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleTypeWithAggregatesFilter<$PrismaModel> | $Enums.RoleType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleTypeFilter<$PrismaModel>
    _max?: NestedEnumRoleTypeFilter<$PrismaModel>
  }

  export type ArtefactCreateWithoutArtistInput = {
    id?: string
    title: string
    creationYear?: number | null
    description?: string | null
    dimensions?: XOR<DimensionsNullableCreateEnvelopeInput, DimensionsCreateInput> | null
    artStyle: $Enums.ArtStyleType
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    exhibitions?: ExhibitionCreateNestedManyWithoutArtefactsInput
  }

  export type ArtefactUncheckedCreateWithoutArtistInput = {
    id?: string
    title: string
    creationYear?: number | null
    description?: string | null
    dimensions?: XOR<DimensionsNullableCreateEnvelopeInput, DimensionsCreateInput> | null
    artStyle: $Enums.ArtStyleType
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    exhibitionIds?: ArtefactCreateexhibitionIdsInput | string[]
    exhibitions?: ExhibitionUncheckedCreateNestedManyWithoutArtefactsInput
  }

  export type ArtefactCreateOrConnectWithoutArtistInput = {
    where: ArtefactWhereUniqueInput
    create: XOR<ArtefactCreateWithoutArtistInput, ArtefactUncheckedCreateWithoutArtistInput>
  }

  export type ArtefactCreateManyArtistInputEnvelope = {
    data: ArtefactCreateManyArtistInput | ArtefactCreateManyArtistInput[]
  }

  export type ArtefactUpsertWithWhereUniqueWithoutArtistInput = {
    where: ArtefactWhereUniqueInput
    update: XOR<ArtefactUpdateWithoutArtistInput, ArtefactUncheckedUpdateWithoutArtistInput>
    create: XOR<ArtefactCreateWithoutArtistInput, ArtefactUncheckedCreateWithoutArtistInput>
  }

  export type ArtefactUpdateWithWhereUniqueWithoutArtistInput = {
    where: ArtefactWhereUniqueInput
    data: XOR<ArtefactUpdateWithoutArtistInput, ArtefactUncheckedUpdateWithoutArtistInput>
  }

  export type ArtefactUpdateManyWithWhereWithoutArtistInput = {
    where: ArtefactScalarWhereInput
    data: XOR<ArtefactUpdateManyMutationInput, ArtefactUncheckedUpdateManyWithoutArtistInput>
  }

  export type ArtefactScalarWhereInput = {
    AND?: ArtefactScalarWhereInput | ArtefactScalarWhereInput[]
    OR?: ArtefactScalarWhereInput[]
    NOT?: ArtefactScalarWhereInput | ArtefactScalarWhereInput[]
    id?: StringFilter<"Artefact"> | string
    title?: StringFilter<"Artefact"> | string
    artistId?: StringNullableFilter<"Artefact"> | string | null
    creationYear?: IntNullableFilter<"Artefact"> | number | null
    description?: StringNullableFilter<"Artefact"> | string | null
    artStyle?: EnumArtStyleTypeFilter<"Artefact"> | $Enums.ArtStyleType
    imageUrl?: StringFilter<"Artefact"> | string
    createdAt?: DateTimeFilter<"Artefact"> | Date | string
    updatedAt?: DateTimeFilter<"Artefact"> | Date | string
    exhibitionIds?: StringNullableListFilter<"Artefact">
  }

  export type ArtistCreateWithoutArtefactsInput = {
    id?: string
    name: string
    aboriginalName?: string | null
    tribe?: string | null
    region?: string | null
    biography: string
    birthYear?: number | null
    deathYear?: number | null
    artStyles?: ArtistCreateartStylesInput | $Enums.ArtStyleType[]
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArtistUncheckedCreateWithoutArtefactsInput = {
    id?: string
    name: string
    aboriginalName?: string | null
    tribe?: string | null
    region?: string | null
    biography: string
    birthYear?: number | null
    deathYear?: number | null
    artStyles?: ArtistCreateartStylesInput | $Enums.ArtStyleType[]
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArtistCreateOrConnectWithoutArtefactsInput = {
    where: ArtistWhereUniqueInput
    create: XOR<ArtistCreateWithoutArtefactsInput, ArtistUncheckedCreateWithoutArtefactsInput>
  }

  export type ExhibitionCreateWithoutArtefactsInput = {
    id?: string
    title: string
    description: string
    theme?: string | null
    startDate: Date | string
    endDate: Date | string
    location: string
    imageUrl?: string | null
    admissionFee?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExhibitionUncheckedCreateWithoutArtefactsInput = {
    id?: string
    title: string
    description: string
    theme?: string | null
    startDate: Date | string
    endDate: Date | string
    location: string
    artefactIds?: ExhibitionCreateartefactIdsInput | string[]
    imageUrl?: string | null
    admissionFee?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExhibitionCreateOrConnectWithoutArtefactsInput = {
    where: ExhibitionWhereUniqueInput
    create: XOR<ExhibitionCreateWithoutArtefactsInput, ExhibitionUncheckedCreateWithoutArtefactsInput>
  }

  export type DimensionsUpsertInput = {
    set: DimensionsCreateInput | null
    update: DimensionsUpdateInput
  }

  export type ArtistUpsertWithoutArtefactsInput = {
    update: XOR<ArtistUpdateWithoutArtefactsInput, ArtistUncheckedUpdateWithoutArtefactsInput>
    create: XOR<ArtistCreateWithoutArtefactsInput, ArtistUncheckedCreateWithoutArtefactsInput>
    where?: ArtistWhereInput
  }

  export type ArtistUpdateToOneWithWhereWithoutArtefactsInput = {
    where?: ArtistWhereInput
    data: XOR<ArtistUpdateWithoutArtefactsInput, ArtistUncheckedUpdateWithoutArtefactsInput>
  }

  export type ArtistUpdateWithoutArtefactsInput = {
    name?: StringFieldUpdateOperationsInput | string
    aboriginalName?: NullableStringFieldUpdateOperationsInput | string | null
    tribe?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: StringFieldUpdateOperationsInput | string
    birthYear?: NullableIntFieldUpdateOperationsInput | number | null
    deathYear?: NullableIntFieldUpdateOperationsInput | number | null
    artStyles?: ArtistUpdateartStylesInput | $Enums.ArtStyleType[]
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtistUncheckedUpdateWithoutArtefactsInput = {
    name?: StringFieldUpdateOperationsInput | string
    aboriginalName?: NullableStringFieldUpdateOperationsInput | string | null
    tribe?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: StringFieldUpdateOperationsInput | string
    birthYear?: NullableIntFieldUpdateOperationsInput | number | null
    deathYear?: NullableIntFieldUpdateOperationsInput | number | null
    artStyles?: ArtistUpdateartStylesInput | $Enums.ArtStyleType[]
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExhibitionUpsertWithWhereUniqueWithoutArtefactsInput = {
    where: ExhibitionWhereUniqueInput
    update: XOR<ExhibitionUpdateWithoutArtefactsInput, ExhibitionUncheckedUpdateWithoutArtefactsInput>
    create: XOR<ExhibitionCreateWithoutArtefactsInput, ExhibitionUncheckedCreateWithoutArtefactsInput>
  }

  export type ExhibitionUpdateWithWhereUniqueWithoutArtefactsInput = {
    where: ExhibitionWhereUniqueInput
    data: XOR<ExhibitionUpdateWithoutArtefactsInput, ExhibitionUncheckedUpdateWithoutArtefactsInput>
  }

  export type ExhibitionUpdateManyWithWhereWithoutArtefactsInput = {
    where: ExhibitionScalarWhereInput
    data: XOR<ExhibitionUpdateManyMutationInput, ExhibitionUncheckedUpdateManyWithoutArtefactsInput>
  }

  export type ExhibitionScalarWhereInput = {
    AND?: ExhibitionScalarWhereInput | ExhibitionScalarWhereInput[]
    OR?: ExhibitionScalarWhereInput[]
    NOT?: ExhibitionScalarWhereInput | ExhibitionScalarWhereInput[]
    id?: StringFilter<"Exhibition"> | string
    title?: StringFilter<"Exhibition"> | string
    description?: StringFilter<"Exhibition"> | string
    theme?: StringNullableFilter<"Exhibition"> | string | null
    startDate?: DateTimeFilter<"Exhibition"> | Date | string
    endDate?: DateTimeFilter<"Exhibition"> | Date | string
    location?: StringFilter<"Exhibition"> | string
    artefactIds?: StringNullableListFilter<"Exhibition">
    imageUrl?: StringNullableFilter<"Exhibition"> | string | null
    admissionFee?: FloatNullableFilter<"Exhibition"> | number | null
    createdAt?: DateTimeFilter<"Exhibition"> | Date | string
    updatedAt?: DateTimeFilter<"Exhibition"> | Date | string
  }

  export type ArtefactCreateWithoutExhibitionsInput = {
    id?: string
    title: string
    creationYear?: number | null
    description?: string | null
    dimensions?: XOR<DimensionsNullableCreateEnvelopeInput, DimensionsCreateInput> | null
    artStyle: $Enums.ArtStyleType
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    artist?: ArtistCreateNestedOneWithoutArtefactsInput
  }

  export type ArtefactUncheckedCreateWithoutExhibitionsInput = {
    id?: string
    title: string
    artistId?: string | null
    creationYear?: number | null
    description?: string | null
    dimensions?: XOR<DimensionsNullableCreateEnvelopeInput, DimensionsCreateInput> | null
    artStyle: $Enums.ArtStyleType
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    exhibitionIds?: ArtefactCreateexhibitionIdsInput | string[]
  }

  export type ArtefactCreateOrConnectWithoutExhibitionsInput = {
    where: ArtefactWhereUniqueInput
    create: XOR<ArtefactCreateWithoutExhibitionsInput, ArtefactUncheckedCreateWithoutExhibitionsInput>
  }

  export type ArtefactUpsertWithWhereUniqueWithoutExhibitionsInput = {
    where: ArtefactWhereUniqueInput
    update: XOR<ArtefactUpdateWithoutExhibitionsInput, ArtefactUncheckedUpdateWithoutExhibitionsInput>
    create: XOR<ArtefactCreateWithoutExhibitionsInput, ArtefactUncheckedCreateWithoutExhibitionsInput>
  }

  export type ArtefactUpdateWithWhereUniqueWithoutExhibitionsInput = {
    where: ArtefactWhereUniqueInput
    data: XOR<ArtefactUpdateWithoutExhibitionsInput, ArtefactUncheckedUpdateWithoutExhibitionsInput>
  }

  export type ArtefactUpdateManyWithWhereWithoutExhibitionsInput = {
    where: ArtefactScalarWhereInput
    data: XOR<ArtefactUpdateManyMutationInput, ArtefactUncheckedUpdateManyWithoutExhibitionsInput>
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

  export type EnumDimensionUnitFilter<$PrismaModel = never> = {
    equals?: $Enums.DimensionUnit | EnumDimensionUnitFieldRefInput<$PrismaModel>
    in?: $Enums.DimensionUnit[] | ListEnumDimensionUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.DimensionUnit[] | ListEnumDimensionUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumDimensionUnitFilter<$PrismaModel> | $Enums.DimensionUnit
  }

  export type ArtefactCreateManyArtistInput = {
    id?: string
    title: string
    creationYear?: number | null
    description?: string | null
    dimensions?: XOR<DimensionsNullableCreateEnvelopeInput, DimensionsCreateInput> | null
    artStyle: $Enums.ArtStyleType
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    exhibitionIds?: ArtefactCreateexhibitionIdsInput | string[]
  }

  export type ArtefactUpdateWithoutArtistInput = {
    title?: StringFieldUpdateOperationsInput | string
    creationYear?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dimensions?: XOR<DimensionsNullableUpdateEnvelopeInput, DimensionsCreateInput> | null
    artStyle?: EnumArtStyleTypeFieldUpdateOperationsInput | $Enums.ArtStyleType
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exhibitions?: ExhibitionUpdateManyWithoutArtefactsNestedInput
  }

  export type ArtefactUncheckedUpdateWithoutArtistInput = {
    title?: StringFieldUpdateOperationsInput | string
    creationYear?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dimensions?: XOR<DimensionsNullableUpdateEnvelopeInput, DimensionsCreateInput> | null
    artStyle?: EnumArtStyleTypeFieldUpdateOperationsInput | $Enums.ArtStyleType
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exhibitionIds?: ArtefactUpdateexhibitionIdsInput | string[]
    exhibitions?: ExhibitionUncheckedUpdateManyWithoutArtefactsNestedInput
  }

  export type ArtefactUncheckedUpdateManyWithoutArtistInput = {
    title?: StringFieldUpdateOperationsInput | string
    creationYear?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dimensions?: XOR<DimensionsNullableUpdateEnvelopeInput, DimensionsCreateInput> | null
    artStyle?: EnumArtStyleTypeFieldUpdateOperationsInput | $Enums.ArtStyleType
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exhibitionIds?: ArtefactUpdateexhibitionIdsInput | string[]
  }

  export type DimensionsUpdateInput = {
    height?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    depth?: NullableFloatFieldUpdateOperationsInput | number | null
    unit?: EnumDimensionUnitFieldUpdateOperationsInput | $Enums.DimensionUnit
  }

  export type ExhibitionUpdateWithoutArtefactsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    admissionFee?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExhibitionUncheckedUpdateWithoutArtefactsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    artefactIds?: ExhibitionUpdateartefactIdsInput | string[]
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    admissionFee?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExhibitionUncheckedUpdateManyWithoutArtefactsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    artefactIds?: ExhibitionUpdateartefactIdsInput | string[]
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    admissionFee?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtefactUpdateWithoutExhibitionsInput = {
    title?: StringFieldUpdateOperationsInput | string
    creationYear?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dimensions?: XOR<DimensionsNullableUpdateEnvelopeInput, DimensionsCreateInput> | null
    artStyle?: EnumArtStyleTypeFieldUpdateOperationsInput | $Enums.ArtStyleType
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artist?: ArtistUpdateOneWithoutArtefactsNestedInput
  }

  export type ArtefactUncheckedUpdateWithoutExhibitionsInput = {
    title?: StringFieldUpdateOperationsInput | string
    artistId?: NullableStringFieldUpdateOperationsInput | string | null
    creationYear?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dimensions?: XOR<DimensionsNullableUpdateEnvelopeInput, DimensionsCreateInput> | null
    artStyle?: EnumArtStyleTypeFieldUpdateOperationsInput | $Enums.ArtStyleType
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exhibitionIds?: ArtefactUpdateexhibitionIdsInput | string[]
  }

  export type ArtefactUncheckedUpdateManyWithoutExhibitionsInput = {
    title?: StringFieldUpdateOperationsInput | string
    artistId?: NullableStringFieldUpdateOperationsInput | string | null
    creationYear?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dimensions?: XOR<DimensionsNullableUpdateEnvelopeInput, DimensionsCreateInput> | null
    artStyle?: EnumArtStyleTypeFieldUpdateOperationsInput | $Enums.ArtStyleType
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exhibitionIds?: ArtefactUpdateexhibitionIdsInput | string[]
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

  export type NestedEnumDimensionUnitFilter<$PrismaModel = never> = {
    equals?: $Enums.DimensionUnit | EnumDimensionUnitFieldRefInput<$PrismaModel>
    in?: $Enums.DimensionUnit[] | ListEnumDimensionUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.DimensionUnit[] | ListEnumDimensionUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumDimensionUnitFilter<$PrismaModel> | $Enums.DimensionUnit
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumDimensionUnitFieldUpdateOperationsInput = {
    set?: $Enums.DimensionUnit
  }



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