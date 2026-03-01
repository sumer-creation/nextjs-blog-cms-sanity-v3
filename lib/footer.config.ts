import { Github, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react'

export const footerConfig = {
  newsletter: {
    title: "Subscribe to our newsletter",
    description: "Stay up to date with the latest news, announcements, and articles.",
    placeholder: "Enter your email",
    buttonText: "Subscribe",
  },
  columns: [
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "/" },
        { label: "Documentation", href: "/docs" },
        { label: "Help Center", href: "/help" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ],
  socials: [
    { name: "Twitter", href: "https://twitter.com", icon: Twitter },
    { name: "GitHub", href: "https://github.com", icon: Github },
    { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
    { name: "Instagram", href: "https://instagram.com", icon: Instagram },
  ],
  copyright: `© ${new Date().getFullYear()} Toroblog. All rights reserved.`,
}
