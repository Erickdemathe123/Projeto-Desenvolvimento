# Desenvolvimento Ágil - Modelo de Projeto SCRUM

## Tema: Sistema de Agendamento

---

## 1. Problema/Objetivo

Os problemas fazendo agendamentos de forma manual pelo telefone são as anotações manuais em uma agenda física, contendo o nome e o horário de cada cliente, mas também, tendo o transtorno do cliente ter que ligar para reagendar e pode acabar esquecendo. O Sistema de Agendamento fará automaticamente o bloqueio de horários agendados e consequentemente o prestador terá a sua lista de agendamentos atualizada automaticamente, sem preocupações de ter que reagendar serviços. Caso o cliente esqueça de confirmar o seu agendamento, o sistema automaticamente fará o bloqueio do horário informado no agendamento.
---

## 2. Levantamento de Requisitos (Histórias de Usuário)

Como cliente, quero fazer meu cadastro no sistema.

Como cliente, preciso marcar na agenda um horário para os serviços da barbearia.

Sou barbeiro e meus clientes possuem horários marcados comigo, quero ver esses horários agendados.

Como cliente, quero a permissão de reagendar ou cancelar os meus horários que foram marcados.

Como cliente quero lembrar do meu compromisso na barbearia e preciso de um alerta.

Sou barbeiro e tenho horários específicos de trabalho, preciso ajustar minha agenda para marcarem os horários dentro do meu prazo estabelecido.

---

## 3. Priorização dos Requisitos (MoSCoW)

## Priorização dos Requisitos (MoSCoW)

| Requisito                                                   | Prioridade |
|-------------------------------------------------------------|------------|
| Permitir que os clientes agendem horários                   | Must       |
| Enviar lembretes automáticos para os clientes               | Must       |
| Permitir que os clientes cancelem ou reagendem os horários  | Must       |
| Permitir que o prestador cancele ou reagendem os horários de seus clientes  | Must       |
| Gerenciar a disponibilidade dos prestadores de serviço      | Should     |
| Exibir um painel para visualização de agendamentos | Should     |
| Integrar o sistema com o Google Calendario para sincronização | Could      |
| Oferecer funcionalidade de chat entre cliente e prestador   | Could      |
| Oferecer funcionalidade de regras de bloqueio de agendas ao prestador   | Could      |
| Adicionar funcionalidades de pagamento online para os serviços | Won’t      |

---

## 4. Definição do MVP (Produto Mínimo Viável)

Cadastro de clientes – Permitir que os clientes se cadastrem para realizar agendamentos. (Dificuldade 4)

Agendamento de horários – Permitir que os clientes escolham o horário e serviço desejado para agendar. (Dificuldade 5)

Visualização de agendamentos – Permitir que o prestador de serviço visualize seus agendamentos diários. (Dificuldade 2)

Cancelamento e reagendamento de horários – Permitir que os clientes possam cancelar ou reagendar seus horários. (Dificuldade 2)

Envio de lembretes – Enviar lembretes automáticos para os clientes sobre seus agendamentos. (Dificuldade 21)

Gerenciamento de disponibilidade dos prestadores – Permitir que os prestadores definam suas disponibilidades de horários. (Dificuldade 13)

Interface simples e funcional – Criar uma interface básica, mas intuitiva, para facilitar o uso tanto por clientes quanto prestadores. (Dificuldade 2)
---

## 5. Organização das Entregas por Sprint

### Sprint 1
Setup do projeto

Login funcional

### Sprint 2
Criar tela e funcionalidade de cadastro de clientes

Começar o layout da interface (menu, navegação)

### Sprint 3
Finalizar cadastro de clientes

Implementar agendamento de horários 

*(Adicione mais sprints conforme necessário)*

---

## 6. Entregas e Valor Incremental

- Após a **Sprint 1**: *[Descreva o que já será utilizável/testável]*
- Após a **Sprint 2**: *[Descreva como o sistema evolui]*
- Após a **Sprint 3**: *[Descreva como o sistema estará mais completo]*

---

## Observações Finais

*[Espaço livre para anotações da equipe, aprendizados, dificuldades ou sugestões para próximas etapas]*

## Material de apoio
- https://sebrae.com.br/Sebrae/Portal%20Sebrae/Arquivos/ebook_sebrae_metodologia_moscow.pdf
- -https://www.youtube.com/watch?v=OOux_bS40pk
