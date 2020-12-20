import { environment } from './../environments/environment';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { SendEmailComponent } from './auth/send-email/send-email.component';

import { AuthService } from '@auth/services/auth.service';

import { CanSuscriptorGuard } from '@app/auth/guards/can-suscriptor.guard';
import { CanAdminGuard } from '@auth/guards/can-admin.guard';
import { CanEditGuard } from '@auth/guards/can-edit.guard';
import { HttpClientModule } from '@angular/common/http'
import { CiudadanoService } from './admin/ciudadanos/ciudadano.service';


@NgModule({
  declarations: [AppComponent, NavbarComponent, SendEmailComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    HttpClientModule,
  ],
  providers: [AuthService, CanEditGuard, CanAdminGuard, CanSuscriptorGuard, CiudadanoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
