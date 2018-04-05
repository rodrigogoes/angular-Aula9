import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ContratoService } from './services/contrato.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ContratoComponent } from './contrato/contrato.component';
import { AlunoComponent } from './aluno/aluno.component';
import { AlunoService } from './services/aluno.service';



@NgModule({
  declarations: [
    AppComponent,
    ContratoComponent,
    AlunoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ContratoService, AlunoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
