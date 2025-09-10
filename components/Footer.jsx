import Link from "next/link";
import Image from "next/image";
const Footer = () => {
    return (
        <footer className="bg-[#fdf9f3] text-gray-800 px-8 py-15 text-sm font-light bottom-0 ">
            <div className="max-w-7xl mx-auto grid grid-cols-2  md:grid-cols-4 gap-8">
                {/* Customer Service */}
                <div>
                    <h4 className="font-semibold tracking-wide uppercase text-sm mb-4">Customer Service</h4>
                    <ul className="space-y-2 text-gray-500">
                        <li><Link href="#" className="hover:underline">Help & Contact Us</Link></li>
                        <li><Link href="#" className="hover:underline">Returns & Refunds</Link></li>
                        <li><Link href="#" className="hover:underline">Online Stores</Link></li>
                        <li><Link href="#" className="hover:underline">Terms & Conditions</Link></li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h4 className="font-semibold tracking-wide uppercase text-sm mb-4">Company</h4>
                    <ul className="space-y-2 text-gray-500">
                        <li><Link href="/about" className="hover:underline">About Us</Link></li>
                        <li><Link href="#" className="hover:underline">Blog</Link></li>
                        <li><Link href="#" className="hover:underline">Order Tracking</Link></li>
                        <li><Link href="#" className="hover:underline">FAQ Page</Link></li>
                        <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
                        <li><Link href="#" className="hover:underline">Login</Link></li>
                    </ul>
                </div>

                {/* Social MediLink */}
                <div>
                    <h4 className="font-semibold tracking-wide uppercase text-sm mb-4">Social Media</h4>
                    <ul className="space-y-2 text-gray-500">
                        <li><Link href="#" className="hover:underline">Twitter</Link></li>
                        <li><Link href="#" className="hover:underline">Instagram</Link></li>
                        <li><Link href="#" className="hover:underline">Tumblr</ Link></li>
                        <li><Link href="#" className="hover:underline">Pinterest</Link></li>
                    </ul>
                </div>

                {/* Archive */}
                <div>
                    <h4 className="font-semibold tracking-wide uppercase text-sm mb-4">Archive</h4>
                    <ul className="space-y-2 text-gray-500">
                        <li><Link href="#" className="hover:underline">Designer Shoes</Link></li>
                        <li><Link href="#" className="hover:underline">Gallery</Link></li>
                        <li><Link href="#" className="hover:underline">Pricing</Link></li>
                        <li><Link href="#" className="hover:underline">Feature Index</Link></li>
                        <li><Link href="#" className="hover:underline">Login</Link></li>
                        <li><Link href="#" className="hover:underline">Help & Support</Link></li>
                    </ul>
                </div>
            </div>

            <hr className="my-10 border-gray-200" />

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-xs text-gray-500">© 2018 Qode Interactive, All Rights Reserved</p>

                {/* Payment Icons*/}
                <div className="flex space-x-4 cursor-pointer">
                    <Link href="/">
                    <Image src="/images/footer.png" width={200} height={100} alt="footer" />
                    </Link>
                 </div>

                {/* Social Links */}
                <div className="text-xs space-x-6 tracking-widest uppercase">
                    <Link href="#" className="hover:underline">Instagram</Link>
                    <Link href="#" className="hover:underline">Facebook</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
