8.1 Bases ortogonais com vetores flechinhas

Como já observamos, se representamos um vetor $\vec{v}$ na base canônica, $\vec{v} = v_1\vec{e}_1 + v_2\vec{e}_2 + v_3\vec{e}_3$, então

$$v_1 = <\vec{v}, \vec{e}_1 >, v_2 = <\vec{v}, \vec{e}_2 >, v_3 = <\vec{v}, \vec{e}_3 >.$$

O mesmo truque não funciona se estivermos trabalhando com uma base cujos vetores não sejam ortogonais. Mas funciona razoavelmente bem, se forem.

**Proposição:** Suponha que os vetores $\vec{\epsilon}_1, \vec{\epsilon}_2$ e $\vec{\epsilon}_3$ são não nulos e dois ortogonais. Então:

(i) $\vec{\epsilon}_1, \vec{\epsilon}_2$ e $\vec{\epsilon}_3$ formam uma base para $V$;
(ii) se $\vec{v} = v_1\vec{\epsilon}_1 + v_2\vec{\epsilon}_2 + v_3\vec{\epsilon}_3$, então, para $i = 1, 2, 3$, vale a fórmula

$$v_i = \frac{<\vec{v}, \vec{\epsilon}_i>}{<\vec{\epsilon}_i, \vec{\epsilon}_i>}.$$

Demonstração:
(i) Como estamos com 3 vetores, basta provar que são linearmente independente. Se não fossem, poderíamos escrever um deles, que chamaremos de $\vec{\epsilon}_i$ como combinação linear dos outros dois: $\vec{\epsilon}_i = s\vec{\epsilon}_j + t\vec{\epsilon}_k$. Como $\vec{\epsilon}_i$ é não nulo, sabemos que $<\vec{\epsilon}_i, \vec{\epsilon}_i> \neq 0$. Mas, então,

$$0 \neq <\vec{\epsilon}_i, \vec{\epsilon}_i> = <s\vec{\epsilon}_j + t\vec{\epsilon}_k, \vec{\epsilon}_i> = s <\vec{\epsilon}_j, \vec{\epsilon}_i> + t <\vec{\epsilon}_k, \vec{\epsilon}_i> = 0.$$

(ii) Se $\vec{v} = v_1\vec{\epsilon}_1 + v_2\vec{\epsilon}_2 + v_3\vec{\epsilon}_3$, então, para $i = 1, 2, 3$, temos

$$<\vec{v}, \vec{\epsilon}_i> = <v_1\vec{\epsilon}_1 + v_2\vec{\epsilon}_2 + v_3\vec{\epsilon}_3, \vec{\epsilon}_i> = <v_1\vec{\epsilon}_1, \vec{\epsilon}_i> + <v_2\vec{\epsilon}_2, \vec{\epsilon}_i> + <v_3\vec{\epsilon}_3, \vec{\epsilon}_i> = v_i <\vec{\epsilon}_i, \vec{\epsilon}_i>.$$

Como $\vec{\epsilon}_i$ é não nulo, podemos dividir dos dois lados por $<\vec{\epsilon}_i, \vec{\epsilon}_i>$ e o resultado segue.

**Definição:** Uma base composta por vetores dois a dois ortogonais é dita uma base ortogonal. Um vetor de norma igual a 1 é dito **unitário**. Uma base ortogonal composta por vetores unitários é dita uma base ortonormal.