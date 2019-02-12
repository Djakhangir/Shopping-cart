import { Component, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import { CartService } from '../../core/cart.service';
import { EditService } from '../../core/edit.service';
import { Subscription } from 'rxjs';


@Component({  
  selector: 'app-banana',
  templateUrl: './banana.component.html',
  styleUrls: ['./banana.component.css']
})

export class BananaComponent implements OnInit, OnDestroy{

  private subsrcibtion:Subscription
  counter: number=0;
  
  cartOfFruits:Array<string>;
  selectedFruitName : string;

  //@Output() selectedFruit = new EventEmitter();
  //@Input() inputName: string;

  constructor(
    private cartService:CartService,
    private editService: EditService
  ) {
    // this.cartOfFruits=this.cartService.getCartContent();
    
    }
  
ngOnInit() {
    this.subsrcibtion=this.cartService.listOfItems.subscribe((result:Array<string>) =>{ 
    this.cartOfFruits=result;  
  });
    this.selectedFruitName = '';
}

onEdit(index: number, name: string) {
  //this.cartOfFruits[0]='Something Different';
  //console.log(this.cartService.getCartContent());
  //this.selectedFruit.emit({value: name, index: index});
  this.editService.currentEditingItem.next(index);

  this.selectedFruitName = name;
}

receiveItemsFromFirebase(){
  this.cartService.fetchData().subscribe((response:any)=>{
    //const cart = Object.values(response)[0];
    this.cartService.updateWholeCart(response.cartItems);
    console.log('in component', response);
  }, (error)=>{
    console.log('error happened in component' , error)
  });
}

saveItemsToFirebase(){
  this.cartService.postData().subscribe((response)=>{
    console.log(response);
  });
}


ngOnDestroy(){
this.subsrcibtion.unsubscribe();
}
} 
