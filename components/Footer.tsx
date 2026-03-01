import Container from 'components/BlogContainer'
import { footerConfig } from 'lib/footer.config'

export default function Footer() {
  const { newsletter, columns, socials, copyright } = footerConfig

  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center justify-between">
          <div className="mb-10 lg:mb-0 lg:w-1/2 lg:pr-10">
            <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight mb-5">
              {newsletter.title}
            </h3>
            <p className="text-lg mb-5">{newsletter.description}</p>
            <form className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
              <input
                type="email"
                placeholder={newsletter.placeholder}
                className="flex-1 rounded border border-accent-2 px-4 py-3 focus:outline-none focus:border-success transition-colors"
              />
              <button
                type="submit"
                className="bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-8 rounded transition-colors duration-200"
              >
                {newsletter.buttonText}
              </button>
            </form>
          </div>
          
          <div className="flex flex-col items-center lg:items-end lg:w-1/2">
            <div className="grid grid-cols-2 gap-x-12 gap-y-8 mb-10 text-center lg:text-right">
              {columns.map((col, idx) => (
                <div key={idx}>
                  <h4 className="font-bold text-lg mb-4">{col.title}</h4>
                  <ul className="space-y-2">
                    {col.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <a 
                          href={link.href} 
                          className="hover:text-success transition-colors duration-200"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="flex items-center space-x-5 mb-10">
              {socials.map((social, idx) => {
                const Icon = social.icon
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-success transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                )
              })}
            </div>
            
            <div className="text-sm text-accent-7">
              {copyright}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
