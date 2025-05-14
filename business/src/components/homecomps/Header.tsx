import React from "react";
import Image from "next/image";
import Link from "next/link";

// import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";

import { ChevronDown } from "lucide-react";

function Header() {
  return (
    <nav className="w-full py-10 px-20 bg-transparent">
      <div className="flex shadow-md px-12 py-5 bg-white h-fit w-full rounded-full  items-center justify-between">
        <Image src="/Logo.png" alt="logo" width={160} height={100} />

        <div className="flex items-center gap-2">
          <Link className=" px-2 " href="/">
            Home
          </Link>
          <Link className=" px-2 " href="/">
            Accelerator
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <p className="flex font-medium text-gray-950 items-end gap-2">
                Company <ChevronDown className="w-6 h-6" />
              </p>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/about">About</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/contact">Contact</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <p className="flex font-medium text-gray-950 items-end gap-2">
                Resources <ChevronDown className="w-6 h-6" />
              </p>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/about">About</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/contact">Contact</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}

export default Header;
