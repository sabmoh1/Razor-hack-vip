
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";

const Header = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const redirectToTelegram = () => {
    window.open("https://t.me/razor_1xx", "_blank");
  };

  return (
    <header className="flex justify-between items-center w-full py-4 px-6">
      <div className="flex items-center">
        <h1 className="text-xl font-bold text-gradient-neon animate-pulse-neon">Razor Hack</h1>
      </div>
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button variant="ghost" className="text-white hover:bg-white/5 transition-all">
            About Developer
          </Button>
        </DialogTrigger>
        <DialogContent className="glass-morphism border-neon-lime/50 sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-gradient-neon">About Developer</DialogTitle>
            <DialogDescription className="text-white/80">
              Contact the developer on Telegram
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center justify-center space-y-4 mt-4">
            <Button 
              onClick={redirectToTelegram}
              className="neon-border bg-black hover:bg-black/70 text-neon-lime group transition-all duration-300"
            >
              Connect on Telegram <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default Header;
