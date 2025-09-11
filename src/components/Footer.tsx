export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-2">Okemotto</h3>
            <p className="text-background/80">Turn Every Drive into Extra Cash</p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
            <a href="mailto:hello@okemotto.com" className="text-background/80 hover:text-mint transition-colors">
              hello@okemotto.com
            </a>
          </div>
          
          <div className="border-t border-background/20 pt-8">
            <p className="text-background/60 text-sm">
              © 2024 Okemotto. All rights reserved. • Lagos, Nigeria
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
