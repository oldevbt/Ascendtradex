"use client";
import Empty from "@/assets/empty.svg";
import Image from "next/image";

const Transactions = () => {
  return (
    <div className="text-black">
      <main className=" p-6 rounded-lg">
        {/* History Section */}
        <div>
          {/* Tabs */}
          <div className="flex space-x-4 mb-6">
            <button className="bg-black text-purple-700 px-4 py-2 rounded-full">
              All
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 text-gray-300 px-4 py-2 rounded">
              Withdrawals
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 text-gray-300 px-4 py-2 rounded">
              Deposit
            </button>
          </div>
          <h3 className="text-white text-lg my-4">History</h3>
          {/* No History Content */}
        </div>

        {/* Transaction Table */}
        <div className="mt-6">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b border-gray-700 pb-2 text-gray-400">
                  #
                </th>
                <th className="border-b border-gray-700 pb-2 text-gray-400">
                  Type
                </th>
                <th className="border-b border-gray-700 pb-2 text-gray-400">
                  Date
                </th>
                <th className="border-b border-gray-700 pb-2 text-gray-400">
                  Amount
                </th>
                <th className="border-b border-gray-700 pb-2 text-gray-400">
                  Address / Transaction ID
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Empty Row */}
              <tr>
                <td className="py-4 text-center text-gray-500">
                  <div className="text-center">
                    <Image src={Empty} alt="btreoe" />
                    <p className="text-gray-400">No History</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Transactions;
