import { Routes } from '@angular/router';
import { GameComponent } from './app/game/game.component'
import { MenuComponent } from './app/menu/menu.component';

export const appRoutes:Routes = [
    { path: 'game', component: GameComponent },
    { path: 'menu', component:  MenuComponent},
    { path: '', redirectTo: "", pathMatch: 'full' }
]