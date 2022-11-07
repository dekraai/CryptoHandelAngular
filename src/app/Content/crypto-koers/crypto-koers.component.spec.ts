import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoKoersComponent } from './crypto-koers.component';

describe('CryptoKoersComponent', () => {
  let component: CryptoKoersComponent;
  let fixture: ComponentFixture<CryptoKoersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoKoersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptoKoersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
