import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {catchError, delay, Observable, tap, throwError} from "rxjs";
import {Iproduct} from "../models/product";
import {ErrorService} from "./error.service";
import {products} from "../data/products";

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) {}
    private errorHandler (error:HttpErrorResponse) {
    this.errorService.handle(error.message)
      return throwError(() => error.message)
    }

    products: Iproduct[] = []

  getAll():Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>('https://fakestoreapi.com/products', {
      params: new HttpParams().append('limit', 5)
    }).pipe(
      tap(products => this.products = products),
      catchError(this.errorHandler.bind(this))
    )}

  create(product: Iproduct):Observable<Iproduct> {
    return this.http.post<Iproduct>('https://fakestoreapi.com/products', product)
      .pipe(
        tap(prod => this.products.push(prod))
      )
  }

}
