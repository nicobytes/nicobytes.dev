import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { AboutPage } from './pages/about/about.page';
import { BlogPage } from './pages/blog/blog.page';
import { PortfolioPage } from './pages/portfolio/portfolio.page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
    title: 'Home - @nicobytes',
  },
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
];
