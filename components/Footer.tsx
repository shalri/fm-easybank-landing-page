import { footerLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="w-full bg-eb-dark-blue px-3">
      <div className="">Logo</div>
      <div className="">socials</div>
      <div className="">
        <ul className="">
          {footerLinks.map((page) => (
            <li className="" key={page.title}>
              <a href={page.url} className="">
                {page.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="">&copy; Easybank. All Right Reserved.</div>
    </footer>
  );
}
