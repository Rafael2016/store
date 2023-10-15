import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input()
  gameCover:string = ""
  @Input()
  gameLabel: string=""
  @Input()
  gameType:string =""
  @Input()
  gamePrice:string =""


  constructor () { }
  ngOnInit(): void { }


}
