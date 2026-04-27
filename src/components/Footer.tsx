export default function Footer() {
  return (
    <footer className="py-10 border-t border-border/50">
      <div className="container-tight flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="font-semibold text-foreground">
          Amzad <span className="text-primary">Hridoy</span>
        </div>
        <div>© 2026 All Rights Reserved</div>
        <div className="flex items-center gap-5">
          <a href="#" className="hover:text-foreground transition">Fiverr</a>
          <a href="#" className="hover:text-foreground transition">Instagram</a>
          <a href="mailto:hello@amzadhridoy.com" className="hover:text-foreground transition">Email</a>
        </div>
      </div>
    </footer>
  );
}
