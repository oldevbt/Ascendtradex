// global.d.ts
declare global {
  interface Window {
    TradingView: any; // This will allow TypeScript to recognize the TradingView object on the window
  }
}

export {};
