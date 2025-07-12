import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Mail, Gift, Clock, Users, Check, Star } from 'lucide-react'

function Newsletter() {
  const benefits = [
    {
      icon: <Gift className="h-6 w-6" />,
      title: "Lead Magnet Exclusivo",
      description: "Receba gratuitamente o guia '20 Lanches para Fome Noturna' assim que se inscrever"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Conteúdo Semanal",
      description: "Dicas práticas de nutrição, receitas e orientações direto no seu e-mail"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Acesso Antecipado",
      description: "Seja a primeira a saber sobre novos artigos, receitas e materiais exclusivos"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Comunidade Exclusiva",
      description: "Faça parte de uma comunidade de mães que se apoiam na jornada da maternidade"
    }
  ]

  const testimonials = [
    {
      name: "Fernanda Lima",
      text: "A newsletter da Mãe Nutri é o que mais espero na semana! Sempre com dicas práticas que realmente funcionam.",
      rating: 5
    },
    {
      name: "Patrícia Costa",
      text: "O guia dos lanches noturnos salvou minha vida! Agora tenho opções saudáveis para aquelas fomes da madrugada.",
      rating: 5
    },
    {
      name: "Roberta Silva",
      text: "Conteúdo de qualidade e sempre baseado em evidências. Recomendo para todas as mães!",
      rating: 5
    }
  ]

  const weeklyContent = [
    {
      day: "Segunda",
      title: "Motivação da Semana",
      description: "Dicas motivacionais e reflexões sobre maternidade e autocuidado"
    },
    {
      day: "Quarta", 
      title: "Receita Especial",
      description: "Uma receita prática e nutritiva testada especialmente para mães"
    },
    {
      day: "Sexta",
      title: "Dica Nutricional",
      description: "Orientações baseadas em evidências sobre nutrição pós-parto"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-orange-50">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-pink-100 text-pink-800">Newsletter Gratuita</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Receba Dicas <span className="text-pink-600">Semanais</span> de Nutrição
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Cadastre-se na nossa newsletter e receba o guia "20 Lanches para Fome Noturna" gratuitamente! 
                Conteúdo exclusivo direto no seu e-mail.
              </p>
              
              <div className="flex items-center gap-6 mb-8 text-gray-600">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  <span>+10.000 inscritas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span>4.9/5 avaliação</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-pink-100 to-orange-100 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Inscreva-se agora e ganhe:
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-pink-600" />
                    <span>Guia "20 Lanches para Fome Noturna"</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-pink-600" />
                    <span>Dicas semanais de nutrição</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-pink-600" />
                    <span>Receitas exclusivas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-pink-600" />
                    <span>Acesso antecipado a novos conteúdos</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-center mb-6">
                <Mail className="h-16 w-16 text-pink-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900">Newsletter Mãe Nutri</h2>
                <p className="text-gray-600">Conteúdo exclusivo direto no seu e-mail</p>
              </div>
              
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
                <Button className="w-full bg-pink-600 hover:bg-pink-700 text-lg py-4">
                  <Mail className="mr-2 h-5 w-5" />
                  Quero Receber as Dicas
                </Button>
              </div>
              
              <p className="text-sm text-gray-500 mt-4 text-center">
                ✓ Seus dados estão seguros ✓ Não enviamos spam ✓ Cancele quando quiser
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Por que assinar nossa newsletter?
            </h2>
            <p className="text-lg text-gray-600">
              Benefícios exclusivos para assinantes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              O que você vai receber
            </h2>
            <p className="text-lg text-gray-600">
              Conteúdo organizado e entregue na frequência ideal
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {weeklyContent.map((content, index) => (
              <Card key={index} className="bg-gradient-to-br from-pink-50 to-orange-50 border-pink-200">
                <CardHeader className="text-center">
                  <Badge className="w-fit mx-auto mb-4 bg-pink-600">{content.day}</Badge>
                  <CardTitle className="text-xl">{content.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {content.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-pink-200 to-orange-200 p-8 rounded-lg">
              <div className="h-96 bg-white rounded-lg flex items-center justify-center shadow-inner">
                <div className="text-center">
                  <Gift className="h-24 w-24 text-pink-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900">20 Lanches para Fome Noturna</h3>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Seu presente de boas-vindas
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Assim que você se inscrever na nossa newsletter, receberá gratuitamente o guia 
                "20 Lanches para Fome Noturna" - perfeito para aqueles momentos de fome durante 
                a amamentação ou madrugadas acordadas.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-pink-600" />
                  <span>20 opções de lanches nutritivos e práticos</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-pink-600" />
                  <span>Receitas que não atrapalham o sono</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-pink-600" />
                  <span>Ingredientes fáceis de encontrar</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-pink-600" />
                  <span>Preparo em menos de 5 minutos</span>
                </div>
              </div>
              
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
                <Mail className="mr-2 h-5 w-5" />
                Quero Receber o Guia
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              O que nossas assinantes dizem
            </h2>
            <p className="text-lg text-gray-600">
              Depoimentos reais de mães que fazem parte da nossa comunidade
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

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-pink-100 to-orange-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Pronta para transformar sua alimentação?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Junte-se a mais de 10.000 mães que já fazem parte da nossa comunidade e recebem 
            dicas exclusivas de nutrição pós-parto.
          </p>
          
          <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
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
                <Mail className="mr-2 h-6 w-6" />
                Quero Fazer Parte da Comunidade
              </Button>
            </div>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/blog">
              <Button variant="outline" size="lg">
                Ler Artigos do Blog
              </Button>
            </Link>
            <Link to="/ebook">
              <Button variant="outline" size="lg">
                Baixar E-book Gratuito
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Newsletter

