// import classnames from 'classnames';

import { UserButton } from "@clerk/nextjs";
import { MainNav } from "./MainNav";

type Props = {};

const NavBar: React.FC<Props> = ({}) => {
  return (
    <section className="border-b">
      <div className="flex h-16 items-center px-2">
        <MainNav />
        <div className="ml-auto flec items-center space-x-4">
          <UserButton />
        </div>
      </div>
    </section>
  );
};

export default NavBar;
