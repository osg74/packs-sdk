#!/usr/bin/env node

import type {Arguments} from 'yargs';
import type {Options} from 'yargs';
import path from 'path';
import {spawnSync} from 'child_process';
import yargs from 'yargs';

interface ExecuteArgs {
  manifestPath: string;
  formulaName: string;
  params: string[];
  realFetcher?: boolean;
  credentialsFile?: string;
}

interface AuthArgs {
  manifestPath: string;
  credentialsFile?: string;
}

const EXECUTE_BOOTSTRAP_CODE = `
import {executeFormulaFromCLI} from 'packs-sdk/dist/testing/execution';

async function main() {
  const manifestPath = process.argv[4];
  const useRealFetcher = process.argv[5] === 'true';
  const credentialsFile = process.argv[6] || undefined;
  const module = await import(manifestPath);
  await executeFormulaFromCLI(process.argv.slice(7), module, {useRealFetcher, credentialsFile});
}

void main();`;

const AUTH_BOOTSTRAP_CODE = `
import {setupAuthFromModule} from 'packs-sdk/dist/testing/auth';

async function main() {
  const manifestPath = process.argv[4];
  const credentialsFile = process.argv[5] || undefined;
  const module = await import(manifestPath);
  await setupAuthFromModule(module, {credentialsFile});
}

void main();`;

function makeManifestFullPath(manifestPath: string): string {
  return manifestPath.startsWith('/') ? manifestPath : path.join(process.cwd(), manifestPath);
}

function handleExecute({manifestPath, formulaName, params, realFetcher, credentialsFile}: Arguments<ExecuteArgs>) {
  spawnSync(
    `ts-node -e "${EXECUTE_BOOTSTRAP_CODE}" ${makeManifestFullPath(manifestPath)} ${formulaName} ${Boolean(
      realFetcher,
    )} ${credentialsFile || '""'} ${params.join(' ')}`,
    {
      shell: true,
      stdio: 'inherit',
    },
  );
}

function handleAuth({manifestPath, credentialsFile}: Arguments<AuthArgs>) {
  spawnSync(`ts-node -e "${AUTH_BOOTSTRAP_CODE}" ${makeManifestFullPath(manifestPath)} ${credentialsFile}`, {
    shell: true,
    stdio: 'inherit',
  });
}

if (require.main === module) {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  yargs
    .command({
      command: 'execute <manifestPath> <formulaName> [params..]',
      describe: 'Execute a formula',
      handler: handleExecute,
      builder: {
        realFetcher: {
          alias: 'real_fetcher',
          boolean: true,
          desc:
            'Use a real fetcher for http requests instead of a mock fetcher. Run "coda auth" first to set up credentials.',
        } as Options,
        credentialsFile: {
          alias: 'credentials_file',
          string: true,
          desc: 'Path to the credentials file, if different than .coda/credentials.json',
        } as Options,
      },
    })
    .command({
      command: 'auth <manifestPath>',
      describe: 'Set up authentication for a pack',
      handler: handleAuth,
      builder: {
        credentialsFile: {
          alias: 'credentials_file',
          string: true,
          desc: 'Path to the credentials file, if different than .coda/credentials.json',
        } as Options,
      },
    })
    .demandCommand()
    .help().argv;
}
