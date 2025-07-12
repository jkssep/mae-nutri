import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ArrowLeft, Clock, Calendar, Share2 } from 'lucide-react'

function BlogPost() {
  const { id } = useParams()

  const posts = {
    "5-erros-alimentares": {
      title: "5 Erros Alimentares das Novas Mães",
      category: "Nutrição",
      date: "15 de junho, 2024",
      readTime: "8 min",
      content: `
        <p>O período pós-parto é uma fase delicada na vida de uma mulher, onde a nutrição adequada desempenha um papel fundamental na recuperação e no bem-estar tanto da mãe quanto do bebê. Infelizmente, muitas novas mães cometem erros alimentares que podem prejudicar sua saúde e energia.</p>

        <h2>1. Pular Refeições por Falta de Tempo</h2>
        <p>Um dos erros mais comuns é pular refeições devido à correria do dia a dia com o bebê. Muitas mães acreditam que não têm tempo para comer adequadamente, mas isso pode levar à fadiga extrema, queda na produção de leite materno e deficiências nutricionais.</p>
        
        <p><strong>Solução:</strong> Prepare lanches práticos e nutritivos com antecedência. Mantenha sempre à mão frutas, castanhas, iogurte natural e sanduíches integrais. Lembre-se: cuidar da sua alimentação é cuidar do seu bebê também.</p>

        <h2>2. Consumir Excesso de Açúcar e Alimentos Processados</h2>
        <p>A tentação de consumir doces e alimentos processados é grande, especialmente quando se está cansada e precisando de energia rápida. No entanto, esses alimentos causam picos de glicemia seguidos de quedas bruscas, resultando em mais cansaço e irritabilidade.</p>
        
        <p><strong>Solução:</strong> Opte por carboidratos complexos como aveia, quinoa, batata-doce e frutas. Eles fornecem energia sustentada e ajudam a manter o humor estável.</p>

        <h2>3. Não Beber Água Suficiente</h2>
        <p>A desidratação é comum no pós-parto, especialmente em mães que amamentam. A falta de água adequada pode causar fadiga, dores de cabeça, constipação e redução na produção de leite materno.</p>
        
        <p><strong>Solução:</strong> Mantenha uma garrafa de água sempre por perto e beba pequenos goles ao longo do dia. Uma dica é beber um copo de água antes de cada mamada.</p>

        <h2>4. Fazer Dietas Restritivas Muito Cedo</h2>
        <p>Muitas mulheres têm pressa para voltar ao peso anterior à gravidez e acabam fazendo dietas muito restritivas logo após o parto. Isso pode ser perigoso, especialmente para mães que amamentam, pois pode afetar a qualidade e quantidade do leite materno.</p>
        
        <p><strong>Solução:</strong> Foque em uma alimentação equilibrada e nutritiva. A perda de peso deve ser gradual e sempre acompanhada por um profissional de saúde.</p>

        <h2>5. Ignorar as Necessidades de Ferro e Vitaminas</h2>
        <p>Após o parto, muitas mulheres apresentam deficiência de ferro devido à perda sanguínea durante o parto. Além disso, as necessidades de vitaminas como B12, D e ácido fólico continuam elevadas, especialmente durante a amamentação.</p>
        
        <p><strong>Solução:</strong> Inclua alimentos ricos em ferro como carnes magras, feijão, lentilha e vegetais verde-escuros. Considere suplementação quando recomendada pelo médico.</p>

        <h2>Conclusão</h2>
        <p>Lembre-se de que cuidar da sua nutrição não é um luxo, mas uma necessidade. Uma mãe bem nutrida tem mais energia, melhor humor e maior capacidade de cuidar do seu bebê. Se você está cometendo algum desses erros, não se culpe - comece hoje mesmo a fazer pequenas mudanças que farão uma grande diferença na sua saúde e bem-estar.</p>

        <p>Para mais dicas de nutrição pós-parto, não deixe de baixar nosso e-book gratuito com receitas práticas e orientações completas.</p>
      `
    },
    "receitas-rapidas": {
      title: "Receitas Rápidas para Mães Ocupadas",
      category: "Receitas",
      date: "12 de junho, 2024",
      readTime: "6 min",
      content: `
        <p>Ser mãe é uma das experiências mais gratificantes da vida, mas também uma das mais desafiadoras, especialmente quando se trata de encontrar tempo para preparar refeições nutritivas. Entre as mamadas, trocas de fraldas e noites mal dormidas, cozinhar pode parecer uma tarefa impossível.</p>

        <p>Pensando nisso, selecionamos receitas práticas que podem ser preparadas em até 30 minutos, utilizando ingredientes simples e nutritivos que você provavelmente já tem em casa.</p>

        <h2>1. Omelete de Espinafre e Queijo (10 minutos)</h2>
        <p><strong>Ingredientes:</strong></p>
        <ul>
          <li>3 ovos</li>
          <li>1 xícara de espinafre fresco</li>
          <li>50g de queijo minas ou ricota</li>
          <li>1 colher de sopa de azeite</li>
          <li>Sal e pimenta a gosto</li>
        </ul>
        
        <p><strong>Modo de preparo:</strong> Bata os ovos, tempere com sal e pimenta. Aqueça o azeite na frigideira, adicione o espinafre até murchar, despeje os ovos batidos, adicione o queijo e dobre a omelete. Rica em proteínas, ferro e cálcio.</p>

        <h2>2. Smoothie Energético (5 minutos)</h2>
        <p><strong>Ingredientes:</strong></p>
        <ul>
          <li>1 banana</li>
          <li>1 xícara de leite ou bebida vegetal</li>
          <li>2 colheres de sopa de aveia</li>
          <li>1 colher de sopa de pasta de amendoim</li>
          <li>1 colher de chá de mel</li>
        </ul>
        
        <p><strong>Modo de preparo:</strong> Bata todos os ingredientes no liquidificador até ficar homogêneo. Perfeito para um café da manhã rápido ou lanche da tarde, fornecendo energia sustentada.</p>

        <h2>3. Salada de Grão-de-Bico (15 minutos)</h2>
        <p><strong>Ingredientes:</strong></p>
        <ul>
          <li>1 lata de grão-de-bico escorrido</li>
          <li>1 tomate picado</li>
          <li>1/2 pepino picado</li>
          <li>1/4 de cebola roxa picada</li>
          <li>Azeite, limão, sal e ervas a gosto</li>
        </ul>
        
        <p><strong>Modo de preparo:</strong> Misture todos os ingredientes e tempere. Pode ser preparada com antecedência e guardada na geladeira por até 3 dias.</p>

        <h2>4. Wrap de Frango e Abacate (20 minutos)</h2>
        <p><strong>Ingredientes:</strong></p>
        <ul>
          <li>1 tortilla integral</li>
          <li>100g de frango desfiado (pode usar sobras)</li>
          <li>1/2 abacate amassado</li>
          <li>Folhas de alface</li>
          <li>Tomate cereja</li>
        </ul>
        
        <p><strong>Modo de preparo:</strong> Espalhe o abacate na tortilla, adicione o frango, vegetais, enrole e corte ao meio. Refeição completa e portátil.</p>

        <h2>5. Sopa Express de Legumes (25 minutos)</h2>
        <p><strong>Ingredientes:</strong></p>
        <ul>
          <li>2 xícaras de legumes picados (cenoura, abobrinha, batata)</li>
          <li>1 litro de caldo de legumes</li>
          <li>1 lata de feijão branco</li>
          <li>Temperos a gosto</li>
        </ul>
        
        <p><strong>Modo de preparo:</strong> Refogue os legumes, adicione o caldo, cozinhe até ficarem macios, adicione o feijão e tempere. Rende várias porções e pode ser congelada.</p>

        <h2>Dicas Importantes:</h2>
        <ul>
          <li>Prepare ingredientes nos finais de semana (meal prep)</li>
          <li>Mantenha sempre ovos, grãos e vegetais congelados em casa</li>
          <li>Use panela de pressão para acelerar o cozimento</li>
          <li>Prepare porções extras para congelar</li>
          <li>Não se culpe por usar ingredientes pré-prontos quando necessário</li>
        </ul>

        <p>Lembre-se: o importante é manter-se nutrida e com energia. Essas receitas são apenas o começo - adapte-as conforme seus gostos e necessidades!</p>
      `
    },
    "organizacao-familiar": {
      title: "Como Organizar a Alimentação Familiar",
      category: "Organização",
      date: "10 de junho, 2024",
      readTime: "10 min",
      content: `
        <p>Organizar a alimentação de toda a família pode parecer uma tarefa hercúlea, especialmente quando você tem um bebê pequeno e pouco tempo disponível. No entanto, com planejamento e algumas estratégias simples, é possível manter toda a família bem alimentada sem stress excessivo.</p>

        <h2>1. Planejamento Semanal de Cardápio</h2>
        <p>O primeiro passo para uma alimentação familiar organizada é o planejamento. Reserve 30 minutos no final de semana para planejar as refeições da semana seguinte.</p>
        
        <p><strong>Como fazer:</strong></p>
        <ul>
          <li>Escolha um dia fixo da semana para planejar</li>
          <li>Considere a agenda da família (dias mais corridos, compromissos)</li>
          <li>Planeje refeições que possam ser aproveitadas em mais de uma ocasião</li>
          <li>Inclua pelo menos uma refeição "coringa" para imprevistos</li>
        </ul>

        <h2>2. Lista de Compras Estratégica</h2>
        <p>Uma lista bem organizada economiza tempo e dinheiro, além de garantir que você tenha todos os ingredientes necessários.</p>
        
        <p><strong>Organize sua lista por categorias:</strong></p>
        <ul>
          <li>Proteínas (carnes, ovos, leguminosas)</li>
          <li>Carboidratos (arroz, massas, pães)</li>
          <li>Vegetais e frutas</li>
          <li>Laticínios</li>
          <li>Itens de despensa (temperos, óleos, conservas)</li>
        </ul>

        <h2>3. Meal Prep: Preparação Antecipada</h2>
        <p>O meal prep é uma técnica que consiste em preparar alimentos com antecedência, facilitando o dia a dia.</p>
        
        <p><strong>O que preparar com antecedência:</strong></p>
        <ul>
          <li>Vegetais lavados e picados</li>
          <li>Grãos cozidos (arroz, quinoa, lentilha)</li>
          <li>Proteínas temperadas ou cozidas</li>
          <li>Molhos e temperos caseiros</li>
          <li>Lanches saudáveis porcionados</li>
        </ul>

        <h2>4. Cozinha Funcional e Organizada</h2>
        <p>Uma cozinha bem organizada facilita muito o preparo das refeições.</p>
        
        <p><strong>Dicas de organização:</strong></p>
        <ul>
          <li>Mantenha utensílios básicos sempre à mão</li>
          <li>Organize a despensa por categorias</li>
          <li>Use recipientes transparentes para visualizar os alimentos</li>
          <li>Tenha uma área específica para lanches das crianças</li>
        </ul>

        <h2>5. Envolvendo a Família</h2>
        <p>Quando possível, envolva outros membros da família na organização e preparo das refeições.</p>
        
        <p><strong>Como envolver cada um:</strong></p>
        <ul>
          <li><strong>Parceiro:</strong> Dividir tarefas como compras ou preparo de alguns pratos</li>
          <li><strong>Crianças maiores:</strong> Ajudar a lavar vegetais, organizar a mesa</li>
          <li><strong>Adolescentes:</strong> Preparar seus próprios lanches saudáveis</li>
        </ul>

        <h2>6. Cardápio Flexível para Diferentes Idades</h2>
        <p>Quando há crianças de diferentes idades, é importante adaptar as refeições para atender a todos.</p>
        
        <p><strong>Estratégias:</strong></p>
        <ul>
          <li>Prepare uma base comum e adapte para cada idade</li>
          <li>Ofereça os mesmos alimentos em texturas diferentes</li>
          <li>Tenha sempre opções simples para dias difíceis</li>
          <li>Introduza novos alimentos gradualmente</li>
        </ul>

        <h2>7. Gestão de Sobras</h2>
        <p>Aproveitar sobras de forma criativa evita desperdício e economiza tempo.</p>
        
        <p><strong>Ideias para sobras:</strong></p>
        <ul>
          <li>Frango assado → sanduíches, saladas, sopas</li>
          <li>Arroz → bolinhos, risotos, saladas</li>
          <li>Vegetais cozidos → omeletes, tortas, patês</li>
        </ul>

        <h2>8. Lanches Saudáveis Sempre Prontos</h2>
        <p>Ter lanches saudáveis preparados evita recorrer a opções menos nutritivas.</p>
        
        <p><strong>Opções práticas:</strong></p>
        <ul>
          <li>Frutas lavadas e picadas</li>
          <li>Vegetais cortados com homus</li>
          <li>Mix de castanhas porcionado</li>
          <li>Iogurte natural com frutas</li>
          <li>Bolinhos caseiros congelados</li>
        </ul>

        <h2>9. Ferramentas que Facilitam</h2>
        <p>Alguns equipamentos podem ser grandes aliados na organização da alimentação familiar.</p>
        
        <p><strong>Investimentos que valem a pena:</strong></p>
        <ul>
          <li>Panela de pressão elétrica</li>
          <li>Processador de alimentos</li>
          <li>Recipientes de vidro para armazenamento</li>
          <li>Congelador ou freezer adicional</li>
        </ul>

        <h2>10. Flexibilidade é Fundamental</h2>
        <p>Lembre-se de que nem todos os dias serão perfeitos, e tudo bem! O importante é ter um sistema que funcione na maioria das vezes.</p>
        
        <p><strong>Tenha sempre um plano B:</strong></p>
        <ul>
          <li>Refeições congeladas caseiras</li>
          <li>Ingredientes para pratos rápidos</li>
          <li>Contatos de delivery saudável</li>
          <li>Aceitação de que alguns dias serão mais simples</li>
        </ul>

        <h2>Conclusão</h2>
        <p>Organizar a alimentação familiar é um processo que requer tempo para se estabelecer, mas os benefícios são enormes: menos stress, mais saúde, economia de tempo e dinheiro, e a tranquilidade de saber que sua família está bem nutrida.</p>

        <p>Comece implementando uma estratégia por vez e vá adaptando conforme sua realidade. Lembre-se: o objetivo não é a perfeição, mas sim criar um sistema sustentável que funcione para sua família.</p>
      `
    }
  }

  const post = posts[id]

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Artigo não encontrado</h1>
          <Link to="/blog">
            <Button className="bg-pink-600 hover:bg-pink-700">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao Blog
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-orange-50">
      {/* Header */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog">
            <Button variant="ghost" className="mb-6 text-pink-600 hover:text-pink-700">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao Blog
            </Button>
          </Link>
          
          <div className="mb-6">
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-6 text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime} de leitura</span>
              </div>
              <Button variant="ghost" size="sm" className="text-pink-600 hover:text-pink-700">
                <Share2 className="h-4 w-4 mr-2" />
                Compartilhar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div 
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-ul:text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Gostou do artigo?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Baixe nosso e-book gratuito com mais dicas de nutrição pós-parto
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/ebook">
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
                Baixar E-book Gratuito
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

export default BlogPost

