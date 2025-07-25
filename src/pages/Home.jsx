import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Heart, Baby, BookOpen, Users, Star, ArrowRight, Download, Mail } from 'lucide-react'

function Home() {
  const testimonials = [
    {
      name: "Ana Silva",
      text: "O guia me ajudou muito no pós-parto. Receitas práticas e orientações claras!",
      rating: 5
    },
    {
      name: "Carla Santos",
      text: "Finalmente encontrei informações confiáveis sobre nutrição na amamentação.",
      rating: 5
    },
    {
      name: "Mariana Costa",
      text: "As receitas são deliciosas e fáceis de fazer. Recomendo para todas as mães!",
      rating: 5
    }
  ]

  const blogPosts = [
    {
      id: "5-erros-alimentares",
      title: "5 Erros Alimentares das Novas Mães",
      category: "Nutrição",
      excerpt: "Descubra os principais erros que podem prejudicar sua recuperação pós-parto.",
      image: "/api/placeholder/300/200"
    },
    {
      id: "receitas-rapidas",
      title: "Receitas Rápidas para Mães Ocupadas",
      category: "Receitas",
      excerpt: "Pratos nutritivos que você pode preparar em menos de 30 minutos.",
      image: "/api/placeholder/300/200"
    },
    {
      id: "organizacao-familiar",
      title: "Como Organizar a Alimentação Familiar",
      category: "Organização",
      excerpt: "Dicas práticas para manter toda a família bem alimentada.",
      image: "/api/placeholder/300/200"
    },
    {
      id: "alimentos-leite",
      title: "Alimentos que Aumentam a Produção de Leite",
      category: "Amamentação",
      excerpt: "Conheça os alimentos que realmente fazem diferença na amamentação.",
      image: "/api/placeholder/300/200"
    },
    {
      id: "suplementacao",
      title: "Suplementação no Pós-Parto",
      category: "Nutrição",
      excerpt: "Quais suplementos são realmente necessários após o parto.",
      image: "/api/placeholder/300/200"
    },
    {
      id: "lanches-noturnos",
      title: "Lanches Noturnos Saudáveis",
      category: "Receitas",
      excerpt: "Opções nutritivas para aquelas fomes da madrugada.",
      image: "/api/placeholder/300/200"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-orange-50">
      {/* Hero Section */}
      <section id="home" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Nutrição <span className="text-pink-600">Pós-Parto</span> e Amamentação
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Orientações nutricionais práticas e baseadas em evidências para mães no período pós-parto (0-24 meses)
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/ebook">
                <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
                  <Download className="mr-2 h-5 w-5" />
                  Baixar E-book Gratuito
                </Button>
              </Link>
              <Link to="/blog">
                <Button variant="outline" size="lg">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Ler Blog
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4">Artigo em Destaque</Badge>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              5 Erros Alimentares das Novas Mães
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubra os principais erros que podem prejudicar sua recuperação pós-parto e aprenda como evitá-los.
            </p>
            <Link to="/blog/5-erros-alimentares">
              <Button className="mt-6 bg-pink-600 hover:bg-pink-700">
                Ler Artigo Completo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-r from-pink-100 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              O que as mães estão dizendo
            </h3>
            <p className="text-lg text-gray-600">
              Depoimentos reais de mães que transformaram sua alimentação
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                  <p className="font-semibold text-gray-900">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Últimos Artigos do Blog
            </h3>
            <p className="text-lg text-gray-600">
              Conteúdo atualizado sobre nutrição, receitas e organização familiar
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-pink-200 to-orange-200 flex items-center justify-center">
                  <Baby className="h-16 w-16 text-pink-600" />
                </div>
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">{post.category}</Badge>
                  <CardTitle className="text-lg">{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to={`/blog/${post.id}`}>
                    <Button variant="ghost" className="p-0 text-pink-600 hover:text-pink-700">
                      Ler mais <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* E-book Section */}
      <section id="ebook" className="py-16 bg-gradient-to-br from-pink-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Guia Completo de Nutrição Pós-Parto
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Um e-book completo com 50+ páginas de conteúdo prático sobre nutrição na amamentação, 
                recuperação pós-parto e alimentação familiar.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  <span>Nutrição na Amamentação - Alimentos-chave e cronograma diário</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  <span>Recuperação Pós-Parto - Nutrientes essenciais e suplementação</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  <span>Alimentação Familiar - Refeições práticas e introdução alimentar</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  <span>Bônus: Lista de compras + 20 receitas especiais testadas</span>
                </div>
              </div>
              <Link to="/ebook">
                <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
                  <Download className="mr-2 h-5 w-5" />
                  Baixar E-book Gratuito
                </Button>
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="h-96 bg-gradient-to-br from-pink-200 to-orange-200 rounded-lg flex items-center justify-center">
                <BookOpen className="h-24 w-24 text-pink-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Receba Dicas Semanais de Nutrição
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Cadastre-se na nossa newsletter e receba o guia "20 Lanches para Fome Noturna" gratuitamente!
          </p>
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Newsletter Mãe Nutri
              </CardTitle>
              <CardDescription>
                Conteúdo exclusivo direto no seu e-mail
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <Link to="/newsletter">
                <Button className="w-full bg-pink-600 hover:bg-pink-700">
                  Quero Receber as Dicas
                </Button>
              </Link>
              <p className="text-xs text-gray-500">
                Seus dados estão seguros. Não enviamos spam.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default Home

