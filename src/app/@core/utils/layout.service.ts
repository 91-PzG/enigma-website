import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, delay, shareReplay } from 'rxjs/operators';

@Injectable()
export class LayoutService {
  protected layoutSize$ = new Subject();
  protected layoutSizeChange$ = this.layoutSize$.pipe(
    shareReplay({ refCount: true })
  );

  changeLayoutSize() {
    this.layoutSize$.next();
  }

  onChangeLayoutSize$(): Observable<any> {
    return this.layoutSizeChange$.pipe(delay(1));
  }

  onSafeChangeLayoutSize(): Observable<any> {
    return this.layoutSizeChange$.pipe(debounceTime(350));
  }
}
