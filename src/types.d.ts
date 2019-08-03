declare module 'Models' {
  export interface User {
    id: number;
    name: string;
  }
  export interface Scan {
    id: string;
    name: string;
    elevationMax: number;
    elevationMin: number;
    scannedByUserId: number;
    scannedByUser?: User;
  }
}
