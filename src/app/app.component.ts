import { afterNextRender, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@/components/header/header.component';
import { FooterComponent } from '@/components/footer.component';
import { ThemeService } from '@/services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  themeService = inject(ThemeService);

  constructor() {
    afterNextRender(() => {
      this.themeService.applyUserTheme();
    });
  }
}
