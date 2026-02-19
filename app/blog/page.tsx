import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ClockIcon, TagIcon } from "@heroicons/react/24/outline";
import {
  getAllPosts,
  getAllCategories,
  categoryLabels,
} from "@/lib/blog";
import { generarLocalBusinessSchema } from "@/lib/seo/schema";

const BASE_URL = "https://www.moquetaecologica.com";

export const metadata: Metadata = {
  title: "Blog | Guías y Artículos sobre Moqueta Ecológica",
  description:
    "Guías, artículos y novedades sobre moqueta ecológica para eventos y ferias. Normativa Bfl-s1, sostenibilidad, economía circular y consejos prácticos. ☎ 934 850 085",
  openGraph: {
    title: "Blog | Moqueta Ecológica | Disstands",
    description:
      "Guías y artículos sobre moqueta ecológica, normativa y sostenibilidad en eventos.",
    url: `${BASE_URL}/blog`,
    type: "website",
    locale: "es_ES",
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Blog Moqueta Ecológica - Disstands",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Moqueta Ecológica | Disstands",
    description:
      "Guías y artículos sobre moqueta ecológica, normativa y sostenibilidad en eventos.",
    images: [`${BASE_URL}/og-image.jpg`],
  },
  alternates: {
    canonical: `${BASE_URL}/blog`,
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();
  const localBusinessSchema = generarLocalBusinessSchema();

  const featuredPost = posts[0];
  const restPosts = posts.slice(1);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-light text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Blog y Guías
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Artículos sobre moqueta ecológica, normativa, sostenibilidad y
            consejos para tus eventos y ferias.
          </p>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mt-8">
            {categories.map((cat) => (
              <span
                key={cat}
                className="bg-white/20 backdrop-blur px-3 py-1.5 rounded-full text-sm font-medium"
              >
                {categoryLabels[cat]}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured post */}
        {featuredPost && (
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="block group mb-12"
          >
            <article className="grid md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition">
              {featuredPost.image && (
                <div className="relative h-64 md:h-auto">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.imageAlt || featuredPost.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                      Destacado
                    </span>
                  </div>
                </div>
              )}
              <div className="p-8 flex flex-col justify-center">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                  {categoryLabels[featuredPost.category]}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-dark group-hover:text-primary transition mb-3">
                  {featuredPost.title}
                </h2>
                <p className="text-slate mb-4">{featuredPost.description}</p>
                <div className="flex items-center gap-4 text-sm text-slate">
                  <span className="flex items-center gap-1">
                    <ClockIcon className="w-4 h-4" />
                    {featuredPost.readingTime} min de lectura
                  </span>
                  <span>
                    {new Date(featuredPost.date).toLocaleDateString("es-ES", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </article>
          </Link>
        )}

        {/* Grid de posts */}
        {restPosts.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {restPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <article className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition h-full flex flex-col">
                  {post.image && (
                    <div className="relative h-48">
                      <Image
                        src={post.image}
                        alt={post.imageAlt || post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                      {categoryLabels[post.category]}
                    </span>
                    <h2 className="text-lg font-bold text-dark group-hover:text-primary transition mb-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-slate mb-4 flex-1">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-slate">
                      <span className="flex items-center gap-1">
                        <ClockIcon className="w-3.5 h-3.5" />
                        {post.readingTime} min
                      </span>
                      <span>
                        {new Date(post.date).toLocaleDateString("es-ES", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    {post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-gray-100">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="flex items-center gap-1 text-xs bg-light text-slate px-2 py-0.5 rounded"
                          >
                            <TagIcon className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}

        {posts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-slate">
              Próximamente publicaremos guías y artículos sobre moqueta
              ecológica.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
