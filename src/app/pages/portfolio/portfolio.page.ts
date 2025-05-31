import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

import { ContainerComponent } from '@/components/container.component';
import { CardComponent } from '@/components/card/card.component';
import { CardTitleComponent } from '@/components/card/card-title.component';
import { CardDescriptionComponent } from '@/components/card/card-description.component';

@Component({
  selector: 'app-portfolio',
  imports: [
    NgOptimizedImage,
    ContainerComponent,
    CardComponent,
    CardTitleComponent,
    CardDescriptionComponent,
  ],
  templateUrl: './portfolio.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioPage {}
