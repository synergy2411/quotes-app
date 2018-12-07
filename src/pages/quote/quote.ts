import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Quote } from './../../model/quotes.model';

@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage implements OnInit{

  quote : Quote;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private viewCtrl : ViewController) {
  }

  ngOnInit(){
    this.quote = this.navParams.get("quote");
    console.log("Quote", this.quote);
  }

  onClose(flag : boolean = false){
    console.log("Trying to close.");
    // this.navCtrl.pop();
    this.viewCtrl.dismiss(flag);
  }

}
