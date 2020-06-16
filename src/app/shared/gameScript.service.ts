import { Injectable } from '@angular/core'
import { Observable, Subject } from 'rxjs';
import { ScriptBlock } from './gameScript.model'



@Injectable()
export class GameScriptService {

    getScriptBlock(id:number):ScriptBlock {
        return SCRIPT.find(block => block.id === id)
    }
}

const SCRIPT: ScriptBlock[] = [
{   
    id: 1,
    name: "n",
    position: "n",
    text:
        [
            "The world has ended.",
            " When we woke up, everyone was gone...except for the five of us.",
            " What could we do then?",
            " What else could we have done, except to continue living?",
            " We just kept breathing, kept moving, one foot in front of the other...",
            " Untold number of years had passed since whatever had happened.",
            " Mother nature had long taken over the ruins of the sprawling metropolis...",
            "those places that we once called home."
        ],
    newPage: true,
    music: "bgm1.mp3",
    background: "blue_sky_background.jpg"
},
{
    id: 2,
    name: "n",
    position: "n",
    text:
        [
            " There were only traces of people having been there, but no corpses.",
            " It was as if they all disappeared.",
            " We didn't know what happened to everyone else, but we could at least determine what happens to us.",
            "*",
            " The five of us began to learn what it means to live in a world devoid of others.",
            " We tried to figure out how to survive.",
            " We started trying to build a life together.",
            " This is the story of the survivors of Event Ex.",
            " This is our story."
        ],
    newPage: true,
    music: "bgm1.mp3",
    background: "blue_sky_background.jpg"
},
{
    id: 3,
    name: "r",
    position: "l",
    text:
        [
            "\"It's so quiet out here,",
            " hard to imagine that we're the only people remaining.\""
        ],
    newPage: true,
    music: "bgm1.mp3",
    background: "blue_sky_background.jpg"
}

]