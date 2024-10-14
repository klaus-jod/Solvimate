import { Dot } from "lucide-react";

const OverviewPage = () => {
    return (
        <div className="bg-slate-300 h-[100vh] flex flex-col justify-evenly">
            <h1 className=" text-5xl flex justify-center font-light text-slate-600">With our expertise and commitment to excellence,<br /> we transform challenges into opportunities,<br /> ensuring your business stays ahead of the curve.<br /> Let us be the solution that powers your success.</h1>
            <div className=" flex  flex-col gap-10">
                <h1 className="flex justify-center  font-semibold text-gray-700 text-3xl">Why solvimate</h1>
                <div className="flex justify-center">

                    <ul className=" text-2xl space-y-3 text-slate-800" >
                        <div className="flex">
                            <Dot />  <li>Customized Solutions for Every Industry</li>
                        </div>
                        <div className="flex">
                            <Dot /> <li>Expert Team with a Proven Track Record</li>
                        </div>
                        <div className="flex">
                            <Dot /> <li>Commitment to Quality and Innovation</li>
                        </div>
                        <div className="flex">
                            <Dot /><li>Exceptional Client Support</li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default OverviewPage;