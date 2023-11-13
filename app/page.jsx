const Home = () => {
  return (
    <main className="w-7/12 p-5 flex flex-col space-y-2 border">
      <h1>Hi, I am Ilhan Bae</h1>
      <p>
        I'm currently a senior year student at the State University of New York
        at Buffalo pursuing a bachelor of science degree in Computer Science.
        I'm passionate about designing interactive tools that are reliable and
        fun for everyday use.
      </p>
      <p>
        I'm actively seeking opportunities to join a company or a team that aims
        to solve global sustainability problems. I'm currently learning ways to
        contribute through spatial analysis and industrial automation.
      </p>
      <p>
        See all my projects on{" "}
        <a
          className="text-blue-600 hover:bg-slate-200"
          href="https://github.com/ilhanbae"
          target="_blank"
        >
          Github
        </a>{" "}
        and my full work history at{" "}
        <a
          className="text-blue-600 hover:bg-slate-200"
          href="https://www.linkedin.com/in/neilbae/"
          target="_blank"
        >
          LinkedIn
        </a>
        .
      </p>
    </main>
  );
};

export default Home;
