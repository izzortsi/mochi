segunda rodada. Ou seja, se fizéssemos 100 vezes o experimento de começar a brincadeira com o anel na mão da criança 2, a boa aposta seria: em 26 dos casos o anel estaria, após duas roadas, com a criança 1, o que dá uma probabilidade de 0,26. Faça o mesmo raciocínio para as crianças 2 e 3.

Zumbi passou três dias matutando. Na quarta-feira, à noite, veio com a seguinte conversa:

Andei pensando, pesquisando umas coisas...vamos fazer de conta que o número de crianças é 3, pra poder fazer uns desenhos. A ideia é ficar la olhando, deixar rolar um monte de rodadas. Vamos chamar a matriz das probabilidades de matriz de Yakecan-Markov:

$$\begin{pmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33}
\end{pmatrix}$$

Agora imagina que nós não sabemos ao certo com quem começa o anel, só temos um chute sobre as probabilidades: $p_1$ é a probabilidade de que comece com a criança 1, $p_2$ a de que comece com a 2, $p_3$ a de que comece com a 3. Notem que, necessariamente, $p_1 + p_2 + p_3 = 1$. Assim, podemos considerar uma chute sobre as probabilidades (que vou chamar de um estado do sistema) como um ponto no espaço. Mais específicamente, um estado vai ser um ponto do plano de equação $p_1 + p_2 + p_3 = 1$. Como as probabilidades não podem ser negativas, não é difícil descobrir que os estados vivem no triângulo (equilátero) de vértices $(1,0,0), (0,1,0) e (0,0,1)$. Nosso problema é: dado um estado inicial, como este evolui ao longo da brincadeira?

Observem o seguinte: nosso estado pode ser visto, também, como um vetor.

Esse vetor evoluirá, após cada rodada, para

$$\begin{pmatrix}
a_{11}p_1 + a_{12}p_2 + a_{13}p_3 \\
a_{21}p_1 + a_{22}p_2 + a_{23}p_3 \\
a_{31}p_1 + a_{32}p_2 + a_{33}p_3
\end{pmatrix} = p_1 \begin{pmatrix}
a_{11} \\
a_{21} \\
a_{31}
\end{pmatrix} + p_2 \begin{pmatrix}
a_{12} \\
a_{22} \\
a_{32}
\end{pmatrix} + p_3 \begin{pmatrix}
a_{13} \\
a_{23} \\
a_{33}
\end{pmatrix},$$

que é, por definição, o produto

$$\begin{pmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33}
\end{pmatrix} \begin{pmatrix}
p_1 \\
p_2 \\
p_3
\end{pmatrix}$$

da matriz de Yakecan-Markov pelo estado atual. Notem que, após a primeira rodada, os estados, que viviam no triângulo de vértices

$$\begin{pmatrix}
1 \\
0 \\
0
\end{pmatrix}, \begin{pmatrix}
0 \\
1 \\
0
\end{pmatrix}, \begin{pmatrix}
0 \\
0 \\
1
\end{pmatrix},$$