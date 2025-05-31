import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  HostListener,
  inject,
  input,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

function clamp(number: number, a: number, b: number) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  return Math.min(Math.max(number, min), max);
}

@Component({
  selector: 'app-avatar',
  imports: [RouterLink, NgOptimizedImage],
  template: ` @let isLarge = $isLarge();

    <div
      class="origin-left rounded-full bg-white/90 p-0.5 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:ring-white/10"
      [class.h-16]="isLarge"
      [class.w-16]="isLarge"
      [class.w-10]="!isLarge"
      [class.h-10]="!isLarge"
      [style.transform]="$transform()"
    >
      <a
        routerLink="/"
        [attr.aria-label]="'Home'"
        class="pointer-events-auto block origin-left"
        [class.h-15]="isLarge"
        [class.w-15]="isLarge"
        [class.w-9]="!isLarge"
        [class.h-9]="!isLarge"
      >
        <img
          ngSrc="./images/profile.jpg"
          alt="avatar"
          class="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800"
          width="80"
          height="80"
        />
      </a>
    </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {
  $isLarge = input(false, { alias: 'isLarge' });
  elementRef = inject(ElementRef);
  $styles = signal({
    translateX: 0,
    scale: 1,
  });
  $transform = computed(
    () =>
      `translate3d(${this.$styles().translateX}rem, 0, 0) scale(${this.$styles().scale})`,
  );

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    if (!this.$isLarge()) {
      return;
    }
    const offsetHeight = this.elementRef.nativeElement.offsetHeight;
    const fromScale = 1;
    const toScale = 36 / 64;
    const fromX = 0;
    const toX = 2 / 16;

    const scrollY = offsetHeight - window.scrollY;

    let scale = (scrollY * (fromScale - toScale)) / offsetHeight + toScale;
    scale = clamp(scale, fromScale, toScale);

    let x = (scrollY * (fromX - toX)) / offsetHeight + toX;
    x = clamp(x, fromX, toX);

    this.$styles.set({
      translateX: x,
      scale: scale,
    });
  }
}
