import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ClienteService } from './components/clientes/cliente.service';
import { FormComponent } from './components/clientes/form/form.component';


const ROUTES : Routes = [
                        //pagina Principal
                        {path:'', redirectTo:'./clientes', pathMatch:'full'},
                        {path:'directivas', component: DirectivasComponent},
                        {path:'clientes', component: ClientesComponent},
                        {path:'clientes/form', component: FormComponent},
                        {path: 'clientes/:id', component: FormComponent}
                      ]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivasComponent,
    ClientesComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    //Se registra el HttpClientModule
    HttpClientModule,
    //se registran las rutas creadas
    RouterModule.forRoot(ROUTES),
    //se registra para el manejo de formularios
    FormsModule
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
