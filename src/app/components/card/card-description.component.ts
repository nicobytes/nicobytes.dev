import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-card-description',
  template: ` <div
    class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400"
  >
    <ng-content />
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardDescriptionComponent {}
