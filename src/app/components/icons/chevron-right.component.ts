import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-chevron-right-icon',
  template: `<svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M6.75 5.75 9.25 8l-2.5 2.25"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChevronRightIconComponent {}
