import Image from "next/image";
import characterStella from '../../public/spiritfarer-stella.gif'
import Header from "../components/common/Header";

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-r from-first-gradient-bg to-last-gradient-bg lg:h-auto justify-center bg-cover">
        <div className="flex justify-center lg:py-20">
          <div className="mx-auto rounded-xl   bg-[url('../../public/header-spiritfaher.jpg')] bg-cover bg-top lg:w-[80%] lg:h-[1800px] bg-no-repeat">
            <Header/>
            <div className="flex flex-col w-auto h-auto">
              <iframe className="flex  w-[40%] h-[800px] mt-[10%] ml-[4%] rounded-2xl border-[30px] border-video-border-color border-opacity-25" width="560" height="315" src="https://www.youtube.com/embed/marh60msEI4" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
            <div className="flex  w-[30%] bg-gradient-to-d from-white to-opacity-20 h-[600px]  ml-[55%] mt-[-23%]"></div>
          </div>
        </div>
        <div className="flex">
          <div className="mx-auto bg-[url('../../public/portal.png')] bg-cover bg-top lg:w-[80%] lg:h-auto bg-no-repeat">
            <div className="flex mx-auto">
              <h1 className="flex text-center font-body font-medium text-8xl text-menu-button-color mx-auto">
                Characters
              </h1>
            </div>
            <div className="flex mx-auto">
              <Image alt="" src={characterStella} className="flex rounded-2xl border-8 border-characters border-opacity-25 ml-[10%] mt-[15%]" ></Image>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
