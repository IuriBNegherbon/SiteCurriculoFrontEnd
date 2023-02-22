import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

menuItems = [
    { label: 'Página Inicial', path: '/' },
    { label: 'Sobre Mim', path: '/about' }
  ];
  //isActive: boolean | undefined;

  ngOnInit(): void {
    // código que você quer executar quando o componente for inicializado
    //this.isActive = true;
  }
}
