import { QuotesPage } from './../quotes/quotes';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { QUOTES_DATA } from './../../model/quotes';
import { Quote } from './../../model/quotes.model';

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {
  quotesCollection : {category : string, quotes : Quote[], icon : string } [] ;
  
  ngOnInit(){
    this.quotesCollection = QUOTES_DATA;
    // console.log(this.quotesCollection);
  }

  constructor(private navCtrl : NavController){}

  onSelectQuoteGroup(quoteGroup :{category : string, quotes : Quote[], icon : string } ){
    // console.log(quoteGroup);
    this.navCtrl.push(QuotesPage, {group : quoteGroup});
  }

}
