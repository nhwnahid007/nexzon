import { ShoppingCartIcon } from 'lucide-react';
import Link from 'next/link';

const Menu = () => {
  return (
    <div className="flex justify-end">
      <nav className="flex gap-3 w-full">
        <Link href="/signin" className="flex items-center header-button">
          Hello, Sign in
        </Link>

        <Link href="/cart" className="flex items-center header-button">
          <div className="flex items-center gap-2">
            <ShoppingCartIcon className="h-8 w-8" />
            <span className="font-bold">Cart</span>
          </div>
        </Link>
      </nav>
    </div>
  );
};

export default Menu;
