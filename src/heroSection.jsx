function HeroSection() {
  return (
    <>
      <main
        className="min-h-screen flex flex-col justify-end items-start p-10"
        id="main"
      >
        <small className="text-primary">
          Hello Everyone, I'm Motion Designer <br />
          My Name is
        </small>
        <h1 className="title text-secondary text-8xl">Alvin Ferdinand</h1>
      </main>
      <section id="about">
        <h2 className="title text-secondary text-center">About_Me</h2>
      </section>
      <section
        id="skills"
        className="pt-64 pb-64 flex justify-center items-center"
      >
        <div className="">Lorem ipsum dolor sit amet.</div>
      </section>
    </>
  );
}

export default HeroSection;
