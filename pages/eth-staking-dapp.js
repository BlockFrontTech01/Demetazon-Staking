import { useState, useCallback } from "react";
import ConnectwalletDropdown from "../components/connectwallet-dropdown";
import PortalPopup from "../components/portal-popup";
import { useRouter } from "next/router";

const EthStakingDapp = () => {
  const [isConnectwalletDropdownOpen, setConnectwalletDropdownOpen] =
    useState(false);
  const [isConnectwalletDropdown1Open, setConnectwalletDropdown1Open] =
    useState(false);
  const router = useRouter();

  const openConnectwalletDropdown = useCallback(() => {
    setConnectwalletDropdownOpen(true);
  }, []);

  const closeConnectwalletDropdown = useCallback(() => {
    setConnectwalletDropdownOpen(false);
  }, []);

  const openConnectwalletDropdown1 = useCallback(() => {
    setConnectwalletDropdown1Open(true);
  }, []);

  const closeConnectwalletDropdown1 = useCallback(() => {
    setConnectwalletDropdown1Open(false);
  }, []);

  const onFrameButton2Click = useCallback(() => {
    router.push("/eth-staking-withdrawal-dapp");
  }, [router]);

  return (
    <>
      <div className="relative bg-midnightblue w-full h-[1231px] overflow-hidden flex flex-row items-start justify-start p-2.5 box-border gap-[10px] text-center text-2xs text-white font-inter">
        <div className="absolute my-0 mx-[!important] top-[1164px] left-[10px] w-[164px] h-5 z-[0]">
          <img
            className="absolute top-[0px] left-[0px] rounded-11xl w-5 h-5 overflow-hidden object-cover"
            alt=""
            src="/frame-174@2x.png"
          />
          <div className="absolute top-[3px] left-[20px] font-medium inline-block w-36 h-[15px]">
            Demetazon Staking 2023
          </div>
        </div>
        <div className="my-0 mx-[!important] absolute top-[0px] left-[17px] w-[1636px] h-[126px] flex flex-row items-center justify-start gap-[1230px] z-[1] lg:gap-[900px] md:gap-[190px]">
          <img
            className="relative rounded-31xl w-[60px] h-[60px] overflow-hidden shrink-0 object-cover"
            alt=""
            src="/logo1@2x.png"
          />
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative rounded-xl [background:linear-gradient(180deg,_#0df6e8,_#000)] shadow-[0px_0px_100px_#0df6e8] w-[149px] h-7 overflow-hidden shrink-0 hover:animate-[1s_ease_0s_1_normal_none_jello-horizontal] hover:opacity-[1]"
            onClick={openConnectwalletDropdown}
          >
            <b className="absolute top-[6px] left-[18px] text-base font-inconsolata text-white text-center">
              Connect Wallet
            </b>
          </button>
        </div>
        <div className="my-0 mx-[!important] absolute top-[210px] left-[47px] flex flex-row items-start justify-start gap-[500px] z-[2] text-mid font-inika lg:gap-[310px] md:w-[200px] md:flex-col md:gap-[0px] md:items-center md:justify-start md:pl-[130px] md:pr-0 md:box-border md:max-w-[200px]">
          <div className="relative w-[34px] h-9" />
          <div className="relative w-[380px] h-[812px]">
            <div className="absolute top-[309px] left-[0px] rounded-11xl bg-midnightblue shadow-[0px_0px_10px_#0df6e8] w-[380px] h-[300px] overflow-hidden" />
            <b className="absolute top-[335px] left-[7px]">You will recieve</b>
            <b className="absolute top-[385px] left-[3px]">Exchange rate</b>
            <b className="absolute top-[435px] left-[7px]">
              Max transaction cost
            </b>
            <b className="absolute top-[485px] left-[7px]">Reward fee</b>
            <b className="absolute top-[485px] left-[341px]">10%</b>
            <b className="absolute top-[435px] left-[334px]">$1,98</b>
            <b className="absolute top-[389px] left-[255px]">1 ETH = 1stETH</b>
            <b className="absolute top-[335px] left-[310px]">0 stETH</b>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[564px] left-[112px] rounded-xl [background:linear-gradient(180deg,_#0df6e8,_#000)] shadow-[0px_0px_100px_#0df6e8] w-[149px] h-7 overflow-hidden hover:animate-[1s_ease_0s_1_normal_none_jello-horizontal] hover:opacity-[1]"
              onClick={openConnectwalletDropdown1}
            >
              <b className="absolute top-[6px] left-[18px] text-base font-inconsolata text-white text-center">
                Connect Wallet
              </b>
            </button>
            <div className="absolute top-[197px] left-[0px] rounded-11xl bg-midnightblue shadow-[0px_0px_10px_#0df6e8] w-[380px] h-[81px] overflow-hidden text-sm">
              <img
                className="absolute top-[20px] left-[14px] rounded-11xl w-10 h-10 overflow-hidden object-cover"
                alt=""
                src="/frame-1813@2x.png"
              />
              <input
                className="[border:none] font-inika text-sm bg-[transparent] absolute top-[31px] left-[78px] font-bold text-white text-left"
                placeholder="ETH Amount"
                type="text"
              />
              <div className="absolute top-[28px] left-[306px] rounded-3xs bg-midnightblue shadow-[0px_0px_10px_#000] w-[50px] h-[26px] overflow-hidden">
                <b className="absolute top-[4px] left-[7px]">MAX</b>
              </div>
            </div>
            <b className="absolute top-[0px] left-[111px] text-6xl inline-block font-inknut-antiqua w-[155px] h-16">
              Stake ETH
            </b>
            <button
              className="cursor-pointer [border:none] p-0 bg-midnightblue absolute top-[757px] left-[51px] rounded-11xl shadow-[0px_0px_5px_#01fff0_inset] w-[280px] h-[55px] overflow-hidden"
              onClick={onFrameButton2Click}
            >
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[-4px] left-[64px] text-xl font-bold font-inknut-antiqua text-white text-center inline-block">
                Withdrawals
              </button>
            </button>
            <div className="absolute top-[64px] left-[43px] text-mini inline-block w-[294px] h-5">
              Stake ETH and recieve stEth while staking
            </div>
          </div>
        </div>
      </div>
      {isConnectwalletDropdownOpen && (
        <PortalPopup
          placement="Top left"
          onOutsideClick={closeConnectwalletDropdown}
        >
          <ConnectwalletDropdown onClose={closeConnectwalletDropdown} />
        </PortalPopup>
      )}
      {isConnectwalletDropdown1Open && (
        <PortalPopup
          placement="Top left"
          onOutsideClick={closeConnectwalletDropdown1}
        >
          <ConnectwalletDropdown onClose={closeConnectwalletDropdown1} />
        </PortalPopup>
      )}
    </>
  );
};

export default EthStakingDapp;
