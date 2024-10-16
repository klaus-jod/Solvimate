import Image from "next/image";

const HomePage = () => {
    return (
        <main className="flex  justify-center lg:gap-5 items-center h-[100vh] bg-slate-300  ">
            <div className="">
                <Image
                    src="/service-company.jpg"
                    alt="service post"
                    height={600}
                    width={500}
                />
            </div>
            <div className="flex flex-col space-y-7  lg:w-[800px] ">
                <h1 className="text-6xl font-extrabold text-gray-600">Welcome to <span className="text-lime-600">Solvimate</span> <br />Your trusted partner in solutions</h1>
                <p className="text-lg text-gray-500">At solvimate, we specialized in delivering tailored service disigned to meet your unique needs.</p>
            </div>
        </main>

    );
}

export default HomePage;