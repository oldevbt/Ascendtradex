import dynamic from "next/dynamic";

// Dynamically import the SymbolOverview widget with SSR disabled
const SymbolOverview = dynamic(
  () =>
    import("react-ts-tradingview-widgets").then((mod) => mod.SymbolOverview),
  { ssr: false, loading: () => <p>Loading symbol overview...</p> }
);

const Placeholder = ({ text }: { text: string }) => (
  <div
    style={{
      height: "100%",
      backgroundColor: "#333",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {text}
  </div>
);

const Symbol = () => {
  return (
    <div className="flex flex-col gap-4 mt-8">
      <h2 className="text-white text-xl font-bold">Markets</h2>
      <div className="w-full" style={{ height: "500px" }}>
        {SymbolOverview ? (
          <SymbolOverview
            symbols={[
              ["NASDAQ:MSFT", "Microsoft"],
              ["NASDAQ:AAPL", "Apple"],
              ["NASDAQ:GOOGL", "Google"],
            ]}
            colorTheme="dark"
            width="100%"
            height="500px"
            dateFormat="yyyy-MM-dd" // Example: Day Month Year format
          />
        ) : (
          <Placeholder text="SymbolOverview failed to load." />
        )}
      </div>
    </div>
  );
};

export default Symbol;
