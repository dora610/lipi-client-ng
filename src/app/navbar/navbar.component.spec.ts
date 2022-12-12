import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have navbar elements in order',()=>{
    const expectedNavEle = ['Home', 'Trending', 'Following', 'Your Feed', 'Login', 'SignUp']
    const navbarEle : HTMLElement = fixture.nativeElement;
    const navElements = navbarEle.querySelectorAll('li>a')
    Array.from(navElements).forEach((ele, index) => {
      expect(ele.textContent).toEqual(expectedNavEle[index])
    })
  })
});
