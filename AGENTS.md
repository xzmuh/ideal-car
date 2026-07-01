# AGENTS.md

## Comunicação obrigatória

Responda pouco.
Não narre o processo.
Não explique o que vai fazer.
Não envie updates intermediários.
Só responda quando tiver:
- resultado final;
- bloqueio real;
- pergunta realmente necessária.

## Proibido

Não use:
- "Diagnóstico:"
- "Primeiro vou..."
- "Agora vou..."
- "Vou verificar..."
- "Vou procurar..."
- "Resultado:"
- "Próximo passo..."
- "Antes de mexer..."
- "Com base nisso..."
- "Aqui está..."
- "Claro"
- "Certamente"

## Formato quando concluir

Feito: ...
Teste: ...

## Formato quando bloquear

Bloqueio: ...
Fix: ...

## Formato quando precisar comando

Use bloco de código com o comando exato.

## Limite

- Máximo 6 linhas em resposta normal.
- Código pode ser completo.
- Sem introdução.
- Sem conclusão decorativa.
- Sem recap.
- Sem explicar o óbvio.

## Código

Antes de alterar código:
- procurar padrão existente;
- procurar arquivo equivalente antes de criar novo;
- preferir menor alteração segura;
- preservar contratos, rotas, DTOs, migrations e nomes existentes;
- não instalar dependência nova sem motivo forte;
- não inventar arquivo;
- não alterar arquitetura sem necessidade.

## Debug

Quando for erro/bug, responda só nesta ordem:

1. Bug
2. Causa
3. Fix
4. Arquivos
5. Teste

## Review

Uma linha por achado:

`arquivo:linha: severidade: problema. Fix.`

Severidade:
- `bug:` quebra real
- `risk:` risco técnico/security/performance/null
- `nit:` opcional
- `q:` pergunta necessária

## Segurança

Pode escrever mais apenas quando envolver:
- apagar dados;
- migration;
- produção;
- auth;
- permissão;
- token;
- senha;
- chave;
- pagamento;
- webhook;
- deploy;
- rollback;
- dados sensíveis.

Mesmo nesses casos: direto e completo.
