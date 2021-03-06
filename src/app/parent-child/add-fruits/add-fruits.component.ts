import { CartService } from '../../core/cart.service';
import { 
  Component,
  OnInit,
  Input, 
  Output, 
  EventEmitter,
  ViewChild,
  ElementRef,
  ContentChild,
  } from '@angular/core';
import { EditService } from '../../core/edit.service';

@Component({
  selector: 'app-add-fruits',
  templateUrl: './add-fruits.component.html',
  styleUrls: ['./add-fruits.component.css']
})
export class AddFruitComponent implements OnInit{
  fruitName:string='';
 isButtonDisabled: boolean=true;
  //listOfFruitNames : Array<string>=[
  //  'banana',
  //  'apple',
  //  'mango',
   // 'strawberry' ]

//@Input() fruitName: string;
//@Output() fruitMatched: EventEmitter<string> = new EventEmitter();
@ViewChild('fruitInputRef') inputRef: ElementRef;
//@ContentChild('parentContent') parentContents:ElementRef; 


  constructor(
    private cartS: CartService,
    private editService: EditService
  ) { }

  ngOnInit() {
    this.editService.currentEditingItem.next(undefined);
    //console.log('Our Parent content is', this.parentContents);
  }

 // ngAfterContentInit() {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
   // console.log('AfterContentInit Happened');
   // console.log('Our parent content is', this.parentContents);  }

 // ngAfterContentChecked() {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    //console.log('AfterContentChecked Happened');
   // console.log('Our parent content is', this.parentContents); }

  // onRemove() {
  //   this.removeMe.emit(this.fruitName);
  // }
  onInputChange(event) {
    const enteredFruitName = event.target.value;


    if (enteredFruitName.length > 0) {
      this.isButtonDisabled = false;
    } else {
      this.isButtonDisabled = true;
    }
  }

  onAddingFruit() {
    const passedFruitValue = this.inputRef.nativeElement.value;
    // this.inputRef.nativeElement.classList.toggle('active');
    //const fruitMatches = this.listOfFruitNames.includes( passedFruitValue );
   // if (fruitMatches) {
      // this.fruitMatched.emit(passedFruitValue);
      this.cartS.addToCart(passedFruitValue);
      console.log(this.cartS.listOfItems);
  //}
  }

}
