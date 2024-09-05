import React from 'react';
import { useSelector } from 'react-redux';

const AboutUs = () => {
  const theme = useSelector((state)=>state.theme.value)
  return (
    <div className={`max-w-5xl mx-auto p-6 ${theme? "bg-gunmetal bg-opacity-20 text-steelBlue" :"bg-white text-black" } `}>
      {/* About Us Header */}
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold text-purple-700">About Us</h1>
        <p className="mt-4 text-lg">
          Welcome to <span className="font-semibold">NoteMate</span>, your go-to platform for capturing and organizing notes while watching YouTube videos. 
          Our mission is to help you focus on what matters by syncing your thoughts with the content you watch.
        </p>
      </section>

      {/* Our Mission Section */}
      <section className="my-12">
        <h2 className="text-2xl font-semibold text-purple-600">Our Mission</h2>
        <p className="mt-4 text-lg">
          Our mission is to make learning and idea capturing effortless while watching YouTube videos. Whether you're a student, a content creator, 
          or simply someone who loves taking notes, <span className="font-semibold">NoteMate</span> helps you pause, capture, and store 
          your insights with time-stamped precision, so you never lose track of key moments.
        </p>
      </section>

      {/* Features Section */}
      <section className="my-12">
        <h2 className="text-2xl font-semibold text-purple-600">What We Offer</h2>
        <div className="mt-6">
          <ul className="list-disc ml-8 text-lg space-y-4">
            <li>
              <span className="font-semibold">Time-stamped Notes:</span> Add notes at specific moments in the video and revisit them with just a click.
            </li>
            <li>
              <span className="font-semibold">YouTube Integration:</span> Paste any YouTube URL and start syncing notes with the video.
            </li>
            <li>
              <span className="font-semibold">Local Storage:</span> All your notes are stored locally on your device, ensuring quick access without the need for an account.
            </li>
            <li>
              <span className="font-semibold">Search & Organize:</span> Effortlessly search and filter through your notes to find what you need quickly.
            </li>
          </ul>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="my-12">
        <h2 className="text-2xl font-semibold text-purple-600">How It Works</h2>
        <p className="mt-4 text-lg">
          Using <span className="font-semibold">NoteMate</span> is simple. Just paste a YouTube link, watch the video, and start jotting down notes. Each note you take is time-stamped,
          allowing you to return to the exact moment in the video later. Your notes are automatically saved to local storage, meaning you can come back anytime without losing a single thought.
        </p>
      </section>

      {/* Our Vision Section */}
      <section className="my-12">
        <h2 className="text-2xl font-semibold text-purple-600">Our Vision</h2>
        <p className="mt-4 text-lg">
          We envision a platform where learning from video content is enhanced by dynamic note-taking. Our goal is to empower users to 
          capture ideas as they happen, ensuring that no insight is ever lost. We're committed to continuously improving <span className="font-semibold">NoteMate</span> to suit your needs.
        </p>
      </section>

      {/* Contact Us Section */}
      <section className="my-12">
        <h2 className="text-2xl font-semibold text-purple-600">Contact Us</h2>
        <p className="mt-4 text-lg">
          We love hearing from our users! If you have any questions, feedback, or suggestions, feel free to get in touch with us.
        </p>
        <div className="mt-4">
          <p>Email: <a href="mailto:support@NoteMate.com" className="text-purple-700">support@NoteMate.com</a></p>
          <p>Phone: <a href="tel:+1234567890" className="text-purple-700">+1 (234) 567-890</a></p>
          <p className='font-bold text-red-700'>Note : This is a chatGPT generated AboutUs page to save time</p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
