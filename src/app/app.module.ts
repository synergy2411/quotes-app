
import { QuoteService } from './../services/quotes.service';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FavoritePage } from './../pages/favorite/favorite';
import { LibraryPage } from './../pages/library/library';
import { QuotesPage } from './../pages/quotes/quotes';
import { TabsPage } from './../pages/tabs/tabs';
import { QuotePage } from './../pages/quote/quote';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    FavoritePage,
    QuotesPage,
    LibraryPage,
    QuotePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    FavoritePage,
    QuotesPage,
    LibraryPage,
    QuotePage
  ],
  providers: [
    QuoteService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
