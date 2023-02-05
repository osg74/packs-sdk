'use strict';

const codaRulesDir = './dev/eslint/eslint-plugin-coda-rules/gen-rules';

module.exports = {
  'coda-import-ordering': require(`${codaRulesDir}/coda_import_ordering_rule`).rule,
  'coda-import-style': require(`${codaRulesDir}/coda_import_style_rule`).rule
};
