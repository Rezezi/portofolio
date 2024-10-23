import Image from 'next/image';

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gray-900 text-white py-16 px-5 flex flex-col justify-center items-center rounded-lg shadow-md"
    >
      <h2 className="text-3xl font-bold mb-4 text-center">Get In Touch</h2>
      <p className="text-md text-center max-w-md mb-10">
        Feel free to reach out through any of the platforms below. I&apos;d love to connect with you!
      </p>

      {/* Contact Links */}
      <div className="flex flex-wrap justify-center gap-5">
        {/* WhatsApp */}
        <a
          href="https://wa.me/087878254877"
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 bg-green-600 rounded-full flex justify-center items-center hover:scale-110 transition duration-300 shadow-md"
          aria-label="WhatsApp"
        >
          <Image src="/wa.png" alt="WhatsApp" width={32} height={32} />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/rezezi"
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 bg-gray-800 rounded-full flex justify-center items-center hover:scale-110 transition duration-300 shadow-md"
          aria-label="GitHub"
        >
          <Image src="/git.png" alt="GitHub" width={32} height={32} />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/rezezi_axcel/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 bg-pink-600 rounded-full flex justify-center items-center hover:scale-110 transition duration-300 shadow-md"
          aria-label="Instagram"
        >
          <Image src="/ig.png" alt="Instagram" width={32} height={32} />
        </a>

        {/* YouTube */}
        <a
          href="https://www.youtube.com/channel/UCYThcBfYhYLV1UfA6kp_imw"
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 bg-red-600 rounded-full flex justify-center items-center hover:scale-110 transition duration-300 shadow-md"
          aria-label="YouTube"
        >
          <Image src="/youtube.png" alt="YouTube" width={32} height={32} />
        </a>

        {/* Email */}
        <a
          href="mailto:axcelrezezi@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 bg-blue-600 rounded-full flex justify-center items-center hover:scale-110 transition duration-300 shadow-md"
          aria-label="Email"
        >
          <Image src="/email.png" alt="Email" width={32} height={32} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
