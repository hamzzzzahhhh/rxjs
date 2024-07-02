import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicappComponent } from './basicapp.component';

describe('BasicappComponent', () => {
  let component: BasicappComponent;
  let fixture: ComponentFixture<BasicappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicappComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
