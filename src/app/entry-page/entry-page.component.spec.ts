import { TestBed, async } from '@angular/core/testing';
import { EntryPageComponent } from './entry-page.component';

describe('EntryPageComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryPageComponent ]
    }).compileComponents();
  }));

  describe(':', () => {

    function setup() {
      const fixture = TestBed.createComponent(EntryPageComponent);
      const module = fixture.debugElement.componentInstance;
      return { fixture, module };
    }

    // it('should create the module ', () => {
    //   const { module } = setup();
    //   expect(module).toBeTruthy();
    // });

  });

});
