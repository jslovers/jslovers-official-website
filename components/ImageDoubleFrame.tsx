import { ReactNode } from "react";

type ImageDoubleFrameProps = {
  children: ReactNode;
}

export const ImageDoubleFrame = ({
  children,
}: ImageDoubleFrameProps): JSX.Element => {
  return (
    <div className="relative h-auto flex-[0_0_100%]">
      <div className="flex flex-shrink-0 flex-col items-center gap-2">
        <div className="relative rounded-[10px] rounded-bl-none rounded-tr-none border-[5px] border-l-0 border-t-0 border-solid border-black pb-3 pr-3">
          <div className="absolute right-0 top-0 h-3 outline outline-[6px] outline-white" />
          <div className="absolute bottom-0 left-0 w-3 outline outline-[6px] outline-white" />

          <div className="flex flex-col items-center justify-center rounded-[10px] border-[5px] border-solid border-black p-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
