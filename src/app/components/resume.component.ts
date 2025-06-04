import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { BriefcaseIconComponent } from '@/components/icons/briefcase.component';
import { ButtonComponent } from '@/components/button.component';
import { ArrowDownIconComponent } from '@/components/icons/arrow-down.component';

interface Role {
  company: string;
  title: string;
  logo: string;
  start: string | { label: string; dateTime: string };
  end: string | { label: string; dateTime: string };
}

@Component({
  selector: 'app-resume',
  imports: [
    NgOptimizedImage,
    BriefcaseIconComponent,
    ButtonComponent,
    ArrowDownIconComponent,
  ],
  template: `<div
    class="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
  >
    <h2
      class="flex text-sm items-center font-semibold text-zinc-900 dark:text-zinc-100"
    >
      <app-briefcase-icon
        class="h-5 w-5 flex-none block fill-zinc-500 dark:fill-zinc-400"
      />
      <span class="ml-3">Work</span>
    </h2>
    <ol class="mt-6 space-y-4">
      @for (role of resume$(); track $index) {
        <li class="flex gap-4">
          <div
            class="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
          >
            <img
              [ngSrc]="role.logo"
              [alt]="role.company"
              class="h-7 w-7 rounded-full object-cover bg-white"
              width="28"
              height="28"
            />
          </div>
          <dl class="flex flex-auto flex-wrap gap-x-2">
            <dt class="sr-only">Company</dt>
            <dd
              class="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100"
            >
              {{ role.company }}
            </dd>
            <dt class="sr-only">Role</dt>
            <dd class="text-xs text-zinc-500 dark:text-zinc-400">
              {{ role.title }}
            </dd>
            <dt class="sr-only">Date</dt>
            <dd
              class="ml-auto flex gap-x-1 text-xs text-zinc-400 dark:text-zinc-500"
            >
              <time dateTime="startDate">{{ role.start }}</time>
              <span aria-hidden="true">—</span>
              <time dateTime="endDate">{{ role.end }}</time>
            </dd>
          </dl>
        </li>
      }
    </ol>
    <app-button
      href="#"
      variant="secondary"
      class="group mt-6 w-full inline-flex"
    >
      <span>Download CV</span>
      <app-arrow-down-icon
        class="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"
      />
    </app-button>
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumeComponent {
  resume$ = signal<Role[]>([
    {
      company: 'dotCMS',
      title: 'Senior Front-end Developer',
      logo: './images/logos/dotcms.png',
      start: '2024',
      end: 'Present',
    },
    {
      company: 'Platzi',
      title: 'Senior Full-stack Developer',
      logo: './images/logos/platzi.png',
      start: '2020',
      end: '2024',
    },
    {
      company: 'T2M Holding LLP',
      title: 'Technical Lead & Full-stack Developer',
      logo: './images/logos/capek.png',
      start: '2019',
      end: '2020',
    },
    {
      company: 'Senseta',
      title: 'Angular Developer',
      logo: './images/logos/senseta.png',
      start: '2017',
      end: '2019',
    },
    {
      company: 'Duety',
      title: 'Angular/Ionic Developer',
      logo: './images/logos/duety.png',
      start: '2016',
      end: '2017',
    },
  ]);
}
