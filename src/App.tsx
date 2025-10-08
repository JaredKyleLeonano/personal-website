function App() {
  // const [count, setCount] = useState(0);

  return (
    <section className="bg-gray-950 h-screen w-screen">
      <div className="relative h-full w-full">
        <svg width="0" height="0">
          <clipPath id="wave" clipPathUnits="objectBoundingBox">
            <path d="M0,0 L1,0 L1,0.8 L0.4,1 L0,1 Z" />
          </clipPath>
        </svg>
        <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 h-full w-full path"></div>
        <ul className="flex flex-col gap-14 absolute left-20 top-24 text-9xl font-Grotesk [&_li]:rotate-3 [&_li]:transition-all [&_li]:ease-out [&_li]:duration-300 [&_li]:hover:cursor-pointer">
          <li className="relative group hover:rotate-0 hover:scale-125 hover:-translate-y-4 hover:translate-x-16">
            <p className="relative z-10">Overview</p>
            <div className="absolute -top-1 -translate-x-244 bg-white w-222 transition-all ease-out duration-300 h-full group-hover:-translate-x-24"></div>
          </li>
          <li className="relative group hover:rotate-0 hover:scale-125 hover:-translate-y-4 hover:translate-x-16">
            <p className="relative z-10">About Me</p>
            <div className="absolute -top-1 -translate-x-244 bg-white w-222 transition-all ease-out duration-300 h-full group-hover:-translate-x-24"></div>
          </li>
          <li className="relative group hover:rotate-0 hover:scale-125 hover:-translate-y-4 hover:translate-x-16">
            <p className="relative z-10">Works</p>
            <div className="absolute -top-1 -translate-x-244 bg-white w-222 transition-all ease-out duration-300 h-full group-hover:-translate-x-24"></div>
          </li>
          <li className="relative group hover:rotate-0 hover:scale-125 hover:-translate-y-4 hover:translate-x-16">
            <p className="relative z-10">Contacts</p>
            <div className="absolute -top-1 -translate-x-244 bg-white w-222 transition-all ease-out duration-300 h-full group-hover:-translate-x-24"></div>
          </li>
        </ul>
        <p className="absolute bottom-0 right-1 text-8xl font-extrabold text-white leading-none font-Cairoli">
          LEONANO
        </p>
      </div>
    </section>
  );
}

export default App;
