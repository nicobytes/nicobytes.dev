import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

import { ContainerComponent } from '@/components/container.component';
import { GitHubIconComponent } from '@/components/icons/github.component';
import { InstagramIconComponent } from '@/components/icons/instagram.componet';
import { LinkedinIconComponent } from '@/components/icons/linkedin.component';
import { ResumeComponent } from '@/components/resume.component';
import { XIconComponent } from '@/components/icons/x.component';
import { DiscordIconComponent } from '@/components/icons/discord.component';
import { CardComponent } from '@/components/card/card.component';
import { CardTimeComponent } from '@/components/card/card-time.component';
import { CardTitleComponent } from '@/components/card/card-title.component';
import { CardDescriptionComponent } from '@/components/card/card-description.component';
import { BASE_EXTRA_QUERIES } from '@/query';
import { EditablePageService } from '@/services/editable-page.service';

@Component({
  selector: 'app-home',
  imports: [
    ContainerComponent,
    GitHubIconComponent,
    InstagramIconComponent,
    NgOptimizedImage,
    ResumeComponent,
    LinkedinIconComponent,
    XIconComponent,
    CardComponent,
    CardTimeComponent,
    CardTitleComponent,
    CardDescriptionComponent,
    DiscordIconComponent,
  ],
  templateUrl: './generic.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [EditablePageService],
})
export class GenericPage {
  readonly #editablePageService = inject(EditablePageService);

  $pageState = this.#editablePageService.initializePage({
    graphql: {
      ...BASE_EXTRA_QUERIES,
    },
  });
}
