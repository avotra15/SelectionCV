import { Component } from '@angular/core';
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
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { PortfolioSingleComponent } from './pages/portfolio-single/portfolio-single.component';
import { PostJobComponent } from './pages/post-job/post-job.component';
import { ServiceSingleComponent } from './pages/service-single/service-single.component';
import { ServicesComponent } from './pages/services/services.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    AboutComponent,
    BlogComponent,
    BlogSingleComponent,
    ContactComponent,
    FaqComponent,
    GalleryComponent,
    JobListingsComponent,
    JobSingleComponent,
    LoginComponent,
    PortfolioComponent,
    PortfolioSingleComponent,
    PostJobComponent,
    ServiceSingleComponent,
    ServicesComponent,
    TestimonialsComponent
  ],
  template: `
            <app-home></app-home>
            <app-about></app-about>
            <app-blog-single></app-blog-single>
            <app-blog></app-blog>
            <app-contact></app-contact>
            <app-faq></app-faq>
            <app-gallery></app-gallery>
            <app-job-listings></app-job-listings>
            <app-job-single></app-job-single>
            <app-login></app-login>
            <app-portfolio-single></app-portfolio-single>
            <app-portfolio></app-portfolio>
            <app-post-job></app-post-job>
            <app-service-single></app-service-single>
            <app-services></app-services>
            <app-testimonials></app-testimonials>
            `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
