import facebook from "src/assets/contact/facebook.svg";
import twitter from "src/assets/contact/twitter.svg";
import instagram from "src/assets/contact/instagram.svg";
import youtube from "src/assets/contact/youtube.svg";
import sendMessageButton from "src/assets/contact/send-message-button.svg";

export default function ContactGettingStarted() {
  return (
    <>
      <div className="flex flex-col max-w-[1200px] lg:mx-auto  px-[1.25em] my-[6.25em] ">
        <p className="text-[#222] font-PlayfairDisplay text-[2.25rem] font-bold capitalize">
          Let’s Get Started
        </p>

        <div className="grid lg:grid-cols-2 mt-[2em] gap-[2em]">
          <div className="flex flex-col gap-[2em]">
            <p className="text-[#828282] font-Inter text-[1.125rem] font-normal ">
              Gravida vulputate aliquet tempor sit. Neque sed pretium non urna
              sed etid aenean haretra quam plac adipiscing penatibus aliquam
            </p>

            <div className="grid lg:grid-cols-2 gap-[1.875em]">
              <div className="flex flex-col gap-[1em]">
                <p className="text-[#222] font-PlayfairDisplay text-[1.25rem] font-bold ">
                  Office
                </p>

                <p className="text-[#222] font-Inter text-[1.125rem] font-normal">
                  {" "}
                  021 Hollywood Boulevard, LA
                </p>

                <p className="text-[#222] font-Inter text-[1.125rem] font-normal">
                  {" "}
                  customer@example.com
                </p>

                <p className="text-[#222] font-Inter text-[1.125rem] font-normal">
                  {" "}
                  (021) 345-6789
                </p>
              </div>

              {/* Card two */}

              <div className="flex flex-col gap-[1em]">
                <p className="text-[#222] font-PlayfairDisplay text-[1.25rem] font-bold">
                  Follow Us
                </p>

                <div className="flex items-center gap-[1em]">
                  <div className="flex flex-col relative bg-[#ACB889] rounded-[6.25em] h-[2em] w-[2em]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img
                        src={facebook}
                        alt=""
                        className="object-cover object-center w-[0.5625em]"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col relative bg-[#ACB889] rounded-[6.25em] h-[2em] w-[2em]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img
                        src={twitter}
                        alt=""
                        className="object-cover object-center w-[0.875em]"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col relative bg-[#ACB889] rounded-[6.25em] h-[2em] w-[2em]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img
                        src={instagram}
                        alt=""
                        className="object-cover object-center w-[0.8125em]"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col relative bg-[#ACB889] rounded-[6.25em] h-[2em] w-[2em]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img
                        src={youtube}
                        alt=""
                        className="object-cover object-center w-[1em]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <iframe
              title="Demografie Karte Deutschland"
              width="100%"
              height="300"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=021%20Hollywood%20Boulevard,%20LA+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.mapsdirections.info/de/evolkerung-auf-einer-karte-berechnen/">
                Demografie Karte Deutschland
              </a>
            </iframe>
          </div>

          {/* card Two */}

          <div className="flex flex-col bg-[#222] p-[2em]">
            <div className="flex flex-col gap-[1em] mb-[2em]">
              <p className="text-[#FFF] font-PlayfairDisplay text-[1.25rem] font-bold ">
                Send a Message
              </p>

              <p className="text-[#FFF] font-Inter text-[1.125rem] font-normal ">
                Diam et habitasse tortor cras donec urna eget dolor in turpis
                venenatis eget .
              </p>
            </div>

            <div className="flex flex-col gap-[1em]">
              <input
                type="text"
                placeholder="Full name"
                className="outline-none w-full p-[1em] placeholder-[#222]"
              />

              <input
                type="text"
                placeholder="Email address"
                className="outline-none w-full p-[1em] placeholder-[#222]"
              />

              <input
                type="text"
                placeholder="Email address"
                className="outline-none w-full pt-[1em] px-[1em] pb-[8em] placeholder-[#222]"
              />

              <button className="flex items-center justify-center bg-[#F6D167] py-[1em] px-[1.5em] gap-[0.5em]">
                <p className="text-[#222] font-Inter text-[0.875rem] font-bold uppercase">
                  send message
                </p>

                <img
                  src={sendMessageButton}
                  alt=""
                  className="object-cover object-center w-[0.6875em]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
