 
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EditService } from '../core/edit.service';


@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css']
})
export class ParentChildComponent implements OnInit {
  //fruitIndexToEdit: any;
  showChildComponent: boolean;
  routingToTheFruitToEdit: Array<string|number>;
  isEditModeEnabaled: boolean;
  todaysDate =  new Date();
  //buttondisabled="true";
  //fruitName: string;
  //isButtonDisabled:boolean;
  //itemCount: number;
  //btnText: string="Add an Item";
  //goalText: string="My first child";
  //goals=[];

  constructor(
    private router:Router,
    private activatedRoute: ActivatedRoute,
    private editService:EditService
  ) {}

  ngOnInit() {
    //this.itemCount=this.goals.length;
    this.showChildComponent=false;
    //this.isButtonDisabled=true;
    this.isEditModeEnabaled= false;
    this.routingToTheFruitToEdit=['edit'];
    this.editService.currentEditingItem.subscribe((num:number)=>{
      if (num>=0){
        this.router.navigate(['edit', num], {relativeTo:this.activatedRoute});
      }
    }); 
  }

  //onFruitSelectionToEdit(fruit: {value:string, index:number}) {
    //console.log(this.routeService.snapshot.paramMap.get('id')); 
    //this.routingToTheFruitToEdit.push(fruit.index);
    // this.routeService.paramMap.pipe(
    //   switchMap((param:ParamMap)) => 
    //   console.log(params)})
  //    )
    //   //this.service.getHero(param.get('id)'));
  //  this.editService.currentEditingItem.next(fruit.index)
  //  this.router.navigate(['edit', fruit.index])
      
   // this.routingToTheFruitToEdit[1]=fruit.index;
    // this.fruitIndexToEdit = fruit;
    // this.isEditModeEnabaled = true;
//  }
}
  // ngDoCheck() {
  //   console.log('doCheck Happened');
  // }

  // ngAfterViewInit() {
  //   //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //   //Add 'implements AfterViewInit' to the class.
  //   console.log('AfterViewInit Happened');
  // }

  // ngAfterViewChecked() {
  //   //Called after every check of the component's view. Applies to components only.
  //   //Add 'implements AfterViewChecked' to the class.
  //   console.log('AfterViewChecked Happened');

  // }

  // ngOnDestroy(): void {
  //   //Called once, before the instance is destroyed.
  //   //Add 'implements OnDestroy' to the class.
  //   console.log('OnDestroy Happened');
  // }

  // submit() {
  //   this.showChildComponent=true;
  // }

  // addItem(){
  //   this.goals.push(this.goalText);
  //   this.goalText=''; 
  //   this.itemCount=this.goals.length;
  // }
  // onAddingFruit() {
    //   this.showChildComponent=true;
    /* onInputChange(event) {
      console.log('event is', event);
      this.fruitName=event.target.value;
  
    if (this.fruitName.length>0){
    this.isButtonDisabled=false;
    } else{
   this.isButtonDisabled=true;
   }
    } */
    // }



