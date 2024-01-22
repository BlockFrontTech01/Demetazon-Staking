import { useState, useCallback, useEffect } from "react";
import DemetazonStakingMenu from "../components/demetazon-staking-menu";
import PortalPopup from "../components/portal-popup";
import { useRouter } from "next/router";

const DemetazonStaking = () => {
  const [isDemetazonStakingMenuOpen, setDemetazonStakingMenuOpen] =
    useState(false);
  const router = useRouter();

  const openDemetazonStakingMenu = useCallback(() => {
    setDemetazonStakingMenuOpen(true);
  }, []);

  const closeDemetazonStakingMenu = useCallback(() => {
    setDemetazonStakingMenuOpen(false);
  }, []);

  const onButtonClick = useCallback(() => {
    window.open("/eth-staking-dapp");
  }, []);

  const onButton1Click = useCallback(() => {
    window.open("/polygon-staking-dapp");
  }, []);

  const onButton2Click = useCallback(() => {
    window.open("/solana-staking-dapp");
  }, []);

  const onButton3Click = useCallback(() => {
    router.push("/demetazon-staking-whitepaper");
  }, [router]);

  const onButtonContainerClick = useCallback(() => {
    window.open("https://demetazon-staking.gitbook.io/demetazon-staking/");
  }, []);

  const onButton4Click = useCallback(() => {
    window.open("https://t.me/jeff96655");
  }, []);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onFrameButtonClick = useCallback(() => {
    window.open("/eth-staking-dapp");
  }, []);

  const onFrameButton1Click = useCallback(() => {
    window.open("/polygon-staking-dapp");
  }, []);

  const onFrameButton2Click = useCallback(() => {
    window.open("/solana-staking-dapp");
  }, []);

  return (
    <>
      <div className="relative bg-midnightblue w-full h-[4106px] overflow-hidden flex flex-row items-start justify-start pt-2.5 px-2.5 pb-0 box-border gap-[10px] text-center text-xl text-white font-inknut-antiqua md:h-[7000px]">
        <div className="relative w-[35px] h-[49px] overflow-hidden shrink-0 z-[0]" />
        <div className="my-0 mx-[!important] absolute top-[0px] left-[0px] w-[1728px] h-[888px] overflow-hidden shrink-0 flex flex-row items-start justify-start p-2.5 box-border gap-[10px] bg-[url('/frame-163@3x.png')] bg-cover bg-no-repeat bg-[top] z-[1] text-smi">
          <div className="flex flex-row items-center justify-start gap-[300px] z-[0] text-black lg:gap-[120px] md:gap-[280px]">
            <div className="w-[70px] h-[70px] flex flex-row items-center justify-start lg:gap-[60px]">
              <img
                className="relative rounded-31xl w-[60px] h-[60px] overflow-hidden shrink-0 object-cover"
                alt=""
                src="/logo@2x.png"
              />
            </div>
            <div className="flex flex-row items-start justify-start gap-[36px]">
              <img
                className="relative rounded-31xl w-[45px] h-[43px] overflow-hidden shrink-0 object-cover hidden cursor-pointer lg:hidden md:flex"
                alt=""
                src="/hambuger-menu@2x.png"
                onClick={openDemetazonStakingMenu}
              />
              <div className="relative w-[912px] h-[34px] md:hidden">
                <button
                  className="cursor-pointer [border:none] py-0 px-2.5 bg-[transparent] absolute top-[0px] left-[0px] rounded-11xl [background:linear-gradient(180deg,_#0df6e8,_#f5f5f5)] shadow-[0px_0px_100px_#0df6e8] overflow-hidden flex flex-row items-center justify-center"
                  onClick={onButtonClick}
                >
                  <div className="relative text-smi font-semibold font-inknut-antiqua text-black text-center">
                    Stake ETH
                  </div>
                </button>
                <button
                  className="cursor-pointer [border:none] py-0 px-2.5 bg-[transparent] absolute top-[0px] left-[163px] rounded-11xl [background:linear-gradient(180deg,_#0df6e8,_#f5f5f5)] shadow-[0px_0px_100px_#0df6e8] overflow-hidden flex flex-row items-center justify-center"
                  onClick={onButton1Click}
                >
                  <div className="relative text-smi font-semibold font-inknut-antiqua text-black text-center">
                    Stake Polygon
                  </div>
                </button>
                <button
                  className="cursor-pointer [border:none] py-0 px-2.5 bg-[transparent] absolute top-[0px] left-[326px] rounded-11xl [background:linear-gradient(180deg,_#0df6e8,_#f5f5f5)] shadow-[0px_0px_100px_#0df6e8] overflow-hidden flex flex-row items-center justify-center"
                  onClick={onButton2Click}
                >
                  <div className="relative text-smi font-semibold font-inknut-antiqua text-black text-center">
                    Stake Solana
                  </div>
                </button>
                <button
                  className="cursor-pointer [border:none] py-0 px-2.5 bg-[transparent] absolute top-[0px] left-[489px] rounded-11xl [background:linear-gradient(180deg,_#0df6e8,_#f5f5f5)] shadow-[0px_0px_100px_#0df6e8] overflow-hidden flex flex-row items-center justify-center"
                  onClick={onButton3Click}
                >
                  <div className="relative text-smi font-semibold font-inknut-antiqua text-black text-center">
                    Whitepaper
                  </div>
                </button>
                <div
                  className="absolute top-[0px] left-[652px] rounded-11xl [background:linear-gradient(180deg,_#0df6e8,_#f5f5f5)] shadow-[0px_0px_100px_#0df6e8] overflow-hidden flex flex-row items-center justify-center py-0 px-2.5 cursor-pointer"
                  onClick={onButtonContainerClick}
                >
                  <div className="relative font-semibold">Gitbook</div>
                </div>
                <button
                  className="cursor-pointer [border:none] py-0 px-2.5 bg-[transparent] absolute top-[0px] left-[815px] rounded-11xl [background:linear-gradient(180deg,_#0df6e8,_#f5f5f5)] shadow-[0px_0px_100px_#0df6e8] overflow-hidden flex flex-row items-center justify-center"
                  onClick={onButton4Click}
                >
                  <div className="relative text-smi font-semibold font-inknut-antiqua text-black text-center">
                    About Dev
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="my-0 mx-[!important] absolute top-[165px] left-[10px] flex flex-row items-center justify-start gap-[300px] z-[1] text-left text-6xl font-diplomata lg:gap-[150px] md:flex-col md:pl-5 md:pt-[100px] md:box-border">
            <div
              className="relative [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in-top] opacity-[0]"
              data-animate-on-scroll
            >
              <p className="m-0">DEMETAZON</p>
              <p className="m-0">STAKING</p>
            </div>
            <div className="flex flex-col items-center justify-start gap-[105px] md:gap-[100px]">
              <img
                className="w-[130px] h-[130px] overflow-hidden shrink-0 object-cover [&.animate]:animate-[6s_linear_0s_infinite_normal_forwards_rotate-center] opacity-[1]"
                alt=""
                src="/eth-icon@2x.png"
                data-animate-on-scroll
              />
              <div className="flex flex-row items-center justify-start gap-[279px] md:gap-[170px] md:pl-0 md:pr-0 md:box-border">
                <img
                  className="w-[90px] h-[90px] overflow-hidden shrink-0 object-cover [&.animate]:animate-[6s_linear_0s_infinite_normal_forwards_rotate-center] opacity-[1]"
                  alt=""
                  src="/polygon-icon@2x.png"
                  data-animate-on-scroll
                />
                <img
                  className="w-[90px] h-[90px] overflow-hidden shrink-0 object-cover [&.animate]:animate-[6s_linear_0s_infinite_normal_forwards_rotate-center] opacity-[1]"
                  alt=""
                  src="/solana-icon@2x.png"
                  data-animate-on-scroll
                />
              </div>
            </div>
          </div>
          <div className="my-0 mx-[!important] absolute top-[490px] left-[0px] w-[1030px] flex flex-row items-center justify-center gap-[650px] z-[2] text-mini font-inika lg:gap-[360px] md:flex-col md:gap-[0px] md:pl-0 md:pt-[300px] md:pr-[630px] md:box-border">
            <div className="relative w-3 h-2.5 overflow-hidden shrink-0" />
            <div
              className="relative [&.animate]:animate-[1s_ease_2s_1_normal_forwards_fade-in] opacity-[0]"
              data-animate-on-scroll
            >
              Decentralize multi-assets staking platform
            </div>
          </div>
        </div>
        <div className="my-0 mx-[!important] absolute top-[957px] left-[0px] w-[984px] flex flex-row items-center justify-start gap-[530px] z-[2] text-base font-inika lg:gap-[300px] md:w-[350px] md:flex-col md:gap-[0px] md:pl-[50px] md:pr-0 md:box-border sm:pr-[400px] sm:box-border">
          <div className="relative w-9 h-[19px] overflow-hidden shrink-0" />
          <div
            className="relative inline-block w-[500px] shrink-0 [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0] lg:w-[500px] md:w-[300px]"
            data-animate-on-scroll
          >
            Demetazon staking is a cutting-edge decentralize application (DApp)
            designed to empower cryptocurrency enthusiast to stake their assets
            and earn rewards. We provide a secure, efficient and user-friendly
            platform that supports staking for popular bl0ckchain networks
            including Ethereum (ETH), Polygon (MATIC) and Solana (SOL). Our
            missi0n is to make staking simple, transparent and rewarding for
            everyone.
          </div>
        </div>
        <div className="my-0 mx-[!important] absolute top-[1205px] left-[6px] flex flex-row items-start justify-center gap-[600px] z-[3] lg:gap-[380px] md:flex-1 md:flex-col md:gap-[0px] md:items-start md:justify-center md:pt-[100px] md:pb-0 md:pr-0 md:pl-[30px] md:box-border md:max-w-0">
          <div className="relative w-[50px] h-[50px] overflow-hidden shrink-0" />
          <div
            className="w-[350px] h-[359px] overflow-hidden shrink-0 flex flex-col items-center justify-center p-2.5 box-border relative [&.animate]:animate-[8s_linear_0s_infinite_alternate-reverse_forwards_scale-up] opacity-[1]"
            data-animate-on-scroll
          >
            <img
              className="absolute my-0 mx-[!important] top-[0px] left-[0px] w-[350px] h-[359px] object-cover z-[0]"
              alt=""
              src="/blockchain-for-crypto-transactions-and-exchange@2x.png"
            />
          </div>
        </div>
        <div className="my-0 mx-[!important] absolute top-[1683px] left-[-1px] w-[963px] flex flex-row items-start justify-start gap-[650px] z-[4] font-gravitas-one lg:gap-[420px] md:flex-col md:gap-[0px] md:pl-[60px] md:pr-0 md:box-border">
          <div className="relative w-[39px] h-[38px] overflow-hidden shrink-0" />
          <div className="relative">
            <p className="m-0">Supported networks</p>
            <p className="m-0 text-smi font-inika">
              Choose a network below to get started
            </p>
          </div>
        </div>
        <div className="my-0 mx-[!important] absolute top-[2494px] left-[0px] w-[1600px] flex flex-row items-center justify-center gap-[50px] z-[5] font-graduate lg:w-[1735px] lg:gap-[15px] lg:pr-[550px] lg:box-border md:flex md:w-[1735px] md:flex-col md:gap-[100px] md:pt-[1300px] md:pr-[1318px] md:box-border">
          <div
            className="relative w-[368px] h-[221px] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_tilt-in-top-1] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start">
              <div className="rounded-11xl [background:linear-gradient(180deg,_rgba(2,_11,_58,_0.68),_#021058)] shadow-[0px_0px_10px_#0df6e8] w-[365px] h-[212px] overflow-hidden shrink-0 flex flex-row items-start justify-start p-2.5 box-border relative gap-[10px] lg:hover:[background:linear-gradient(180deg,_rgba(2,_11,_58,_0.68),_#021058)] md:active:shadow-[0px_4px_4px_rgba(241,_11,_11,_0.94)]">
                <div className="absolute my-0 mx-[!important] top-[0px] left-[-3px] w-[368px] h-[75px] z-[0]">
                  <div className="absolute top-[0px] left-[0px] rounded-11xl [background:linear-gradient(180deg,_#021058,_#0df6e8)] w-[368px] h-[75px] overflow-hidden flex flex-row items-start justify-start p-2.5 box-border">
                    <div className="absolute my-0 mx-[!important] top-[26px] left-[72px] z-[0]">
                      high yield rewards
                    </div>
                  </div>
                </div>
                <div className="absolute my-0 mx-[!important] top-[111px] left-[26px] text-smi font-inika inline-block w-80 h-[83px] shrink-0 z-[1]">
                  We offer competitive staking rewards to incentivize
                  participation. The reward distribution is automatic, ensuring
                  that users recieve their earnings promptly
                </div>
              </div>
            </div>
          </div>
          <div
            className="relative w-[369px] h-[221px] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_tilt-in-top-1] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start">
              <div className="rounded-11xl [background:linear-gradient(180deg,_rgba(2,_11,_58,_0.68),_#021058)] shadow-[0px_0px_10px_#0df6e8] w-[365px] h-[221px] overflow-hidden shrink-0 flex flex-row items-start justify-start p-2.5 box-border relative gap-[10px]">
                <div className="absolute my-0 mx-[!important] top-[0px] left-[-3px] w-[368px] h-[75px] z-[0]">
                  <div className="absolute top-[0px] left-[0px] rounded-11xl [background:linear-gradient(180deg,_#021058,_#0df6e8)] w-[368px] h-[75px] overflow-hidden flex flex-row items-start justify-start p-2.5 box-border">
                    <div className="absolute my-0 mx-[!important] top-[26px] left-[63px] z-[0]">
                      Multi-assets staking
                    </div>
                  </div>
                </div>
                <div className="absolute my-0 mx-[!important] top-[111px] left-[26px] text-smi font-inika inline-block w-[310px] h-[83px] shrink-0 z-[1]">
                  Demetazon allows users to stake a variety of assets including
                  ETH, MATIC and SOL. Users can easily diversify their staking
                  portfolios and maximize their earnings
                </div>
              </div>
            </div>
          </div>
          <div
            className="relative w-[368px] h-[221px] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_tilt-in-top-1] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start">
              <div className="rounded-11xl [background:linear-gradient(180deg,_rgba(2,_11,_58,_0.68),_#021058)] shadow-[0px_0px_10px_#0df6e8] w-[365px] h-[221px] overflow-hidden shrink-0 flex flex-row items-start justify-start p-2.5 box-border relative gap-[10px]">
                <div className="absolute my-0 mx-[!important] top-[0px] left-[-3px] w-[368px] h-[75px] z-[0]">
                  <div className="absolute top-[0px] left-[0px] rounded-11xl [background:linear-gradient(180deg,_#021058,_#0df6e8)] w-[368px] h-[75px] overflow-hidden flex flex-row items-start justify-start p-2.5 box-border">
                    <div className="absolute my-0 mx-[!important] top-[26px] left-[82px] z-[0]">
                      staking analytics
                    </div>
                  </div>
                </div>
                <div className="absolute my-0 mx-[!important] top-[111px] left-[26px] text-smi font-inika inline-block w-[310px] h-[83px] shrink-0 z-[1]">
                  Users can access comprehensive analytics and performance
                  metrics to make informed decisions about their stakings
                  strategies
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-0 mx-[!important] absolute top-[2855px] left-[-1px] w-[1600px] flex flex-row items-center justify-center gap-[50px] z-[6] font-graduate lg:w-[1735px] lg:gap-[15px] lg:pr-[550px] lg:box-border md:w-[1735px] md:flex-col md:gap-[100px] md:pt-[1930px] md:pr-[1320px] md:box-border">
          <div
            className="relative w-[368px] h-[221px] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_tilt-in-top-1] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start">
              <div className="rounded-11xl [background:linear-gradient(180deg,_rgba(2,_11,_58,_0.68),_#021058)] shadow-[0px_0px_10px_#0df6e8] w-[365px] h-[221px] overflow-hidden shrink-0 flex flex-row items-start justify-start p-2.5 box-border relative gap-[10px]">
                <div className="absolute my-0 mx-[!important] top-[0px] left-[-3px] w-[368px] h-[75px] z-[0]">
                  <div className="absolute top-[0px] left-[0px] rounded-11xl [background:linear-gradient(180deg,_#021058,_#0df6e8)] w-[368px] h-[75px] overflow-hidden flex flex-row items-start justify-start p-2.5 box-border">
                    <div className="absolute my-0 mx-[!important] top-[26px] left-[37px] z-[0]">
                      decentralize governance
                    </div>
                  </div>
                </div>
                <div className="absolute my-0 mx-[!important] top-[111px] left-[26px] text-smi font-inika inline-block w-[310px] h-[83px] shrink-0 z-[1]">
                  Token holders have a say in the platform’s development through
                  decentralize governance. This empowers the community to make
                  important decisions
                </div>
              </div>
            </div>
          </div>
          <div
            className="relative w-[368px] h-[221px] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_tilt-in-top-1] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start">
              <div className="rounded-11xl [background:linear-gradient(180deg,_rgba(2,_11,_58,_0.68),_#021058)] shadow-[0px_0px_10px_#0df6e8] w-[365px] h-[221px] overflow-hidden shrink-0 flex flex-row items-start justify-start p-2.5 box-border relative gap-[10px]">
                <div className="absolute my-0 mx-[!important] top-[0px] left-[-3px] w-[368px] h-[75px] z-[0]">
                  <div className="absolute top-[0px] left-[0px] rounded-11xl [background:linear-gradient(180deg,_#021058,_#0df6e8)] w-[368px] h-[75px] overflow-hidden flex flex-row items-start justify-start p-2.5 box-border">
                    <div className="absolute my-0 mx-[!important] top-[26px] left-[44px] z-[0]">
                      secure smart contracts
                    </div>
                  </div>
                </div>
                <div className="absolute my-0 mx-[!important] top-[111px] left-[26px] text-smi font-inika inline-block w-[310px] h-[83px] shrink-0 z-[1]">
                  We prioritize security. All smart contracts are thoroughly
                  audited and tested to ensure the safety of users funds
                </div>
              </div>
            </div>
          </div>
          <div
            className="relative w-[368px] h-[221px] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_tilt-in-top-1] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start">
              <div className="rounded-11xl [background:linear-gradient(180deg,_rgba(2,_11,_58,_0.68),_#021058)] shadow-[0px_0px_10px_#0df6e8] w-[365px] h-[221px] overflow-hidden shrink-0 flex flex-row items-start justify-start p-2.5 box-border relative gap-[10px]">
                <div className="absolute my-0 mx-[!important] top-[0px] left-[-3px] w-[368px] h-[75px] z-[0]">
                  <div className="absolute top-[0px] left-[0px] rounded-11xl [background:linear-gradient(180deg,_#021058,_#0df6e8)] w-[368px] h-[75px] overflow-hidden flex flex-row items-start justify-start p-2.5 box-border">
                    <div className="absolute my-0 mx-[!important] top-[26px] left-[35px] z-[0]">
                      cross-chain compatibility
                    </div>
                  </div>
                </div>
                <div className="absolute my-0 mx-[!important] top-[111px] left-[26px] text-smi font-inika inline-block w-[310px] h-[83px] shrink-0 z-[1]">
                  In addition to Ethereum, Polygon and Solana, we plan to expand
                  to other popular blockchain networks, providing more
                  opportunities for stakers
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-0 mx-[!important] absolute top-[3835px] left-[42px] flex flex-col items-start justify-start gap-[88px] z-[7] text-2xs font-inter md:w-0 md:gap-[30px] md:pt-[3000px] md:pr-0 md:box-border">
          <div className="flex flex-row items-start justify-start gap-[30px] md:w-[400px] md:gap-[10px]">
            <img
              className="relative rounded-3xs w-10 h-10 overflow-hidden shrink-0 object-cover md:w-[30px] md:h-[30px]"
              alt=""
              src="/frame-169@2x.png"
            />
            <img
              className="relative rounded-3xs w-10 h-10 overflow-hidden shrink-0 object-cover md:w-[30px] md:h-[30px]"
              alt=""
              src="/frame-170@2x.png"
            />
            <img
              className="relative rounded-3xs w-10 h-10 overflow-hidden shrink-0 object-cover md:w-[30px] md:h-[30px]"
              alt=""
              src="/frame-171@2x.png"
            />
            <img
              className="relative rounded-3xs w-10 h-10 overflow-hidden shrink-0 object-cover md:w-[30px] md:h-[30px]"
              alt=""
              src="/frame-172@2x.png"
            />
            <img
              className="relative rounded-3xs w-10 h-10 overflow-hidden shrink-0 object-cover md:w-[30px] md:h-[30px]"
              alt=""
              src="/frame-173@2x.png"
            />
          </div>
          <div className="relative w-[164px] h-5">
            <img
              className="absolute top-[0px] left-[0px] rounded-11xl w-5 h-5 overflow-hidden object-cover"
              alt=""
              src="/frame-174@2x.png"
            />
            <div className="absolute top-[3px] left-[20px] font-medium inline-block w-36 h-[15px]">
              Demetazon Staking 2023
            </div>
          </div>
        </div>
        <div className="my-0 mx-[!important] absolute top-[3216px] left-[0px] w-[1728px] flex flex-row items-start justify-center gap-[416px] z-[8] text-mini font-goblin-one lg:gap-[300px] lg:pr-[500px] lg:box-border md:flex-col md:gap-[400px] md:pl-[50px] md:pt-[2700px] md:pr-0 md:box-border">
          <div className="w-[445px] flex flex-row items-start justify-end p-2.5 box-border relative gap-[10px]">
            <img
              className="absolute my-0 mx-[!important] top-[0px] left-[0px] w-[350px] h-[350px] object-cover z-[0]"
              alt=""
              src="/business-woman-standing-next-to-office-table-and-throwing-her-hands-up@2x.png"
            />
            <div className="absolute my-0 mx-[!important] top-[80px] left-[190px] inline-block w-[196px] h-[82px] shrink-0 z-[1]">
              Why choose Demetazon Staking?
            </div>
          </div>
          <div className="relative w-[417px] h-[373px] text-xs font-inika">
            <img
              className="absolute top-[0px] left-[17px] w-[300px] h-[400px] object-cover"
              alt=""
              src="/man-in-suit-standing-in-front-of-blackboard@2x.png"
            />
            <div className="absolute top-[79px] left-[-17px] inline-block w-40 h-[284px]">
              Demetazon Staking sets itself apart with its commitment to
              user-friendliness, security, and a diverse range of staking
              0ptions. We aim to provide a seamless trading experience,
              empowering users to grow their crypto portfolios while neing
              actively involve in our platform’s development. Join us on our
              journey to redefine the DeFi landscape !!
            </div>
          </div>
        </div>
        <div className="my-0 mx-[!important] absolute top-[1916px] left-[7px] w-[1600px] flex flex-row items-center justify-center gap-[50px] z-[9] text-left lg:w-[1710px] lg:gap-[15px] lg:pr-[550px] lg:box-border md:w-[1720px] md:flex-col md:gap-[110px] md:pr-[1320px] md:box-border">
          <div className="rounded-11xl [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.5),_rgba(0,_0,_0,_0.34))] shadow-[0px_4px_100px_rgba(0,_0,_0,_0.25)] w-[368px] h-[437px] overflow-hidden shrink-0 flex flex-row items-start justify-start p-2.5 box-border relative">
            <div className="absolute my-0 mx-[!important] top-[72px] left-[67px] w-[234px] h-[323px] z-[0]">
              <img
                className="absolute top-[0px] left-[71px] rounded-11xl w-[92px] h-[91px] overflow-hidden object-cover"
                alt=""
                src="/frame-143@2x.png"
              />
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[271px] left-[0px] w-[234px] h-[52px] [&.animate]:animate-[1s_linear_0s_infinite_normal_forwards_jello-horizontal] opacity-[1]"
                onClick={onFrameButtonClick}
                data-animate-on-scroll
              >
                <div className="absolute top-[0px] left-[0px] rounded-11xl [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.68),_rgba(245,_245,_245,_0.68))] shadow-[0px_0px_100px_rgba(245,_245,_245,_0.74)] w-[234px] h-[52px] overflow-hidden flex flex-row items-start justify-start p-2.5 box-border">
                  <b className="absolute my-0 mx-[!important] top-[0px] left-[55px] text-xl inline-block font-inknut-antiqua text-white text-left z-[0]">
                    Stake ETH
                  </b>
                </div>
              </button>
              <b className="absolute top-[110px] left-[91px]">
                <p className="m-0">3.3%</p>
                <p className="m-0">APR</p>
              </b>
            </div>
          </div>
          <div className="rounded-11xl [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.5),_rgba(0,_0,_0,_0.34))] shadow-[0px_4px_100px_rgba(0,_0,_0,_0.25)] w-[368px] h-[437px] overflow-hidden shrink-0 flex flex-row items-start justify-start p-2.5 box-border relative">
            <div className="absolute my-0 mx-[!important] top-[72px] left-[67px] w-[234px] h-[323px] z-[0]">
              <img
                className="absolute top-[0px] left-[71px] rounded-11xl w-[92px] h-[91px] overflow-hidden object-cover"
                alt=""
                src="/frame-1431@2x.png"
              />
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[271px] left-[0px] w-[234px] h-[52px] [&.animate]:animate-[1s_linear_0s_infinite_normal_forwards_pulsate] opacity-[1]"
                onClick={onFrameButton1Click}
                data-animate-on-scroll
              >
                <div
                  className="absolute top-[0px] left-[0px] rounded-11xl [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.68),_rgba(245,_245,_245,_0.68))] shadow-[0px_0px_100px_rgba(245,_245,_245,_0.74)] w-[234px] h-[52px] overflow-hidden flex flex-row items-start justify-start p-2.5 box-border [&.animate]:animate-[1s_linear_0s_infinite_normal_forwards_jello-horizontal] opacity-[1]"
                  data-animate-on-scroll
                >
                  <b className="absolute my-0 mx-[!important] top-[0px] left-[36px] text-xl inline-block font-inknut-antiqua text-white text-left z-[0]">
                    Stake Polygon
                  </b>
                </div>
              </button>
              <b className="absolute top-[110px] left-[91px]">
                <p className="m-0">4.1%</p>
                <p className="m-0">APR</p>
              </b>
            </div>
          </div>
          <div className="rounded-11xl [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.5),_rgba(0,_0,_0,_0.34))] shadow-[0px_4px_100px_rgba(0,_0,_0,_0.25)] w-[368px] h-[437px] overflow-hidden shrink-0 flex flex-row items-start justify-start p-2.5 box-border relative">
            <div className="absolute my-0 mx-[!important] top-[72px] left-[67px] w-[234px] h-[323px] z-[0]">
              <img
                className="absolute top-[0px] left-[71px] rounded-11xl w-[92px] h-[91px] overflow-hidden object-cover"
                alt=""
                src="/frame-1432@2x.png"
              />
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[271px] left-[0px] w-[234px] h-[52px] [&.animate]:animate-[1s_linear_0s_infinite_normal_forwards_jello-horizontal] opacity-[1]"
                onClick={onFrameButton2Click}
                data-animate-on-scroll
              >
                <div className="absolute top-[0px] left-[0px] rounded-11xl [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.68),_rgba(245,_245,_245,_0.68))] shadow-[0px_0px_100px_rgba(245,_245,_245,_0.74)] w-[234px] h-[52px] overflow-hidden flex flex-row items-start justify-start p-2.5 box-border">
                  <b className="absolute my-0 mx-[!important] top-[0px] left-[55px] text-xl inline-block font-inknut-antiqua text-white text-left z-[0]">
                    Stake Solana
                  </b>
                </div>
              </button>
              <b className="absolute top-[110px] left-[91px]">
                <p className="m-0">3.0%</p>
                <p className="m-0">APR</p>
              </b>
            </div>
          </div>
        </div>
      </div>
      {isDemetazonStakingMenuOpen && (
        <PortalPopup
          placement="Centered"
          onOutsideClick={closeDemetazonStakingMenu}
        >
          <DemetazonStakingMenu onClose={closeDemetazonStakingMenu} />
        </PortalPopup>
      )}
    </>
  );
};

export default DemetazonStaking;
