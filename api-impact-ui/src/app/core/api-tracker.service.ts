// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApiTrackerService {

//   constructor() { }
// }
// ==========================
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Injectable({ providedIn: 'root' })
// export class ApiTrackerService {

//   constructor(private http: HttpClient) {}

//   get(api: string, component: string) {
//     this.track(api, component);
//     return this.http.get(api);
//   }

//   post(api: string, body: any, component: string) {
//     this.track(api, component);
//     return this.http.post(api, body);
//   }

//   private track(api: string, component: string) {
//     console.log('API CALLED:', api, 'FROM:', component);

//     // Later: send this to backend
//     // this.http.post('/api-usage', { api, component }).subscribe();
//   }
// }

// ==================================================
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ApiTrackerService {

  private BASE_URL = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  get(api: string, component: string) {
    this.track(api, component);
    return this.http.get(this.BASE_URL + api);
  }

  private track(api: string, component: string) {
    this.http.post(this.BASE_URL + '/api-usage', {
      apiPath: api,
      componentName: component
    }).subscribe({
      next: () => console.log('Usage tracked'),
      error: err => console.error('Tracking failed', err)
    });
  }
}

