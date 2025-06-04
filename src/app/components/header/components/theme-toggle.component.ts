import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ThemeService } from '@/services/theme.service';
import { MoonIconComponent } from '@/components/icons/moon.component';
import { SunIconComponent } from '@/components/icons/sun.component';

@Component({
  selector: 'app-theme-toggle',
  imports: [MoonIconComponent, SunIconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <button
    type="button"
    (click)="toggleTheme()"
    class="group rounded-full cursor-pointer bg-white/90 px-3 py-2 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
  >
    <div
      class="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600"
    >
      <app-moon-icon />
    </div>
    <div
      class="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition not-[@media_(prefers-color-scheme:dark)]:fill-teal-400/10 not-[@media_(prefers-color-scheme:dark)]:stroke-teal-500 dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400"
    >
      <app-sun-icon />
    </div>
  </button>`,
})
export class ThemeToggleComponent {
  themeService = inject(ThemeService);

  toggleTheme(): void {
    console.log('toggleTheme');
    this.themeService.toggleTheme();
  }
}
