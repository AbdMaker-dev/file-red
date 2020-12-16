import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdapteProfileComponent } from './udapte-profile.component';

describe('UdapteProfileComponent', () => {
  let component: UdapteProfileComponent;
  let fixture: ComponentFixture<UdapteProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdapteProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UdapteProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
