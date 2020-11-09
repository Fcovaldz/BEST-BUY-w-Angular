import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  constructor(private _aRoute: ActivatedRoute, private _productsService: ProductsService) { }

  buscados: any = [];

  nombreP: string = "";


  ngOnInit(): void {
    this._aRoute.params.subscribe(params => {
      this.nombreP = params['nombre'];
      this.buscados = this._productsService.buscaProductos(params['nombre']);
      console.log(this.buscados)
    });
  }

}
