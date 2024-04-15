import React from "react";

const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="lg:mt-[100px] xxl:mx-20 lg:mx-16 mx-auto mb-10">
      <div className="flex justify-center">
        <div className="xxl:w-[1260px] xl:w-[1180px] lg:w-[945px] md:w-[500px] w-[340px] h-auto">
          <div className="text-center relative z-40">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default ContentWrapper;
