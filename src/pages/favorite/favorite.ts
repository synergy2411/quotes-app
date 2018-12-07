import { QuotePage } from './../quote/quote';
import { QuoteService } from './../../services/quotes.service';

import { Component, OnInit } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { Quote } from '../../model/quotes.model';

@IonicPage()
@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage implements OnInit{

  favQuotes : Quote[];

  constructor(private quoteService : QuoteService,
            private modalCtrl : ModalController){}

  ngOnInit(){
    this.favQuotes = this.quoteService.getFavoriteQuotes();
    console.log(this.favQuotes);
  }

  onSelectFavorite(quote : Quote){
    const modal = this.modalCtrl.create(QuotePage, {quote : quote});
    modal.present();
    modal.onDidDismiss((flag)=>{
      console.log(flag);
      if(flag==true){
        this.quoteService.removeQuoteFromFavorite(quote);
        this.favQuotes = this.quoteService.getFavoriteQuotes();
      }
    })
  }

}
