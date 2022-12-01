import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCryptoTriggersComponent } from './my-crypto-triggers.component';

describe('MyCryptoTriggersComponent', () => {
  let component: MyCryptoTriggersComponent;
  let fixture: ComponentFixture<MyCryptoTriggersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCryptoTriggersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCryptoTriggersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
