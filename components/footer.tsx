import Link from "next/link"
import Image from "next/image"
import { Linkedin, Twitter, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <Image
                src="/GWI_white_text.png"
                alt="GWI Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Backing Builders of the Future. We invest in promising early-stage companies in AI applications, mobile
              products, and gaming.
            </p>
            <p className="text-[#00A651] font-playfair italic text-lg mb-6">Global Vision. Early Impact.</p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-500 hover:text-[#00A651] transition-colors duration-300 border-b border-transparent hover:border-[#00A651]"
              >
                <Linkedin size={24} />
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-[#00A651] transition-colors duration-300 border-b border-transparent hover:border-[#00A651]"
              >
                <Twitter size={24} />
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-[#00A651] transition-colors duration-300 border-b border-transparent hover:border-[#00A651]"
              >
                <Mail size={24} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors duration-300 hover:border-b hover:border-[#00A651] pb-1"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/incubator"
                  className="text-gray-400 hover:text-white transition-colors duration-300 hover:border-b hover:border-[#00A651] pb-1"
                >
                  GWI Foundry
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-gray-400 hover:text-white transition-colors duration-300 hover:border-b hover:border-[#00A651] pb-1"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors duration-300 hover:border-b hover:border-[#00A651] pb-1"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>Singapore</p>
              <p>Hong Kong</p>
              <p>San Francisco</p>
              <p className="pt-2">
                <Link href="mailto:hello@gwi.vc" className="hover:text-white transition-colors">
                  hello@gwi.vc
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Global Wise Investments. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
