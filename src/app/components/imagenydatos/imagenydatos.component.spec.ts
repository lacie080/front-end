import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenydatosComponent } from './imagenydatos.component';

describe('ImagenydatosComponent', () => {
  let component: ImagenydatosComponent;
  let fixture: ComponentFixture<ImagenydatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenydatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagenydatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
