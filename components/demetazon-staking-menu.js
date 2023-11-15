import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";

const DemetazonStakingMenu = () => {
  const router = useRouter();
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

  const onButtonClick = useCallback(() => {
    router.push("/demetazon-staking-whitepaper");
  }, [router]);

  const onButton1Click = useCallback(() => {
    window.open("https://demetazon-staking.gitbook.io/demetazon-staking/");
  }, []);

  const onButton2Click = useCallback(() => {
    window.open("https://blockfronttech.vercel.app");
  }, []);

  return (
    <div className="w-[481px] h-[366px] overflow-hidden max-w-full max-h-full">
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[107px] left-[121px] w-[181px] h-[38px] [&.animate]:animate-[1s_ease_4s_1_normal_forwards_slide-in-bottom] opacity-[0] [&.animate]:md:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] md:opacity-[0]"
        onClick={onButtonClick}
        data-animate-on-scroll
      >
        <div className="absolute top-[0px] left-[0px] rounded-11xl [background:linear-gradient(180deg,_#0df6e8,_#000)] shadow-[0px_0px_100px_#0df6e8] w-[181px] h-[38px] overflow-hidden">
          <b className="absolute top-[7px] left-[32px] text-lg font-inika text-white text-left">
            Whitepaper
          </b>
        </div>
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[164px] left-[121px] w-[181px] h-[38px] [&.animate]:animate-[1s_linear_5s_1_normal_forwards_slide-in-bottom] opacity-[0] [&.animate]:md:animate-[1s_ease_1s_1_normal_forwards_slide-in-bottom] md:opacity-[0]"
        onClick={onButton1Click}
        data-animate-on-scroll
      >
        <div className="absolute top-[0px] left-[0px] rounded-11xl [background:linear-gradient(180deg,_#0df6e8,_#000)] shadow-[0px_0px_100px_#0df6e8] w-[181px] h-[38px] overflow-hidden">
          <b className="absolute top-[7px] left-[59px] text-lg font-inika text-white text-left">
            Gitbook
          </b>
        </div>
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[221px] left-[121px] w-[181px] h-[38px] [&.animate]:animate-[1s_linear_6s_1_normal_forwards_slide-in-bottom] opacity-[0] [&.animate]:md:animate-[1s_ease_2s_1_normal_forwards_slide-in-top] md:opacity-[0]"
        onClick={onButton2Click}
        data-animate-on-scroll
      >
        <div className="absolute top-[0px] left-[0px] rounded-11xl [background:linear-gradient(180deg,_#0df6e8,_#000)] shadow-[0px_0px_100px_#0df6e8] w-[181px] h-[38px] overflow-hidden">
          <b className="absolute top-[7px] left-[48px] text-lg font-inika text-white text-left">
            About Dev
          </b>
        </div>
      </button>
    </div>
  );
};

export default DemetazonStakingMenu;
