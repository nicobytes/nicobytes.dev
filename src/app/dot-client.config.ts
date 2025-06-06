import { makeEnvironmentProviders, EnvironmentProviders } from '@angular/core';
import { createDotCMSClient } from '@dotcms/client/next';
import { DotCMSClientConfig } from '@dotcms/types';

type clientType = ReturnType<typeof createDotCMSClient>;

// This is a hack inspired by https://github.com/angular/angularfire/blob/c1c6af9779154caff6bc0d9b837f6c3e2d913456/src/firestore/firestore.ts#L8

// eslint-disable-next-line @typescript-eslint/no-empty-object-type, @typescript-eslint/no-unsafe-declaration-merging
export interface DotCMSClient extends clientType {}

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class DotCMSClient {
  constructor(client: clientType) {
    return client;
  }
}

export function provideDotCMSClient(
  options: DotCMSClientConfig,
): EnvironmentProviders {
  const client = createDotCMSClient(options);

  return makeEnvironmentProviders([
    {
      provide: DotCMSClient,
      useFactory: () => new DotCMSClient(client),
    },
  ]);
}
