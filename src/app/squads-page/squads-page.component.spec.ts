import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquadsPageComponent } from './squads-page.component';

describe('SquadsPageComponent', () => {
  let component: SquadsPageComponent;
  let fixture: ComponentFixture<SquadsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquadsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquadsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
