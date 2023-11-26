import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponentsComponent } from './header.component';

describe('HeaderComponentsComponent', () => {
  let component: HeaderComponentsComponent;
  let fixture: ComponentFixture<HeaderComponentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponentsComponent]
    });
    fixture = TestBed.createComponent(HeaderComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
