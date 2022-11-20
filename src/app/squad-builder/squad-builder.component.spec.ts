import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquadBuilderComponent } from './squad-builder.component';

describe('SquadBuilderComponent', () => {
  let component: SquadBuilderComponent;
  let fixture: ComponentFixture<SquadBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquadBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquadBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
