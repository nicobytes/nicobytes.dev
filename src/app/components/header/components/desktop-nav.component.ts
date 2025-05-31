import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-desktop-nav',
  template: ` <nav>
    <ul
      class="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"
    >
      @for (item of $links(); track $index) {
        <li>
          <a
            class="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
            [routerLink]="item.link"
            routerLinkActive="text-teal-500 dark:text-teal-400"
            [routerLinkActiveOptions]="{ exact: true }"
            #rla="routerLinkActive"
          >
            {{ item.label }}
            @if (rla.isActive) {
              <span
                class="absolute inset-x-1 -bottom-px h-px bg-linear-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"
              >
              </span>
            }
          </a>
        </li>
      }
    </ul>
  </nav>`,
  imports: [RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesktopNavComponent {
  $links = signal<
    {
      link: string;
      label: string;
    }[]
  >([
    {
      link: '/',
      label: 'Home',
    },
    {
      link: '/about',
      label: 'About',
    },
    {
      link: '/blog',
      label: 'Articles',
    },
    {
      link: '/portfolio',
      label: 'Portfolio',
    },
    {
      link: '/courses',
      label: 'Courses',
    },
  ]);
}
