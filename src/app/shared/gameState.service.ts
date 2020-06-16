import { Injectable } from '@angular/core';
import { Observable, Subject, observable } from 'rxjs';
import { GameState } from './gameState.model';


@Injectable()
export class GameStateService {

    saveState() {
        localStorage.setItem('blockIndex', STATE.blockIndex);
        localStorage.setItem('textIndex', STATE.textIndex);
        localStorage.setItem('existingLeftActor', STATE.existingLeftActor);
        localStorage.setItem('existingRightActor', STATE.existingRightActor);
        localStorage.setItem('existingMusic', STATE.existingMusic);
        localStorage.setItem('existingBackground', STATE.existingBackground);
    }

    loadState() {
        localStorage.getItem('blockIndex');
        localStorage.getItem('textIndex');
        localStorage.getItem('existingLeftActor');
        localStorage.getItem('existingRightActor');
        localStorage.getItem('existingMusic');
        localStorage.getItem('existingBackground');
    }
}

const STATE: GameState = 
{   
    blockIndex: "0",
    textIndex: "0", 
    existingLeftActor: "false",
    existingRightActor: "false",
    existingMusic: "false",
    existingBackground: "false"
}