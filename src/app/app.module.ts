import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './autho-components/signup/signup.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AngularMaterialModule } from './AngularMaterialModule';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { LoginComponent } from './auth-components/login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ScrapingComponent } from './auth-components/scraping/scraping.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './auth-components/home/home.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        AppComponent,
        SignupComponent,
        LoginComponent,
        ScrapingComponent,
        

    ],
    providers: [
        provideClientHydration(),
        provideAnimationsAsync(),
        provideHttpClient(withFetch()) // Ajoutez withFetch() pour activer fetch dans HttpClient
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
        AngularMaterialModule, MatInputModule, BrowserAnimationsModule,
        MatGridListModule, MatIconModule, MatToolbarModule, CommonModule
     
    ]
})
export class AppModule { }
