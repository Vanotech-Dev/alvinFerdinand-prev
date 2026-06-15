function HeroSection() {
  const dataFooter = {
    name: "alvinferdinand",
    email: "alvinferdinand723@gmail.com",
  };

  return (
    <>
      <main
        className="min-h-screen flex flex-col justify-end items-start p-10"
        id="main"
      >
        <div className="flex gap-5 justify-end items-end">
          <div className="bg-secondary w-3 h-45"></div>
          <div>
            <small className="text-primary tracking-widest text-lg mb-5 pl-5">
              Hi, I’m a <span className="font-bold">Motion Designer</span>
            </small>
            <h1 className="title text-secondary text-9xl tracking-tighter">
              Alvin Ferdinand
            </h1>
          </div>
        </div>
      </main>
      <section id="about" className=" pt-10">
        {/* image */}
        <div className="flex">
          <div className="w-[70vw] flex">
            <img
              src="image/alvin2.jpeg"
              alt="alvin-02"
              className="h-180 w-auto bg-top aspect-4/3"
            />
          </div>
          {/* text */}
          <div className="w-[30vw] p-5 border border-secondary/20 flex flex-col justify-between items-start ">
            <h2 className="title text-5xl text-secondary flex-2">About Me</h2>
            <p className="text-primary text-lg tracking-widest flex-1">
              Hello! I’m Alvin, i'm specializing in SaaS explainer videos and
              UI-driven motion design. I craft clean, modern visuals that
              simplify complex ideas through refined animation, minimal
              aesthetics, and purposeful storytelling—helping digital products
              communicate clearly, effectively, and with a premium feel. Focused
              on clarity, precision, and impact, I design motion that not only
              looks good, but works. .
            </p>
            <div className="flex-2 justify-end items-end mt-10 text-bold">
              <div className="h-full flex items-end">
                <span>Let’s Work Together</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer id="footer" className="pt-25">
        <div className=" border border-bold/20 bg-secondary items-center p-5 flex justify-between text-tertiary/85">
          <div className="flex flex-col gap-2">
            <small className="tracking-widest pb-2 font-light">EMAIL ME</small>
            <email className="text-4xl font-bold pb-10">
              {dataFooter.email}
            </email>
          </div>

          <small></small>
        </div>
      </footer>
    </>
  );
}

export default HeroSection;
