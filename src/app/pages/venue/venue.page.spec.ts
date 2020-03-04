import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VenuePage } from './venue.page';

describe('VenuePage', () => {
  let component: VenuePage;
  let fixture: ComponentFixture<VenuePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenuePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VenuePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
