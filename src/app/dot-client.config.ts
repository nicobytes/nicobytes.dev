import { makeEnvironmentProviders, EnvironmentProviders } from '@angular/core';
import { createDotCMSClient } from '@dotcms/client/next';
import { DotCMSClientConfig } from '@dotcms/types';

type clientType = ReturnType<typeof createDotCMSClient>;

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
