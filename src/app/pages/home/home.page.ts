import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

import { ContainerComponent } from '@/components/container.component';
import { GitHubIconComponent } from '@/components/icons/github.component';
import { InstagramIconComponent } from '@/components/icons/instagram.componet';
import { LinkedinIconComponent } from '@/components/icons/linkedin.component';
import { ResumeComponent } from '@/components/resume.component';
import { XIconComponent } from '@/components/icons/x.component';
import { CardComponent } from '@/components/card/card.component';
import { CardTimeComponent } from '@/components/card/card-time.component';
import { CardTitleComponent } from '@/components/card/card-title.component';
import { CardDescriptionComponent } from '@/components/card/card-description.component';

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
  ],
  templateUrl: './home.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  photos$ = signal([
    {
      src: './images/photos/image-1.jpg',
      alt: 'Photo 1',
    },
    {
      src: './images/photos/image-2.jpg',
      alt: 'Photo 2',
    },
    {
      src: './images/photos/image-3.jpg',
      alt: 'Photo 3',
    },
    {
      src: './images/photos/image-4.jpg',
      alt: 'Photo 4',
    },
    {
      src: './images/photos/image-5.jpg',
      alt: 'Photo 5',
    },
  ]);
}
