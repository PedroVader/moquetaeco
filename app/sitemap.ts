import { MetadataRoute } from "next";
import { provincias, topMunicipios, tiposUso, getAllComarcas } from "@/lib/data";
import { getAllPosts } from "@/lib/blog";

const BASE_URL = "https://www.disstands.com";

export default function sitemap(): MetadataRoute.Sitemap {
  // Página principal
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date("2025-06-01"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  // Páginas de producto
  const productPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/productos/rewind-flat`,
      lastModified: new Date("2025-06-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/productos/rewind-dilour`,
      lastModified: new Date("2025-06-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  // Páginas de provincia
  const provinciaPages: MetadataRoute.Sitemap = provincias.map((provincia) => ({
    url: `${BASE_URL}/moqueta-ecologica-${provincia.slug}`,
    lastModified: new Date("2025-06-01"),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // Páginas de provincia + uso
  const usoPages: MetadataRoute.Sitemap = provincias.flatMap((provincia) =>
    tiposUso.map((uso) => ({
      url: `${BASE_URL}/${provincia.slug}/${uso.slug}`,
      lastModified: new Date("2025-06-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    }))
  );

  // Páginas de comarca
  const comarcas = getAllComarcas();
  const comarcaPages: MetadataRoute.Sitemap = comarcas.map((comarca) => ({
    url: `${BASE_URL}/comarcas/${comarca.slug}`,
    lastModified: new Date("2025-06-01"),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Páginas de municipio
  const municipioPages: MetadataRoute.Sitemap = topMunicipios.map(
    (municipio) => ({
      url: `${BASE_URL}/municipios/${municipio.slug}`,
      lastModified: new Date("2025-06-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  // Blog
  const posts = getAllPosts();
  const blogPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/blog`,
      lastModified: posts[0]?.date ? new Date(posts[0].date) : new Date("2025-06-01"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...posts.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  return [
    ...mainPages,
    ...productPages,
    ...provinciaPages,
    ...usoPages,
    ...comarcaPages,
    ...municipioPages,
    ...blogPages,
  ];
}
