export class GameState {
    blockIndex:string;
    textIndex:string;
    existingLeftActor:string;
    existingRightActor:string;
    existingMusic:string;
    existingBackground:string;

    constructor(
        blockIndex:string = "0",
        textIndex:string = "0",
        existingLeftActor:string = "0",
        existingRightActor:string = "0",
        existingMusic:string = "0",
        existingBackground:string = "0",
    ) {
        this.blockIndex = blockIndex;
        this.textIndex = textIndex;
        this.existingLeftActor = existingLeftActor;
        this.existingRightActor = existingRightActor;
        this.existingMusic = existingMusic;
        this.existingBackground = existingBackground;
    }

    setBlockIndex(val:number):void {
        this.blockIndex = val.toString();
    }

}
