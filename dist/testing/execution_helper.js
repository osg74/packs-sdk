"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapError = exports.tryFindSyncFormula = exports.tryFindFormula = exports.findSyncFormula = exports.findFormula = exports.executeSyncFormula = exports.executeFormula = exports.executeFormulaOrSync = exports.executeFormulaOrSyncWithRawParams = void 0;
const coercion_1 = require("./coercion");
const ensure_1 = require("../helpers/ensure");
const validation_1 = require("./validation");
const validation_2 = require("./validation");
async function executeFormulaOrSyncWithRawParams(manifest, formulaName, rawParams, context) {
    try {
        const formula = tryFindFormula(manifest, formulaName);
        if (formula) {
            const params = coercion_1.coerceParams(formula, rawParams);
            return await executeFormula(formula, params, context);
        }
        const syncFormula = tryFindSyncFormula(manifest, formulaName);
        if (syncFormula) {
            const params = coercion_1.coerceParams(syncFormula, rawParams);
            return await executeSyncFormula(syncFormula, params, context);
        }
        throw new Error(`Pack definition has no formula or sync called ${formulaName}.`);
    }
    catch (err) {
        throw wrapError(err);
    }
}
exports.executeFormulaOrSyncWithRawParams = executeFormulaOrSyncWithRawParams;
async function executeFormulaOrSync(manifest, formulaName, params, context) {
    try {
        const formula = tryFindFormula(manifest, formulaName);
        if (formula) {
            return await executeFormula(formula, params, context);
        }
        const syncFormula = tryFindSyncFormula(manifest, formulaName);
        if (syncFormula) {
            return await executeSyncFormula(syncFormula, params, context);
        }
        throw new Error(`Pack definition has no formula or sync called ${formulaName}.`);
    }
    catch (err) {
        throw wrapError(err);
    }
}
exports.executeFormulaOrSync = executeFormulaOrSync;
async function executeFormula(formula, params, context, { validateParams: shouldValidateParams = true, validateResult: shouldValidateResult = true } = {}) {
    if (shouldValidateParams) {
        validation_1.validateParams(formula, params);
    }
    // TODO(patrick): We should not execute a formula that requests scopes that we don't have
    // in our stored credentials. Either we check stored credentials here or we pass the requested
    // scopes from formula.requiredOAuthScopes in to the execution context.
    let result;
    try {
        result = await formula.execute(params, context);
    }
    catch (err) {
        throw wrapError(err);
    }
    if (shouldValidateResult) {
        validation_2.validateResult(formula, result);
    }
    return result;
}
exports.executeFormula = executeFormula;
async function executeSyncFormula(formula, params, context, { validateParams: shouldValidateParams = true, validateResult: shouldValidateResult = true } = {}) {
    if (shouldValidateParams) {
        validation_1.validateParams(formula, params);
    }
    const result = await formula.execute(params, context);
    if (shouldValidateResult) {
        validation_2.validateResult(formula, result.result);
    }
    return result;
}
exports.executeSyncFormula = executeSyncFormula;
function findFormula(packDef, formulaNameWithNamespace) {
    const packFormulas = packDef.formulas;
    if (!packFormulas) {
        throw new Error(`Pack definition has no formulas.`);
    }
    const [namespace, name] = formulaNameWithNamespace.includes('::')
        ? formulaNameWithNamespace.split('::')
        : [ensure_1.ensureExists(packDef.formulaNamespace), formulaNameWithNamespace];
    if (!(namespace && name)) {
        throw new Error(`Formula names must be specified as FormulaNamespace::FormulaName, but got "${formulaNameWithNamespace}".`);
    }
    const formulas = Array.isArray(packFormulas) ? packFormulas : packFormulas[namespace];
    if (!formulas || !formulas.length) {
        throw new Error(`Pack definition has no formulas for namespace "${namespace}".`);
    }
    for (const formula of formulas) {
        if (formula.name === name) {
            return formula;
        }
    }
    throw new Error(`Pack definition has no formula "${name}" in namespace "${namespace}".`);
}
exports.findFormula = findFormula;
function findSyncFormula(packDef, syncFormulaName) {
    if (!packDef.syncTables) {
        throw new Error(`Pack definition has no sync tables.`);
    }
    for (const syncTable of packDef.syncTables) {
        const syncFormula = syncTable.getter;
        if (syncFormula.name === syncFormulaName) {
            return syncFormula;
        }
    }
    throw new Error(`Pack definition has no sync formula "${syncFormulaName}" in its sync tables.`);
}
exports.findSyncFormula = findSyncFormula;
function tryFindFormula(packDef, formulaNameWithNamespace) {
    try {
        return findFormula(packDef, formulaNameWithNamespace);
    }
    catch (_err) { }
}
exports.tryFindFormula = tryFindFormula;
function tryFindSyncFormula(packDef, syncFormulaName) {
    try {
        return findSyncFormula(packDef, syncFormulaName);
    }
    catch (_err) { }
}
exports.tryFindSyncFormula = tryFindSyncFormula;
function wrapError(err) {
    if (err.name === 'TypeError' && err.message === `Cannot read property 'body' of undefined`) {
        err.message +=
            '\nThis means your formula was invoked with a mock fetcher that had no response configured.' +
                '\nThis usually means you invoked your formula from the commandline with `coda execute` but forgot to add the --fetch flag ' +
                'to actually fetch from the remote API.';
    }
    return err;
}
exports.wrapError = wrapError;
