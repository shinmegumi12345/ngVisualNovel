import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from 'src/routes';
import { MenuComponent } from './menu/menu.component';
import { NavBarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    MenuComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
