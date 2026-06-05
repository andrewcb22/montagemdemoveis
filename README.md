# Landing Page - Montagem de Móveis RJ

Landing page de Andre Bastos para serviço de montagem de móveis no Rio de Janeiro, preparada para publicação na Vercel e instalação da Google Tag / conversão do Google Ads.

## Deploy na Vercel

Ao importar o repositório na Vercel, use:

- Framework Preset: Other
- Build Command: `npm run build`
- Output Directory: `dist`

## Variáveis da Google Tag

Em **Vercel > Project Settings > Environment Variables**, cadastre:

- `VITE_GOOGLE_TAG_ID`: ID da Google tag. Exemplo: `AW-123456789` ou `G-XXXXXXXXXX`
- `VITE_GOOGLE_ADS_WHATSAPP_SEND_TO`: ID da conversão de clique no WhatsApp. Exemplo: `AW-123456789/AbCdEfGhIjK`

Depois de cadastrar, faça novo deploy.

## Teste

Depois que o site estiver publicado, teste com o Google Tag Assistant e clique no botão do WhatsApp para verificar se a conversão dispara.
