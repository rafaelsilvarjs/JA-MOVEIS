# Instruções do Projeto - JÁ Móveis Planejados

## Visão Geral
Site profissional responsivo para "JÁ Móveis Planejados" desenvolvido com React, TypeScript e Tailwind CSS.

## Como Executar

### Desenvolvimento
```bash
npm install      # Instalar dependências
npm run dev      # Iniciar servidor (porta 5173)
```

### Produção
```bash
npm run build    # Compilar para produção
npm preview      # Previsualizar build
```

## Estrutura de Páginas

| Página | Rota | Descrição |
|--------|------|-----------|
| Home | `/` | Página inicial com heroe, serviços, números e depoimentos |
| Sobre | `/sobre` | História, valores, equipe e diferenciais |
| Serviços | `/servicos` | 6 serviços, processo, por que escolher |
| Portfólio | `/portfolio` | Projetos com filtros, estatísticas e depoimentos |
| Contato | `/contato` | Forma, telefone, email, FAQ |

## Principais Componentes

### Header
- Navegação responsiva
- Logo clicável
- Menu mobile
- Botão WhatsApp

### Footer
- Links rápidos
- Informações de contato
- Redes sociais
- Copyright

### Páginas
Cada página possui:
- Hero section personalizada
- Conteúdo estruturado
- Call-to-action
- Design responsivo

## Customizações Necessárias

Antes de publicar, substitua:

1. **Contato WhatsApp** - Atualize todos os links `https://wa.me/5511987654321` com seu número real
2. **Email de Contato** - Substitua `contato@jamoveis.com.br` por seu email
3. **Endereço** - Atualize a localização em "São Paulo, SP"
4. **Número de Telefone** - Substitua `(11) 98765-4321` pelos números reais
5. **Imagens** - Adicione fotos reais dos projetos no portfólio
6. **Nomes da Equipe** - Personalize os membros da equipe

## Comandos Úteis

```bash
npm install          # Instalar dependências
npm run dev          # Servidor de desenvolvimento
npm run build        # Build para produção
npm run preview      # Previsualizar build
npm audit fix        # Corrigir vulnerabilidades
```

## Cores do Tema

- **Primária**: #2c5f2d (Verde Escuro)
- **Secundária**: #8b5a3c (Marrom)
- **Destaque**: #d4a574 (Bege)

## Deploy

O projeto está pronto para ser deployado em:
- Vercel
- Netlify
- GitHub Pages
- AWS Amplify
- Qualquer servidor estático

Basta fazer o build com `npm run build` e servir a pasta `dist/`.

## Suporte

Para questões sobre o código ou melhorias, consulte a documentação:
- React: https://react.dev
- Tailwind: https://tailwindcss.com
- Vite: https://vitejs.dev
- TypeScript: https://www.typescriptlang.org
