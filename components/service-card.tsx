import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button";

type Props = {
    title: string;
    description: string;
}


export const ServiceCard = ({
    title,
    description,
}: Props) => {
    return (
        <Card className="w-[550px] bg-slate-300">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <Button>Avail Service</Button>
            </CardContent>
        </Card>

    )
}