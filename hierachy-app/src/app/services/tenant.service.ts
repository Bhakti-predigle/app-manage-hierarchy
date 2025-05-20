import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TenantService {
  // BehaviorSubject to hold the tenant ID
  private tenantIdSubject = new BehaviorSubject<string | null>(null);

  // Observable to expose the tenant ID
  tenantId$ = this.tenantIdSubject.asObservable();

  /**
   * Sets the tenant ID in the BehaviorSubject.
   * @param tenantId - The new tenant ID.
   */
  setTenantId(tenantId: string): void {
    this.tenantIdSubject.next(tenantId);
  }

  /**
   * Gets the current value of the tenant ID.
   * @returns The current tenant ID.
   */
  getTenantId(): string | null {
    return this.tenantIdSubject.value;
  }
}
