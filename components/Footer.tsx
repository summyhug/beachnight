"use client";

import Link from "next/link";
import { useState } from "react";
import { beachnightHashtags } from "@/data/beachnightShare";
import { useDictionary } from "@/components/LanguageProvider";

function IconX({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M7.8 2h8.4c3.2 0 5.8 2.6 5.8 5.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
    </svg>
  );
}

function IconYouTube({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M24 12.073C24 5.446 18.627 0 12 0S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function IconTikTok({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.17-3.63-5.46-.02-.5-.01-1-.01-1.49.14-1.99 1.08-3.9 2.67-5.2 1.56-1.34 3.65-1.97 5.68-1.83.02 3.01 0 6.02.02 9.03-1.39-.27-2.78-.94-3.7-2.05-.82-.99-1.21-2.26-1.17-3.49.04-1.37.65-2.71 1.66-3.67 1.04-1.06 2.48-1.66 3.96-1.67 0-.83 0-1.66.01-2.49z" />
    </svg>
  );
}

const iconClass = "w-4 h-4";

const socialLinks = [
  {
    label: "Posts tagged #Beachnight on X",
    href: "https://x.com/search?q=%23Beachnight&f=live",
    Icon: IconX,
  },
  {
    label: "#Beachnight on Instagram",
    href: "https://www.instagram.com/explore/tags/beachnight/",
    Icon: IconInstagram,
  },
  {
    label: "Beachnight on YouTube",
    href: "https://www.youtube.com/results?search_query=Beachnight",
    Icon: IconYouTube,
  },
  {
    label: "#Beachnight on Facebook",
    href: "https://www.facebook.com/hashtag/beachnight",
    Icon: IconFacebook,
  },
  {
    label: "#Beachnight on TikTok",
    href: "https://www.tiktok.com/tag/beachnight",
    Icon: IconTikTok,
  },
] as const;

export default function Footer() {
  const [email, setEmail] = useState("");
  const t = useDictionary();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submit - no backend
    setEmail("");
  };

  return (
    <footer className="bg-ocean border-t border-teal/20 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link
              href="/"
              className="font-display font-bold text-lg tracking-widest text-teal"
            >
              BEACHNIGHT
            </Link>
            <p className="mt-3 text-white/70 font-body text-sm">
              {t.footer.tagline}
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold text-gold mb-3">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/about", label: t.nav.about },
                { href: "/join", label: t.nav.join },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/70 hover:text-teal font-body text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-gold mb-3">
              {t.footer.newsletter}
            </h4>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.footer.emailPlaceholder}
                className="flex-1 px-3 py-2 bg-white/5 border border-teal/30 rounded text-white placeholder-white/40 font-body text-sm focus:outline-none focus:border-teal"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gold text-ocean font-body font-semibold text-sm rounded hover:bg-gold/90 transition-colors"
              >
                {t.footer.join}
              </button>
            </form>
            <h4 className="font-display font-semibold text-gold mb-2 mt-6">
              {t.footer.shareTitle}
            </h4>
            <p className="text-white/60 font-body text-xs leading-relaxed mb-3">
              {t.footer.shareText
                .replace("{tag1}", beachnightHashtags[0])
                .replace("{tag2}", beachnightHashtags[1])}
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-teal/40 flex items-center justify-center text-teal/70 hover:text-teal hover:border-teal transition-colors"
                >
                  <Icon className={iconClass} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-teal/20 text-center text-white/50 font-body text-sm">
          © {new Date().getFullYear()} Beachnight. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
