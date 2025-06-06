import { InjectionToken } from '@angular/core';
import { createDotCMSClient } from '@dotcms/client/next';
import { DotCMSClientConfig } from '@dotcms/types';

import { environment } from '@env/environment';

type clientType = ReturnType<typeof createDotCMSClient>;

export const DOTCMS_CLIENT_TOKEN = new InjectionToken<clientType>(
  'DOTCMS_CLIENT',
);

export const DOTCMS_CLIENT_CONFIG: DotCMSClientConfig = {
  dotcmsUrl: environment.dotcmsUrl,
  authToken: environment.authToken,
  siteId: environment.siteId,
};

const client = createDotCMSClient(DOTCMS_CLIENT_CONFIG);

export const provideDotCMSClient = {
  provide: DOTCMS_CLIENT_TOKEN,
  useValue: client,
};
