import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContainerComponent } from '@/components/container.component';

@Component({
  selector: 'app-footer',
  imports: [ContainerComponent],
  template: `<app-container class="w-full">
    <div
      class="flex flex-col items-center justify-between gap-6 md:flex-row pt-10 pb-16"
    >
      <div
        class="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200"
      >
        <a href="/about">About</a>
        <a href="/projects">Projects</a>
        <a href="/speaking">Speaking</a>
        <a href="/uses">Uses</a>
      </div>
      <p class="text-sm text-zinc-400 dark:text-zinc-500">
        &copy; 2025 Spencer Sharp. All rights reserved.
      </p>
    </div>
  </app-container>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
