import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-card-time',
  template: `@let hasDecorate = $decorate();
    <time
      [class.pl-3]="hasDecorate"
      class="relative order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500"
    >
      @if (hasDecorate) {
        <span
          class="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span
            class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"
          ></span>
        </span>
      }
      {{ $date() }}
    </time>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardTimeComponent {
  $date = input.required({ alias: 'date' });
  $decorate = input(false, { alias: 'decorate' });
}
