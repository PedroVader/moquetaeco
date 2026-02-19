import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ClockIcon,
  ArrowLeftIcon,
  TagIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import {
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
  categoryLabels,
} from "@/lib/blog";
import {
  generarLocalBusinessSchema,
  generarBreadcrumbSchema,
} from "@/lib/seo/schema";
import { empresa } from "@/lib/data";

const BASE_URL = "https://www.moquetaecologica.com";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    openGraph: {
      title: `${post.title} | Disstands`,
      description: post.description,
      url: `${BASE_URL}/blog/${post.slug}`,
      type: "article",
      locale: "es_ES",
      publishedTime: post.date,
      modifiedTime: post.updatedAt || post.date,
      authors: [post.author],
      tags: post.tags,
      images: post.image
        ? [
            {
              url: `${BASE_URL}${post.image}`,
              width: 1200,
              height: 630,
              alt: post.imageAlt || post.title,
            },
          ]
        : [
            {
              url: `${BASE_URL}/og-image.jpg`,
              width: 1200,
              height: 630,
              alt: "Moqueta Ecológica Rewind - Disstands",
            },
          ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Disstands`,
      description: post.description,
      images: post.image
        ? [`${BASE_URL}${post.image}`]
        : [`${BASE_URL}/og-image.jpg`],
    },
    alternates: {
      canonical: `${BASE_URL}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);
  const localBusinessSchema = generarLocalBusinessSchema();
  const breadcrumbSchema = generarBreadcrumbSchema([
    { name: "Inicio", url: BASE_URL },
    { name: "Blog", url: `${BASE_URL}/blog` },
    { name: post.title, url: `${BASE_URL}/blog/${post.slug}` },
  ]);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: post.image ? `${BASE_URL}${post.image}` : `${BASE_URL}/og-image.jpg`,
    datePublished: post.date,
    dateModified: post.updatedAt || post.date,
    author: {
      "@type": "Organization",
      name: "Disstands Moquetas S.L.",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Disstands Moquetas S.L.",
      logo: {
        "@type": "ImageObject",
        url: "https://www.disstands.com/wp-content/uploads/2025/06/logo-disstands.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <article>
        {/* Header */}
        <div className="bg-gradient-to-br from-primary to-primary-light text-white py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition mb-6"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              Volver al blog
            </Link>

            <span className="inline-block bg-white/20 backdrop-blur text-sm font-semibold px-3 py-1 rounded-full mb-4">
              {categoryLabels[post.category]}
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
              {post.title}
            </h1>

            <p className="text-lg text-white/90 mb-6">{post.description}</p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
              <span className="flex items-center gap-1">
                <ClockIcon className="w-4 h-4" />
                {post.readingTime} min de lectura
              </span>
              <span>
                {new Date(post.date).toLocaleDateString("es-ES", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span>Por {post.author}</span>
            </div>
          </div>
        </div>

        {/* Featured image */}
        {post.image && (
          <div className="max-w-4xl mx-auto px-4 -mt-6">
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={post.image}
                alt={post.imageAlt || post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        )}

        {/* Content */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div
            className="prose prose-lg max-w-none prose-headings:text-dark prose-headings:font-bold prose-p:text-slate prose-p:leading-relaxed prose-a:text-primary prose-a:font-semibold hover:prose-a:text-primary-light prose-li:text-slate prose-strong:text-dark"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap items-center gap-2">
                <TagIcon className="w-5 h-5 text-slate" />
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-light text-slate text-sm px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-12 bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-dark mb-3">
              ¿Necesitas moqueta ecológica?
            </h2>
            <p className="text-slate mb-6">
              Presupuesto sin compromiso en 24-48h. Más de 25 años de
              experiencia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${empresa.telefonoInternacional}`}
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-light text-white font-bold py-3 px-6 rounded-xl transition"
              >
                <PhoneIcon className="w-5 h-5" />
                {empresa.telefono}
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold py-3 px-6 rounded-xl transition"
              >
                Ver productos
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="bg-light py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-dark mb-8">
              Artículos relacionados
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((relPost) => (
                <Link
                  key={relPost.slug}
                  href={`/blog/${relPost.slug}`}
                  className="group"
                >
                  <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition h-full flex flex-col">
                    {relPost.image && (
                      <div className="relative h-40">
                        <Image
                          src={relPost.image}
                          alt={relPost.imageAlt || relPost.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="p-5 flex flex-col flex-1">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                        {categoryLabels[relPost.category]}
                      </span>
                      <h3 className="font-bold text-dark group-hover:text-primary transition mb-2">
                        {relPost.title}
                      </h3>
                      <p className="text-sm text-slate flex-1">
                        {relPost.description}
                      </p>
                      <span className="text-xs text-slate mt-3">
                        {relPost.readingTime} min de lectura
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
