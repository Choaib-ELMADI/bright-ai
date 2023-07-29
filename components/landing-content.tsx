import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonilas = [
    {
        name: "Choaib ELMADI",
        avatar: "CE",
        title: "Software Engineer",
        description:
            "Having 5 different AI tools is one place is insane. Thanks!",
    },
    {
        name: "Choaib ELMADI",
        avatar: "CE",
        title: "Electronics Engineer",
        description:
            "Having 5 different AI tools is one place is insane. Thanks!",
    },
    {
        name: "Choaib ELMADI",
        avatar: "CE",
        title: "Software Engineer",
        description:
            "Having 5 different AI tools is one place is insane. Thanks!",
    },
    {
        name: "Choaib ELMADI",
        avatar: "CE",
        title: "Electronics Engineer",
        description:
            "Having 5 different AI tools is one place is insane. Thanks!",
    },
];

export const LandingContent = () => {
    return (
        <div className="px-10 pb-20">
            <h2 className="text-4xl text-center text-white font-extrabold mb-10">
                Testimonials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {testimonilas.map((t, i) => (
                    <Card
                        key={`testimonial-${i + 1}`}
                        className="bg-[#192339] border-none text-white"
                    >
                        <CardHeader className="p-3">
                            <div className="flex items-center gap-x-2">
                                <Avatar className="w-8 h-8 text-muted-foreground">
                                    <AvatarFallback className="bg-black/50">
                                        {t.avatar}
                                    </AvatarFallback>
                                </Avatar>

                                <CardTitle className="flex items-center gap-x-2">
                                    <div>
                                        <p className="text-lg text-muted-foreground">
                                            {t.name}
                                        </p>
                                        <p className="text-[1rem]">{t.title}</p>
                                    </div>
                                </CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="p-3 pr-1 pt-1 text-muted">
                            {t.description}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};
