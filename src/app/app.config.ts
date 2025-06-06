import {
  ApplicationConfig,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  provideClientHydration,
  withIncrementalHydration,
} from '@angular/platform-browser';

import { environment } from '@env/environment';

import { provideDotCMSImageLoader } from '@dotcms/angular';
import { DotCMSEditablePageService } from '@dotcms/angular/next';
import { provideDotCMSClient } from './dot-client.config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(withIncrementalHydration()),
    provideZonelessChangeDetection(),
    provideDotCMSClient,
    provideDotCMSImageLoader(environment.dotcmsUrl),
    DotCMSEditablePageService,
  ],
};
