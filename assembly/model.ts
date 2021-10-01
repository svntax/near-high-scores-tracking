import { PersistentVector } from "near-sdk-as";

@nearBindgen
export class Score {
    username: string;
    value: i32;
    constructor(user: string, score: i32) {
        this.username = user;
        this.value = score;
    }
}

export const highScores = new PersistentVector<Score>("m");