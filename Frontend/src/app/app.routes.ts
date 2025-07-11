import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogSingleComponent } from './pages/blog-single/blog-single.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FaqComponent } from './pages/faq/faq.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { JobListingsComponent } from './pages/job-listings/job-listings.component';
import { JobSingleComponent } from './pages/job-single/job-single.component';
import { LoginComponent } from './pages/login/login.component';
import { PortfolioSingleComponent } from './pages/portfolio-single/portfolio-single.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { PostJobComponent } from './pages/post-job/post-job.component';
import { ServicesComponent } from './pages/services/services.component';
import { ServiceSingleComponent } from './pages/service-single/service-single.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';


export const routes: Routes = [
     { path: 'home', component: HomeComponent },
     { path: 'about', component: AboutComponent },
     { path: 'blog', component: BlogComponent },
     { path: 'blog-single', component: BlogSingleComponent },
     { path: 'contact', component: ContactComponent },
     { path: 'faq', component: FaqComponent },
     { path: 'gallery', component: GalleryComponent },
     { path: 'job-listings', component: JobListingsComponent },
     { path: 'job-single', component: JobSingleComponent },
     { path: 'login', component: LoginComponent },
     { path: 'portfolio', component: PortfolioComponent },
     { path: 'portfolio-single', component: PortfolioSingleComponent },
     { path: 'post-job', component: PostJobComponent },
     { path: 'services', component: ServicesComponent },
     { path: 'service-single', component: ServiceSingleComponent },
     { path: 'testimonials', component: TestimonialsComponent },
];
