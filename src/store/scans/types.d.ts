declare module 'Scans' {
  export interface Scan {
    id: string;
    name: string;
    elevationMax: number;
    elevationMin: number;
    scannedByUserId: number;
  }
}
