import { isPlatformBrowser } from '@angular/common';
import {
  Injectable,
  signal,
  inject,
  DOCUMENT,
  effect,
  PLATFORM_ID,
} from '@angular/core';

export type AppTheme = 'light' | 'dark';

export const AppTheme = {
  LIGHT: 'light',
  DARK: 'dark',
} as const;

const LS_THEME = 'theme';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  $theme = signal<AppTheme>(AppTheme.DARK);
  document = inject(DOCUMENT);
  platformId = inject(PLATFORM_ID);

  constructor() {
    effect(() => {
      this.applyTheme();
    });
  }

  toggleTheme() {
    const theme = this.$theme();
    const newTheme = theme === AppTheme.LIGHT ? AppTheme.DARK : AppTheme.LIGHT;
    this.$theme.set(newTheme);

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(LS_THEME, newTheme);
    }
  }

  applyUserTheme() {
    const userTheme = this.#getUserTheme();
    this.$theme.set(userTheme);
  }

  #getUserTheme(): AppTheme {
    const storedTheme = localStorage.getItem(LS_THEME) as AppTheme | null;
    if (storedTheme) {
      return storedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? AppTheme.DARK
      : AppTheme.LIGHT;
  }

  applyTheme() {
    const newTheme = this.$theme();
    this.document.documentElement.classList.remove('dark', 'light');
    this.document.documentElement.classList.add(newTheme);
  }
}
