import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycompenentPageComponent } from './mycompenent-page.component';

describe('MycompenentPageComponent', () => {
  let component: MycompenentPageComponent;
  let fixture: ComponentFixture<MycompenentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MycompenentPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MycompenentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
