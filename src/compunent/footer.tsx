import React from "react"; // React ইম্পোর্ট করা হচ্ছে কারণ JSX কম্পাইল হওয়ার জন্য React স্কোপে থাকা লাগে
import Logo from "../assets/logo-text.png";

// Footer কম্পোনেন্টটি আলাদা ফাইলে রাখা হয়েছে যাতে অন্য যেকোনো পেজে এটি রিইউজ করা যায়
export default function Footer() {
  return (
    // <footer> সিমান্টিক ট্যাগ ব্যবহার করা হয়েছে যাতে স্ক্রিন-রিডার ও SEO এটাকে পেজের ফুটার হিসেবে চিনতে পারে
    // px-6 ফোনে কম পাশ-প্যাডিং দেয় (ছোট স্ক্রিনে জায়গা বাঁচাতে), md:px-12 পিসিতে বেশি প্যাডিং দেয় (বড় স্ক্রিনে কনটেন্ট বেশি প্রশস্ত দেখায়)
    <footer className="bg-white border-t border-gray-100 px-6 md:px-12 py-10 md:py-12">
      {/* grid-cols-1 হলো মোবাইল-ফার্স্ট ডিফল্ট, অর্থাৎ ফোনে সবকিছু একটার নিচে একটা (এক কলাম) দেখাবে */}
      {/* md:grid-cols-4 শুধু মিডিয়াম স্ক্রিন (পিসি/ট্যাবলেট) থেকে সক্রিয় হয়, তখন ছবির মতো ৪টি কলাম পাশাপাশি বসে */}
      {/* মোবাইলে text-center দেওয়া হয়েছে যাতে স্ট্যাক হওয়া কলামগুলো সুন্দর সেন্টার-অ্যালাইনড দেখায়, md:text-left দিয়ে পিসিতে আবার বাম-অ্যালাইনে ফিরে যায় */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 text-center md:text-left">

        {/* প্রথম কলাম: ব্র্যান্ড লোগো + বিবরণ + সোশ্যাল লিংক */}
        {/* md:col-span-1 না দিলেও গ্রিডে এটি এমনিতেই ১ কলাম নেয়, কিন্তু স্পষ্টতার জন্য রাখা হলো */}
        <div className="md:col-span-1">
          {/* justify-center মোবাইলে লোগো+নাম মাঝ বরাবর আনে, md:justify-start পিসিতে বামে নিয়ে যায় (ছবির লেআউট অনুযায়ী) */}
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
          <img src={Logo}/>
          </div>

          {/* mx-auto মোবাইলে টেক্সটকে সেন্টার ব্লকে রাখে (max-w-xs এর কারণে টেক্সট এমনিতে বামে সরে যেত), md:mx-0 পিসিতে আবার বাম-অ্যালাইনে ফিরিয়ে দেয় */}
          <p className="text-gray-500 text-sm leading-relaxed mb-4 max-w-xs mx-auto md:mx-0">
            Curated tools, technologies, and resources for developers building modern software.
          </p>

          {/* justify-center মোবাইলে সোশ্যাল লিংক মাঝ বরাবর আনে, md:justify-start পিসিতে বামে রাখে */}
          <div className="flex justify-center md:justify-start gap-4 text-sm text-gray-600">
            <a href="#" className="hover:text-pink-600 transition-colors">GitHub</a> {/* hover কালার দেওয়া হয়েছে যাতে ইউজার বুঝতে পারে এটা ক্লিকযোগ্য */}
            <a href="#" className="hover:text-pink-600 transition-colors">Twitter</a>
            <a href="#" className="hover:text-pink-600 transition-colors">LinkedIn</a>
          </div>
        </div>

        {/* দ্বিতীয় কলাম: PRODUCT লিংক লিস্ট */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4 text-sm">PRODUCT</h3>
          {/* space-y দিয়ে প্রতিটি লিংকের মধ্যে সমান উল্লম্ব দূরত্ব রাখা হয়েছে, এটা মোবাইল-পিসি উভয় ক্ষেত্রেই একই থাকে কারণ এটা লিস্ট আইটেমের নিজস্ব স্পেসিং */}
          <ul className="space-y-3 text-sm text-gray-500">
            <li><a href="#" className="hover:text-pink-600 transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-pink-600 transition-colors">Technologies</a></li>
            <li><a href="#" className="hover:text-pink-600 transition-colors">Projects</a></li>
          </ul>
        </div>

        {/* তৃতীয় কলাম: COMPANY লিংক লিস্ট */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4 text-sm">COMPANY</h3>
          <ul className="space-y-3 text-sm text-gray-500">
            <li><a href="#" className="hover:text-pink-600 transition-colors">About</a></li>
            <li><a href="#" className="hover:text-pink-600 transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-pink-600 transition-colors">Careers</a></li>
          </ul>
        </div>

        {/* চতুর্থ কলাম: LEGAL লিংক লিস্ট */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4 text-sm">LEGAL</h3>
          <ul className="space-y-3 text-sm text-gray-500">
            <li><a href="#" className="hover:text-pink-600 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-pink-600 transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      {/* নিচের কপিরাইট বার */}
      {/* flex-col মোবাইলে দুইটা লাইন উপর-নিচ করে সাজায় (ফোনের সরু স্ক্রিনে পাশাপাশি রাখলে টেক্সট চাপাচাপি হয়ে যেত) */}
      {/* md:flex-row পিসিতে একই লাইনে ডানে-বামে (justify-between দিয়ে) সাজায়, ঠিক ছবির মতো */}
      <div className="max-w-6xl mx-auto mt-8 md:mt-10 pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-xs text-gray-400">
        {/* dynamic year ব্যবহার করা হয়েছে যাতে প্রতি বছর ম্যানুয়ালি আপডেট করা না লাগে */}
        <span>© {new Date().getFullYear()} Dev Stack. All rights reserved.</span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-pink-600 transition-colors">Privacy</a>
          <a href="#" className="hover:text-pink-600 transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}