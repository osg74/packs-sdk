import type { ObjectSchemaDefinition } from '../schema';
import type { PostSetupMetadata } from '../compiled_types';
import type { SetEndpoint } from '../types';
import type { SetEndpointDef } from '../types';
export declare function objectSchemaHelper<T extends ObjectSchemaDefinition<string, string>>(schema: T): ObjectSchemaHelper<T>;
declare class ObjectSchemaHelper<T extends ObjectSchemaDefinition<string, string>> {
    private readonly _schema;
    constructor(schema: T);
    get id(): string | undefined;
    get primary(): string | undefined;
    get featured(): string[] | undefined;
    get identity(): import("../schema").IdentityDefinition | undefined;
    get properties(): import("../schema").ObjectSchemaProperties<string>;
    get type(): import("../schema").ValueType.Object;
}
export declare function setEndpointHelper(step: SetEndpoint): SetEndpointHelper;
declare class SetEndpointHelper {
    private readonly _step;
    constructor(step: SetEndpoint);
    get getOptions(): import("..").MetadataFormula;
}
export declare function setEndpointDefHelper(step: SetEndpointDef): SetEndpointDefHelper;
declare class SetEndpointDefHelper {
    private readonly _step;
    constructor(step: SetEndpointDef);
    get getOptions(): import("..").MetadataFormula | import("..").MetadataFunction;
}
export declare function postSetupMetadataHelper(metadata: PostSetupMetadata): PostSetupMetadataHelper;
declare class PostSetupMetadataHelper {
    private readonly _metadata;
    constructor(metadata: PostSetupMetadata);
    get getOptions(): import("../api").MetadataFormulaMetadata;
}
export {};
