import { context } from "near-sdk-as";
import { Score, highScores } from "./model";

const MAX_ENTRIES = 10;

export function submitScore(newScore: i32): void {
  const accountId = context.sender;
  if(highScores.length >= 10){
    let lowestScoreIndex = 0;
    let lowestScore = highScores[0];
    for(let i = 1; i < highScores.length; i++){
      if(highScores[i].value < lowestScore.value){
        lowestScore = highScores[i];
        lowestScoreIndex = i;
      }
    }
    if(newScore > lowestScore.value){
      highScores[lowestScoreIndex] = new Score(accountId, newScore);
    }
  }
  else{
    const newHighScore = new Score(accountId, newScore);
    highScores.push(newHighScore);
  }
}

export function getScores(): Score[] {
  const result = new Array<Score>(highScores.length);
  for(let i = 0; i < highScores.length; i++) {
    result[i] = highScores[i];
  }
  return result;
}