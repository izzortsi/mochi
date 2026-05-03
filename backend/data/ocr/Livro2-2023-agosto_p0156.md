Nossa ideia é que, se $\omega$ é alternada, cada transposição troca o sinal de $\omega$. Diante de uma permutação, queremos saber se esta foi produzida por uma número par ou impar de transposições. Como esse número não é único, a questão é: se a permutação $\sigma$ de $S_n$ é produto de uma certo número $k_1$, de transposições, mas, também, de um outro número, $k_2$ (de outras transposições), então, necessariamente, $k_1 - k_2$ é par?

**Exercício 18.20** Mostre que se, para um certo $p$, existir uma permutação que seja produto tanto de um número par como de um número impar de transposições, então toda forma $p$-linear alternada (em qualquer espaço vetorial, real ou complexo, seja de que dimensão for) será identicamente nula.

Uma observação interessante é a seguinte: um dos efeitos de uma transposição é, sempre, um número impar de **inversões**. O número de inversões é obtido assim: dada $\sigma$ em $S_n$, contamos quantos são os pares não ordenados $\{i,j\}$ tais que o sinal de $\sigma_i - \sigma_j$ é oposto ao de $i - j$. No caso de uma transposição, esse número é, sempre, impar.

**Exercício 18.21** Prove isso.

A ideia acima vai nos levar ao seguinte resultado: toda permutação $\sigma$ de $\{1,\ldots,n\}$ tem um sinal, $sgn\sigma$, que é 1 ou -1, dado pela paridade do número de trocas entre dois elementos para, partindo da identidade, se chegar à permutação desejada (1, se o número for par; -1, se for impar).

**Proposição 2**: Existe uma função $sgn : S_n \rightarrow \{1,-1\}$ tal que

1. $sgn(\sigma\tau) = sgn\sigma sgn\tau$, quaisquer que sejam as permutações $\sigma$ e $\tau$;
2. $sgn\sigma = -1$ para toda transposição $\sigma$.

Demonstração: A ideia é, dada $\sigma$, ver quantas inversões tem $\sigma$. Seja

$$sgn : S_n \rightarrow \{1,-1\}$$

dado por

$$sgn(\sigma) = \frac{\prod_{1 \leq i < j \leq n} (\sigma_j - \sigma_i)}{\prod_{1 \leq i < j \leq n} (j-i)} = \prod_{1 \leq i < j \leq n} \frac{\sigma_j - \sigma_i}{j-i}$$

Como $\sigma$ é uma bijeção, os números que aparecem nos numeradores são os mesmos que temos nos denominadores, a menos do sinal, o que garantie que $sgn\sigma \in \{-1,1\}$. Além disso, se $\sigma$ é a transposição que troca $i$ com $j$, o número de fatores negativos no numerador é $2(j-i) - 1$, o que prova que $sgn\sigma = -1$ se $\sigma$ é transposição. Resta mostrar que, para quaisquer $\sigma$ e $\tau$ em $S_n$, $sgn(\sigma\tau) = sgn(\sigma)sgn(\tau)$. Ora,

$$sgn(\sigma\tau) = \prod_{1 \leq i < j \leq n} \frac{(\sigma\tau)_j - (\sigma\tau)_i}{j-i} =$$

$$= \prod_{1 \leq i < j \leq n} \frac{\sigma_{\tau_j} - \sigma_{\tau_i}}{\tau_j - \tau_i} \prod_{1 \leq i < j \leq n} \frac{\tau_j - \tau_i}{j-i} = sgn(\sigma)sgn(\tau),$$

embora a igualdade

$$\prod_{1 \leq i < j \leq n} \frac{\sigma_{\tau_j} - \sigma_{\tau_i}}{\tau_j - \tau_i} = \prod_{1 \leq i < j \leq n} \frac{\sigma_j - \sigma_i}{j-i}$$

até mereça uma pensada...