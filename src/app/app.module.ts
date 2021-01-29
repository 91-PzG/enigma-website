import {
  HttpClientModule,
  HttpRequest,
  HTTP_INTERCEPTORS,
} from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  NbAuthJWTInterceptor,
  NB_AUTH_TOKEN_INTERCEPTOR_FILTER,
} from "@nebular/auth";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import { NbMomentDateModule } from "@nebular/moment";
import {
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
} from "@nebular/theme";
import { CoreModule } from "./@core/core.module";
import { ThemeModule } from "./@theme/theme.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    //Nebular
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbMomentDateModule,
    NbDialogModule.forRoot(),
    CoreModule.forRoot(),
    NbEvaIconsModule,
    ThemeModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: NbAuthJWTInterceptor, multi: true },
    {
      provide: NB_AUTH_TOKEN_INTERCEPTOR_FILTER,
      useValue: function (req: HttpRequest<any>) {
        if (req.url === "/api/auth/refresh-token") {
          return true;
        }
        return false;
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
