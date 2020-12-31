import { Injectable } from '@angular/core';
import { OfflineManagerService } from '../offline-manager.service';
import { HttpClient } from '@angular/common/http';
import { NetworkService, ConnectionStatus } from '../network.service';
import { Storage } from '@ionic/storage';
import { Observable, of, from } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { API_STORAGE_KEY, baseUrl } from '../../constants';

@Injectable({
  providedIn: 'root'
})
export class EventDataService {

  constructor(
    private http: HttpClient,
    private networkService: NetworkService,
    private storage: Storage,
    private offlineManager: OfflineManagerService
  ) { }

  getEvents(forceRefresh: boolean = false): Observable<any[]> {
    if (this.networkService.getCurrentNetworkStatus() === ConnectionStatus.Offline || !forceRefresh) {
      return from(this.getLocalData('categories'));
    } else {
      return this.http.get<any>(`${baseUrl}/events/events`).pipe(
        map(res => res),
        tap(res => {
          this.log('fetched events');
          this.setLocalData('events', res);
        }),
        catchError(this.handleError('getEvents', []))
      );
    }

  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }

  // Save result of API requests
  private setLocalData(key, data) {
    this.storage.set(`${API_STORAGE_KEY}-${key}`, data);
  }

  // Get cached API result
  private getLocalData(key) {
    return this.storage.get(`${API_STORAGE_KEY}-${key}`);
  }
}
