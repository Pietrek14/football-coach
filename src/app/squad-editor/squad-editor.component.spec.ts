import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquadEditorComponent } from './squad-editor.component';

describe('SquadEditorComponent', () => {
  let component: SquadEditorComponent;
  let fixture: ComponentFixture<SquadEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquadEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquadEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
