import { QuoteService } from './../../services/quotes.service';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavParams, AlertController } from 'ionic-angular';
import { Quote } from '../../model/quotes.model';

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit{

  quotesGroup : {category : string, quotes : Quote[], icon : string };

  constructor(public navParams: NavParams,
              private alertCtrl : AlertController,
              private quoteService : QuoteService) {  }

  ngOnInit(){
    this.quotesGroup = this.navParams.get('group');
    // console.log("Quotes", this.quotesGroup);
  }

  onFavorite(quote : Quote){
    const alert = this.alertCtrl.create({
      title : "Are you sure?",
      subTitle : "Making it your favorite",
      message : "Are you sure to make it your favorite?",
      buttons : [{
        text : "Yes, please go ahead!",
        handler : ()=>{
          // console.log(quote);
          this.quoteService.addQuoteToFavorite(quote);
        }
      },{
        text : "No, I changed my mind!",
        handler : ()=>{console.log('Cancelled')}
      }]
    })

    alert.present();
    
  }

}
