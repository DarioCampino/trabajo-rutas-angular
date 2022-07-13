import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './Modules/auth/login-page/login-page.component';
import { RegisterComponent } from './Modules/auth/register/register.component';
import { ValidatonsComponent } from './Modules/auth/validatons/validatons.component';
import { MarcadoresViewComponent } from './Modules/favoritos/marcadores-view/marcadores-view.component';
import { HistoryMenuComponent } from './Modules/history/history-menu/history-menu.component';
import { FooterComponent } from './Modules/home/footer/footer.component';
import { HeadersComponent } from './Modules/home/headers/headers.component';
import { TracklistComponent } from './Modules/track/tracklist/tracklist.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';

const routes: Routes = [

  {
    path:'', //localhost:4200 de primera ruta
    component: MycomponentComponent
  },
  {
    path: 'Autenticacion', //localhost:4200/autenticacion
    
    component: LoginPageComponent
  },
  {
    path: 'validacion', 
    component: ValidatonsComponent
  },
  {
    path: 'registro', 
    component: RegisterComponent
  },
  {
    path: 'marcadores',
    component: MarcadoresViewComponent
  },
  {
    path: 'historialmenu',
    component: HistoryMenuComponent
  },
  {
    path: 'footercomponent',
    component: FooterComponent
  },
  {
    path: 'encabezado',
    component: HeadersComponent
  },
  {
    path: 'tracklist',
    component: TracklistComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
