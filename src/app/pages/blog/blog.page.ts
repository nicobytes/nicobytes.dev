import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContainerComponent } from '@/components/container.component';
import { CardComponent } from '@/components/card/card.component';
import { CardTimeComponent } from '@/components/card/card-time.component';
import { CardTitleComponent } from '@/components/card/card-title.component';
import { CardDescriptionComponent } from '@/components/card/card-description.component';

@Component({
  selector: 'app-blog',
  imports: [
    ContainerComponent,
    CardComponent,
    CardTimeComponent,
    CardTitleComponent,
    CardDescriptionComponent,
  ],
  templateUrl: './blog.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogPage {}
