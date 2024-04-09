import Image from "next/image";
import { buttonVariants } from "@/components/Button";
import { cn } from "@/lib/utils";
import { SPEAKERS } from "@/config/speakers";
import Link from "next/link";

export default async function SpeakersIndexPage() {
  return (
    <>
      <section>
        <div className="container lg:flex lg:flex-row-reverse lg:justify-around lg:items-center">
          <Image
            src="/assets/speakers_hero_img.png"
            width={600}
            height={432}
            alt="Speakers"
          />

          <div className="flex flex-col items-center gap-5 text-center max-w-[415px] lg:text-start lg:items-start">
            <Image
              src="/assets/speaker_page_heading.svg"
              width={388}
              height={88}
              alt="Speakers"
              className="w-[268px] h-[56px] lg:w-[388px] lg:h-[88px]"
            />

            <p className="max-w-xl text-base font-medium lg:text-lg text-text-paragraph">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>

            <button
              type="submit"
              className={cn(
                buttonVariants(),
                "border-2 border-border justify-between text-base font-medium h-[50px] lg:border-4 lg:text-xl lg:py-8 lg:rounded-[10px]"
              )}
            >
              <span>Become a speaker</span>
              <Image
                src="/assets/icons/right_arrow.svg"
                width={17}
                height={17}
                alt="right-arrow"
                className="ml-2 w-[14px] h-[14px] lg:ml-3 lg:w-[17px] lg:h-[17px]"
                loading="lazy"
              />
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-16 text-center md:text-left">
          <div className="overflow-x-auto snap-x max-w-full flex gap-7 py-5 md:gap-x-4 md:gap-y-20 lg:grid lg:grid-cols-3 xl:grid-cols-4">
            {[...Array(7)].map((_, i) => (
              <div
                key={`${i}`}
                className="scroll-ml-6 snap-center inline-flex flex-col items-center gap-2 lg:items-start lg:mx-auto"
              >
                <div className="relative mb-3 mr-3 p-8 border-[5px] border-solid border-black rounded-[10px] flex flex-col items-center justify-center">
                  <Image
                    src="/assets/hero_image_guest_v1.png"
                    width={204}
                    height={204}
                    alt="Speaker Image"
                    className="object-cover w-[174px] h-[174px] lg:w-[204px] lg:h-[204px] rounded-[10px]"
                    loading="lazy"
                  />

                  <div className="-z-[1] absolute top-[12px] left-[12px] p-8 rounded-[10px] border-[5px] rounded-tr-none rounded-bl-none border-l-0 border-t-0 border-solid border-black">
                    <div className="w-[174px] h-[174px] lg:w-[204px] lg:h-[204px]" />
                  </div>
                </div>

                <div className="w-[279px] inline-flex flex-col items-center gap-2 lg:items-start">
                  <div className="font-semibold text-black text-2xl leading-[normal] lg:text-[40px]">
                    Tanisha Sabherwal
                  </div>
                  <p className="font-normal text-black text-base leading-[normal] lg:text-lg">
                    Frontend Engineer , JP Morgan
                  </p>
                  <p className="w-[251px] font-medium text-[#383a48] text-xs leading-[normal] lg:text-sm">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                  <div className="w-fit flex items-center justify-center gap-4">
                    <Link href={"https://github.com/"} target="_blank">
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.5 0C5.59375 0 0 5.73524 0 12.8162C0 18.4873 3.57812 23.2774 8.54688 24.9755C9.17188 25.0877 9.40625 24.7032 9.40625 24.3667C9.40625 24.0624 9.39062 23.0531 9.39062 21.9797C6.25 22.5725 5.4375 21.1947 5.1875 20.4738C5.04688 20.1054 4.4375 18.9679 3.90625 18.6636C3.46875 18.4232 2.84375 17.8305 3.89062 17.8145C4.875 17.7985 5.57812 18.7437 5.8125 19.1281C6.9375 21.0666 8.73437 20.5219 9.45312 20.1855C9.5625 19.3524 9.89062 18.7917 10.25 18.4713C7.46875 18.1509 4.5625 17.0455 4.5625 12.1433C4.5625 10.7496 5.04688 9.59611 5.84375 8.69898C5.71875 8.37857 5.28125 7.06492 5.96875 5.30269C5.96875 5.30269 7.01562 4.96627 9.40625 6.61635C10.4062 6.32799 11.4687 6.1838 12.5312 6.1838C13.5937 6.1838 14.6562 6.32799 15.6562 6.61635C18.0469 4.95025 19.0938 5.30269 19.0938 5.30269C19.7812 7.06492 19.3438 8.37857 19.2188 8.69898C20.0156 9.59611 20.5 10.7335 20.5 12.1433C20.5 17.0615 17.5781 18.1509 14.7969 18.4713C15.25 18.8718 15.6406 19.6408 15.6406 20.8423C15.6406 22.5565 15.625 23.9342 15.625 24.3667C15.625 24.7032 15.8594 25.1037 16.4844 24.9755C18.9658 24.1165 21.1221 22.4814 22.6496 20.3001C24.1772 18.1189 24.9993 15.5015 25 12.8162C25 5.73524 19.4062 0 12.5 0Z"
                          fill="#939393"
                        />
                      </svg>
                    </Link>

                    <Link href={"https://www.linkedin.com/"} target="_blank">
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.09159e-07 2.08864C3.09159e-07 1.5347 0.220052 1.00345 0.611748 0.61175C1.00344 0.220055 1.5347 2.78445e-06 2.08864 2.78445e-06H22.9091C23.1836 -0.00044557 23.4555 0.0532561 23.7092 0.158033C23.963 0.26281 24.1936 0.416605 24.3878 0.610612C24.582 0.804619 24.736 1.03503 24.8411 1.28865C24.9461 1.54227 25.0001 1.81412 25 2.08864V22.9091C25.0003 23.1837 24.9465 23.4556 24.8416 23.7093C24.7367 23.9631 24.5828 24.1936 24.3887 24.3879C24.1946 24.5821 23.9641 24.7361 23.7104 24.8411C23.4567 24.9462 23.1848 25.0001 22.9102 25H2.08864C1.81426 25 1.54257 24.9459 1.28909 24.8409C1.03561 24.7359 0.805308 24.5819 0.611346 24.3879C0.417383 24.1938 0.263559 23.9634 0.158662 23.7099C0.0537651 23.4563 -0.000148972 23.1846 3.09159e-07 22.9102V2.08864ZM9.89545 9.53182H13.2807V11.2318C13.7693 10.2545 15.0193 9.375 16.8977 9.375C20.4989 9.375 21.3523 11.3216 21.3523 14.8932V21.5091H17.708V15.7068C17.708 13.6727 17.2193 12.525 15.9784 12.525C14.2568 12.525 13.5409 13.7625 13.5409 15.7068V21.5091H9.89545V9.53182ZM3.64545 21.3534H7.29091V9.375H3.64545V21.3523V21.3534ZM7.8125 5.46818C7.81937 5.78031 7.76383 6.09067 7.64914 6.38104C7.53444 6.67141 7.3629 6.93595 7.14458 7.15913C6.92626 7.38231 6.66557 7.55963 6.37779 7.68069C6.09001 7.80175 5.78095 7.86411 5.46875 7.86411C5.15655 7.86411 4.84749 7.80175 4.55971 7.68069C4.27193 7.55963 4.01124 7.38231 3.79292 7.15913C3.5746 6.93595 3.40306 6.67141 3.28836 6.38104C3.17367 6.09067 3.11813 5.78031 3.125 5.46818C3.13849 4.85552 3.39135 4.27249 3.82942 3.84396C4.26748 3.41544 4.85594 3.17548 5.46875 3.17548C6.08156 3.17548 6.67002 3.41544 7.10808 3.84396C7.54615 4.27249 7.79901 4.85552 7.8125 5.46818Z"
                          fill="#939393"
                        />
                      </svg>
                    </Link>

                    <Link href={"https://www.twitter.com/"} target="_blank">
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M25 2.96546C24.0806 3.46658 23.093 3.80518 22.0547 3.95822C23.126 3.16969 23.9275 1.92863 24.3097 0.466612C23.3031 1.20203 22.2016 1.71968 21.0528 1.99707C20.2803 0.98245 19.2571 0.309944 18.142 0.0839617C17.027 -0.142021 15.8825 0.0911637 14.8862 0.747312C13.8899 1.40346 13.0976 2.44586 12.6323 3.71268C12.167 4.97949 12.0547 6.39985 12.3128 7.75322C10.2734 7.62725 8.27824 6.97519 6.45691 5.83934C4.63558 4.70349 3.02876 3.10924 1.74073 1.16006C1.30032 2.09459 1.04708 3.1781 1.04708 4.33203C1.04659 5.37084 1.25455 6.39374 1.65251 7.30997C2.05048 8.2262 2.62614 9.00743 3.32842 9.58435C2.51396 9.55247 1.71747 9.28176 1.00524 8.79474V8.876C1.00516 10.333 1.41486 11.7451 2.16483 12.8728C2.91479 14.0005 3.95883 14.7743 5.11979 15.0628C4.36425 15.3144 3.57211 15.3514 2.80322 15.1712C3.13078 16.4248 3.76882 17.5211 4.62804 18.3065C5.48725 19.0919 6.52462 19.5272 7.59491 19.5513C5.77803 21.3058 3.53418 22.2575 1.22435 22.2533C0.815182 22.2534 0.406364 22.224 0 22.1653C2.34462 24.0196 5.07392 25.0038 7.86136 25C17.2972 25 22.4555 15.3865 22.4555 7.04894C22.4555 6.77806 22.45 6.50447 22.4401 6.23359C23.4435 5.34102 24.3096 4.23573 24.9978 2.96952L25 2.96546Z"
                          fill="#939393"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-yellow-light flex flex-col justify-center items-center">
        <p className=" text-2xl lg:text-[40px] font-semibold text-center mt-10 max-w-xs lg:max-w-3xl mb-5">
          Want to brushUp your learning and get ready for interviews?
        </p>
        <p className=" lg:text-xl text-text-paragraph max-w-xs lg:max-w-2xl text-center">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <button
          className={cn(
            buttonVariants(),
            "border-solid border-2 border-border mt-9 mb-14"
          )}
        >
          Start Learning
          <Image
            src="/assets/icons/right_arrow.svg"
            width="11"
            height="11"
            alt="right-arrow"
            className="ml-1"
            loading="lazy"
          />
        </button>
      </section>
    </>
  );
}
