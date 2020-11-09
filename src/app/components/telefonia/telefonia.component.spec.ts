import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefoniaComponent } from './telefonia.component';

describe('TelefoniaComponent', () => {
  let component: TelefoniaComponent;
  let fixture: ComponentFixture<TelefoniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelefoniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelefoniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
