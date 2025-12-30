import Image from "next/image";
import { TypingAnimation } from "@/components/ui/typing-animation";

export default function LoveStorySection() {
  return (
    <div
      className={
        "w-full min-h-screen flex flex-col space-y-6 justify-center items-center px-4 py-16"
      }
    >
      <h3 className={"text-4xl font-allura text-center"}>Love Story</h3>
      <div
        className={"space-y-4 w-full p-4 border border-input/30 rounded-2xl"}
      >
        <Image
          src={"/couple-3.jpeg"}
          alt={"couple image"}
          width={400}
          height={400}
          className={
            "w-full aspect-video rounded-lg object-cover object-center"
          }
        />
        <p className={"text-xl"}>Pertemuan</p>
        <TypingAnimation
          startOnView={true}
          className={"text-sm"}
          typeSpeed={30}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
          expedita modi neque optio quidem suscipit.
        </TypingAnimation>
      </div>
      <div
        className={"space-y-4 w-full p-4 border border-input/30 rounded-2xl"}
      >
        <Image
          src={"/couple-3.jpeg"}
          alt={"couple image"}
          width={400}
          height={400}
          className={
            "w-full aspect-video rounded-lg object-cover object-center"
          }
        />
        <p className={"text-xl"}>Lamaran</p>
        <TypingAnimation
          startOnView={true}
          className={"text-sm"}
          typeSpeed={30}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
          expedita modi neque optio quidem suscipit.
        </TypingAnimation>
      </div>
      <div
        className={"space-y-4 w-full p-4 border border-input/30 rounded-2xl"}
      >
        <Image
          src={"/couple-3.jpeg"}
          alt={"couple image"}
          width={400}
          height={400}
          className={
            "w-full aspect-video rounded-lg object-cover object-center"
          }
        />
        <p className={"text-xl"}>Nikah</p>
        <TypingAnimation
          startOnView={true}
          className={"text-sm"}
          typeSpeed={30}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
          expedita modi neque optio quidem suscipit.
        </TypingAnimation>
      </div>
    </div>
  );
}
