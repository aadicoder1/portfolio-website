import { GENERAL_INFO } from '@/lib/data';

const Footer = async () => {
    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-lg">Get In Touch</p>
                <p>I&apos;m currently open to new opportunities and collaborations.</p>
                <p>Whether you have a project in mind, a question, or just want to say hi, my inbox is always open.</p>
                <p>I&apos;ll try my best to get back to you!</p>
                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
                >
                    {GENERAL_INFO.email}
                </a>

                <div>
                        Built by Aaditya Sahu
                </div>
            </div>
        </footer>
    );
};

export default Footer;
