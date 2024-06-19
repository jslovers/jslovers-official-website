import Image from "next/image";
import Form from "@/components/Form/Form";

const FormSection = () => {
  return (
    <div className="container py-16 ">
      <div className="flex flex-col-reverse gap-16 sm:gap-y-20 lg:flex-row">
        <Form />
        <div className=" flex items-center justify-center lg:w-1/2">
          <figure className="rounded-[10px] border-8 border-border lg:p-6">
            <Image
              src="/assets/group_demo.png"
              alt=""
              height="324"
              width="546"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default FormSection;