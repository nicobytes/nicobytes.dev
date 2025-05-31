import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

type variantType = 'primary' | 'secondary';

const variantStyles: Record<variantType, string> = {
  primary:
    'bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70',
  secondary:
    'bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70',
};

@Component({
  selector: 'app-button',
  template: `
    @let href = $href();
    @if (href) {
      <a
        [href]="href"
        [class]="$dynamicClass()"
        class="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none w-full"
      >
        <ng-content />
      </a>
    } @else {
      <button
        [class]="$dynamicClass()"
        class="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none w-full"
      >
        as
      </button>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.inline-flex]': 'true',
  },
})
export class ButtonComponent {
  $href = input<string | null>(null, { alias: 'href' });
  $variant = input<variantType>('primary', { alias: 'variant' });

  $dynamicClass = computed(() => {
    const variant = this.$variant();

    return variantStyles[variant] ?? variantStyles.primary;
  });
}
