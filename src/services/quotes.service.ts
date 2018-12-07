import { Injectable } from '@angular/core';
import { Quote } from '../model/quotes.model';

@Injectable()
export class QuoteService{
    favoriteQuotes : Quote[] = [];

    addQuoteToFavorite(quote : Quote){
        this.favoriteQuotes.push(quote);
        console.log(this.favoriteQuotes);
    }

    getFavoriteQuotes(){
        return this.favoriteQuotes;
    }

    removeQuoteFromFavorite(quote : Quote){
        const position = this.favoriteQuotes.findIndex((el : Quote)=>{
            return el.id == quote.id;
        });
        console.log(position);
        this.favoriteQuotes.splice(position, 1);
        console.log(this.favoriteQuotes);
    }
}
