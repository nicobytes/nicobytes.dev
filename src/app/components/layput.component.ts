import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  template: ` <div class="sm:px-8 mt-9">
    <div class="mx-auto w-full max-w-7xl lg:px-8">
      <div class="relative px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl lg:max-w-5xl">
          <router-outlet />
        </div>
      </div>
    </div>
  </div>`,
  imports: [RouterOutlet],
})
export class LayoutComponent {}
