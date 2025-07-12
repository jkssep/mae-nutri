import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { BookOpen, Download, Check, Star, Users, Clock } from 'lucide-react'

function Ebook() {
  const chapters = [
    {
      number: "01",
      title: "Nutrição na Amamentação",
      description: "Alimentos-chave para produção de leite, mitos e verdades sobre amamentação, cronograma alimentar diário"
    },
    {
      number: "02", 
      title: "Recuperação Pós-Parto",
      description: "Nutrientes essenciais para cicatrização, como combater a fadiga, suplementação adequada"
    },
    {
      number: "03",
      title: "Alimentação Familiar",
      description: "Refeições práticas para toda família, introdução alimentar do bebê, organização da rotina alimentar"
    }
  ]

  const bonuses = [
    "Lista de compras supermercado + farmácia",
    "20 receitas especiais testadas",
    "Considerações finais e próximos passos"
  ]

  const testimonials = [
    {
      name: "Marina Oliveira",
      text: "Este e-book mudou completamente minha relação com a alimentação no pós-parto. As receitas são práticas e deliciosas!",
      rating: 5
    },
    {
      name: "Juliana Santos",
      text: "Informações baseadas em evidências e linguagem fácil de entender. Recomendo para todas as mães!",
      rating: 5
    },
    {
      name: "Camila Rodrigues", 
      text: "Finalmente um guia completo que realmente funciona na prática. Minha energia voltou!",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-orange-50">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-pink-100 text-pink-800">E-book Gratuito</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Guia Completo de <span className="text-pink-600">Nutrição Pós-Parto</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Um e-book completo com 50+ páginas de conteúdo prático sobre nutrição na amamentação, 
                recuperação pós-parto e alimentação familiar.
              </p>
              
              <div className="flex items-center gap-6 mb-8 text-gray-600">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  <span>50+ páginas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  <span>+5.000 downloads</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>Acesso imediato</span>
                </div>
              </div>

              <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-lg px-8 py-4">
                <Download className="mr-2 h-6 w-6" />
                Baixar E-book Gratuito
              </Button>
              
              <p className="text-sm text-gray-500 mt-4">
                ✓ Sem spam ✓ Conteúdo baseado em evidências ✓ Download imediato
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-200 to-orange-200 p-8 rounded-lg shadow-lg">
              <div className="h-96 bg-white rounded-lg flex items-center justify-center shadow-inner">
                <BookOpen className="h-32 w-32 text-pink-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              O que você vai aprender
            </h2>
            <p className="text-lg text-gray-600">
              Conteúdo organizado em capítulos práticos e fáceis de seguir
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {chapters.map((chapter, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold">
                      {chapter.number}
                    </div>
                    <CardTitle className="text-xl">{chapter.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600">
                    {chapter.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Por que baixar este e-book?
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Informações Baseadas em Evidências</h3>
                    <p className="text-gray-600">Todo conteúdo é fundamentado em pesquisas científicas e práticas comprovadas.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Receitas Práticas e Testadas</h3>
                    <p className="text-gray-600">20 receitas especiais desenvolvidas especialmente para mães no pós-parto.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Linguagem Simples e Acessível</h3>
                    <p className="text-gray-600">Conteúdo técnico explicado de forma clara e fácil de entender.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Aplicação Imediata</h3>
                    <p className="text-gray-600">Dicas que você pode começar a aplicar hoje mesmo na sua rotina.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-pink-100 to-orange-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Bônus Inclusos</h3>
              <div className="space-y-4">
                {bonuses.map((bonus, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                    <span className="text-gray-700">{bonus}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              O que as mães estão dizendo
            </h2>
            <p className="text-lg text-gray-600">
              Depoimentos reais de quem já transformou sua alimentação
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

      {/* CTA Final */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Comece sua transformação hoje mesmo
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Baixe gratuitamente o Guia Completo de Nutrição Pós-Parto e descubra como se alimentar melhor para ter mais energia e bem-estar.
          </p>
          
          <div className="bg-gradient-to-r from-pink-100 to-orange-100 p-8 rounded-lg mb-8">
            <div className="max-w-md mx-auto">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Receba seu e-book gratuito
              </h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <Button size="lg" className="w-full bg-pink-600 hover:bg-pink-700 text-lg py-4">
                  <Download className="mr-2 h-6 w-6" />
                  Baixar E-book Gratuito
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Seus dados estão seguros. Não enviamos spam.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/blog">
              <Button variant="outline" size="lg">
                Ler Artigos do Blog
              </Button>
            </Link>
            <Link to="/newsletter">
              <Button variant="outline" size="lg">
                Assinar Newsletter
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Ebook

