import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitContainerComponent } from './components/git-container';
import { GitItemComponent } from './components/git-item';
import { IGitService, MockGitService } from './services';

@NgModule({
  declarations: [AppComponent, GitContainerComponent, GitItemComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [{ provide: IGitService, useClass: MockGitService }],
  bootstrap: [AppComponent]
})
export class AppModule {}
