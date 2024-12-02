import { CgClose } from "react-icons/cg";
import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";

const DepositModal = ({
  isOpen,
  onClose,
  walletAddress,
}: {
  isOpen: boolean;
  onClose: () => void;
  walletAddress: string;
}) => {
  const [isModal2Open, setIsModal2Open] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-800 rounded-lg w-[90%] max-w-md h-[400px] p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
        >
          <CgClose />
        </button>

        <div className="text-center font-poppins">
          {/* Modal Content */}
          <div className="flex justify-center items-center mb-4">
            <div className="bg-orange-400 w-10 h-10 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold">$</span>
            </div>
            <div className="ml-3">
              <h2 className="text-lg font-semibold">Deposit Wallet</h2>
              <p className="text-gray-400">USD</p>
            </div>
          </div>

          {/* Amount Section */}
          <div className="text-4xl font-bold text-white">$ 0.00</div>
          <p className="text-purple-500 text-lg mt-2">USD</p>

          {/* Deposit Method */}
          <div className="mt-6 text-left">
            <label className="text-gray-400 text-sm mb-2 block">
              Select Method
            </label>
            <select className="w-full bg-gray-700 text-white rounded-md py-2 px-4 outline-none">
              <option value="">Select Deposit Method</option>
              <option value="bitcoin">Bitcoin</option>
              <option value="ethereum">Ethereum</option>
              <option value="usdt-trc20">USDT TRC20</option>
              <option value="usdt-erc20">USDT ERC20</option>
              <option value="usdc-erc20">USDC ERC20</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            onClick={() => setIsModal2Open(true)}
            className="mt-6 bg-purple-600 w-full py-2 rounded-md text-white hover:bg-purple-500"
          >
            Submit
          </button>

          {isModal2Open && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-gray-800 text-white max-w-md w-full rounded-lg shadow-lg p-6 relative">
                <h2 className="text-xl font-bold mb-4 text-center">
                  Your deposit order has been placed.
                </h2>
                <p className="text-sm mb-4 text-center">
                  Please send{" "}
                  <span className="text-purple-400 font-semibold">
                    $3 worth of USDT
                  </span>{" "}
                  to the address below.
                </p>

                <div className="text-center">
                  <h3 className="text-lg font-bold mb-2">
                    Payment to the following USDT Wallet Address
                  </h3>
                  <p className="text-lg font-bold text-purple-400 mb-4">
                    $3 worth of USDT
                  </p>

                  {/* QR Code */}
                  <QRCodeSVG value={walletAddress} size={150} />

                  <div className="bg-gray-700 rounded-md p-2 flex items-center justify-between mt-4">
                    <span className="text-sm">{walletAddress}</span>
                    <button
                      className="bg-purple-600 text-white px-2 py-1 rounded-md ml-2 hover:bg-purple-700"
                      onClick={() =>
                        navigator.clipboard.writeText(walletAddress)
                      }
                    >
                      Copy
                    </button>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="bg-purple-600 text-white px-6 py-2 rounded-md shadow-md mt-4 block mx-auto hover:bg-purple-700"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DepositModal;
