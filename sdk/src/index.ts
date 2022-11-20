/**
 * The core components of the Pack SDK. These functions and types are used to
 * define your Pack, it's building blocks, and their logic.
 *
 * This module is imported using the following code:
 *
 * ```ts
 * import * as coda from "@codahq/packs-sdk";
 * ```
 *
 * @module core
 */

// Pack related interfaces
export type {Authentication} from './types';
export {AuthenticationType} from './types';
export type {BasicPackDefinition} from './types';
export type {Format} from './types';
export type {PackDefinition} from './types';
export type {PackId} from './types';
export type {PackVersionDefinition} from './types';
export type {PostSetup} from './types';
export type {PostSetupDef} from './types';
export {PostSetupType} from './types';
export {newPack} from './builder';
export {PackDefinitionBuilder} from './builder';

// Authentication types
export type {AWSAccessKeyAuthentication} from './types';
export type {AWSAssumeRoleAuthentication} from './types';
export type {BaseAuthentication} from './types';
export type {CodaApiBearerTokenAuthentication} from './types';
export type {CustomAuthParameter} from './types';
export type {CustomAuthentication} from './types';
export type {CustomHeaderTokenAuthentication} from './types';
export type {HeaderBearerTokenAuthentication} from './types';
export type {MultiQueryParamTokenAuthentication} from './types';
export type {NoAuthentication} from './types';
export type {OAuth2Authentication} from './types';
export type {QueryParamTokenAuthentication} from './types';
export type {SystemAuthentication} from './types';
export type {VariousAuthentication} from './types';
export type {VariousSupportedAuthentication} from './types';
export type {WebBasicAuthentication} from './types';

// Compiler interfaces
export type {PackFormatMetadata} from './compiled_types';
export type {PackSyncTable} from './compiled_types';
export type {PackMetadata} from './compiled_types';
export type {PackVersionMetadata} from './compiled_types';

// Browser interfaces
export type {ExternalPackFormat} from './compiled_types';
export type {ExternalPackFormatMetadata} from './compiled_types';
export type {ExternalObjectPackFormula} from './compiled_types';
export type {ExternalPackFormula} from './compiled_types';
export type {ExternalPackFormulas} from './compiled_types';
export type {ExternalSyncTable} from './compiled_types';
export type {ExternalPackMetadata} from './compiled_types';
export type {ExternalPackVersionMetadata} from './compiled_types';

// Formula related interfaces
export type {ArrayType} from './sdk/src/api_types';
export {ConnectionRequirement} from './sdk/src/api_types';
export type {Continuation} from './api';
export type {SuggestedValueType} from './sdk/src/api_types';
export type {DynamicOptions} from './api';
export type {DynamicSyncTableDef} from './api';
export type {EmptyFormulaDef} from './api';
export type {ExecutionContext} from './sdk/src/api_types';
export type {Fetcher} from './sdk/src/api_types';
export type {FetchMethodType} from './sdk/src/api_types';
export type {FetchRequest} from './sdk/src/api_types';
export type {FetchResponse} from './sdk/src/api_types';
export type {FormulaDefinition} from './api';
export type {GenericDynamicSyncTable} from './api';
export type {GenericSyncFormula} from './api';
export type {GenericSyncFormulaResult} from './api';
export type {GenericSyncTable} from './api';
export type {GenericSyncUpdate} from './api';
export type {GenericSyncUpdateResult} from './api';
export type {GenericSyncUpdateSingleResult} from './api';
export type {InvocationLocation} from './sdk/src/api_types';
export type {MetadataContext} from './api';
export type {MetadataFormulaObjectResultType} from './api';
export type {MetadataFormulaResultType} from './api';
export type {MetadataFormula} from './api';
export type {MetadataFunction} from './api';
export type {Network} from './sdk/src/api_types';
export {NetworkConnection} from './sdk/src/api_types';
export type {PackFormulaDef} from './api';
export type {PackFormulaMetadata} from './api';
export type {PackFormulaValue} from './sdk/src/api_types';
export type {PackFormulaResult} from './sdk/src/api_types';
export type {ParamDef} from './sdk/src/api_types';
export type {ParamDefs} from './sdk/src/api_types';
export type {ParamValues} from './sdk/src/api_types';
export type {ParameterOptions} from './api';
export {ParameterType} from './sdk/src/api_types';
export type {ParamsList} from './sdk/src/api_types';
export {PrecannedDateRange} from './sdk/src/api_types';
export {StatusCodeError} from './api';
export {MissingScopesError} from './api';
export type {StatusCodeErrorResponse} from './api';
export type {SyncExecutionContext} from './sdk/src/api_types';
export type {SyncFormulaResult} from './api';
export type {SyncTableDef} from './api';
export type {SyncTableOptions} from './api';
export type {TemporaryBlobStorage} from './sdk/src/api_types';
export {Type} from './sdk/src/api_types';
export type {TypedPackFormula} from './api';
export type {Formula} from './api';
export {UserVisibleError} from './api';

// Formula definition helpers
export {makeMetadataFormula} from './api';
export {makeDynamicSyncTable} from './api';
export {makeEmptyFormula} from './api';
export {makeFormula} from './api';
export {makeSyncTable} from './api';
export {makeTranslateObjectFormula} from './api';
export {makeParameter} from './api';

// Autocomplete helpers.
export type {SimpleAutocompleteOption} from './api';
export {autocompleteSearchObjects} from './api';
export {makeSimpleAutocompleteMetadataFormula} from './api';
export {simpleAutocomplete} from './api';

// URL helpers.
export {getQueryParams} from './sdk/src/helpers/url';
export {join as joinUrl} from './sdk/src/helpers/url';
export {withQueryParams} from './sdk/src/helpers/url';

// Schema helpers.
export {getEffectivePropertyKeysFromSchema} from './sdk/src/helpers/schema';

// SVG constants.
export {SvgConstants} from './sdk/src/helpers/svg';

// General Utilities
export {assertCondition} from './sdk/src/helpers/ensure';
export {ensureExists} from './sdk/src/helpers/ensure';
export {ensureNonEmptyString} from './sdk/src/helpers/ensure';
export {ensureUnreachable} from './sdk/src/helpers/ensure';

// Object Schemas
export type {ArraySchema} from './schema';
export type {AttributionNode} from './schema';
export {AttributionNodeType} from './schema';
export type {BooleanSchema} from './schema';
export {CurrencyFormat} from './schema';
export type {CurrencySchema} from './schema';
export type {DurationSchema} from './schema';
export {DurationUnit} from './schema';
export {EmailDisplayType} from './schema';
export type {EmailSchema} from './schema';
export type {GenericObjectSchema} from './schema';
export type {Identity} from './schema';
export type {IdentityDefinition} from './schema';
export type {ImageAttributionNode} from './schema';
export {ImageCornerStyle} from './schema';
export {ImageOutline} from './schema';
export type {ImageSchema} from './schema';
export type {LinkAttributionNode} from './schema';
export {LinkDisplayType} from './schema';
export type {LinkSchema} from './schema';
export type {NumberSchema} from './schema';
export type {NumericDateSchema} from './schema';
export type {NumericDateTimeSchema} from './schema';
export type {NumericTimeSchema} from './schema';
export type {NumericDurationSchema} from './schema';
export type {NumericSchema} from './schema';
export type {ObjectSchema} from './schema';
export type {ObjectSchemaDefinition} from './schema';
export type {ObjectSchemaProperties} from './schema';
export type {ObjectSchemaProperty} from './schema';
export type {ProgressBarSchema} from './schema';
export {PropertyIdentifier} from './schema';
export {PropertyIdentifierDetails} from './schema';
export {PropertyLabelValueTemplate} from './schema';
export {ScaleIconSet} from './schema';
export type {ScaleSchema} from './schema';
export type {Schema} from './schema';
export type {SchemaType} from './schema';
export type {SliderSchema} from './schema';
export type {StringDateSchema} from './schema';
export type {StringEmbedSchema} from './schema';
export type {StringDateTimeSchema} from './schema';
export type {StringSchema} from './schema';
export type {SimpleStringSchema} from './schema';
export type {StringTimeSchema} from './schema';
export type {TextAttributionNode} from './schema';
export {ValueHintType} from './schema';
export {ValueType} from './schema';
export {generateSchema} from './schema';
export {makeAttributionNode} from './schema';
export {makeObjectSchema} from './schema';
export {makeReferenceSchemaFromObjectSchema} from './schema';
export {makeSchema} from './schema';
export {withIdentity} from './schema';

// Exports for intermediate entities we want included in the TypeDoc documentation
// but otherwise wouldn't care about including as top-level exports of the SDK

export {ValidFetchMethods} from './sdk/src/api_types';

export type {ArrayFormulaDef} from './api';
export type {BaseFormula} from './api';
export type {BaseFormulaDef} from './api';
export type {BooleanFormulaDef} from './api';
export type {BooleanPackFormula} from './api';
export type {NumericFormulaDef} from './api';
export type {NumericPackFormula} from './api';
export type {ObjectFormulaDef} from './api';
export type {ObjectPackFormula} from './api';
export type {StringPackFormula} from './api';
export type {StringFormulaDef} from './api';

export {DynamicSyncTableOptions} from './api';
export {MetadataFormulaDef} from './api';
export {ObjectArrayFormulaDef} from './api';
export {SyncFormula} from './api';
export {SyncFormulaDef} from './api';
export {SyncTable} from './api';

export {SetEndpoint} from './types';
export {SetEndpointDef} from './types';
export {Sync} from './sdk/src/api_types';
export {SystemAuthenticationDef} from './types';

export type {BooleanHintTypes} from './schema';
export type {InferrableTypes} from './schema';
export type {NumberHintTypes} from './schema';
export type {ObjectHintTypes} from './schema';
export type {StringHintTypes} from './schema';

export type {RequestHandlerTemplate} from './handler_templates';
export type {ResponseHandlerTemplate} from './handler_templates';

export type {OptionalParamDef} from './sdk/src/api_types';
export type {ParamDefFromOptionsUnion} from './api';
