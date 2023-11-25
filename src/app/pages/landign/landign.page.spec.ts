import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandignPage } from './landign.page';

describe('LandignPage', () => {
  let component: LandignPage;
  let fixture: ComponentFixture<LandignPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LandignPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
