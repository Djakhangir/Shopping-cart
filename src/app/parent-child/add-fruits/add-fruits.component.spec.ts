import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFruitComponent } from './add-fruits.component';

describe('FruitsComponent', () => {
  let component: AddFruitComponent;
  let fixture: ComponentFixture<AddFruitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFruitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
