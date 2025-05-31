import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContainerComponent } from '@/components/container.component';
import { GitHubIconComponent } from '@/components/icons/github.component';
import { MailIconComponent } from '@/components/icons/mail.component';

@Component({
  selector: 'app-about',
  imports: [ContainerComponent, GitHubIconComponent, MailIconComponent],
  templateUrl: './about.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPage {}
