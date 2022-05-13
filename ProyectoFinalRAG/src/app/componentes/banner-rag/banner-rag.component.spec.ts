import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerRAGComponent } from './banner-rag.component';

describe('BannerRAGComponent', () => {
  let component: BannerRAGComponent;
  let fixture: ComponentFixture<BannerRAGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerRAGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerRAGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
