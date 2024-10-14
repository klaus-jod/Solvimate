import { ServiceCard } from "@/components/service-card";

const ServicePage = () => {
    return (
        <div className="space-y-5 p-5 bg-slate-300">
            <div className="flex justify-center gap-10">
                <ServiceCard title="Translation" description="At Solvimate, we offer professional translation services to help you bridge language barriers and reach a global audience. Our expert translators are proficient in multiple languages, ensuring accurate and culturally relevant translations for a wide range of industries, including legal, medical, technical, and business sectors." />
                <ServiceCard title="Books Writing" description="At Solvimate, we bring your ideas to life through our professional book writing services. Whether you're an aspiring author, a business professional looking to share your expertise, or someone with a story to tell, we provide customized solutions to transform your thoughts into a compelling, well-written book." />
            </div>
            <div className="flex justify-center gap-10">
                <ServiceCard title="Corporate Learning" description="At Solvimate, we specialize in delivering comprehensive corporate learning solutions that empower your workforce and drive business success. Our tailored programs are designed to meet the evolving needs of modern organizations, helping teams enhance their skills, increase productivity, and stay competitive in a dynamic business environment." />
                <ServiceCard title="SEO Based Content" description="At Solvimate, we create high-quality, SEO-driven content that not only engages your audience but also boosts your website's visibility and search engine rankings. Our team of expert content creators and SEO specialists work together to craft tailored content strategies that align with your business goals and resonate with your target market." />
            </div>
            <div className="flex justify-center gap-10">
                <ServiceCard title="Live Tutoring and Doubt Solving" description="At Solvimate, we offer personalized live tutoring and doubt-clearing sessions designed to provide students with real-time academic support. Whether you’re preparing for exams, struggling with complex concepts, or need guidance on specific topics, our expert tutors are here to help you succeed." />
                <ServiceCard title="Educational Video Creation" description="At Solvimate, we specialize in creating engaging and informative educational videos that make learning accessible and enjoyable. Whether you’re an educator, institution, or business looking to train employees, our custom video content helps break down complex topics into clear, visually appealing formats." />
            </div>
        </div>
    );
}

export default ServicePage;