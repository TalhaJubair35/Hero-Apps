import React from "react";
import { FaFacebookF, FaYoutube, FaXTwitter, FaInstagram } from "react-icons/fa6";
import logoImage from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className="bg-[#011936] text-gray-300 py-10 px-6 md:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img
              src={logoImage}
              alt="Hero Apps Logo"
              className="w-10 h-10"
            />
            <h2 className="text-2xl font-semibold text-gray-100 bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text ">
              Hero Apps
            </h2>
          </div>
          <p className="text-sm leading-relaxed">
            Hero Apps builds modern, user-focused web and mobile applications to
            make your digital experience faster, smarter, and more connected.
          </p>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a className="link link-hover">About Us</a></li>
            <li><a className="link link-hover">Careers</a></li>
            <li><a className="link link-hover">Blog</a></li>
            <li><a className="link link-hover">Press & News</a></li>
            <li><a className="link link-hover">Contact</a></li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h3 className="text-white font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a className="link link-hover">Documentation</a></li>
            <li><a className="link link-hover">API Reference</a></li>
            <li><a className="link link-hover">Community</a></li>
            <li><a className="link link-hover">Support Center</a></li>
            <li><a className="link link-hover">FAQs</a></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-white font-semibold mb-4">Follow Us</h3>
          <div className="flex items-center gap-4 text-white text-xl">
            <a href="#" aria-label="Facebook">
              <FaFacebookF className="hover:text-[#632EE3] transition" />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube className="hover:text-[#9F62F2] transition" />
            </a>
            <a href="#" aria-label="Twitter / X">
              <FaXTwitter className="hover:text-[#632EE3] transition" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="hover:text-[#9F62F2] transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Hero Apps. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
