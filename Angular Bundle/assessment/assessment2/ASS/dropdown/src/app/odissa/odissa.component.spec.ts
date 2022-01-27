import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdissaComponent } from './odissa.component';

describe('OdissaComponent', () => {
  let component: OdissaComponent;
  let fixture: ComponentFixture<OdissaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdissaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OdissaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
