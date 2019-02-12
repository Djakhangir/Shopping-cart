import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { EditService } from '../../core/edit.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-fruits',
  templateUrl: './edit-fruits.component.html',
  styleUrls: ['./edit-fruits.component.css']
})
export class EditFruitsComponent implements OnInit, OnDestroy {
  isChildrenLoaded:boolean;
  resolvedData: {loginStatus: boolean, message:string}

  private subscription:Subscription;
// @Input() fruitName: {
//   value: string,
//   index: number
// }; 

  constructor(
    private editService:EditService,
    private changeDetectionReferace:ChangeDetectorRef,
    private route:ActivatedRoute
  ) { }     

  ngOnInit() {
    this.route.data.subscribe((result:Data)=>{
      this.resolvedData = result.data;
});

    this.subscription = this.editService.currentEditingItem.subscribe((num:any)=>{
 // 0: false
 // any other number: true
                                        //if (typeof num === 'number') { or
        if (num>=0) {
          console.log('editing number', num)
      this.isChildrenLoaded=true;
      this.changeDetectionReferace.detectChanges();
          }
        });
      // if (resultedParams.fruitIndex === null || resultedParams.fruitIndex === undefined) {
      //   this.routerService.navigateByUrl('/');
      // } 
   }
   ngOnDestroy(){
      this.subscription.unsubscribe();
   }
}