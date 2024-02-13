

function Footer() {
  return (
    <footer className="bg-[#446c2c] text-white p-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4">
            <div className="mb-4">
              <img
                src="https://i.ibb.co/KbPCmmP/CAFN-Full-PMS-transparent-web.png"
                alt="Website Logo"
                className="h-12"
              />
              <p className="text-xl font-bold">Food Network</p>
            </div>
            <p className="text-sm">© 2023 Food Network</p>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">Email: contact@foodnetwork.com</p>
            <p className="text-sm">Phone: +1 (123) 456-7890</p>
            <p className="text-sm">Address: 123 Main St, City, Country</p>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <a href="#" className="text-sm block mb-2">Facebook</a>
            <a href="#" className="text-sm block mb-2">Twitter</a>
            <a href="#" className="text-sm block mb-2">Instagram</a>
            <a href="#" className="text-sm block mb-2">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
