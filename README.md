# Realeiros Play — Site institucional

Site estático em Astro para substituir o Google Sites da Realeiros Play.

## Objetivo

- domínio próprio: `realeirosplay.com`;
- hospedagem gratuita no GitHub Pages;
- deploy automático via GitHub Actions;
- código versionado e simples de manter;
- foco visual no Olha a Batida;
- identidade brasileira, quente e autoral;
- responsivo para celular e desktop;
- sem backend e sem banco de dados.

## Estrutura

```text
/
├── src/
│   ├── components/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   │   ├── index.astro
│   │   ├── olha-a-batida.astro
│   │   ├── sobre.astro
│   │   ├── novidades.astro
│   │   ├── contato.astro
│   │   ├── suporte.astro
│   │   ├── privacidade.astro
│   │   ├── termos.astro
│   │   ├── exclusao-de-dados.astro
│   │   └── 404.astro
│   └── styles/global.css
├── public/
│   ├── images/oab/
│   ├── CNAME
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
└── .github/workflows/deploy.yml
```

## Rodar localmente

Pré-requisito: Node.js 20+.

```bash
npm install
npm run dev
```

Abra o endereço exibido pelo Astro no terminal.

### Importante

O primeiro `npm install` gera `package-lock.json`. **Faça commit dele.** A action oficial do Astro usa o lockfile para detectar o gerenciador de pacotes.

## Build local

```bash
npm run build
npm run preview
```

O build estático fica em `dist/`.

## Publicar no GitHub

1. Crie um repositório, por exemplo `realeiros-site`.
2. Na pasta do projeto:

```bash
git init
git add .
git commit -m "feat: novo site institucional Realeiros Play"
git branch -M main
git remote add origin <URL_DO_REPOSITORIO>
git push -u origin main
```

3. No GitHub, abra **Settings → Pages**.
4. Em **Source**, escolha **GitHub Actions**.
5. A workflow `.github/workflows/deploy.yml` fará o build e o deploy após cada push em `main`.

## Domínio `realeirosplay.com`

O projeto já está configurado com:

```js
site: 'https://realeirosplay.com'
```

E contém `public/CNAME` com:

```text
realeirosplay.com
```

No GitHub:

1. **Settings → Pages → Custom domain**.
2. Informe `realeirosplay.com`.
3. Salve.

No provedor DNS, para o domínio raiz (`@`), configure os quatro registros A atuais do GitHub Pages:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Para `www`, crie:

```text
Tipo: CNAME
Nome: www
Destino: <SEU-USUARIO-OU-ORGANIZACAO>.github.io
```

O destino não deve incluir o nome do repositório.

Depois que o DNS propagar, ative **Enforce HTTPS** no GitHub Pages.

> Antes de alterar DNS, mantenha o Google Sites funcionando. Faça o cutover somente quando o deploy no endereço `*.github.io` estiver validado.

## Onde editar conteúdo recorrente

### Links e números públicos

Arquivo:

```text
src/data/site.ts
```

Ali ficam:

- e-mail;
- Instagram;
- Google Play;
- App Store;
- métricas públicas;
- roadmap público.

### Novidades

Arquivo:

```text
src/pages/novidades.astro
```

Cada atualização é um `<article class="news-card">`.

### Screenshots

Pasta:

```text
public/images/oab/
```

As imagens iniciais foram obtidas dos assets públicos da página oficial do jogo na Google Play. Elas devem ser substituídas por exports locais mais atuais quando a Realeiros tiver o pacote definitivo de mídia.

## Pendências antes do domínio novo ir para produção

### Obrigatórias

- [ ] Confirmar o ano/história oficial da fundação da Realeiros e incluir em `/sobre` se desejado.
- [ ] Substituir o placeholder do link de Press Kit em `src/data/site.ts`.
- [ ] Confirmar quais redes sociais devem aparecer além do Instagram.
- [ ] Revisar screenshots e trailer atual.
- [ ] Revisar os números públicos exibidos na Home.
- [ ] Auditar a Política de Privacidade contra os SDKs atuais do OAB.
- [ ] Reconciliar a política com as declarações atuais da Google Play e App Store.
- [ ] Fazer revisão final dos Termos de Uso.
- [ ] Validar procedimento real de exclusão de dados.
- [ ] Testar todas as páginas em celular e desktop.
- [ ] Testar Lighthouse (Performance, Accessibility, Best Practices, SEO).
- [ ] Configurar domínio e HTTPS.

### Recomendadas

- [ ] Usar logo oficial da Realeiros em SVG/PNG de alta resolução quando disponível.
- [ ] Criar imagem OG 1200×630 da Realeiros.
- [ ] Atualizar Press Kit.
- [ ] Adicionar trailer recente do Olha a Batida.
- [ ] Criar página em inglês apenas quando houver objetivo real de aquisição/parceria internacional.

## Direção visual aplicada

A interface usa:

- azul profundo como base de “noite de jogo”;
- amarelo vibrante como cor principal de energia;
- verde como reforço;
- azul elétrico, laranja e vermelho apenas como acentos;
- blocos levemente assimétricos;
- tipografia de impacto para títulos;
- grid/textura discreta para fugir do visual SaaS/corporativo;
- imagens reais do Olha a Batida como principal ativo visual.

A intenção é manter credibilidade institucional sem transformar a Realeiros numa marca fria ou genérica.

## Política de manutenção

O site deve continuar pequeno. Não adicionar CMS, banco de dados ou framework de UI sem uma necessidade concreta.

Regra prática:

- alteração de texto: editar `.astro`/`site.ts`;
- screenshot nova: substituir arquivo em `public/images`;
- update relevante: adicionar card em `novidades.astro`;
- deploy: merge de Pull Request aprovado em `main`; pushes diretos na branch de produção são protegidos por ruleset.

## Segurança

Vulnerabilidades de segurança não devem ser reportadas publicamente em Issues.

Utilize preferencialmente o recurso **Private vulnerability reporting** deste repositório ou entre em contato pelo e-mail:

`realeirosplay@gmail.com`

Não publique tokens, credenciais, dados pessoais ou detalhes de uma vulnerabilidade ainda não corrigida em Issues, Discussions ou Pull Requests públicos.

## Direitos autorais e uso

Copyright © 2026 Realeiros Play. Todos os direitos reservados.

Este repositório é público para fins de hospedagem, transparência técnica e manutenção do site institucional.

A disponibilização pública do código não concede, por si só, licença para reutilização da marca Realeiros Play, identidade visual, textos, imagens, assets ou demais conteúdos proprietários.

Nenhuma licença de software de código aberto é concedida por este repositório, salvo quando expressamente indicada para um componente específico.