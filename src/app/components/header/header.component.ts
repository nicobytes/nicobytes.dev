import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ContainerComponent } from '@/components/container.component';
import { DesktopNavComponent } from './components/desktop-nav.component';
import { AvatarComponent } from './components/avatar.component';
import { ThemeToggleComponent } from './components/theme-toggle.component';
import { filter, map } from 'rxjs/operators';
import { BehaviorSubject, merge } from 'rxjs';

@Component({
  selector: 'app-header',
  template: ` @let isHomePage = $isHomePage();

    <header class="pointer-events-none relative z-50 flex flex-none flex-col">
      @if (isHomePage) {
        <div class="order-last mt-[calc(--spacing(16)-(--spacing(3)))]"></div>
        <app-container class="top-0 order-last -mb-3 pt-3 ">
          <div class="top-(--avatar-top,--spacing(3)) w-full">
            <div className="relative">
              <app-avatar
                [isLarge]="true"
                class="origin-left transition-opacity"
              />
            </div>
          </div>
        </app-container>
      }

      <div class="top-0 z-10 h-16 pt-6 sticky">
        <app-container class="w-full">
          <div class="relative flex gap-4">
            <div class="flex flex-1">
              @if (!isHomePage) {
                <app-avatar />
              }
            </div>
            <div class="flex flex-1 justify-end md:justify-center ">
              <app-desktop-nav class="pointer-events-auto hidden md:block" />
            </div>
            <div class="flex justify-end md:flex-1">
              <div class="pointer-events-auto">
                <app-theme-toggle />
              </div>
            </div>
          </div>
        </app-container>
      </div>
    </header>
    @if (isHomePage) {
      <div class="flex-none"></div>
    }`,
  imports: [
    ContainerComponent,
    DesktopNavComponent,
    AvatarComponent,
    ThemeToggleComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  // TODO
  style = {
    height: 'var(--header-height)',
    marginBottom: 'var(--header-mb)',
  };

  route = inject(ActivatedRoute);
  router = inject(Router);

  url$ = new BehaviorSubject(this.router.url);
  urlEvent$ = this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    map((event) => event.urlAfterRedirects),
  );

  isHomePage$ = merge(this.url$, this.urlEvent$).pipe(
    map((url) => url === '/'),
  );

  $isHomePage = toSignal(this.isHomePage$, { requireSync: true });
  $height = signal(100);
}
