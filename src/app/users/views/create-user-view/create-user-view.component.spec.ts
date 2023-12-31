import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserViewComponent } from './create-user-view.component';

describe('CreateUserViewComponent', () => {
  let component: CreateUserViewComponent;
  let fixture: ComponentFixture<CreateUserViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateUserViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateUserViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
