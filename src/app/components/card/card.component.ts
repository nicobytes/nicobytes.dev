import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ChevronRightIconComponent } from '@/components/icons/chevron-right.component';

@Component({
  selector: 'app-card',
  imports: [ChevronRightIconComponent],
  template: `<article class="group relative flex flex-col items-start">
    <ng-content />
    <div
      aria-hidden="true"
      class="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
    >
      {{ $cta() }}
      <app-chevron-right-icon class="ml-1 h-4 w-4 stroke-current" />
    </div>
  </article>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  $cta = input.required({ alias: 'cta' });
}
