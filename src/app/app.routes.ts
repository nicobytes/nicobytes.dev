import { Routes } from '@angular/router';
import { GenericPage } from './pages/generic/generic.page';
import { AboutPage } from './pages/about/about.page';
import { BlogPage } from './pages/blog/blog.page';
import { PortfolioPage } from './pages/portfolio/portfolio.page';

export const routes: Routes = [
  {
    path: 'about',
    component: AboutPage,
    title: 'About - @nicobytes',
  },
  {
    path: 'blog',
    component: BlogPage,
    title: 'Blog - @nicobytes',
  },
  {
    path: 'portfolio',
    component: PortfolioPage,
    title: 'Portfolio - @nicobytes',
  },
  {
    path: '**',
    component: GenericPage,
    title: 'Generic - @nicobytes',
  },
];
