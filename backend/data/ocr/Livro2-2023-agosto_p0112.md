Vamos considerar a operação **produto de transformações lineares**, que nada mais é que a composição de funções: se $T : \mathbf{V}_1 \rightarrow \mathbf{V}_2$ e $S : \mathbf{V}_2 \rightarrow \mathbf{V}_3$ são transformações lineares, seu produto é a transformação linear $ST : \mathbf{V}_1 \rightarrow \mathbf{V}_3$, dada por $(ST)\mathbf{v} = S(T\mathbf{v})$.

**Exercício 12.22** Mostre que $ST$ é, de fato, linear. Observe que, como a composição de funções, o produto de transformações lineares é associativo, isto é: sempre vale $(RS)T = R(ST)$.

**Exercício 12.23** Mostre que o produto é distributivo em relação à adição:$^2$ se $R, S : \mathbf{V}_1 \rightarrow \mathbf{V}_2$ e $T : \mathbf{V}_2 \rightarrow \mathbf{V}_3$ são lineares, então $T(R+S) = TR+TS$; da mesma forma, se $T : \mathbf{V}_1 \rightarrow \mathbf{V}_2$ e $R, S : \mathbf{V}_2 \rightarrow \mathbf{V}_3$ são lineares, então $(R+S)T = RT+ST$.

**Definição**: Seja $I : \mathbf{V} \rightarrow \mathbf{V}$ a transformação (linear) **identidade**, isto é, $I\mathbf{v} = \mathbf{v} \vee \mathbf{v} \in \mathbf{V}$. Se $T : \mathbf{V} \rightarrow \mathbf{V}$ é linear e existe $T^{-1} : \mathbf{V} \rightarrow \mathbf{V}$ tal que $T^{-1}T = I = TT^{-1}$, $T$ é dita **invertível** (e $T^{-1}$ é dita **inversa** de $T$). Transformações lineares invertíveis são também chamadas de **isomorfismos**.

**Exercício 12.24** Mostre que a inversa, caso exista, é linear e única.

**Exercício 12.25** Suponha que $\mathbf{V}$ seja de dimensão finita, que $T : \mathbf{V} \rightarrow \mathbf{V}$ seja linear e que exista $S : \mathbf{V} \rightarrow \mathbf{V}$ tal que $ST = I$ (não se supõe $S$ linear). Mostre que, então, $T$ tem inversa e que $S = T^{-1}$.

**Exercício 12.26** Suponha que $R$ e $S$ sejam transformações lineares invertíveis. Mostre que $RS$ é invertível e que $(RS)^{-1} = S^{-1}R^{-1}$.

**Exercício 12.27** Seja $L(\mathbf{V})$ o conjunto das transformações lineares de $\mathbf{V}$ em $\mathbf{V}$. Se $A$ e $B$ pertencem a $L(\mathbf{V})$, define-se o **colchete de Lie** $[A, B]$ por $[A, B] = AB - BA$. Mostre que, para quaisquer $A$, $B$ e $C$, vale

$$[A, [B, C]] + [B, [C, A]] + [C, [A, B]] = 0.$$

### 12.5 Isometrias

Transformações lineares são os **homomorfismos** de espaços vetoriais (transformações de um espaço em outro que preservam as operações). Se o espaço, além das operações de adição e multiplicação por escalar, é dotado de um produto interno, podemos considerar transformações que preservem não apenas as operações de espaço vetorial, mas também o próprio produto interno. Ao contrário das simples transformações lineares, que não precisam ser injetivas, transformações desse tipo especial não podem deixar de sê-lo.

**Proposição**: Sejam $\mathbf{V}_1$ e $\mathbf{V}_2$ espaços vetoriais com produto interno e $T : \mathbf{V}_1 \rightarrow \mathbf{V}_2$ uma transformação linear tal que

$$^2\text{Se } R, S : \mathbf{V}_1 \rightarrow \mathbf{V}_2 \text{ são lineares, sua soma}, R+S \text{ é definida da maneira óbvia: } (R+S)\mathbf{v} = R\mathbf{v} + S\mathbf{v}$$