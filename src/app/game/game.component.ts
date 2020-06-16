import { Component } from '@angular/core';
import { GameScriptService } from '../shared/gameScript.service';


@Component({
    selector: "game",
    templateUrl: './game.component.html'
})

export class GameComponent {

    constructor(private gameScriptService: GameScriptService) {
        
    }

    blockIndex:number = 0;
    textIndex:number = 0;
    existingLeftActor:boolean = false;
    existingRightActor:boolean = false;
    existingMusic:boolean = false;
    existingBackground:boolean = false;

    saveGame() {
        // localStorage.setItem('blockIndex', this.blockIndex.toString());
        // localStorage.setItem('textIndex', this.textIndex.toString());
        // localStorage.setItem('existingLeftActor', this.existingLeftActor.toString());
        // localStorage.setItem('existingRightActor', this.existingRightActor.toString());
        // localStorage.setItem('existingMusic', this.existingMusic.toString());
        // localStorage.setItem('existingBackground', this.existingBackground.toString());
    }

}