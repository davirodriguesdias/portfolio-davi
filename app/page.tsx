

export default function Home() {
  return (
    <main className="px-21 pt-35">
      <section id="headerSection">
        <h1 className="typewriter text-9xl font-bold">Hello, I'm Davi Dias!</h1>

        <div className="flex gap-4 p-4">
          <button className="bg-[#091F3A] text-[#EAF4FF] rounded-md px-6 py-2">Baixar CV</button>
          <button className="bg-[#EAF4FF] text-[#091F3A] rounded-md px-6 py-2">Contacts</button>
        </div>

      </section>

      <section className="flex justify-evenly" id="aboutSection">
        
        <div className="w-[461px] h-[421px] rounded-4xl overflow-hidden"><img className="w-full h-full" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f93ab8ef-4539-48b9-90ef-168105e08ef5/dh8jkil-1d930dbe-8d15-4dfe-8244-603c440760d4.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y5M2FiOGVmLTQ1MzktNDhiOS05MGVmLTE2ODEwNWUwOGVmNVwvZGg4amtpbC0xZDkzMGRiZS04ZDE1LTRkZmUtODI0NC02MDNjNDQwNzYwZDQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.OQ8OsloODh5I0FrIACLB3Z3tSLJ1S-JUF25wSvlo92U" alt="" /></div>
        <div className=" flex gap-4 flex-col w-[50%]">
          <h2  className="text-5xl font-bold">
            Minha trajetória no mundo da tecnologia
          </h2>
          <p className="text-xl text-gray-400 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ducimus ad voluptatibus voluptate rerum illo itaque aut odio labore magni veritatis, id facilis nisi quo nesciunt, nulla error debitis placeat!
          </p>
        </div>

      </section>

      
    </main>
  );
}

