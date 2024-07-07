import { BrowserModule, provideClientHydration} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { DynamicTitleComponent } from './dynamic-title/dynamic-title.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { CommentSectionComponent } from './comment-section/comment-section.component';
import { CommentComponent } from './comment/comment.component';
@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    ProjectPageComponent,
    HomeComponent,
    DynamicTitleComponent,
    AboutComponent,
    CommentSectionComponent,
    CommentComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideClientHydration(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }