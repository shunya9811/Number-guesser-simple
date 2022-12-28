import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit{
  // 表示する内容の切り替えを行う
  currentPlayer: String = "player1";

  player1Num: number;
  player2Num: number;
  differece: number;

  twoAnswered: boolean = false;
  isCollect: boolean = false;

  constructor() {}

  ngOnInit(){
  }

  // player1の提出
  onSubmit(input: string): void {
    let num = Number(input);
    if (num % 1 == 0 && num >= 1 && num <= 100){
      this.player1Num = num;
      this.currentPlayer = "player2";
      console.log(this.player1Num);
    } 
    else {
      alert("1~100までの整数を入力してください");
    }
  }

  // player2の解答
  onAnswer(input2: string): void {
    let num = Number(input2);
    if (num % 1 == 0 && num >= 1 && num <= 100){
      this.player2Num = num;
      this.isCollect = this.player1Num - num == 0;
      this.differece = Math.abs(this.player1Num - num);
      this.twoAnswered = true;
    }
    else{
      alert("1~100までの整数を入力してください");
    }
  }

  //クリア後
  goBack(){
    this.twoAnswered = false;
    this.isCollect = false;
    this.currentPlayer = "player1";
  }
}
