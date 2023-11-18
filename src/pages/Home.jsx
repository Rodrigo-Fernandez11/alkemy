import { KeyFeatures } from '../components/KeyFeacture';
import { Navbarme } from '../components/Navbar';
import { TechnologiesUsed } from '../components/TechnologiesUsed';
import { Introduction } from '../components/Introduction';

export const Home = () => {
  return (
    <div>
      <Navbarme />
      <Introduction />
      <KeyFeatures />
      <TechnologiesUsed />
    </div>
  );
};
