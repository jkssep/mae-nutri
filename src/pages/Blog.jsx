import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Baby, ArrowRight, Search } from 'lucide-react'

function Blog() {
  const blogPosts = [
    {
      id: "5-erros-alimentares",
      title: "5 Erros Alimentares das Novas Mães",
      category: "Nutrição",
      excerpt: "Descubra os principais erros que podem prejudicar sua recuperação pós-parto e aprenda como evitá-los.",
      date: "15 de junho, 2024",
      readTime: "8 min"
    },
    {
      id: "receitas-rapidas",
      title: "Receitas Rápidas para Mães Ocupadas",
      category: "Receitas",
      excerpt: "Pratos nutritivos que você pode preparar em menos de 30 minutos.",
      date: "12 de junho, 2024",
      readTime: "6 min"
    },
    {
      id: "organizacao-familiar",
      title: "Como Organizar a Alimentação Familiar",
      category: "Organização",
      excerpt: "Dicas práticas para manter toda a família bem alimentada.",
      date: "10 de junho, 2024",
      readTime: "10 min"
    },
    {
      id: "alimentos-leite",
      title: "Alimentos que Aumentam a Produção de Leite",
      category: "Amamentação",
      excerpt: "Conheça os alimentos que realmente fazem diferença na amamentação.",
      date: "8 de junho, 2024",
      readTime: "7 min"
    },
    {
      id: "suplementacao",
      title: "Suplementação no Pós-Parto",
      category: "Nutrição",
      excerpt: "Quais suplementos são realmente necessários após o parto.",
      date: "5 de junho, 2024",
      readTime: "9 min"
    },
    {
      id: "lanches-noturnos",
      title: "Lanches Noturnos Saudáveis",
      category: "Receitas",
      excerpt: "Opções nutritivas para aquelas fomes da madrugada.",
      date: "3 de junho, 2024",
      readTime: "5 min"
    }
  ]

  const categories = ["Todos", "Nutrição", "Receitas", "Organização", "Amamentação"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-orange-50">
      {/* Header */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Blog <span className="text-pink-600">Mãe Nutri</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Artigos sobre nutrição pós-parto, receitas práticas e dicas para uma vida mais saudável
            </p>
          </div>

          {/* Search and Categories */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Buscar artigos..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "Todos" ? "default" : "outline"}
                  className={category === "Todos" ? "bg-pink-600 hover:bg-pink-700" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow bg-white">
                <div className="h-48 bg-gradient-to-br from-pink-200 to-orange-200 flex items-center justify-center">
                  <Baby className="h-16 w-16 text-pink-600" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg hover:text-pink-600 transition-colors">
                    <Link to={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                  <p className="text-sm text-gray-500">{post.date}</p>
                </CardHeader>
                <CardContent>
                  <Link to={`/blog/${post.id}`}>
                    <Button variant="ghost" className="p-0 text-pink-600 hover:text-pink-700">
                      Ler artigo completo <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Não perca nenhum artigo!
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Receba nossos melhores conteúdos diretamente no seu e-mail
          </p>
          <Link to="/newsletter">
            <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
              Assinar Newsletter
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Blog

