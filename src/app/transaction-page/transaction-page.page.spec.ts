import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransactionPagePage } from './transaction-page.page';

describe('TransactionPagePage', () => {
  let component: TransactionPagePage;
  let fixture: ComponentFixture<TransactionPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
