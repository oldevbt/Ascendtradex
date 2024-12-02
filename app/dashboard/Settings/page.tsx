// import React from "react";

// const Settings = ({ onClose }) => {
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//       <div className="bg-gray-800 text-white rounded-lg w-2/3 p-6 relative">
//         {/* Close Button */}
//         <button
//           className="absolute top-4 right-4 text-gray-400 hover:text-white"
//           onClick={onClose}
//         >
//           ✖
//         </button>

//         {/* Modal Header */}
//         <h2 className="text-xl font-bold mb-6 text-center">
//           Wisdom Account Settings
//         </h2>

//         {/* Tabs */}
//         <div className="flex justify-center mb-8 space-x-4">
//           <button className="text-white font-bold py-2 px-6 bg-gray-700 rounded-full">
//             Profile
//           </button>
//           <button className="text-gray-400 font-bold py-2 px-6 rounded-full hover:bg-gray-700">
//             Referrals
//           </button>
//           <button className="text-gray-400 font-bold py-2 px-6 rounded-full hover:bg-gray-700">
//             Password
//           </button>
//         </div>

//         {/* Form */}
//         <form className="space-y-6">
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm mb-2">First Name*</label>
//               <input
//                 type="text"
//                 value="Wisdom"
//                 className="w-full bg-gray-700 text-white rounded p-2 outline-none"
//               />
//             </div>
//             <div>
//               <label className="block text-sm mb-2">Last Name*</label>
//               <input
//                 type="text"
//                 value="James"
//                 className="w-full bg-gray-700 text-white rounded p-2 outline-none"
//               />
//             </div>
//             <div>
//               <label className="block text-sm mb-2">Email*</label>
//               <input
//                 type="email"
//                 value="soluwatist@gmail.com"
//                 className="w-full bg-gray-700 text-white rounded p-2 outline-none"
//               />
//             </div>
//             <div>
//               <label className="block text-sm mb-2">Country*</label>
//               <input
//                 type="text"
//                 value="Nigeria"
//                 className="w-full bg-gray-700 text-white rounded p-2 outline-none"
//               />
//             </div>
//             <div>
//               <label className="block text-sm mb-2">Mobile Number*</label>
//               <input
//                 type="text"
//                 value="07040956318"
//                 className="w-full bg-gray-700 text-white rounded p-2 outline-none"
//               />
//             </div>
//           </div>

//           {/* Notifications */}
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <h3 className="text-sm mb-2">Email</h3>
//               <div className="space-y-2">
//                 {[
//                   "Deposit",
//                   "Withdrawal",
//                   "Trade",
//                   "Account Update",
//                   "Login Notification",
//                 ].map((label) => (
//                   <div key={label} className="flex items-center space-x-2">
//                     <input
//                       type="checkbox"
//                       checked
//                       className="h-4 w-4 text-purple-600 bg-gray-700 rounded"
//                     />
//                     <label>{label}</label>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div>
//               <h3 className="text-sm mb-2">Notification</h3>
//               <div className="space-y-2">
//                 {["Deposit", "Withdrawal", "Trade", "Account Update"].map(
//                   (label) => (
//                     <div key={label} className="flex items-center space-x-2">
//                       <input
//                         type="checkbox"
//                         checked
//                         className="h-4 w-4 text-purple-600 bg-gray-700 rounded"
//                       />
//                       <label>{label}</label>
//                     </div>
//                   )
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Update Button */}
//           <div className="text-center mt-6">
//             <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded">
//               Update Profile
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Settings;
