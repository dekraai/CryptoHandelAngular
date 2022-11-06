import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoCoinComponent } from './crypto-coin.component';

describe('CryptoCoinComponent', () => {
  let component: CryptoCoinComponent;
  let fixture: ComponentFixture<CryptoCoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoCoinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptoCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
