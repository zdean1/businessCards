import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbusinesscardComponent } from './newbusinesscard.component';

describe('NewbusinesscardComponent', () => {
  let component: NewbusinesscardComponent;
  let fixture: ComponentFixture<NewbusinesscardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewbusinesscardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewbusinesscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
