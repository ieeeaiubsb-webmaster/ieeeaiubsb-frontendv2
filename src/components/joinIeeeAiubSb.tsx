import { Particles } from "@/components/magicui/particles";
import IeeeAiubSbTextArt from "@/components/IeeeAiubSbTextArt";
import { Button } from "@/components/ui/button";

export default function JoinIeeeAiubSb() {
  return (
    <div className={`relative flex flex-col bg-sky-800`}>
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      <div className={`mx-auto max-w-5xl flex flex-col w-full`}>
        <span className={`flex flex-col justify-center items-center p-8`}>
          <IeeeAiubSbTextArt />
          <Button className={`sm:w-2/12`} variant={"outline"}>
            Join Us
          </Button>
        </span>
      </div>
    </div>
  );
}
