import { Button } from '../ui/button/button';

function HeroSection() {
  return (
    <div className="flex flex-col gap-4 min-w-full min-h-[100vh] items-center justify-center">
      <h1 className="text-[48px]">{`Hi, I'm Hase`}</h1>
      <p>{`I'm a UX/UI designer, developer and illustrator.`}</p>
      <Button asChild={false}>ME CONTRATA!!!</Button>
    </div>
  );
}

export default HeroSection;
