import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Calendar, Clock, ArrowRight, User } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function BlogPage () {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Web Development: Trends to Watch in 2024',
      excerpt:
        'Explore how artificial intelligence is revolutionizing web development, from automated code generation to intelligent user experiences.',
      author: 'Loopera Team',
      date: 'December 15, 2024',
      readTime: '8 min read',
      category: 'AI & Technology',
      image: '/ai-web-development-trends.jpg',
      slug: 'future-ai-web-development-2024'
    },
    {
      id: 2,
      title:
        'Building Scalable Mobile Apps: Best Practices for Cross-Platform Development',
      excerpt:
        'Learn the essential strategies for creating mobile applications that perform well across iOS and Android platforms while maintaining code efficiency.',
      author: 'Loopera Team',
      date: 'December 10, 2024',
      readTime: '12 min read',
      category: 'Mobile Development',
      image: '/mobile-app-best-practices.jpg',
      slug: 'scalable-mobile-apps-cross-platform'
    },
    {
      id: 3,
      title:
        'Custom Software vs. Off-the-Shelf Solutions: Making the Right Choice',
      excerpt:
        'A comprehensive guide to help businesses decide between custom software development and existing solutions based on their specific needs.',
      author: 'Loopera Team',
      date: 'December 5, 2024',
      readTime: '10 min read',
      category: 'Business Strategy',
      image: '/custom-vs-off-shelf-software.jpg',
      slug: 'custom-software-vs-off-shelf-solutions'
    },
    {
      id: 4,
      title: 'UI/UX Design Principles That Drive Conversions',
      excerpt:
        'Discover the key design principles that not only create beautiful interfaces but also significantly improve user engagement and conversion rates.',
      author: 'Loopera Team',
      date: 'November 28, 2024',
      readTime: '7 min read',
      category: 'Design',
      image: '/ui-ux-conversion-principles.jpg',
      slug: 'ui-ux-design-principles-conversions'
    },
    {
      id: 5,
      title: 'Automating Business Processes with AI: A Step-by-Step Guide',
      excerpt:
        'Learn how to identify automation opportunities in your business and implement AI-powered solutions that save time and reduce errors.',
      author: 'Loopera Team',
      date: 'November 20, 2024',
      readTime: '15 min read',
      category: 'AI & Automation',
      image: '/business-process-automation.jpg',
      slug: 'automating-business-processes-ai-guide'
    },
    {
      id: 6,
      title: 'The Complete Guide to Modern Web Performance Optimization',
      excerpt:
        'Master the techniques and tools needed to create lightning-fast websites that provide exceptional user experiences and rank well in search engines.',
      author: 'Loopera Team',
      date: 'November 15, 2024',
      readTime: '11 min read',
      category: 'Web Development',
      image: '/web-performance-optimization.jpg',
      slug: 'modern-web-performance-optimization-guide'
    }
  ]

  const categories = [
    'All',
    'AI & Technology',
    'Mobile Development',
    'Business Strategy',
    'Design',
    'AI & Automation',
    'Web Development'
  ]

  return (
    <main className='min-h-screen bg-white'>
      <Navigation />

      {/* Hero Section */}
      <section className='pt-32 pb-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50'>
        <div className='max-w-6xl mx-auto text-center'>
          <h1 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance'>
            Insights & Resources
          </h1>
          <p className='text-xl text-gray-600 mb-8 max-w-3xl mx-auto text-pretty'>
            Stay updated with the latest trends in web development, AI
            automation, mobile apps, and digital transformation. Expert insights
            to help you make informed technology decisions.
          </p>
          <div className='flex flex-wrap justify-center gap-3'>
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? 'default' : 'outline'}
                className={`px-6 py-3 cursor-pointer rounded-full font-semibold transition-all duration-300 
              ${
                index === 0
                  ? 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg hover:shadow-blue-600/40'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50 hover:shadow-md'
              }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className='py-16 px-4'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-2xl font-bold mb-8'>Featured Article</h2>
          <div className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>
            <div className='grid lg:grid-cols-2 gap-0'>
              <div className='bg-gradient-to-br from-blue-100 to-purple-100 h-64 lg:h-auto flex items-center justify-center'>
                <div className='text-6xl'>🤖</div>
              </div>
              <div className='p-8 lg:p-12'>
                <div className='inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4'>
                  {blogPosts[0].category}
                </div>
                <h3 className='text-2xl lg:text-3xl font-bold text-gray-900 mb-4 text-balance'>
                  {blogPosts[0].title}
                </h3>
                <p className='text-gray-600 mb-6 text-pretty'>
                  {blogPosts[0].excerpt}
                </p>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center text-sm text-gray-500'>
                    <User className='w-4 h-4 mr-2' />
                    <span className='mr-4'>{blogPosts[0].author}</span>
                    <Calendar className='w-4 h-4 mr-2' />
                    <span className='mr-4'>{blogPosts[0].date}</span>
                    <Clock className='w-4 h-4 mr-2' />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                  <Link
                    href={`/blog/${blogPosts[0].slug}`}
                    className='inline-flex items-center text-blue-600 hover:text-blue-700 font-medium'
                  >
                    Read More
                    <ArrowRight className='w-4 h-4 ml-2' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className='py-16 px-4 bg-gray-50'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-2xl font-bold mb-8'>Latest Articles</h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {blogPosts.slice(1).map(post => (
              <article
                key={post.id}
                className='bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden'
              >
                <div className='bg-gradient-to-br from-gray-100 to-gray-200 h-48 flex items-center justify-center'>
                  <div className='text-4xl'>
                    {post.category === 'Mobile Development' && '📱'}
                    {post.category === 'Business Strategy' && '📊'}
                    {post.category === 'Design' && '🎨'}
                    {post.category === 'AI & Automation' && '⚡'}
                    {post.category === 'Web Development' && '💻'}
                  </div>
                </div>
                <div className='p-6'>
                  <div className='inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium mb-3'>
                    {post.category}
                  </div>
                  <h3 className='text-lg font-semibold text-gray-900 mb-3 text-balance'>
                    {post.title}
                  </h3>
                  <p className='text-gray-600 text-sm mb-4 text-pretty'>
                    {post.excerpt}
                  </p>
                  <div className='flex items-center justify-between text-xs text-gray-500 mb-4'>
                    <div className='flex items-center'>
                      <Calendar className='w-3 h-3 mr-1' />
                      <span>{post.date}</span>
                    </div>
                    <div className='flex items-center'>
                      <Clock className='w-3 h-3 mr-1' />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className='inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm'
                  >
                    Read Article
                    <ArrowRight className='w-3 h-3 ml-1' />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className='py-16 px-4'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-3xl font-bold mb-6'>Stay Updated</h2>
          <p className='text-xl text-gray-600 mb-8'>
            Get the latest insights on web development, AI automation, and
            digital transformation delivered to your inbox.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 max-w-md mx-auto'>
            <input
              type='email'
              placeholder='Enter your email'
              className='flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            <Button
              className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 
             rounded-full font-semibold cursor-pointer 
             transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/40'
            >
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
