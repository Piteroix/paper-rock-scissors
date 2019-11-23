import { Component } from '@angular/core';
import { Choice } from './models/Choice';
import { Result } from './models/Result';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public playerPoints = 0;
  public computerPoints = 0;
  public playerChoice: Choice;
  public computerChoice: Choice;
  public result: Result = Result.Start;
  public title = 'Paper Rock and Scissors Game!';

  public reset(): void {
    this.playerPoints = 0;
    this.computerPoints = 0;
    this.computerChoice = undefined;
    this.playerChoice = undefined;
    this.result = Result.Start;
  }

  public startGame() {
    this.generateComputerChoice();
    this.checkWinner();
    switch (this.result) {
      case Result.Win:
        break;
      case Result.Lose:
        break;
      case Result.Draw:
        break;
    }
  }

  public checkWinner(): void {
    if (this.playerChoice === Choice.Paper) {
      if (this.computerChoice === Choice.Rock) {
        this.playerPoints++;
        this.result = Result.Win;
      } else if (this.computerChoice === Choice.Scissors) {
        this.computerPoints++;
        this.result = Result.Lose;
      } else {
        this.result = Result.Draw;
      }
    } else if (this.playerChoice === Choice.Rock) {
      if (this.computerChoice === Choice.Scissors) {
        this.playerPoints++;
        this.result = Result.Win;
      } else if (this.computerChoice === Choice.Paper) {
        this.computerPoints++;
        this.result = Result.Lose;
      } else {
        this.result = Result.Draw;
      }
    } else {
      if (this.computerChoice === Choice.Paper) {
        this.playerPoints++;
        this.result = Result.Win;
      } else if (this.computerChoice === Choice.Rock) {
        this.computerPoints++;
        this.result = Result.Lose;
      } else {
        this.result = Result.Draw;
      }
    }
  }

  private generateComputerChoice(): void {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        this.computerChoice = Choice.Paper;
        break;
      case 1:
        this.computerChoice = Choice.Rock;
        break;
      case 2:
        this.computerChoice = Choice.Scissors;
        break;
      default:
        this.computerChoice = undefined;
        break;
    }
  }
}
