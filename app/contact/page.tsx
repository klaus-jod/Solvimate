import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ContactPage = () => {
    return (
        <div className="flex w-full h-[100vh] justify-center items-center bg-slate-300">

            <form action="" className=" space-y-3 border rounded-md p-10 border-slate-400">
                <h3 className="text-lime-500">Full Name</h3>
                <Input
                    type="text"
                    placeholder="name"
                />
                <h3 className="text-lime-500">Email</h3>
                <Input
                    type="email"
                    placeholder="email"
                />
                <h3 className="text-lime-500">Subject</h3>
                <Input type="text"
                    placeholder="subject"
                />
                <h3 className="text-lime-500">Message</h3>
                <Input
                    type="text"
                    placeholder="message"
                />
                <Button size="lg">Submit</Button>
            </form>
        </div>
    );
}

export default ContactPage;