import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquadOverviewComponent } from './squad-overview.component';

describe('SquadOverviewComponent', () => {
  let component: SquadOverviewComponent;
  let fixture: ComponentFixture<SquadOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquadOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquadOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
