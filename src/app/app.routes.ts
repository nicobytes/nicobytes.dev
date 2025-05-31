import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { AboutPage } from './pages/about/about.page';
import { BlogPage } from './pages/blog/blog.page';
import { PortfolioPage } from './pages/portfolio/portfolio.page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'about',
    component: AboutPage,
  },
  {
    path: 'blog',
    component: BlogPage,
  },
  {
    path: 'portfolio',
    component: PortfolioPage,
  },
];
