import { Component, Output, EventEmitter, Input, Inject } from '@angular/core';
import { GameState } from '../shared/gameState.model'
import { GameScriptService } from '../shared/gameScript.service';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html'
})

export class NavBarComponent {
    

    @Input() gameState : GameState = new GameState()
    blockIndex:string;
    textIndex:string;
    runFlag:string;
    existingLeftActor:string;
    existingRightActor:string;
    existingMusic:string;
    existingBackground:string;


    @Output() saveClicked: EventEmitter<GameState> = new EventEmitter<GameState>()
    saveState() {
        this.saveClicked.emit(this.gameState)

        // localStorage.setItem('blockIndex', this.blockIndex.toString());
        // localStorage.setItem('textIndex', this.textIndex.toString());
        // localStorage.setItem('existingLeftActor', this.existingLeftActor.toString());
        // localStorage.setItem('existingRightActor', this.existingRightActor.toString());
        // localStorage.setItem('existingMusic', this.existingMusic.toString());
        // localStorage.setItem('existingBackground', this.existingBackground.toString());
    }
    
}