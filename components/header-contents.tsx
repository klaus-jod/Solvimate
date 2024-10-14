import Link from "next/link"


const contents = [{
    label: "home",
    href: "/home"
},
{
    label: "overview",
    href: "/overview"
},
{
    label: "services",
    href: "/services"
},
{
    label: "career",
    href: "/career"
},
{
    label: "contact",
    href: "/contact"
},
]

export const HeaderContent = () => {
    return (
        <div className=" text-white  font-semibold flex justify-evenly gap-16 items-center ">
            {contents.map((content) => (
                <Link className="hover:text-lime-200" href={content.href} key={content.href}>
                    {content.label}
                </Link>
            ))}
        </div>
    )
}