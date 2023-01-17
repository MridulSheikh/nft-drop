import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";
import React from "react";

const Nftdropepage = () => {
    const connectwithMetamask = useMetamask();
    const address = useAddress();
    const disconnect = useDisconnect();
  return (
    <div className="flex lg:h-screen flex-col lg:grid lg:grid-cols-10">
      <div className="bg-gradient-to-br from-cyan-800 to-rose-500 col-span-4">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className=" bg-gradient-to-br from-yellow-400 to-purple-600 p-2 rounded-xl">
            <img
              className="w-44 lg:w-72 rounded-xl object-cover"
              src="https://links.papareact.com/8sg"
              alt="ape-image"
            />
          </div>
          <div className="text-center p-5 space-y-2">
            <h1 className="text-4xl font-bold text-white">PAPAFAM APes</h1>
            <h2 className="text-xl text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h2>
          </div>
        </div>
      </div>
      <div className="p-5 col-span-6">
        <header className="flex items-center justify-between border-b-2 pb-3">
          <h1 className="w-52 cursor-pointer text-xl sm:w-80">
            The{" "}
            <span className="font-extrabold underline decoration-pink-600/50">
              NAZIR
            </span>{" "}
            NFT Market Place
          </h1>
          <button onClick={address ? disconnect : connectwithMetamask} className="rounded-full bg-rose-400 px-4 py-2 text-white text-xs font-bold lg:text-base">{address ? "Sign Out" : "Sing In"}</button>
        </header>
        {
            address && (
                <p className="text-center text-sm text-rose-400 mt-3">You're Logged in with wallet {address.substring(0,5)}...{address.substring(5,address.length)}</p>
            )
        }
        <div className=" py-10 lg:py-24 flex flex-1 flex-col items-center space-y-6 text-center lg:space-y-0 lg:justify-center">
            <img className="w-80 object-cover pb-10 lg:h-40" src="https://links.papareact.com/bdy" alt="" />
            <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold">The Nazir Ape Coding club | NFT Drop</h1>
            <span className="pt-2 text-xl text-green-500">25/50 NFT's claimed</span>
        </div>
        <button className="w-full py-2 text-xs lg:text-base bg-rose-400 rounded-full font-bold text-white hover:bg-rose-500 ">MINT (0.01 ETH)</button>
      </div>
    </div>
  );
};

export default Nftdropepage;
