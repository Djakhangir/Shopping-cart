import {Injectable} from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, of } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable ({
    providedIn: 'root'
})


export class CartService {
    private cartList:Array<string>;
    public listOfItems: ReplaySubject<any> ; 


constructor(
    private routerService: Router,
    private httpClient:HttpClient
) {
    this.cartList = [
        'grape',
        'date'
    ];
    this.listOfItems = new ReplaySubject(1);
    this.listOfItems.next([...this.cartList]);
    console.log('Car Service is created');
}

addToCart(item:string) {
    this.cartList.push(item);
    this.listOfItems.next([...this.cartList]);
}

getCartContent(): Array<string>{
   //return this.cartList.slice();
   return[...this.cartList]
}

updateCartContent(index: number, newContentName ):void {
    this.cartList.splice(index, 1, newContentName);
    //this.cartList[index]=newContentName;
    this.listOfItems.next([...this.cartList]);
    this.routerService.navigateByUrl('/');
    //return true; 
  }

  updateWholeCart(newCartItems){
    this.listOfItems.next([...newCartItems]);
  }

  fetchData(){
      return this.httpClient.get('https://my-first-project-eff0c.firebaseio.com/data.json')
    


                        // One type of handling the ERRORs through the server Cart.ts, 
                                //another way is in the banana comp. observables-when we fetch data
    //   .pipe(
    //       catchError( error => {
    //           console.log(error);
    //         this.routerService.navigate(['unknown']);
    //         return of (error);
    //       })
    //   );
      //.subscribe((response:any)=> {
       //   console.log('response from firebase',response);
  }

  postData() {
    const dataToPost= {
        cartItems:this.cartList
    };

    return this.httpClient.put('https://my-first-project-eff0c.firebaseio.com/data.json', dataToPost);
  }
}