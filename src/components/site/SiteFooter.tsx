import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-4">
        <div>
          <p className="font-display text-lg font-semibold">Gift of the Givers Foundation</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Disaster relief and humanitarian aid across South Africa and beyond.
          </p>
        </div>
        <div className="text-sm">
          <p className="font-semibold">Get involved</p>
          <ul className="mt-2 space-y-1 text-muted-foreground">
            <li><Link to="/donate" className="hover:text-foreground">Donate</Link></li>
            <li><Link to="/volunteer" className="hover:text-foreground">Volunteer</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact information</Link></li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="font-semibold">Legal</p>
          <ul className="mt-2 space-y-1 text-muted-foreground">
            <li><Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
            <li><Link to="/cookies" className="hover:text-foreground">Cookie Policy</Link></li>
            <li><Link to="/terms" className="hover:text-foreground">Terms and Conditions</Link></li>
            <li><Link to="/disclaimer" className="hover:text-foreground">Disclaimer</Link></li>
            <li><Link to="/data-protection" className="hover:text-foreground">Data Protection Rights</Link></li>
            <li><Link to="/copyright" className="hover:text-foreground">Copyright Notice</Link></li>
          </ul>
        </div>
        <div className="text-sm text-muted-foreground">
          <p className="font-semibold text-foreground">Student prototype</p>
          <p className="mt-2">
            APPR6312 Part 1 prototype. Donations are symbolic and no money is collected.
          </p>
        </div>
      </div>
    </footer>
  );
}
