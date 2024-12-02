// types/react-tradingview-widget.d.ts
declare module "react-tradingview-widget" {
  import React from "react";

  interface TradingViewWidgetProps {
    symbol?: string;
    theme?: "light" | "dark";
    locale?: string;
    autosize?: boolean;
    width?: string | number;
    height?: string | number;
  }

  const TradingViewWidget: React.FC<TradingViewWidgetProps>;

  export default TradingViewWidget;
}
