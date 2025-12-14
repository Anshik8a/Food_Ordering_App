const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-gray-300 py-4">
      <div className="max-w-6xl mx-auto flex justify-center">
        
        <div className="flex items-center gap-2 text-sm">
          <span>Created by</span>

          <i className="fa-solid fa-heart text-red-500 animate-pulse relative top-[1px]"></i>

          <a
            href="http://www.linkedin.com/in/anshika-dhiman-3261b1242"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium hover:text-blue-400 transition"
          >
            Anshika Dhiman
          </a>

          <span className="text-gray-400">© 2025!!</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;