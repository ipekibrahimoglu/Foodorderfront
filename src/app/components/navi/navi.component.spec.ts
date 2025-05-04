import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaviComponent } from './navi.component';

describe('NaviComponent', () => {
  let component: NaviComponent;
  let fixture: ComponentFixture<NaviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NaviComponent]
    })
    .compileComponents();
<<<<<<< HEAD

=======
    
>>>>>>> e41cde0f8ff84c0833d990b427ad5cbbb641bb55
    fixture = TestBed.createComponent(NaviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
