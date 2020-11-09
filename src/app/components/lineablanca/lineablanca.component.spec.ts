import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineablancaComponent } from "./LineablancaComponent";

describe('LineablancaComponent', () => {
  let component: LineablancaComponent;
  let fixture: ComponentFixture<LineablancaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineablancaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineablancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
